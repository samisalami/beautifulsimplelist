import {List, makeList} from "../../models/list";
import {Entities, getData} from "../data/storage.service";

export function getListItemById(id: string): List | undefined {
    const list = getData(Entities.LISTITEM).find(list => list.id === id);
    return list ? makeList(list.id, list.name, list.description) : undefined;
}

export function getListItemss(): List[] {
    return getData(Entities.LISTITEM).map(list => makeList(list.id, list.name, list.description));
}