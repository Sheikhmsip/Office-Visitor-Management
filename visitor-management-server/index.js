const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3000;
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

// Use cors middleware
app.use(cors());
app.use(express.json());

// API route to get visitors data
app.get("/", (req, res) => {
  res.send("Visitor Management is running");
});

const uri =
  "mongodb+srv://visitor-management:Bg9z5cbwQRdig99b@cluster0.vvvwsgj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    const visitorCollections = client
      .db("Visitor-Management")
      .collection("visitors");

    app.get("/visitors", async (req, res) => {
      const visitors = visitorCollections.find();
      const result = await visitors.toArray();
      res.send(result);
    });

    app.get("/visitors/:id", async (req, res) => {
      const id = req.params.id;
      console.log(id);
      try {
        const query = { _id: new ObjectId(id) };
        console.log(query);
        const result = await visitorCollections.findOne(query);

        if (!result) {
          return res.status(404).send({ message: "Visitor not found" });
        }
        res.send(result);
      } catch (err) {
        console.error("Error fetching visitor by ID:", err);
        res.status(500).send({ message: "Internal Server Error", error: err });
      }
    });

    // POST route to add a new visitor
    app.post("/visitors", async (req, res) => {
      try {
        const visitorData = req.body; // Get visitor data from the request body

        // Insert the visitor data into the MongoDB collection
        const result = await visitorCollections.insertOne(visitorData);

        // Return the inserted document (you can optionally fetch it from the database again)
        res.status(201).json({
          _id: result.insertedId,
          ...visitorData,
        });
      } catch (error) {
        console.error("Error adding visitor:", error);
        res
          .status(500)
          .json({ error: "An error occurred while adding the visitor" });
      }
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`Visitor Management server is running on port ${port}`);
});
