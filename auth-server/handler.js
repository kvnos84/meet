"use strict";

const { google } = require("googleapis");
require("dotenv").config();

// 🔑 Load credentials from environment
const oAuth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URI
);

// 📌 Calendar ID (CareerFoundry public calendar)
const CALENDAR_ID = "fullstackwebdev@careerfoundry.com";

// ✅ 1. Get Auth URL
module.exports.getAuthURL = async () => {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: "offline",
    scope: ["https://www.googleapis.com/auth/calendar.readonly"],
  });

  return {
    statusCode: 200,
    body: JSON.stringify({ authUrl }),
  };
};

// ✅ 2. Exchange Code for Access Token
module.exports.getAccessToken = async (event) => {
  const code = event.pathParameters.code;

  return new Promise((resolve, reject) => {
    oAuth2Client.getToken(code, (error, token) => {
      if (error) {
        reject({
          statusCode: 500,
          body: JSON.stringify(error),
        });
      } else {
        resolve({
          statusCode: 200,
          body: JSON.stringify(token),
        });
      }
    });
  });
};

// ✅ 3. Get Calendar Events
module.exports.getCalendarEvents = async (event) => {
  const access_token = event.pathParameters.access_token;

  oAuth2Client.setCredentials({ access_token });

  return new Promise((resolve, reject) => {
    const calendar = google.calendar({ version: "v3", auth: oAuth2Client });

    calendar.events.list(
      {
        calendarId: CALENDAR_ID,
        timeMin: new Date().toISOString(),
        singleEvents: true,
        orderBy: "startTime",
      },
      (error, response) => {
        if (error) {
          reject({
            statusCode: 500,
            body: JSON.stringify(error),
          });
        } else {
          resolve({
            statusCode: 200,
            body: JSON.stringify({ events: response.data.items }),
          });
        }
      }
    );
  });
};
