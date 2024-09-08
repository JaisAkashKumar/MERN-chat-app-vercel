import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js"; //.js lagana is crucial in ES module
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongoDB from "./db/connectToMongoDb.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); //parse request into JSON-Payloads (from request.body)
app.use(cookieParser());

app.use("/api/auth", authRoutes); //middleware
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

// app.get("/", (req, res) => {
//   // root route
//   res.send("Hello bhai, ho gaya yaar");
// });
app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`server is running on the port ${PORT}`);
});
