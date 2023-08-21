const express= require('express');
const app=express();
const {PORT}= require('./config/serverConfig');


const prepareAndStatrtServer= ()=>{
    app.listen(PORT,()=>{
        console.log(`Server started on port ${PORT}`);
    });
}

prepareAndStatrtServer();
