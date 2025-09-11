// import express, { Request, Response } from 'express';
// import bodyParser from 'body-parser';
// import nodemailer from 'nodemailer';
// import cors from 'cors';

// const app = express();

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // Define a type for the request body
// interface EmailRequest {
//   name: string;
//   email: string;
//   message: string;
// }

// // Endpoint for sending email
// app.post('/send-email', async (req: Request, res: Response) => {
//   const { name, email, message }: EmailRequest = req.body;

//   // Set up Nodemailer transporter
//   const transporter = nodemailer.createTransport({
//     service: 'Gmail',
//     auth: {
//       user: 'your-email@gmail.com', // Replace with your email
//       pass: 'your-email-password', // Replace with your email password or app password
//     },
//   });

//   const mailOptions = {
//     from: email,
//     to: 'n01511618@humbermail.ca', // Your email
//     subject: 'New Contact Form Submission',
//     text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     res.status(200).send('Email sent successfully');
//   } catch (error) {
//     console.error('Error sending email:', error);
//     res.status(500).send('Failed to send email');
//   }
// });

// // Start the server
// const PORT = 3000;
// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });
// import { MongoClient } from "mongodb";

// const uri = "mongodb+srv://jobs:Reigneth1125@cluster0.abcd.mongodb.net/jobTracker";
// const client = new MongoClient(uri);

// async function run() {
//   try {
//     await client.connect();
//     const db = client.db("jobTracker");
//     const jobs = db.collection("appliedJobs");

//     // Example: insert
//     //await jobs.insertOne({ company: "Google", jobTitle: "Engineer", status: "Applied" });

//     // Example: read
//     const allJobs = await jobs.find().toArray();
//     console.log(allJobs);
//   } finally {
//     await client.close();
//   }
// }

// run().catch(console.dir);

// import express, { Request, Response } from "express";
// import cors from "cors";
// import { MongoClient, Collection } from "mongodb";
// import dotenv from "dotenv";

// dotenv.config();
// const app = express();
// app.use(cors());
// app.use(express.json());

// const uri = process.env["MONGO_URI"] as string;
// const client = new MongoClient(uri);

// interface Job {
//   company: string;
//   jobTitle: string;
//   location: string;
//   link: string;
//   dateApplied: Date;
//   status: string;
//   notes?: string;
// }

// let jobs: Collection<Job>;

// async function connectDB() {
//   await client.connect();
//   const db = client.db("jobTracker");
//   jobs = db.collection<Job>("appliedJobs");
//   console.log("✅ Connected to MongoDB Atlas");
// }
// connectDB();

// // Routes
// app.get("/api/jobs", async (_req: Request, res: Response) => {
//   const allJobs = await jobs.find().toArray();
//   res.json(allJobs);
// });

// app.post("/api/jobs", async (req: Request, res: Response) => {
//   const newJob: Job = req.body;
//   const result = await jobs.insertOne(newJob);
//   res.json(result);
// });

// const PORT = process.env["PORT"] || 5000;
// app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
import express, { Request, Response } from 'express';
import cors from 'cors';
import { MongoClient, ObjectId, Collection } from 'mongodb';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// MongoDB Atlas connection
const uri = 'mongodb+srv://Jobs:Reigneth1125@cluster0.ak7ul8c.mongodb.net/';
const client = new MongoClient(uri);
const dbName = 'jobTracker';
const collectionName = 'appliedJobs';

interface Job {
  _id?: ObjectId;
  jobTitle: string;
  company: string;
  link: string;
  dateApplied: string;
}

let collection: Collection<Job>;

// Connect to MongoDB
client.connect()
  .then(() => {
    console.log('Connected to MongoDB Atlas');
    const db = client.db(dbName);
    collection = db.collection<Job>(collectionName);
  })
  .catch(err => console.error(err));

// GET /jobs -> fetch all jobs
app.get('/jobs', async (_req: Request, res: Response) => {
  try {
    const jobs = await collection.find({}).toArray();
    // normalize dateApplied
    const jobsWithDates = jobs.map(j => ({
      ...j,
      dateApplied: j.dateApplied ? new Date(j.dateApplied).toISOString() : new Date().toISOString()
    }));
    res.json(jobsWithDates);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// POST /jobs -> add a job
app.post('/jobs', async (req: Request, res: Response) => {
  try {
    const job: Job = req.body;
    if (!job.dateApplied) job.dateApplied = new Date().toISOString();
    const result = await collection.insertOne(job);
    res.json({ ...job, _id: result.insertedId });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
