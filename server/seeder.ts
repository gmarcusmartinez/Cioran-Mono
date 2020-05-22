import fs from 'fs';
import 'colors';
import { Project } from './models/Project';

import { connectDB } from './config/db';
const projects = JSON.parse(
  fs.readFileSync(`${__dirname}/data/projects.json`, 'utf-8')
);

connectDB();

const importData = async () => {
  try {
    await Project.create(projects);
    await console.log('Data imported.'.green);
  } catch (err) {
    console.error(err.message);
  }
};

const destroyData = async () => {
  try {
    await Project.deleteMany({});
    console.log('Data destroyed.'.red);
  } catch (err) {
    console.error(err.message);
  }
};

if (process.argv[2] === '-i') {
  importData();
} else if (process.argv[2] === '-d') {
  destroyData();
}
