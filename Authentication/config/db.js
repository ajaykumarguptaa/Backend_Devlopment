import mongoose from "mongoose";

const connectDb = async () => {
  try {
   const conDb= await mongoose.connect(
      "mongodb+srv://theincredibleknowledge:wLps6E6Q6rfwenUR@cluster0.9grdgrc.mongodb.net",
     {dbName:"Authentication_dtabase_create"}
    );
    // console.log("Data Base connected successfully....")
    console.log(`MongoDb Connected: ${conDb.connection.host}`)
  } catch (err) {
    console.log("Error: ", err.message);
    process.exit(1)
  }
};

export default connectDb