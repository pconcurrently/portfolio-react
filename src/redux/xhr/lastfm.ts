import { $get } from './api';

const path = "https://portfolio-phohuynh.appspot.com/v1/";

export const getArtists = async () => {
    const res = await $get(`${path}getArtists`);

    return res;
}

export const getRecent = async () => {
    const res = await $get(`${path}getRecent`);

    return res;
}
