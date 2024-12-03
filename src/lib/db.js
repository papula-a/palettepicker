import { MongoClient } from "mongodb";

let client;
let clientPromise;

if (!global._mongoClientPromise) {
  client = new MongoClient(process.env.MONGODB_URI);
  global._mongoClientPromise = client.connect();
}

clientPromise = global._mongoClientPromise;

export default async function getDb() {
  const client = await clientPromise;
  return client.db(process.env.DB_NAME); // Replace with your database name
}
