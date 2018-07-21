import * as lastfmApi from './xhr/lastfm';

const initialState = {
    getArtistsPending: true,
    getRecentPending: true,
    artistsList: <any>[],
    recentTrack: {},
    recentArtist: {}
};
/* TYPES */
const GET_ARTISTS = 'lastfm/GET_ARTISTS';
const GET_MOST_RECENT = 'lastfm/GET_MOST_RECENT';

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
export const getMostRecent = () => {
    return async (dispatch: any) => {
        const recent = await lastfmApi.getMostRecent();
        if(!recent.error) {
            const recentTrack = recent.recenttracks.track[0];

            const artistResult = await lastfmApi.getMostRecentArtist(recentTrack.artist['#text']);
            const recentArtist = artistResult.error ? {} : artistResult.artist;

            dispatch({
                type: GET_MOST_RECENT,
                recentTrack,
                recentArtist
            })
        }
    }
};


/* SELECTORS */


/* REDUCER */
export const lastfmReducer = (state = initialState, action: { type: string, artists: any[], recentTrack: any, recentArtist: any }) => {
    switch (action.type) {
        case GET_ARTISTS:
            return {
                ...state,
                getArtistsPending: false,
                artistsList: action.artists
            }
        case GET_MOST_RECENT:
            return {
                ...state,
                recentTrack: action.recentTrack,
                recentArtist: action.recentArtist,
                getRecentPending: false
            }
        default:
            return state;
    }
};
