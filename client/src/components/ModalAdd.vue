<template>
  <!--  Модальное окно для добавление юзеров к контактную книгу-->
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">
        <div class="modal-x">
          <!--   Кнопка закрыть модальное окно-->
          <button class="modal-default-buttonx" @click="Toggle_Modal">
            ✖️
          </button>
        </div>
        <h3>Добавить контакт</h3>
        <div class="modal-header">
          <h3>Имя</h3>
          <!-- Инпут для добавление Имени контакта-->
          <input
            v-model.trim="FirstName"
            type="text"
            placeholder="FirstName"
            class="modal_inp"
            required
          />
        </div>

        <div class="modal-body">
          <h3>Фамилия</h3>
          <!-- Инпут для добавление Фамилии контакта-->
          <input
            v-model.trim="LastName"
            type="text"
            placeholder="LastName"
            class="modal_inp"
            required
          />
        </div>

        <div class="modal-footer">
          <slot name="footer">
            <!-- Кнопка для добавление контакта-->
            <button
              type="submit"
              class="modal-default-button"
              @click="AddUsers(FirstName, LastName)"
            >
              Добавить
            </button>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "ModalAdd",
  data() {
    return {
      //записываем в них из инпутов информацию
      FirstName: "",
      LastName: ""
    };
  },
  computed: {
    ...mapGetters(["Users"]) //импорт массива
  },

  methods: {
    ...mapActions(["Toggle_Modal"]),
    AddUsers(FirstName, LastName) {
      //добавления контакта в массив
      this.Users.push({ FirstName, LastName });
      this.$store.state.ModalVisible = false;
    }
  }
};
</script>

<style scoped>
input {
  margin: 5px;
  border: 1px black solid;
  font-size: 20px;
  border-radius: 5px;
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 350px;
  margin: 0px auto;
  padding: 0 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.modal-header {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
}
::-webkit-input-placeholder {
  font-size: 13px;
}
.modal-x {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
}
.modal-default-buttonx {
  width: 2em;
  height: 2em;
  font-size: 22px;
  background-color: rgba(0, 0, 0, 0);
  border: 0;
  cursor: pointer;
}
.modal-default-buttonx:active {
  border: none;
  outline: none;
}
.modal-default-buttonx:after {
  border: none;
  outline: none;
}
.modal-default-buttonx:focus {
  border: none;
  outline: none;
}
.modal-body {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin: 20px 0;
}
.modal_inp {
  height: 30px;
  margin: 2%;
}
.modal-footer {
  display: flex;
  justify-content: center;
}
.modal-default-button {
  margin: 10%;
  padding: 5%;
  font-size: 18px;
  background-color: #e68325;
  color: white;
  border: 0;
  border-radius: 2px;
  cursor: pointer;
}
.modal-default-button:hover {
  background-color: orange;
}
.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
