import { Request, Response } from "express";
import dbConnect from "../config/mongo";
import {
  deleteEvento,
  getEvento,
  getEventos,
  insertEvento
} from "../services/evento";
import { handleHttp } from "../utils/error.handle";

const get = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await getEvento(id);
    const data = response ? response : "NOT_FOUND";
    res.send(data);
  } catch (e) {
    handleHttp(res, "ERROR OBTENER EL EVENTO");
  }
};

const gets = async (req: Request, res: Response) => {
  try {
    const response = await getEventos();
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR OBTENER LOS EVENTOS");
  }
};

const post = async ({ body }: Request, res: Response) => {
    try {
      const responseItem = await insertEvento(body);
      res.send(responseItem);
    } catch (e) {
      handleHttp(res, "ERROR POST EL EVENTO", e);
    }
  };

  const deletes = async ({ params }: Request, res: Response) => {
    try {
      const { id } = params;
      const response = await deleteEvento(id);
      res.send(response);
    } catch (e) {
      handleHttp(res, "ERROR ELIMINAR EVENTO");
    }
  };

export {get,gets,post,deletes};