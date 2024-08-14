// Install emailjs via npm or yarn: npm install emailjs

const emailjs = require('emailjs-com');

const sendEmail = async () => {
  try {
    const serviceId = 'service_Portfolio23';
    const templateId = 'template_357vgae';
    const userId = '22WH5cXbJiCnoiZKc'; // Replace with your emailjs user ID

    const templateParams = {
      email: email,
      message: message,
    };

    await emailjs.send(serviceId, templateId, templateParams, userId);
    console.log('Email sent successfully');
  } catch (error) {
    console.log('Error sending email:', error);
  }
};

sendEmail();
