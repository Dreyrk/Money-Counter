import { connect, connection } from "mongoose";

async function dbConnection() {
  try {
    await connect(process.env.MONGO_URI as string);

    connection.on("connected", () => {
      console.log("MongoDB connected successfully");
    });
    connection.on("error", (e) => {
      console.error(`error from database connection: ${e.message}`);
      process.exit(1);
    });
  } catch (e: any) {
    console.error(`Something goes wrong: ${e}`);
  }
}

export default dbConnection;
