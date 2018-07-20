import { $get } from './api';

const LASTFM_API_KEY = process.env.LASTFM_API_KEY;

const path = "https://api.phohuynh.com/";

export const getFavoriteArtists = async () => {
    const res = await $get(`${path}getFavoriteArtists`);

    return res;
}
