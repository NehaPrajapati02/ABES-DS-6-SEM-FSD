import dbConnect from  "../controller/db.js";  
import UserSchema from "../controller/User.js";
dbConnect(); // DB connection establish karna hai



const db = await dbConnect();

const User = db.model("users", UserSchema);

const users = await User.find();

console.log(users);
