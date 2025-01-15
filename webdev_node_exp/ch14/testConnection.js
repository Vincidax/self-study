const mongoose = require("mongoose");
const { connectionString } = require("./credentials").mongo;

// Exit if the MongoDB connection string is missing
if (!connectionString) {
  console.error("MongoDB connection string missing");
  process.exit(1);
}

// Test MongoDB connection
(async function testConnection() {
  try {
    console.log("Attempting to connect to MongoDB...");

    // Connect to MongoDB
    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      ssl: true, // Ensure this matches your database's requirements
      retryWrites: true,
      authSource: "admin",
    });

    console.log("MongoDB connection established successfully");
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
  } finally {
    // Close the connection
    mongoose.connection.close();
    console.log("MongoDB connection closed");
  }
})();
