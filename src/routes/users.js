const { Router } = require("express");
const { updateServer } = require("../controllers/ServerControllers");
const { getUsers, createUser, deleteUser, findUser, updateUser } = require("../controllers/UsersControllers");
const router = Router();

router.route("/")
    .get(getUsers)
    .post(createUser)

router.route("/:IDuser")
    .get(findUser)
    .put(updateUser)
    .delete(deleteUser)

module.exports = router;
