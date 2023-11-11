import { Evento } from "../interfaces/evento.interface";
import ItemModel from "../models/evento";

const getEventos = async () => {
    const responseItem = await ItemModel.find({})
    return responseItem;
}

const getEvento = async (id:string) => {
    const responseItem = await ItemModel.findOne({_id:id})
    return responseItem;
}

const insertEvento = async (item: Evento) => {
    const responseInsert = await ItemModel.create(item);
    return responseInsert;
};

const deleteEvento = async (id: string) => {
    const responseItem = await ItemModel.deleteOne({_id:id});
    return responseItem;
  };


export {getEvento, getEventos, insertEvento, deleteEvento};