const fs = require("fs");
const mongoose = require("mongoose");
const colors = require("colors");
const dotenv = require("dotenv");

dotenv.config({ path: "./config/config.env" });

const Project = require("./models/Project");
const Sprint = require("./models/Sprint");
const Ticket = require("./models/Ticket");

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

const projects = JSON.parse(
  fs.readFileSync(`${__dirname}/data/projects.json`, "utf-8")
);
const sprints = JSON.parse(
  fs.readFileSync(`${__dirname}/data/sprints.json`, "utf-8")
);
const tickets = JSON.parse(
  fs.readFileSync(`${__dirname}/data/tickets.json`, "utf-8")
);

const importData = async () => {
  try {
    // await Project.create(projects);
    // await Sprint.create(sprints);
    await Ticket.create(tickets);
    console.log("Data imported...".green);
    process.exit();
  } catch (error) {
    console.error(error);
  }
};

const deleteData = async () => {
  try {
    await Project.deleteMany();
    await Sprint.deleteMany();
    await Ticket.deleteMany();
    console.log("Data destroyed...".red);
    process.exit();
  } catch (error) {
    console.error(error);
  }
};

if (process.argv[2] === "-i") {
  importData();
} else if (process.argv[2] === "-d") {
  deleteData();
}
