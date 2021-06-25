import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  try {
    if (req.method === "GET") {
      const client = await MongoClient.connect(
        "mongodb+srv://user:user@test.xudw9.mongodb.net/meetups?retryWrites=true&w=majority"
      );

      const db = client.db();
      const meetupCollection = db.collection("meetups");

      const meetups = await meetupCollection.find({}).toArray();
      client.close();

      res.status(200).json({ meetups });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
}
