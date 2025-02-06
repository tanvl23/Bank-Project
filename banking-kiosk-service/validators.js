//const responseJson=require("./response.json");
//const constants = require("./constants");

exports.validateInput=(req,res,next)=>{
    let isValid = true;

    let body= req.body;

    if (isValid && Object.keys(body).length>0){
        isValid= validateData(body,"",true);

    }
    if(isValid){
        next();

    }
    else{
        console.log("Request URL:", req?.originalUrl);
        console.log("Request Body:",req?.body?.toString());
        res.status(ConstantSourceNode.BAD_REQUEST).json({
            Status: false,
            Message: responseJson.ErrorResponse.InvalidInput,

        });
    }
};

function validateData(data,_key,isValid) {
    if (!isValid){
        return false;
    }
    if(data && typeof data ==="object"){
        Object.keys(data).forEach((key)=>{
            isValid= validateData(data[key],key,isValid);
        });
    }else{
        let specialchar = process.env.SPECIAL_CHARACTERS;
        let reg=new RegExp(specialchar);
        if(reg.test(data)){
            isValid=false;
        }
    }
    return isValid;
}
