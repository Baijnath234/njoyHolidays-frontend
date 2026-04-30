const express = require("express");
const cors = require("cors");
const bookingRoutes = require("./routes/bookingRoutes");
const userRoutes = require("./routes/userRoutes");
const packageRoutes = require("./routes/packageRoutes");
const { errorHandler, notFoundHandler } = require("./middleware/errorMiddleware");

const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:3000",
    credentials: true,
  }),
);
app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ status: "ok", message: "NjoyHolidayz backend is running" });
});

app.use("/api/bookings", bookingRoutes);
app.use("/api/users", userRoutes);
app.use("/api/user/users", userRoutes);
app.use("/api/packages", packageRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

module.exports = app;
