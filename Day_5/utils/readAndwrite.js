import fs from "fs/promises";
import path from "path";

const FILE = path.join(process.cwd(), "Day_5", "Users.json");

export const readFile = async (filePath = FILE) => {
  try {
    const data = await fs.readFile(filePath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.log("Unable to read the file", error);
    return [];
  }
};

export const writeFile = async (filePath = FILE, data) => {
  let message = "";
  let status = "";
  try {
    const jsonData = JSON.stringify(data, null, 2);
    await fs.writeFile(filePath, jsonData, "utf-8");
    console.log("Data has been written to the file successfully.");
    status = 200;
    message = "Data written successfully";
  } catch (error) {
    console.error("Error writing to the file:", error);
    status = 500;
    message = "Error writing file";
  }
  return { message, status };
};
