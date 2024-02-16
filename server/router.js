const express = require("express");
const router = express.Router();
const validator = require('validator.tool');
const isEmpty =  ("loadsh/isEmpty");

// 错误，错误信息；不发生错误，true
const validatorInput = (data) =>{
    // 验证是否为空
    let errors={}
    if (validator.isEmpty(data.nickname)){
        errors.nickname='用户名不能为空'
    }
    if (validator.isEmpty(data.password)){
        errors.password='密码不能为空'
    }
    // equals:验证字符串是否相同
    if (validator.equals(data.password,data.confirm)){
        errors.confirm='两次密码不相同'
    }
    if (validator.isEmpty(data.email)){
        errors.email='不符合邮箱格式'
    }

    return{
        isValid:!isEmpty(errors),
        errors 
    }
    
}




router.post("/register",(req,res)=>{
    const {isValid,errors}=validatorInput(req.body)
    if(isValid){
        // 失败
        res.send(errors)
    }else{
        // 成功
        res.send({
            msg:"success"
        })
  
    }
    
})


module.exports=router;
