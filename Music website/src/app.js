import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors(
    {
        origin:process.env.CORS_ORIGIN,
        Credential:true
    }
));
app.use(express.static("public"));
app.use(cookieParser())
export {app};