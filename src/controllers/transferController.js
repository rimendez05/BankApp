const Transfer = require('../models/transfer.model');
const User = require('../models/user.model');

exports.transfer = async (req, res) =>{
    try {
        
        const {senderUserId, password, receiverUserId, amount} = req.body;
        let accountNumber = senderUserId;
        
        //find user by account number and password
        const user = await User.findOne({
            where:{
                accountNumber,
                password
            }
        })

        //find receptor by account number and status
        const receptor = await User.findOne({
            where:{
                accountNumber: receiverUserId,
                status: 'active'
            }
        })

        if(!user){
            return res.status(404).json({
                status: "error",
                message: `user with account Number ${senderUserId} not found 😢`
            })
        }

        if(!receptor){
            return res.status(404).json({
                status: "error",
                message: `user with account Number ${receiverUserId} not found 😢`
            })
        }

        //verify the amount
        if(user.amount<amount){
            return res.status(404).json({
                status: "error",
                message: `Insufficient funds 😢`
            })
        }

        //subtract the amount in user account
        let value = user.amount - amount
        user.update({amount : value})

        //add the amount in the receptor account
        value = receptor.amount + amount
        receptor.update({amount: value})
        
      //create the transfer
        const transfer = await Transfer.create({
            senderUserId,
            receiverUserId,
            amount
        });

        res.status(200).json({
            status: "succes",
            message: "transfer has been successfully created:😎",
            transfer
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: "fail",
            message: "Something went very wrong 😢",
        })
    }
}

exports.transfershistory = async(req, res) =>{
    try {

        const {id} = req.params;

        //find the user by id
        const user = await User.findOne({
            where: {
                id,
                status: 'active'
            }
        })

        if(!user){
            return res.status(404).json({
                status: "error",
                message: `user with account Number ${senderUserId} not found 😢`
            })
        }

        //find all the made transfers by the account number user
        const historyTransfer = await Transfer.findAll({
            where: {
                senderUserId: user.accountNumber
            }
        })

        res.status(200).json({
            status: "succes",
            message: "this all your transfers 😎",
            historyTransfer
        })

        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: "fail",
            message: "Something went very wrong 😢",
        })
    }
}