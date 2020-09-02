<template>
  <div>
    <div class="Contact_List">
      <div class="Header">
        <h2>Количество контактов: {{ this.Users.length }}</h2>
      </div>
      <div class="Main">
        <ul class="List">
          <li v-for="user in this.Users" :key="user.id" class="ContactList">
            {{ user.FirstName }} {{ user.LastName }}
            <button name="More" class="More">
              <i class="fa fa-angle-right"></i>
            </button>
            <button class="Deleted" @click="DeletedContact">
              <i class="fa fa-trash"></i>
            </button>
            <button name="Edit" class="Edit"><i class="fa fa-edit"></i></button>
          </li>
          <button class="Add" name="Add" @click="Toggle_Modal">
            <i class="fa fa-plus-square"></i>
          </button>
        </ul>
      </div>
      <div class="Footer"></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import { mapGetters, mapActions } from "vuex";
export default {
  name: "Contact_List",
  computed: {
    ...mapGetters(["Users", "Modal_State"])
  },
  methods: {
    ...mapActions(["Toggle_Modal"]),
    DeletedContact(user) {
      this.Users.splice(this.Users.indexOf(user), 1);
    }
  }
};
</script>

<style scoped>
* {
  padding: 0;

  transition: all 0.3s;
}
.Main {
  display: flex;
  justify-content: center;
  height: max-content;
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
.Add {
  background-color: transparent;
  border: none;
  color: green;
  padding: 4px;
  text-align: center;
  display: inline-block;
  font-size: 26px;
  cursor: pointer;
}
.Deleted {
  background-color: transparent;
  border: none;
  color: black;
  padding: 10px;
  font-size: 18px;
  cursor: pointer;
}

.Edit {
  background-color: transparent;
  border: none;
  color: black;
  font-size: 20px;
  cursor: pointer;
}
.More {
  background-color: transparent;
  border: none;
  color: black;
  padding: 10px;
  font-size: 18px;
  cursor: pointer;
}
.More:hover {
  border: 1px solid black;
  border-radius: 24px;
  transition-duration: unset;
}
</style>
