const dbClient = require("../helpers/db-client");

// Function to log inactivity
async function logInactivity(data) {
  try {
    const { message, timestamp } = data;
    const query = "INSERT INTO inactivity_logs (message, timestamp) VALUES ($1, $2)";
    await dbClient.query(query, [message, timestamp]);
    console.log("Inactivity logged in database.");
  } catch (error) {
    console.error("Database error:", error);
    throw error;
  }
}

module.exports = { logInactivity };
