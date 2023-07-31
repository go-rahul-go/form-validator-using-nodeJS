const express=require("express");



const router = express.Router();

const formSubmitter=require("../controllers/formSubmitter")

router.post("/register",formSubmitter)

module.exports=router;