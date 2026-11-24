import { Router } from "express";
import { itemsRouter } from "./items-router";

export const rootRouter = Router();
rootRouter.get("/health", (_req, res) => res.json({ status: "ok" }));
rootRouter.use("/items", itemsRouter);
