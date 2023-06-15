const User = require('../models/user.model');

exports.findAllUsers = async(req, res)  =>{
    try {

      //find all the active users
        const users = await User.findAll({
            where:{
              status: 'active',
            },
          })

            res.status(200).json({
                status: "succes",
                message: "this all the active users 😎",
                users
            })

    } catch (error) {
          console.log(error);
        res.status(500).json({
            status: "fail",
            message: "Something went very wrong 😢",
        })
    }
}