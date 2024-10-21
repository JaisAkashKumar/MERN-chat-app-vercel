import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js"; //.js lagana is crucial in ES module
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongoDB from "./db/connectToMongoDB.js";
import { app, server } from "./socket/socket.js";

dotenv.config();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve(); //gives us the absolute path to the root folder

app.use(express.json()); //parse request into JSON-Payloads (from request.body)
app.use(cookieParser());

app.use("/api/auth", authRoutes); //middleware
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.use(express.static(path.join(__dirname, "../Frontend/build")));

// Handle React routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../Frontend/build", "index.html"));
});

server.listen(PORT, () => {
  connectToMongoDB();
  console.log(`server is running on the port ${PORT}`);
});
