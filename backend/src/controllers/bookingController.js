const Booking = require("../models/Booking");

const mapBooking = (booking) => ({
  id: booking._id.toString(),
  fullName: booking.fullName,
  email: booking.email,
  phone: booking.phone,
  numberOfPeople: booking.numberOfPeople,
  travelDate: booking.travelDate,
  specialRequests: booking.specialRequests || "",
  status: booking.status,
  packages: booking.packages || [],
  totalAmount: Number(booking.totalAmount || 0),
  createdAt: booking.createdAt,
});

const getBookings = async (_req, res) => {
  const bookings = await Booking.find().sort({ createdAt: -1 });

  res.json(bookings.map(mapBooking));
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

  const booking = await Booking.create({
    fullName,
    email,
    phone,
    numberOfPeople: Number(numberOfPeople) || 1,
    travelDate,
    specialRequests,
    packages,
    totalAmount: Number(totalAmount) || 0,
  });

  res.status(201).json(mapBooking(booking));
};

const updateBooking = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  if (!["pending", "confirmed", "cancelled"].includes(status)) {
    return res.status(400).json({ message: "Invalid booking status." });
  }

  const booking = await Booking.findByIdAndUpdate(
    id,
    { status },
    { new: true },
  );

  if (!booking) {
    return res.status(404).json({ message: "Booking not found." });
  }

  res.json(mapBooking(booking));
};

const deleteBooking = async (req, res) => {
  const { id } = req.params;
  const booking = await Booking.findByIdAndDelete(id);

  if (!booking) {
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
