const { Router } = require("express");
const {
  getServers,
  createServer,
  findServer,
  deleteServer,
  updateServer,
} = require("../controllers/controllers");
const router = Router();

router.route("/").get(getServers).post(createServer);

router
  .route("/:serverID")
  .get(findServer)
  .delete(deleteServer)
  .put(updateServer);

module.exports = router;
