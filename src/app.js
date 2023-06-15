const express = require('express');
const cors = require('cors');
const morgan = require('morgan')

//routes require
const userRouter = require('../src/routes/user.routes');
const transferRouter = require('./routes/transfer.routes');
const authRouter = require('./routes/auth.routes');

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

//all the routes
app.use('/api/v1/users',userRouter);
app.use('/api/v1/transfers', transferRouter);
app.use('/api/v1/auth', authRouter);

app.all('*', (req, res, next )=>{
    return res.status(404).json({
        status: "error",
        message: `can't find ${req.originalUrl} on this server`
    })
})

module.exports = app;