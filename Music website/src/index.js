import dotenv from "dotenv";
// require('dotenv').config({
    // path:"./env"
// });
import ConnectDB from "./db/index.js"
dotenv.config({path:"./env"})



ConnectDB();
// import express from "express";
// const app = express();
// (()=>{
//     try {
        
//         mongoose.connect(`${process.env.MONGO_URI}/${DB_Name}`);
//         app.on('error',(error)=>{
//             console.log('error will occuur',error);
//             throw error
//         })
//     } catch (error) {
//         console.log('error will occur in this number',error);
//         throw error;
        
//     }
// })
// ()