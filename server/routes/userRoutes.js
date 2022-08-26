const { register } = require("../controllers/usersController");
const { login } = require("../controllers/usersController");
const { setAvatar } = require("../controllers/usersController");
const { getAllUsers } = require("../controllers/usersController");
const { logOut } = require("../controllers/usersController");

const router = require("express").Router();

router.post("/register", register);
router.post("/login", login);
router.post("/setAvatar/:id", setAvatar);
router.get("/allUsers/:id", getAllUsers);
router.get("/logout/:id", logOut);

module.exports = router;
