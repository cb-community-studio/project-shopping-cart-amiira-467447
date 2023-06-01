import mongoose from "mongoose";

// Declare the Schema of the Mongo model
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true, // check po
    },
    // lastname: {
    //   type: String,
    //   required: true,
    //   trim: true, // check po
    // },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    address: {
      //iptional
      type: String,
      required: true,
    },
    role: {
      //admin1 = 0!admin;
      type: Number,
      default: 0,
    },
    question:{
      type: String,
      require:true,
    }
  },
  { timestamps: true }
);

//Export the model
export default mongoose.model("users", userSchema);
