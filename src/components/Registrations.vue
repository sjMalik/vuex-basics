<template>
    <div class="summary">
        <h3>Registration</h3>
        <h5>Total: {{ total }}</h5>
    </div>
    <hr>
    <div class="row" v-for="(registration, index) in registrations" :key="index">
        <h4>{{ registration.name }}</h4>
        <div class="date">{{ registration.date }}</div>
        <span @click="unregister(registration)">(Unregister)</span>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        name: 'ListOfRegistration',
        computed: {
            ...mapGetters({
                registrations: 'registrations',
                total: 'totalRegistrations'
            })
        },
        methods: {
            unregister(registration){
                console.log(registration)
                this.$store.commit({
                    type: 'unregister',
                    userid: registration.userid
                })
            }
        }
    }
</script>