import express from "express";
import { registerUser, loginUser, getUserProfile, explore, addblog, readblog } from "../controllers/userController.js";

const router = express.Router();


router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile/:id", getUserProfile);
router.get("/explore", explore);
router.post("/addblog", addblog);
router.get("/blogs/:slug", readblog);

export default router;
