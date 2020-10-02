import express from "express";
import { getMathRoutes } from "./math";

const getRoutes = () => {
  const router = express.Router();
  router.use("/math", getMathRoutes());
  return router;
};

export { 
    getRoutes 
};
