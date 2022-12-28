const express = require("express");
const router = express.Router();
const {
  getRecById,
  getRecBySubject,
  getRecByCategory,
  updateRec,
  deleteRec,
  createUser,
  createRec,
  getAllRec,
  getUser,
  updateUser,
  deleteUser,
  validate,
  getRecByTitle,
} = require("../controllers/recController");

router.get("/get/byid/:userid/:id", getRecById);
router.get("/get/bytitle/:userid/:title", getRecByTitle);
router.get("/get/bycategory/:userid/:category", getRecByCategory);
router.get("/get/:id", getUser);
router.get("/get/bysubject/:userid/:subject", getRecBySubject);
router.get("/get/all/:userid", getAllRec);

router.post("/create/record", createRec);
router.post("/create/user", createUser);
router.post("/validate/user", validate);

router.put("/update/rec/:id", updateRec);
router.put("/update/user/:id", updateUser);

router.delete("/delete/rec/:id", deleteRec);
router.delete("/delete/user/:id", deleteUser);

module.exports = router;
