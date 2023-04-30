<template>
    <div id="registration">
        <h3>Register Here</h3>
        <hr>
        <div class="row" v-for="(user, index) in users" :key="index">
            <h4>{{ user }}</h4>
            <button @click="registerUser(user)">Register</button>
        </div>
    </div>
</template>

<script>

export default {
    name: 'RegistrationComponent',
    computed: {
        users() {
            return this.$store.getters.unregisteredUsers;
        }
    },
    methods: {
        registerUser(user) {
            this.$store.dispatch('register', user.id)
        }
    }
}
</script>

<style scoped>
    #registration {
        box-shadow: 1px 1px 2px 1px #ccc;
        margin: 20px;
        padding: 20px;
        display: inline-block;
        width: 300px;
        vertical-align: top;
    }

    .row h4 {
        display: inline-block;
        width: 70%;
        margin: 0 0 10px 0;
    }

    button {
        background-color: light green;
        border: none;
        cursor: pointer;
        box-shadow: 1px 1px 1px black;
    }
</style>