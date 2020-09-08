<template>
  <div class="Main">
    <ul class="List">
      <!-- Создание списка контактов -->
      <li v-for="(user, index) in Users" :key="index" class="ContactList">
        <div class="NameContact">{{ user.FirstName }} {{ user.LastName }}</div>
        <!--  Иконки удаление и подробной информации    -->
        <div class="Icons">
          <button @click="goToDetail(index)" name="More" class="More">
            <i class="fa fa-angle-right"></i>
          </button>
          <button class="Deleted" @click="deleteUser(user)">
            <i class="fa fa-trash"></i>
          </button>
        </div>
      </li>
      <!-- Добавление нового контакта-->
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
    ...mapGetters(["Users", "Modal_State"]) // импорт массива и состояния модульного окна
  },
  methods: {
    ...mapActions(["Toggle_Modal"]), // событие изменения состояния модульного окна
    deleteUser(user) {
      // функция удаление юзера с подтверждением
      const userIndex = this.Users.indexOf(user);
      const ConfirmDeletion = confirm(
        "Вы действительно хотите удалить пользователя: " +
          `${user.FirstName} ` +
          `${user.LastName}`
      );
      if (ConfirmDeletion) this.Users.splice(userIndex, 1);
    },
    goToDetail(index) {
      // переход к подробной информации о контакте с передачей индекса массива
      this.$router.push({ name: "Contact_Inf", params: { UserId: index } });
    }
  }
};
</script>

<style scoped>
* {
  transition: all 0.3s;
}
ul {
  padding: 0 !important;
}
.Main {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.List {
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  text-align: center;
  list-style: none;
  border: 3px solid black;
  padding: 3% !important;
}
.List li {
  text-align: left !important;
  border: 3px solid #cadfcf;
  border-radius: 8px;
  background: #fefefe;
  color: #231f20;
  font-family: "Trebuchet MS", "Lucida Sans", serif;
  margin: 2%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.NameContact {
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding-left: 5px;
  align-items: center;
}
.Icons {
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
}

.ContactList button {
}
.Add {
  background-color: transparent;
  border: none;
  color: green;
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
@media (max-width: 766px) {
  .List {
    width: 100%;
  }
}
@media (max-width: 992px) and (min-width: 767px) {
  .List {
    width: 75%;
  }
}
@media (max-width: 1200px) and (min-width: 993px) {
  .List {
    width: 75%;
  }
}
</style>
