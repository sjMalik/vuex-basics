import Vuex from 'vuex';

import actions from './actions';
import getters from './getters';
import mutations from './mutations';


export default new Vuex.Store({
    state: {
        registrations: [],
        users: [
            {
                id: 1,
                name: 'Max',
                registered: false
            },
            {
                id: 2,
                name: 'John',
                registered: false
            },
            {
                id: 3,
                name: 'Chris',
                registered: false
            },
            {
                id: 4,
                name: 'Sven',
                registered: false
            }
        ],
    },
    getters,
    mutations,
    actions
})