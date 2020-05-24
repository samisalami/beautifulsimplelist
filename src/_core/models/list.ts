export type List = {
    id: string;
    name: string;
    description: string;
}

export function makeList(id: string, name: string, description: string): List {
    return {
        id: id,
        name: name,
        description: description
    } as List;
}