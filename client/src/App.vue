<template>
  <div id="app">

    <div id="nav">
      <router-link to="/">Contact list</router-link> |
      <router-link to="/Contact_Inf">Contact_Inf</router-link>
    </div>

    <router-view />
    <ModalAdd style="z-index: 2" v-if="Modal_State" />
  </div>
</template>
<script>
// @ is an alias to /src
import ModalAdd from "./components/ModalAdd.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "App",
  components: { ModalAdd },
  computed: {
    ...mapGetters(["Users", "Change_Modal", "Modal_State"])
  },
  methods: {
    ...mapActions(["Toggle_Modal"]),
    DeletedContact(user) {
      this.Users.splice(this.Users.indexOf(user), 1);
    }
  }
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
