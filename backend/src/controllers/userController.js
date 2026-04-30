const { pool } = require("../config/db");

const mapUserRow = (row) => ({
  _id: String(row.id),
  name: row.name,
  email: row.email,
  role: row.role,
  isActive: Boolean(row.is_active),
  profileImage: row.profile_image,
});

const getUsers = async (_req, res) => {
  const [rows] = await pool.query(
    "SELECT id, name, email, role, is_active, profile_image FROM users ORDER BY created_at DESC",
  );

  res.json(rows.map(mapUserRow));
};

module.exports = {
  getUsers,
};
