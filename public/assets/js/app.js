'use strict';

const render = (root) => {
    const wrapper = $('<div class="wrapper"></div>');

    wrapper.append()
}

const state = {
    user: null
}

$(_ => {
    getJSON((err, json) => {

        if (err) { return alert(err.message); }

        state.user = json;

        console.log(state.user);

        const root = $('.root');
        render(root);
    });
})