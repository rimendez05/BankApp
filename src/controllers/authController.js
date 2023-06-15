const User = require('../models/user.model');

exports.signup = async(req, res)=>{
    try {
        const {name, password} = req.body;

        //create user with id, name, accountNumber, password, amount =1000, status
        const user = await User.create({
            name,
            accountNumber: Math.floor(Math.random() * 900000) + 100000,
            password,
            amount: 1000,
            status: 'active'
        });

        res.status(200).json({
            status: "succes",
            message: "user has been successfully created:😎",
            user,
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: "fail",
            message: "Something went very wrong 😢",
        })
        
    }
} 

exports.login = async (req, res)=>{
    try {
        const {accountNumber, password} = req.body;

        //find user by accountNumber and password
        const user = await User.findOne({
            where:{
                accountNumber,
                password,
                status: 'active'
            }
        })

        if(!user){
            return res.status(404).json({
                status: "error",
                message: `user with account Number ${accountNumber} not found 😢`
            })
        }

        res.status(200).json({
        status: 'success',
        message: 'User retrieved successfully 😎',
        user
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: "fail",
            message: "Something went very wrong 😢",
        })
    }
}
