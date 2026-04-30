const Package = require("../models/Package");

const mapPackage = (tourPackage) => ({
  id: tourPackage._id.toString(),
  title: tourPackage.title,
  packageName: tourPackage.title,
  destination: tourPackage.destination,
  duration: tourPackage.duration,
  price: Number(tourPackage.price || 0),
  createdAt: tourPackage.createdAt,
});

const getPackages = async (_req, res) => {
  const packages = await Package.find().sort({ createdAt: -1 });

  res.json(packages.map(mapPackage));
};

const createPackage = async (req, res) => {
  const { title, packageName, destination = "", duration = "", price = 0 } = req.body;
  const packageTitle = title || packageName;

  if (!packageTitle) {
    return res.status(400).json({ message: "Package title is required." });
  }

  const tourPackage = await Package.create({
    title: packageTitle,
    destination,
    duration,
    price: Number(price) || 0,
  });

  res.status(201).json(mapPackage(tourPackage));
};

module.exports = {
  createPackage,
  getPackages,
};
