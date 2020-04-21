const { Router } = require("express");

const {
  getProject,
  getProjects,
  createProject,
  updateProject,
  deleteProject,
} = require("../controllers/projects");

const Project = require("../models/Project");
const advancedResults = require("../middleware/advancedResults");

const router = Router();

// Router Redirect
const sprintRouter = require("./sprints");
router.use("/:projectId/sprints", sprintRouter);

router
  .route("/")
  .get(advancedResults(Project), getProjects)
  .post(createProject);

router.route("/:id").get(getProject).put(updateProject).delete(deleteProject);

module.exports = router;
