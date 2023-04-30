export default {
    register(state, userid) {
        const date = new Date();
        const user = state.users.find(user=> user.id === userid);
        user.registered = true;
        const registration = {
            userid: user.id,
            name: user.name,
            date: date.getMonth() + '/' + date.getDay()
        };
        state.registrations.push(registration)
    },

    unregister(state, payload) {
        const user = state.users.find(user=> user.id === payload.userid);
        user.registered = false;
        const registration = state.registrations.find(reg=> reg.userid === payload.userid);
        state.registrations.splice(state.registrations.indexOf(registration), 1);
    }
}