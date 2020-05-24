import {List, makeList} from "../../models/list";
import {Entities, getData} from "../data/storage.service";

export function getListById(id: string): List | undefined {
    const list = getData(Entities.LIST).find(list => list.id === id);
    return list ? makeList(list.id, list.name, list.description) : undefined;
}

export function getLists(): List[] {
    return getData(Entities.LIST).map(list => makeList(list.id, list.name, list.description));
}