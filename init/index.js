if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = process.env.ATLASDB_URL;

async function main() {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("✅ Connected to DB");

    await initDB();
    console.log("✅ Seeding complete");

    mongoose.connection.close();
  } catch (err) {
    console.error("❌ DB connection error:", err);
  }
}

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "68b5c3d1b84a353024b1051e",
  }));
  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};

main();
