const dotenv = require("dotenv");
const morgan = require("morgan");
const express = require("express");

const bugs = require("./routes/bugs");

dotenv.config({ path: "./config/config.env" });

const app = express();
app.use("/api/bugs", bugs);
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.listen(5000, console.log(`Server running on port:5000`));
