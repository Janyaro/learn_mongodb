import mongoose from "mongoose";
import {DB_Name} from "../constant.js"
const ConnectDB = async () =>{
    try {
        
        const dbinstance = await mongoose.connect(`${process.env.MONGO_URI}/${process.env.DB_Name}`)
        console.log(`Database connect !! with the host number  ${dbinstance.connection.host}` );
    } catch (error) {
         console.log('Database connection error will occur please check you connection ',error

         );
    process.exit(1);
    }
    
}

export default ConnectDB;