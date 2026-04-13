import { MongoClient } from "mongodb";   

const MONGO_URL = "mongodb+srv://user:admin@crud.dgzm3zk.mongodb.net/?appName=crud";
const DB_NAME = "users";

const client = new MongoClient(MONGO_URL);
const dbConnect = async () => {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
    return client.db("myDatabase");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

export default dbConnect ;

// dbConnect();