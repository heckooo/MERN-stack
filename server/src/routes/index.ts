import express from "express";
import { decksRouter } from "./decksRouter";

export const routes = express.Router();

routes.use(decksRouter);