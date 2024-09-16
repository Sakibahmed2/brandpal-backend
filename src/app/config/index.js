import dotenv from "dotenv";
import path from "path";

dotenv.config({
  path: path.join((process.cwd(), ".env")),
});

export default {
  port: process.env.PORT,
  mongodb_uri: process.env.MONGODB_URI,
  jwt_secret: process.env.JWT_SECRET,
  jwt_expires_in: process.env.JWT_EXPIRES_IN,
  stripe_secret_key: process.env.STRIPE_SECRET_KEY,
  your_email: process.env.YOUR_EMAIL,
  your_email_password: process.env.YOUR_EMAIL_PASSWORD,
};
