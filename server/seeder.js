const fs = require("fs");
const colors = require("colors");
const mongoose = require("mongoose");
const keys = require("./config/keys");

const Project = require("./models/Project");

mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const projects = JSON.parse(fs.readFileSync(`${__dirname}/data/projects.json`));

const importData = async () => {
  try {
    await Project.create(projects);
    console.log("Data Imported.".green);
    process.exit();
  } catch (err) {
    console.error(err.message);
  }
};

const deleteData = async () => {
  try {
    await Project.deleteMany();

    console.log("Data Destroyed.".red);
    process.exit();
  } catch (err) {
    console.error(err.message);
  }
};

if (process.argv[2] === "-i") {
  importData();
} else if (process.argv[2] === "-d") {
  deleteData();
}
