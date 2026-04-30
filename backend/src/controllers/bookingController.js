const { pool } = require("../config/db");

const parseJsonField = (value) => {
  if (!value) {
    return [];
  }

  if (Array.isArray(value)) {
    return value;
  }

  if (typeof value === "object") {
    return value;
  }

  try {
    return JSON.parse(value);
  } catch {
    return [];
  }
};

const mapBookingRow = (row) => ({
  id: String(row.id),
  fullName: row.full_name,
  email: row.email,
  phone: row.phone,
  numberOfPeople: row.number_of_people,
  travelDate: row.travel_date,
  specialRequests: row.special_requests || "",
  status: row.status,
  packages: parseJsonField(row.packages),
  totalAmount: Number(row.total_amount || 0),
  createdAt: row.created_at,
});

const getBookings = async (_req, res) => {
  const [rows] = await pool.query(
    "SELECT * FROM bookings ORDER BY created_at DESC",
  );

  res.json(rows.map(mapBookingRow));
};

const createBooking = async (req, res) => {
  const {
    fullName,
    email,
    phone,
    numberOfPeople = 1,
    travelDate,
    specialRequests = "",
    packages = [],
    totalAmount = 0,
  } = req.body;

  if (!fullName || !email || !phone || !travelDate) {
    return res.status(400).json({
      message: "Full name, email, phone, and travel date are required.",
    });
  }

  const [result] = await pool.query(
    `INSERT INTO bookings
      (full_name, email, phone, number_of_people, travel_date, special_requests, packages, total_amount)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      fullName,
      email,
      phone,
      Number(numberOfPeople) || 1,
      travelDate,
      specialRequests,
      JSON.stringify(packages),
      Number(totalAmount) || 0,
    ],
  );

  const [rows] = await pool.query("SELECT * FROM bookings WHERE id = ?", [
    result.insertId,
  ]);

  res.status(201).json(mapBookingRow(rows[0]));
};

const updateBooking = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  if (!["pending", "confirmed", "cancelled"].includes(status)) {
    return res.status(400).json({ message: "Invalid booking status." });
  }

  const [result] = await pool.query(
    "UPDATE bookings SET status = ? WHERE id = ?",
    [status, id],
  );

  if (result.affectedRows === 0) {
    return res.status(404).json({ message: "Booking not found." });
  }

  res.json({ message: "Booking updated successfully." });
};

const deleteBooking = async (req, res) => {
  const { id } = req.params;
  const [result] = await pool.query("DELETE FROM bookings WHERE id = ?", [id]);

  if (result.affectedRows === 0) {
    return res.status(404).json({ message: "Booking not found." });
  }

  res.json({ message: "Booking deleted successfully." });
};

module.exports = {
  createBooking,
  deleteBooking,
  getBookings,
  updateBooking,
};
