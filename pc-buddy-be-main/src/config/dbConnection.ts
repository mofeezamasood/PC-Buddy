import mongoose from "mongoose";

const dbConnection = async () => {
  try {
    mongoose.set("strictQuery", false);

    if (process.env.NODE_ENV === "development") {
      console.log("In dev mode");
      await mongoose.connect(process.env.MONGO_DEV_URL as string);
    } else {
      console.log("In pro mode");
      await mongoose.connect(process.env.MONGO_PRO_URL as string);
    }
  } catch (err) {
    console.error(err);
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});

mongoose.connection.on("connected", () => {
  console.log("mongoDB connected!");
});

export default dbConnection;
