import config from "./app/config/index.js";
import app from "./app.js";
import mongoose from "mongoose";

async function main() {
  try {
    app.listen(config.port, () => {
      console.log(`Server is running on port ${config.port}`);
    });

    await mongoose.connect(`${config.mongodb_uri}`);
  } catch (err) {
    console.log(err);
  }
}

main();
