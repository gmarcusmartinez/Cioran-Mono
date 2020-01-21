const dotenv = require("dotenv");
const morgan = require("morgan");
const colors = require("colors");
const helmet = require("helmet");
const xss = require("xss-clean");
const express = require("express");
const connectDB = require("./config/db");
const cookieParser = require("cookie-parser");
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
// Prevent XSS attacks
app.use(xss());

app.use("/api/auth", auth);
app.use("/api/users", users);
app.use("/api/tickets", tickets);
app.use("/api/sprints", sprints);
app.use("/api/projects", projects);

app.use(errorHandler);

connectDB();
const server = app.listen(
  5000,
  console.log(`Server running on port:5000`.yellow.bold)
);

process.on("unhandledRejection", (err, promise) => {
  console.log(err.message);
  server.close(() => process.exit(1));
});
