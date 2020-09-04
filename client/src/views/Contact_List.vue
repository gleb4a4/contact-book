<template>
  <div>
    <div class="Contact_List">
      <div class="Header">
        <h2>Количество контактов: {{ this.Users.length }}</h2>
      </div>
      <contact-todo ></contact-todo>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from "vuex";
import ContactTodo from "../components/ContactTodo";

export default {
  name: "Contact_List",
  components: {
    ContactTodo
  },
  computed: {
    ...mapGetters(["Users"])
  }
};
</script>

<style scoped>
* {
  padding: 0;
  transition: all 0.3s;
}
</style>
