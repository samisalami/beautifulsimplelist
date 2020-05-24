const listData = [
    {
        id: '1235456546',
        name: 'bla',
        description: 'kjsdflkjdslfkj'
    },
    {
        id: '1245654643',
        name: 'bla2',
        description: 'kjsdflkjdslfkj'
    },
    {
        id: '145654645623',
        name: 'bla3',
        description: 'kjsdflkjdslfkj'
    }
];

const listItemData = [
    {
        id: '1235456546',
        name: 'bla',
        description: 'kjsdflkjdslfkj'
    },
    {
        id: '1245654643',
        name: 'bla2',
        description: 'kjsdflkjdslfkj'
    },
    {
        id: '145654645623',
        name: 'bla3',
        description: 'kjsdflkjdslfkj'
    }
];

function connectToDb() {
    // build connection to db
}

function query() {
    //execute a query
}

function initializeDatabase() {
    //create tables if not existent
}

export enum Entities {
    LIST = 'list',
    LISTITEM = 'listitem'
}

export function getData(entity: Entities): any[] {
    if (entity === Entities.LIST) {
        return listData;
    }

    if (entity === Entities.LISTITEM) {
        return listItemData;
    }

    return [];
}