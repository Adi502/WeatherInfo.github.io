const express = require("express")
const router = express.Router()
const user = require("./user")
const bcrypt = require("bcrypt")

router.post("/signup",async (req,res)=>{
    const {name, email, password} = req.body;

    const hash = bcrypt.hashSync(password,10);

    //console.log(hash)
    const Check = await user.findOne({
        email : email
    });
    if(!Check){
        const User = await user.create({
            name,
            email,
            password : hash
        })
        res.statusCode = 201;
            return res.json({"message" : "User Created Successfully"});
    }
    else{
        return res.json({"message": "User already exists"});
    }
    
})

router.post("/login",async (req,res) => {
    const {email, password} = req.body;

    //const hash = bcrypt.hashSync(password,10);
    const Check = await user.findOne({
        email : email
    });
    if(!Check){
        
        res.statusCode = 404;
            return res.json({"message" : "User not found","result": false});
    }
    else{
        if(bcrypt.compareSync(password,Check.password)){
            res.statusCode = 200;
            return res.json({"message": "Login succesuful","result": true});
        }else{
            res.statusCode = 401;
            return res.json({"message" : "pass invalid","result": false});
        }
        
    }
})

module.exports = router;