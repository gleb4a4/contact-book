<template>
  <div>
    <div class="modal">
      <div class="row">
        <div class="Header">
          <div class="label"><h1>Добавление Контакта</h1></div>

          <div class="inp_ut">
            <input
              v-model="FirstName"
              type="text"
              name="FirstName"
              placeholder="FirstName"
              required
            />
            <input
              v-model="LastName"
              type="text"
              name="LastName"
              placeholder="LastName"
              required
            />
          </div>
          <div class="footer">
            <div class="botbutom">
              <button type="submit" class="btn-exit" @click="Toggle_Modal">
                Cancel
              </button>
              <button
                type="submit"
                class="btn-send"
                @click="Users.push({ FirstName, LastName })"
              >
                Add
              </button>
            </div>
          </div>
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
      FirstName: "",
      LastName: ""
    };
  },
  computed: {
    ...mapGetters(["Users"])
  },

  methods: {
    ...mapActions(["Toggle_Modal"])
  }
};
</script>

<style scoped>
.modal {
  z-index: 1096;
}

.row {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.Header {
  padding: 2%;
  border: 1px black solid;
}
.inp_ut {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
input {
  margin: 5px;
  border: 1px black solid;
  font-size: 20px;
  border-radius: 5px;
}
.label {
  font-size: 12px;
  color: black;
  border: 2px black solid;
}
.botbutom {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.btn-exit {
  background-color: black;
  color: white;
  cursor: pointer;
  border: 0px;
  width: 50%;
  font-size: 24px;
  border-radius: 5px;
  margin: 3px;
}
.btn-send {
  background-color: black;
  color: white;
  cursor: pointer;
  border: 0px;
  width: 50%;
  font-size: 24px;
  border-radius: 5px;
  margin: 3px;
}
@media (max-width: 766px) {
  .botbutom {
    flex-direction: column;
  }
  .inp_ut {
    flex-direction: column;
  }
  .Header {
    border: 0;
  }
  .label {
    border: 0;
  }
}
@media (max-width: 992px) and (min-width: 767px) {
  .botbutom {
    flex-direction: column;
  }
  .inp_ut {
    flex-direction: column;
  }
  .Header {
    border: 0;
  }
  .label {
    border: 0;
  }
}
@media (max-width: 1200px) and (min-width: 993px) {
  .inp_ut {
    flex-direction: column;
  }
  .Header {
    border: 0;
  }
  .label {
    border: 0;
  }
}
</style>
