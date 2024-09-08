import express from "express";
import { getMessages, sendMessage } from "../controller/message.controller.js";
import protectRoute from "../middleware/protectRoute.js";
const router = express.Router();

router.get("/:id", protectRoute, getMessages);
router.post("/send/:id", protectRoute, sendMessage); //id is userId and protectRoute is a middleware (we made it) for authorization
export default router;
