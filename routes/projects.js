const { Router } = require("express");
const Project = require("../models/Project");
const { protect } = require("../middleware/auth");
const advancedResults = require("../middleware/advancedResults");

const {
  getProject,
  getProjects,
  createProject,
  updateProject,
  deleteProject
} = require("../controllers/projects");

const sprintRouter = require("./sprints");

const router = Router();
router.use("/:projectId/sprints", sprintRouter);

router
  .route("/")
  .get(advancedResults(Project, "sprints"), getProjects)
  .post(protect, createProject);

router
  .route("/:id")
  .get(getProject)
  .put(protect, updateProject)
  .delete(protect, deleteProject);

module.exports = router;
