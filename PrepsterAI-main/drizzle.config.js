/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:npg_9bTDziBpKL3H@ep-odd-scene-aighsdor-pooler.c-4.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require',
    },
};
