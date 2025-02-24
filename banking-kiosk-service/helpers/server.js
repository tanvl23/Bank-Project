const express = require("express");
const client = require("pg");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Database Connection
const db = client.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "postgres"
});

db.connect(err => {
    if (err) {
        console.error("Database connection failed: " + err.message);
    } else {
        console.log("Connected to database");
    }
});



const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { Pool } = require("pg");

// const app = express();
// const port = 5000;

// PostgreSQL Connection
const pool = new Pool({
    user: "your_db_user",
    host: "localhost",
    database: "your_db_name",
    password: "your_db_password",
    port: 5432, // Default PostgreSQL port
});

app.use(cors());
app.use(bodyParser.json());

// API to increment click count
app.post("/api/increment-click", async (req, res) => {
    try {
        const today = new Date().toISOString().split("T")[0]; // Get today's date

        // Check if today's date exists in the table
        const result = await pool.query("SELECT * FROM clicks WHERE click_date = $1", [today]);

        if (result.rows.length > 0) {
            // If the date exists, increment the click count
            await pool.query("UPDATE clicks SET click_count = click_count + 1 WHERE click_date = $1", [today]);
        } else {
            // If no entry exists for today, insert a new row
            await pool.query("INSERT INTO clicks (click_date, click_count) VALUES ($1, $2)", [today, 1]);
        }

        res.json({ message: "Click count updated successfully!" });
    } catch (error) {
        console.error("Error updating click count:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});


app.listen(5000, () => {
    console.log("Server is running on port 5000");
});

