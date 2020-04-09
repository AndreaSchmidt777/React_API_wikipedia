
export function incrementCounter() {
    return {type: "INCREMENT"};
}

export function addTodo(title) {
    return {type: "TODO_ADD", title: title};
}

export function wikipediaSearch(keyword) {
    return {type: "WIKIPEDIA_SEARCH", keyword: keyword};
}