const express = require("express");
const router = express.Router();
const { fetchAllTasks,fetchSingleTask,postTask,updateTask,deleteTask,lostError } = require("./controllers.js");
const asyncWrapper = require("./asyncWrapper.js");

router.get("/",asyncWrapper(fetchAllTasks));
router.get("/fetch/:id",asyncWrapper(fetchSingleTask));
router.post("/post",asyncWrapper(postTask));
router.patch("/update/:id",asyncWrapper(updateTask));
router.delete("/delete/:id",asyncWrapper(deleteTask));
router.get("*",lostError);

module.exports = router