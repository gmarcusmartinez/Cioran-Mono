const { Router } = require("express");

const {
  getProject,
  getProjects,
  createProject,
  updateProject,
  deleteProject,
} = require("../controllers/projects");

const router = Router();

router.route("/").get(getProjects).post(createProject);
router.route("/:id").get(getProject).put(updateProject).delete(deleteProject);

module.exports = router;
