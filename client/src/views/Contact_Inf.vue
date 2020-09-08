<template>
  <!--Страница подробной информации о пользователя-->
  <div class="about">
    <a class="BackToContact" @click="BackToHome">
      <i class="fa fa-angle-double-left"></i>
    </a>
    <div class="product">
      <!--Перебор массива и вывод определенного пользователя -->
      <div class="col" v-for="(user, index) in Users" :key="index">
        <!--Сравнивмаем переданный индекс с нашим индексом для корректного отображение информации-->
        <div v-if="UserId === index" class="line">
          <div class="row">
            <!--Показываем параметры нашего пользователя-->
            <ul class="row" v-for="(userInfo, title) in user" :key="title">
              <li class="left">
                <!--Отображение Поля-->
                <span>{{ title }}: </span>
                <div v-if="!editing">
                  <!--Отображение Значения-->
                  <span
                    style="padding-left: 20px"
                    @click="enableEditing(userInfo)"
                  >
                    {{ userInfo }}
                  </span>
                </div>
                <div
                  v-if="editing"
                  style="padding-left: 30px;display: flex;justify-content: center;"
                >
                  <!--Отображение Поля редактирования-->
                  <input
                    v-model.trim="user[title]"
                    class="input"
                    style="border-radius: 8px"
                  />
                  <!--Кнопка отмены редактирования-->
                  <button
                    name="CancelEdit"
                    class="Deleted"
                    @click="disableEditing(title)"
                  >
                    <i class="fa fa-times"></i>
                  </button>
                  <!--Кнопка сохранения изменений-->
                  <button
                    name="SaveEdit"
                    class="Deleted"
                    @click="editing = false"
                  >
                    <i class="fa fa-check"></i>
                  </button>
                </div>
                <div class="Icons">
                  <!--Иконка редактирования-->
                  <button
                    name="EditIcon"
                    class="Deleted"
                    @click="enableEditing(userInfo)"
                  >
                    <i class="fa fa-edit"></i>
                  </button>
                  <!--Иконка удаления поля и значения-->
                  <button
                    name="DeletedIcon"
                    class="Deleted"
                    @click="DeletedTitle(user, title)"
                  >
                    <i class="fa fa-trash"></i>
                  </button>
                </div>
              </li>
            </ul>
            <!--Модальное окно для добавления поля и значения-->
            <button class="Add" name="Add" @click="Toggle_ModalInf">
              <i class="fa fa-plus-square"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
    <modal-add-title v-if="ModalOn"></modal-add-title>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ModalAddTitle from "../components/ModalAddTitle";
export default {
  name: "Contact_Inf",
  components: {
    ModalAddTitle
  },
  data() {
    return {
      tempValue: null, //  записываем сюда данные , для отмены
      editing: false, // состояние редактируемых полей
      UserId: this.$route.params.UserId
    };
  },
  computed: {
    ...mapGetters(["Users", "ModalOn"])
  },

  methods: {
    ...mapActions(["Toggle_ModalInf"]),
    DeletedTitle(user, title) {
      //Удаление ключа и значения с подтверждением
      const ConfirmToDeleteTitle = confirm("Вы действительно хотите удалить? ");
      if (ConfirmToDeleteTitle) delete user[title];
      this.$forceUpdate();
    },
    BackToHome() {
      //Возвращение обратно на страницу контактов
      this.$router.push({ name: "Home" });
    },
    enableEditing: function(userInfo) {
      /*функция включения редактирования полей
       и получения начального значения поля*/
      this.tempValue = userInfo;
      this.editing = !this.editing;
    },

    disableEditing: function(title) {
      //Отмена редактирования с подтверждением
      const ConfirmCancelEdit = confirm("Вы действительно хотите отменить?");
      if (ConfirmCancelEdit) {
        this.$store.state.users[this.UserId][title] = this.tempValue;
        this.editing = false;
      }
    }
  }
};
</script>

<style>
.col {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.line {
  width: 35%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px black solid;
}
.row {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.left {
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.Icons {
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
}
.Deleted {
  background-color: transparent;
  border: none;
  color: black;
  padding: 10px;
  font-size: 18px;
  cursor: pointer;
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
.BackToContact {
  padding-right: 30%;
  cursor: pointer;
}
.BackToContact i {
  font-size: 29px;
}
h2 {
  padding-left: 2%;
}
@media (max-width: 766px) {
  .line {
    width: 100%;
    flex-direction: column;
  }
}
@media (max-width: 992px) and (min-width: 767px) {
  .line {
    width: 75%;
    flex-direction: column;
  }
}
@media (max-width: 1200px) and (min-width: 993px) {
  .line {
    width: 75%;
    flex-direction: column;
  }
}
</style>
