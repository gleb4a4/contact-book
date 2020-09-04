<template>
  <div class="Main">
    <ul class="List">
      <li v-for="(user, index) in this.Users" :key="index" class="ContactList">
        {{ user.FirstName }} {{ user.LastName }}
        <button
          @click="goTodetail(index)"
          name="More"
          class="More"
        >
          <i class="fa fa-angle-right"></i>
        </button>
        <button class="Deleted" @click="deleteUser(user)">
          <i class="fa fa-trash"></i>
        </button>
      </li>
      <button class="Add" name="Add" @click="Toggle_Modal">
        <i class="fa fa-plus-square"></i>
      </button>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "ContactTodo",
  computed: {
    ...mapGetters(["Users"])
  },
  methods: {
    ...mapActions(["Toggle_Modal"]),
    deleteUser(user) {
      const userIndex = this.Users.indexOf(user);
      this.Users.splice(userIndex, 1);
    },
    goTodetail(index) {
      //const userIndex = this.Users.indexOf(user);
      this.$router.push({name:'Contact_Inf' , params:{UserId:index}})
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
