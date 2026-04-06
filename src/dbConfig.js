import pkg from "pg";
import { Config } from "./config/envExport.js";

const { Pool } = pkg;

const pool = new Pool({
  connectionString: Config.db_uri,
  ssl: {
    rejectUnauthorized: false,
  },
});

export const connectDB = async () => {
  try {
    const client = await pool.connect();
    console.log("Database connected");

    client.release(); 
  } catch (error) {
    console.error("DB connection failed:", error);
  
  }
};

export default pool;