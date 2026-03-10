const express = require("express");
const router = express.Router();
const { getUsers, deleteUser } = require("../controllers/adminController");
const auth = require("../middleware/authMiddleware");

router.get("/users", auth, getUsers);

router.delete("/users/:id", auth, deleteUser);

module.exports = router;