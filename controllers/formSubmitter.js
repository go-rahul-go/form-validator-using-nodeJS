const {validationResult}=require("express-validator");


const formSubmitter = (req,resp)=>{
    const errors = validationResult(req);
    console.log(errors)
    if(!errors.isEmpty())
    {
        return resp.status(422).json(errors.array());

    }
    else{
        resp.send(req.body)
    }

}

module.exports=formSubmitter;