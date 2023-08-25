import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async ()=>{
    mongoose.set('strictQuery', true);

if(isConnected) {
    console.log('MongoDB is already connected');
    return;
  }
  const MONGODB_URI = 'mongodb+srv://marina:SS0uiOo8qkJANgc2@marinacluster.nyhy8c8.mongodb.net/?retryWrites=true&w=majority';
  try {
    await mongoose.connect(
      MONGODB_URI
      //process.env.MONGODB_URI
      , {
      dbName: "personal_dictionary",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    isConnected = true;

    console.log('MongoDB connected')
  } catch (error) {
    console.log(error, "Our Error");

  }
}