import {List} from "../../_core/models/list";
import React from "react";
import {getListById, getLists} from "../../_core/services/list/list.service";

export const BeautifulList = () => {
    // getting id from url
    const id = '1245654643';

    const list = getListById(id);

    return (
        <ul>
        </ul>
    );
};