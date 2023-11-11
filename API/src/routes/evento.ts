import { Request, Response, Router } from "express";
import {
  get,
  gets,
  post,
  deletes
} from "../controllers/evento";


const router = Router();

router.get("/", gets);

router.get("/:id", get);

router.post("/", post);

router.delete("/:id", deletes);

export { router };