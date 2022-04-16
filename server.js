import db from "./db/connection.js";
import routes from "./routes/index.js";
import express from "express";
import chalk from "chalk";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use("/api", routes);

db.on("connected", () => {
  console.clear();
  console.log(chalk.green("Connectd to MongoDB!"));
  app.listen(PORT, () => {
    process.env.NODE_ENV === "production"
      ? console.log(
          chalk.blueBright(
            `Express server running in production on port ${PORT}\n\n`
          )
        )
      : console.log(
          chalk.greenBright(
            `Express server running in development on: http://localhost:${PORT}`
          )
        );
  });
});
