// import mongoose from "mongoose";

// const connectToDb =async()=>{
//     const connectionUrl ="mongodb+srv://kumarsunny1246:Jack12@@chronicles.cezll.mongodb.net/blog";
//     mongoose.connect(connectionUrl).then(()=>
//         console.log("database connected")).catch((error)=> console.log(error));
// }

// export default connectToDb;
import mongoose from "mongoose";

const connectToDb = async () => {
  const uri = "mongodb+srv://kumarsunny1246:Jack12%40@chronicles.cezll.mongodb.net/blog";
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
    throw error;
  }
};

export default connectToDb;