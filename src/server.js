require("dotenv-safe").config();
const express = require("express");

const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db_config");

connectDB();

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use("/api", require("./routes/recRoutes"));
app.use(errorHandler);

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
