'use strict';

const getJSON = (cb) => {
    const url = 'https://randomuser.me/api/';
    const xhr = new XMLHttpRequest();

    xhr.addEventListener('load', () => {
        if (xhr.status !== 200) cb(new Error(`Error loading JSON from ${url}`));
        cb(null, xhr.response);
    });
    xhr.open('GET', url);
    xhr.responseType = 'json';
    xhr.send();
}