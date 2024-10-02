import cors from "cors";
import mongoose from "mongoose";
import express from "express";

const app = express();
app.use(express.json());
app.use(cors(
    {
        origin: process.env.CORS_ORIGIN,
        credentials: true
    }
));
app.use(express.static("public"));

export { app };