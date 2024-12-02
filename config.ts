import * as dotenv from "dotenv";
dotenv.config();

export const config = {
  appWriteUrl: String(process.env.APP_WRITE_PUBLIC_URL),
  appwriteProjectId: String(process.env.APP_WRITE_PROJECT_ID),
  appwriteDBId: String(process.env.APP_WRITE_DB_ID),
  appWriteCollectionId: String(process.env.APP_WRITE_COLLECTION_ID),
};
