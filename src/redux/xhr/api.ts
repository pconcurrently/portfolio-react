import * as fetch from 'isomorphic-fetch';



export const request = async function (uri: string, method: string, body: any) {
    const res = await fetch(uri, {
        method,
        headers: {
            'Content-Type': 'application/json'
        },
        body
    });
    const json = await res.json();

    if (!res.ok) {
        throw json;
    }
    return json;
};

export const $get = async (uri: string) => request(uri, 'GET', null);
export const $post = async (uri: string, body: any) => request(uri, 'POST', body);
export const $put = async (uri: string, body: any) => request(uri, 'PUT', body);
export const $delete = async (uri: string, body: any) => request(uri, 'DELETE', body);
