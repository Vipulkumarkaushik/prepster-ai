/** @type { import("drizzle-kit").Config } */
import * as dotenv from 'dotenv';
// Vercel aur local dono ke liye sahi path load karna
dotenv.config({ path: '.env' }); 

export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      // Yahan ab hum process.env ka use karenge
      url: process.env.DATABASE_URL, 
    },
};
