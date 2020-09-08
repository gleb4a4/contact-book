<template>
  <div id="app">
    <router-view />
    <ModalAdd v-if="this.Modal_State"></ModalAdd>
  </div>
</template>
<script>
// @ is an alias to /src
import { mapGetters } from "vuex";
import ModalAdd from "./components/ModalAdd";
export default {
  name: "App",
  components: { ModalAdd },
  computed: {
    ...mapGetters(["Modal_State"])
  }
};
</script>
<style>
#app {
  padding-top: 10%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
