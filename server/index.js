const colors = require("colors");
const express = require("express");

const connectDB = require("./config/db");
const errorHandler = require("./middleware/error");

const tickets = require("./routes/tickets");
const sprints = require("./routes/sprints");
const projects = require("./routes/projects");

const app = express();
app.use(express.json());

app.use("/api/sprints", sprints);
app.use("/api/projects", projects);
app.use("/api/tickets", tickets);

app.use(errorHandler);
connectDB();

app.listen(5000, console.log(`Server running on port:5000`.yellow.bold));
