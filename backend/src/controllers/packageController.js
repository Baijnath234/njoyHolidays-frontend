const { pool } = require("../config/db");

const mapPackageRow = (row) => ({
  id: String(row.id),
  title: row.title,
  packageName: row.title,
  destination: row.destination,
  duration: row.duration,
  price: Number(row.price || 0),
  createdAt: row.created_at,
});

const getPackages = async (_req, res) => {
  const [rows] = await pool.query(
    "SELECT * FROM packages ORDER BY created_at DESC",
  );

  res.json(rows.map(mapPackageRow));
};

const createPackage = async (req, res) => {
  const { title, packageName, destination = "", duration = "", price = 0 } = req.body;
  const packageTitle = title || packageName;

  if (!packageTitle) {
    return res.status(400).json({ message: "Package title is required." });
  }

  const [result] = await pool.query(
    "INSERT INTO packages (title, destination, duration, price) VALUES (?, ?, ?, ?)",
    [packageTitle, destination, duration, Number(price) || 0],
  );

  const [rows] = await pool.query("SELECT * FROM packages WHERE id = ?", [
    result.insertId,
  ]);

  res.status(201).json(mapPackageRow(rows[0]));
};

module.exports = {
  createPackage,
  getPackages,
};
