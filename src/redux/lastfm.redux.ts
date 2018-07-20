import * as lastfmApi from './xhr/lastfm';

interface Todo {
    id: string;
    name: string;
    status: boolean;
}
interface TodoList {
    getArtistsPending: boolean;
    artistsList: Todo[];
}

const initialState: TodoList = {
    getArtistsPending: true,
    artistsList: [],
};
/* TYPES */
const GET_ARTISTS = 'lastfm/GET_ARTISTS';
const GET_RECENT = 'lastfm/GET_RECENT';

/* ACTIONS */
export const getArtists = () => {
    return (dispatch: any) => {
        const promise = lastfmApi.getArtists();

        promise.then(res => {
            dispatch({
                type: GET_ARTISTS,
                artists: res.topartists.artist
            })
        })
    }
}
export const getRecent = () => {
    return (dispatch: any) => {
        const promise = lastfmApi.getRecent();

        promise.then(res => {
            dispatch({
                type: GET_RECENT,
                recent: res
            })
        })
    }
}


/* SELECTORS */


/* REDUCER */
export const lastfmReducer = (state = initialState, action: { type: string, artists: any[], recent: any }) => {
    switch (action.type) {
        case GET_ARTISTS:
            return {
                ...state,
                getArtistsPending: false,
                artistsList: action.artists
            }
        case GET_RECENT:
            return {
                ...state,
                recent: action.recent
            }
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
