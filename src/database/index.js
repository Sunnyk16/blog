import mongoose from "mongoose";

const connectToDb =async()=>{
    const connectionUrl ="mongodb+srv://kumarsunny1246:Jack12@@chronicles.cezll.mongodb.net/chronicles";
    mongoose.connect(connectionUrl).then(()=>
        console.log("database connected")).catch((error)=> console.log(error));
}

export default connectToDb;