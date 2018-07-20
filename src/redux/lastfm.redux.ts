interface Todo {
    id: string;
    name: string;
    status: boolean;
}
interface TodoList {
    artistsList: Todo[];
}

const initialState: TodoList = {
    artistsList: [],
};

/* TYPES */


/* ACTIONS */


/* SELECTORS */


/* REDUCER */
export const todoReducer = (state = initialState, action: { type: string }) => {
    switch (action.type) {
        default:
            return state;
    }
};

// Utils
// Generate simple unique id
const ALPHABET = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const ID_LENGTH = 8;

const generateId = function () {
    let rtn = '';
    for (let i = 0; i < ID_LENGTH; i++) {
        rtn += ALPHABET.charAt(Math.floor(Math.random() * ALPHABET.length));
    }
    return rtn;
}
