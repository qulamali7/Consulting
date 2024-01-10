import express from "express";
import {
  CreateService,
  DeleteService,
  GetAll,
  GetById,
  UpdateService,
} from "../Controller/ServiceController.js";

export const ServiceRoute = express.Router();

ServiceRoute.get("/services", GetAll)
  .get("/services/:id", GetById)
  .post("/services", CreateService)
  .put("/services/:id", UpdateService)
  .delete("/services/:id", DeleteService);
