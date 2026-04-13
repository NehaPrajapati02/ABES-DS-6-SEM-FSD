
import dbConnect from "../db.js";

// INSERT FUNCTION
const insertOne = async () => {
  try {
    const db = await dbConnect();
    const collection = db.collection("users");

    const data = {
      name: "John Doe",
      age: 30,
      email: "d0z0Z@example.com"
    };

    const result = await collection.insertOne(data);
    console.log("Data inserted successfully:", result.insertedId);

  } catch (error) {
    console.error("Error inserting data:", error);
  }
};


// UPDATE FUNCTION
const updateOne = async () => {
  try {
    const db = await dbConnect();
    const collection = db.collection("users");

    const filter = { name: "John Doe" };
    const updateData = {
      $set: {
        age: 35,
        email: "updated@example.com"
      }
    };

    const result = await collection.updateOne(filter, updateData);

    if (result.modifiedCount > 0) {
      console.log("Data updated successfully");
    } else {
      console.log("No data found to update");
    }

  } catch (error) {
    console.error("Error updating data:", error);
  }
};


// DELETE FUNCTION
const deleteOne = async () => {
  try {
    const db = await dbConnect();
    const collection = db.collection("users");

    const filter = { name: "John Doe" }; // jis record ko delete karna hai

    const result = await collection.deleteOne(filter);

    if (result.deletedCount > 0) {
      console.log("Data deleted successfully");
    } else {
      console.log("No data found to delete");
    }

  } catch (error) {
    console.error("Error deleting data:", error);
  }
};





// DELETE MANY FUNCTION
const deleteManyUsers = async () => {
  try {
    const db = await dbConnect();
    const collection = db.collection("users");

    const filter = { age: 30 }; // jitne users ki age 30 hai sab delete honge

    const result = await collection.deleteMany(filter);

    if (result.deletedCount > 0) {
      console.log(`${result.deletedCount} records deleted successfully`);
    } else {
      console.log("No data found to delete");
    }

  } catch (error) {
    console.error("Error deleting multiple data:", error);
  }
};





// CALL FUNCTIONS
insertOne();
updateOne();
deleteOne();
deleteManyUsers();