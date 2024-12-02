//import { config } from "../../config";
import { Client, Account, Databases, Query } from "appwrite";

export const client = new Client();

//console.log("appWriteCollectionId", config);
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("65e9eaad058df97de226");

export const account = new Account(client);
export const databases = new Databases(client);

export const getCategoryDocuments = () =>
  databases.listDocuments("65eb2acae2b6d207b044", "65eb2adace802cf46550");
