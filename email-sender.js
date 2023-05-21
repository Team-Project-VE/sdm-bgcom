const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.post("/send-email", async (req, res) => {
    console.log("Received request body: ", req.body);
    // console.log("Received request URL: ", req.originalUrl);
    const { subject, name, surname, email, phoneNumber, message, endpoint, price } = req.body;
    // const endpoint = req.originalUrl;

    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD,
        },
        tls:{
          rejectUnauthorized:false
        }
    });

    let mailOptions = {
        from: `"${name} ${surname}" <${email}>`,
        to: process.env.TO,
        subject: subject,
        text: `Name: ${name}\nSurname: ${surname}\nEmail: ${email}\nPhone Number: ${phoneNumber}\nMessage: ${message}\nEndpoint: ${endpoint}\Price: ${price}}`,
      };
    
      try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: "Email sent successfully." });
      } catch (error) {
        console.log("Error sending email: ", error);
        res.status(500).send("Error sending email.");
      }
    });
    
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});