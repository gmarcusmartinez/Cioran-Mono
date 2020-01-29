const hpp = require("hpp");
const cors = require("cors");
const dotenv = require("dotenv");
const morgan = require("morgan");
const colors = require("colors");
const helmet = require("helmet");
const xss = require("xss-clean");
const express = require("express");
const connectDB = require("./config/db");
const cookieParser = require("cookie-parser");
const rateLimit = require("express-rate-limit");
const errorHandler = require("./middleware/error");
const mongoSanitize = require("express-mongo-sanitize");

const auth = require("./routes/auth");
const users = require("./routes/users");
const tickets = require("./routes/tickets");
const sprints = require("./routes/sprints");
const projects = require("./routes/projects");

dotenv.config({ path: "./config/config.env" });

const app = express();
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());
app.use(cookieParser());
app.use(mongoSanitize());
app.use(helmet());
// Prevent Cross side scripting attacks
app.use(xss());
app.use(hpp());
app.use(cors());

const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});
app.use(limiter);

app.use("/api/auth", auth);
app.use("/api/users", users);
app.use("/api/tickets", tickets);
app.use("/api/sprints", sprints);
app.use("/api/projects", projects);

app.use(errorHandler);

connectDB();

module.exports = app;
