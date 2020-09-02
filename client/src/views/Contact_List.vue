<template>
  <div class="Contact_List">
    <div class="Header">
      <h2>Количество контактов: {{ this.Users.length }}</h2>
      <div class="Main">
        <ul class="List">
          <li v-for="user in this.Users" :key="user.id" class="ContactList">
            {{ user.FirstName }} {{ user.LastName }}
            <button name="More" class="More">More</button>
            <button name="Deleted" class="Deleted" @click="DeletedContact">
              Del
            </button>
            <button name="Edit" class="Edit">Edit</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from "vuex";
export default {
  name: "Contact_List",
  components: {},
  computed: {
    ...mapGetters(["Users"])
  },
  methods: {
    DeletedContact(user) {
      this.Users.splice(this.Users.indexOf(user), 1);
    }
  }
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  transition: all 0.3s;
}
.Main {
  display: flex;
  justify-content: center;
  height: 150px;
  width: 50%;
  margin: 0 auto;
  border: 10px solid transparent;
  border-image: linear-gradient(to bottom, transparent 0%, #adf2f7 100%);
  border-image-slice: 1;
}
.List {
  margin-left: 0;
  list-style: none;
}
.List li {
  width: 100%;
  text-align: left;
  margin-bottom: 1em;
  border: 3px solid #cadfcf;
  padding: 0.6em;
  border-radius: 8px;
  background: #fefefe;
  color: #231f20;
  font-family: "Trebuchet MS", "Lucida Sans", serif;
}
.ContactList button {
  float: right;
  padding: 1px;
  margin: 1px;
}
</style>
