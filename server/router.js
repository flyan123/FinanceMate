const express = require("express");
const router = express.Router();
const validator = require('validator.tool');

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
}




router.post("/register",(req,res)=>{
    const nickname = req.body.nickname;
    const password = req.body.password;
    const confirm = req.body.confirm;
    const email = req.body.email;


    res.send({

    })
})


module.exports=router;
