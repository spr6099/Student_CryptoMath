const express = require("express");
require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const authRouter = require("./routes/auth.router");
const adminRouter = require("./routes/admin.router");
const parentRouter = require("./routes/parent.router");
const studentRouter = require("./routes/student.router");

const path = require("path");

const port = process.env.PORT || 3000; // You can use environment variables for port configuration
// dotenv.config();
const app = express();

connectDB();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads"))); //must install npm i path

//must install npm i path

app.use("/auth", authRouter);
app.use("/admin", adminRouter);
app.use("/parent", parentRouter);
app.use("/student", studentRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
