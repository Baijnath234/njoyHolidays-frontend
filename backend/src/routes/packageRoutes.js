const express = require("express");
const asyncHandler = require("../utils/asyncHandler");
const {
  createPackage,
  getPackages,
} = require("../controllers/packageController");

const router = express.Router();

router.get("/", asyncHandler(getPackages));
router.get("/getAllTourPackage", asyncHandler(getPackages));
router.post("/", asyncHandler(createPackage));
router.post("/tourPackage", asyncHandler(createPackage));

module.exports = router;
