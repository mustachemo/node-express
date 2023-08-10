import { MongoClient, ServerApiVersion } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const uri = process.env.MONGODB_URI;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function testDB() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db('admin').command({ ping: 1 });
    console.log(
      'Pinged your deployment. You successfully connected to MongoDB!'
    );
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

async function listDatabases() {
  try {
    await client.connect();
    const adminDb = client.db('admin');
    const databaseList = await adminDb.admin().listDatabases();
    console.log('Available databases:');
    databaseList.databases.forEach(db => {
      console.log(`- ${db.name}`);
    });
  } catch (error) {
    console.error('Error listing databases:', error);
  }
}

const mongoDB = client.db('learning-db');

export { mongoDB, testDB, listDatabases };
