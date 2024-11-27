import { APP_BASE_HREF } from '@angular/common';
import { CommonEngine } from '@angular/ssr';
import express, { Request, Response } from 'express';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';
import bootstrap from './src/main.server';
import bodyParser from 'body-parser';
// import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv'

dotenv.config();
// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
  const server = express();
  const serverDistFolder = dirname(fileURLToPath(import.meta.url));
  const browserDistFolder = resolve(serverDistFolder, '../browser');
  const indexHtml = join(serverDistFolder, 'index.server.html');

  // Middleware
  server.use(cors());
  server.use(bodyParser.json());

  // Define a type for the request body
  interface EmailRequest {
    name: string;
    email: string;
    message: string;
  }
  // Endpoint for sending email
  // server.post('/send-email', async (req: Request, res: Response) => {
  //   const { name, email, message }: EmailRequest = req.body;

    // Set up Nodemailer transporter
    // const transporter = nodemailer.createTransport({
    //   service: 'Gmail',
    //   auth: {
    //     user: process.env['EMAIL'], // Replace with your email
    //     pass: process.env['PASSWORD'], // Replace with your email password or app password
    //   },
    // });

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

  const commonEngine = new CommonEngine();

  server.set('view engine', 'html');
  server.set('views', browserDistFolder);

  // Example Express Rest API endpoints
  // server.get('/api/**', (req, res) => { });
  // Serve static files from /browser
  server.get(
    '**',
    express.static(browserDistFolder, {
      maxAge: '1y',
      index: 'index.html',
    })
  );

  // All regular routes use the Angular engine
  server.get('**', (req, res, next) => {
    const { protocol, originalUrl, baseUrl, headers } = req;

    commonEngine
      .render({
        bootstrap,
        documentFilePath: indexHtml,
        url: `${protocol}://${headers.host}${originalUrl}`,
        publicPath: browserDistFolder,
        providers: [{ provide: APP_BASE_HREF, useValue: baseUrl }],
      })
      .then((html) => res.send(html))
      .catch((err) => next(err));
  });

  return server;
}

function run(): void {
  const port = process.env['PORT'] || 4000;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

run();
