import { $get } from './api';

const path = "https://portfolio-api.phohuynh.com/v1/";

export const getArtists = async () => {
    const res = await $get(`${path}getArtists`);

    return res;
}

export const getMostRecent = async () => {
    const res = await $get(`${path}getMostRecent`);

    return res;
}
export const getMostRecentArtist = async (artist_name: string) => {
    artist_name = artist_name.replace(/\s/g, '+');
    artist_name = artist_name.replace(/&/g, '%26');
    const res = await $get(`${path}getArtistInfo?artist_name=${artist_name}`);

    return res;
}
