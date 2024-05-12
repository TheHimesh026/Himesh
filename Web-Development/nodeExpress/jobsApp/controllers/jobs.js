const Job = require("../models/jobSchema.js");

//some aspects of the controllers i din't understand
async function getAllJobs(req,res){
  const jobs = await Job.find({createdBy:req.user.userId}).sort('CreatedAt');
  res.status(200).json({jobs,count:jobs.length});
};

async function getSingleJob(req,res){
  const { user:{userId},params:{id:jobId}} = req;
  console.log(jobId,userId)
  const job = await Job.findOne({
    _id:jobId,
    createdBy:userId
  });
  if(!job){
    return res.status(401).json({error:"Not found"});
  };
  res.status(200).json({job});
};

async function createJob(req,res){
  req.body.createdBy = req.user.userId;
  const job = await Job.create(req.body);
  res.status(201).json({job});
};

async function updateJob(req,res){
  const { 
    body:{ company,position },
    user:{ userId },
    params:{ id:jobId }} = req;
  if(company === '' || position === ''){
    return res.status(402).json({erro:"Input fields cannot be empty"});
  };
  const job = await Job.findByIdAndUpdate(
    {_id:jobId,createdBy:userId},
    req.body,
    { new:true,runValidators:true },
  );
  if(!job){
    return res.status(401).json({error:"Not found"});
  };
  res.status(200).json({job});
};

async function deleteJob(req,res){
  const { user:{userId},params:{id:jobId}} = req;
  const job = await Job.findOneAndDelete({
    _id:jobId,
    createdBy:userId
  });
  res.status(200).json({job});
};

module.exports = {
  getAllJobs,getSingleJob,updateJob,deleteJob,createJob
}