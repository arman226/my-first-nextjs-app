// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//for database configuration of no-SQL Databas (MongoDB)
//mongodb has to be installed `npm install mongodob`
import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  try {
    if (req.method === "POST") {
      const { title, image, description, address } = req.body;
      // to connect to the database
      const client = await MongoClient.connect(
        "mongodb+srv://user:user@test.xudw9.mongodb.net/meetups?retryWrites=true&w=majority"
      );

      const db = client.db();

      const meetupsCollection = db.collection("meetups");

      const result = await meetupsCollection.insertOne({
        title,
        image,
        description,
        address,
      });

      client.close();

      console.log("api", result);

      res.status(200).json({ result: "meetup inserted" });
    } else {
      res.status(500).json({ message: "wrong method" });
    }
  } catch (error) {
    res.status(500);
  }
}
