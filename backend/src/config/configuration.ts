export default () => ({
  port: parseInt(process.env.PORT, 10) || 5000,
  frontendUrl: process.env.FRONTEND_URL,
  google: {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: `${process.env.BACKEND_URL}/auth/google/callback`,
  },
  database: {
    url: process.env.DATABASE_URL,
  },
  adminEmails: process.env.ADMIN_EMAILS.split(','),
});
