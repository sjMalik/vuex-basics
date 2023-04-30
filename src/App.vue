<template>
   <div id="app">
      <registration-component></registration-component>
      <list-of-registration></list-of-registration>
   </div>
</template>

<script>
import RegistrationComponent from './components/Registration.vue';
import ListOfRegistration from './components/Registrations.vue';

export default {
  name: 'App',
  components: {
    RegistrationComponent,
    ListOfRegistration
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
