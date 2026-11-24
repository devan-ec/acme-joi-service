import { Router } from "express";
import Joi from "joi";
import { JoiRequestValidationMiddleware } from "../middleware/validation";

export const getItemSchema = Joi.object({
  itemId: Joi.string().required(),
});

export const reserveItemSchema = Joi.object({
  itemId: Joi.string().required(),
  warehouseId: Joi.string().required(),
  quantity: Joi.number().integer().min(1).required(),
  note: Joi.string().max(200),
});

export const itemsRouter = Router();
itemsRouter.get("/", (_req, res) => res.json([]));
itemsRouter.get("/:itemId", JoiRequestValidationMiddleware(getItemSchema), (req, res) => res.json({ itemId: req.params.itemId }));
itemsRouter.post("/:itemId/reserve", JoiRequestValidationMiddleware(reserveItemSchema), (_req, res) => res.status(201).json({ ok: true }));
