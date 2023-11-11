import { Schema, Types, model, Model } from "mongoose";
import { Evento } from "../interfaces/evento.interface";

const ItemSchema = new Schema<Evento>(
  {
    Imagen: {
      type: String,
    },
    Nombre: {
      type: String,
      required: true,
    },
    Lugar: {
      type: String,
      required: true,
    },
    Fecha: {
      type: String,
      required: true,
    },
    Descripcion: {
      type: String,
      required: true,
    },
    Organizador: {
      type: String,
      required: true,
    },
    Entradas: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const ItemModel = model("Eventos", ItemSchema);
export default ItemModel;