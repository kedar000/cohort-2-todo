import mongoose from "mongoose";

export async function ConnectDB(){
    try {
       const connect = await mongoose.connect("mongodb+srv://KK:10396kkk@cluster0.ihiy3al.mongodb.net/Cohort-Todo")
       console.log("Database connected successfully......") 
    } catch (error) {
        console.log("there is a error in db connection ", error);
    }
}