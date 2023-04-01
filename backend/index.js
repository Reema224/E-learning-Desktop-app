const express = require("express");
const app = express();
require("dotenv").config();
app.use(express.json())

const authRouter = require("./routes/auth.routes");
app.use('/auth', authRouter)

const courseRouter = require("./routes/course.routes");
const { authMiddleware } = require("./middlewares/auth.middleware");
const { adminMiddleware } = require("./middlewares/admin.middleware");

app.use('/courses', authMiddleware, adminMiddleware, courseRouter);

app.listen(process.env.PORT, (err) => {
  if (err) console.error(err)
  console.log("Server is running on port ", process.env.PORT);
  require("./configs/db.config")
});

