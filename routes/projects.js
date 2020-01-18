const { Router } = require("express");
const { protect } = require("../middleware/auth");

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
  .get(getProjects)
  .post(protect, createProject);

router
  .route("/:id")
  .get(getProject)
  .put(protect, updateProject)
  .delete(protect, deleteProject);

module.exports = router;
