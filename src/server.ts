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
