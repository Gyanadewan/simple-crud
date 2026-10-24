import express from 'express';
import cors from 'cors'
import 'dotenv/config'
import { MongoClient } from 'mongodb';

const app = express();
const port = process.env.PORT || 5000

app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
  res.send('simple crud run');
});

const client = new MongoClient(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.m0nuyjg.mongodb.net/`);

export async function connectToMongoDB() {
  try {
    await client.connect();
    console.log(" successfully connected to MongoDB!");
    return client;
  } catch (err) {
    console.dir(err);
  }
}

 await connectToMongoDB()

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});