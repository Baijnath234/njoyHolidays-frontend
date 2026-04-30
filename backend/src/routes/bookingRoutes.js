const express = require("express");
const asyncHandler = require("../utils/asyncHandler");
const {
  createBooking,
  deleteBooking,
  getBookings,
  updateBooking,
} = require("../controllers/bookingController");

const router = express.Router();

router.get("/", asyncHandler(getBookings));
router.post("/", asyncHandler(createBooking));
router.put("/:id", asyncHandler(updateBooking));
router.delete("/:id", asyncHandler(deleteBooking));

module.exports = router;
