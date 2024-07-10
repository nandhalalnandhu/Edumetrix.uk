import express from "express";
import nodemailer from "nodemailer";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);



// Start the server

const PORT = 3005;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


// Configure nodemailer

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "nandhalalnandhuz@gmail.com",
    pass: "pidrarqmgrgwijwl",
  },
});

// Handle POST request from the form

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

app.post("/send-email", (req, res) => {
  const {
    parentName,
    phoneNumber,
    email,
    available_Date,
    callavailable_Time,
    address,
    student_name,
    student_class,
    student_DOB,
    subjectsRequired,
    TrialAvailableDate,
    TrialAvailableTime,
    additionalMessage,
  } = req.body;

  const BmailOptions = {
    from: "",
    to: "nandhalalnandhuz@gmail.com",
    subject: "Free Trial Booking",
    text: `
        parentName : ${parentName}
        phoneNumber : ${phoneNumber}
        email : ${email}
        available_Date : ${available_Date}
        callavailable_Time : ${callavailable_Time}
        address : ${address}
        student_name : ${student_name}
        student_class : ${student_class}
        student_DOB : ${student_DOB}
        subjectsRequired : ${subjectsRequired}
        TrialAvailableDate : ${TrialAvailableDate}
        TrialAvailableTime : ${TrialAvailableTime}
        additionalMessage : ${additionalMessage}
        `,
  };

  //  Send email

  transporter.sendMail(BmailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send("Error sending email");
    } else {
      console.log("email sent: " + info.response);
      res.send("email sent successfully");
    }
  });
});

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

app.post("/send-emaill", (req, res) => {
  const { Name, Email, phone, Message } = req.body;

  //  IT SOLUTIONS PAGE

  const AmailOptions = {
    from: "",
    to: "edumetrixlearningsolutions@gmail.com",
    subject: "Customaized Quote",
    text: `

        Name : ${Name}
        Email : ${Email}
        Number : ${phone}
        Message : ${Message}
        
        `,
  };

  //  Send email

  transporter.sendMail(AmailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send("Error sending email");
    } else {
      console.log("email sent: " + info.response);
      res.send("email sent successfully");
    }
  });
});

