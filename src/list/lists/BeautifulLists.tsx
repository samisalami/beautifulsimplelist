import {List} from "../../_core/models/list";
import React from "react";
import {getLists} from "../../_core/services/list/list.service";

export const BeautifulLists = () => {
    const listArray: List[] = getLists();
    return (
        <ul>
            {listArray.map(list =>
                <li>
                    <a href={'list/' + list.id}>
                        {list.name}
                    </a>
                </li>
            )}
        </ul>
    );
};