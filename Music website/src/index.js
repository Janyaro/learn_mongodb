import dotenv from "dotenv";
// require('dotenv').config({
    // path:"./env"
// });
import ConnectDB from "./db/index.js"
import { app } from "./app.js";
dotenv.config({path:"./env"})



ConnectDB()
.then(()=>{
    app.listen(process.env.PORT || 3000 , ()=>{
        console.log(`app is start at the port number ${process.env.PORT}`);
        
    })
})
.catch((err) =>{
    console.log('Database connection error failed');
})
;
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