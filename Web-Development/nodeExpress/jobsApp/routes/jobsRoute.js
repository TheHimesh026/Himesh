const express = require("express");
const router = express.Router();
const { getAllJobs,getSingleJob,updateJob,deleteJob,createJob } = require("../controllers/jobs.js");

/*api/v1/jobs*/
router.get("/",getAllJobs);
router.get("/fetch/:id",getSingleJob);
router.patch("/update/:id",updateJob);
router.delete("/delete/:id",deleteJob);
router.post("/create",createJob);

module.exports = router;