import { Client, Databases } from "appwrite";

export const PROJECT_ID = '65c0c5c4c7b30eaa908b'
export const DATABASE_ID = '65c0d95917572fe178dc'
export const COLLECTION_ID_MESSAGES = '65c0d97c8ba949fd05fd'

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("65c0c5c4c7b30eaa908b");

export const databases = new Databases(client)

export default client;