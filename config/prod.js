//prod.js - production keys here, we commit this.

module.exports = {
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  //make one for facebookClientID
  mongoURI: process.env.MONGO_URI,
  cookieKey: process.env.COOKIE_KEY
};
