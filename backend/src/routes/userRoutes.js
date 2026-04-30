const express = require("express");
const asyncHandler = require("../utils/asyncHandler");
const { getUsers } = require("../controllers/userController");

const router = express.Router();

router.get("/", asyncHandler(getUsers));

module.exports = router;
