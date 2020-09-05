<template>
  <div class="about">
    <div class="product">
      <div class="col" v-for="(user, index) in Users" :key="index">
        <div v-if="UserId === index" class="line">
          <div class="row">
            <ul class="row" v-for="(userInfo, title) in user" :key="title">
              <li class="left">
                {{ title }} : {{ userInfo }}
                <div class="Icons">
                  <button class="Deleted" @click="DeletedTitle(user, title)">
                    <i class="fa fa-trash"></i>
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { mapGetters } from "vuex";

export default {
  name: "Contact_Inf",
  data() {
    return {
      UserId: this.$route.params.UserId,
      EditingUsers: {}
    };
  },
  computed: {
    ...mapGetters(["Users"])
  },
  methods: {
    DeletedTitle(user, title) {
      const ConfirmToDeleteTitle = confirm("Вы действительно хотите удалить? ");
      if (ConfirmToDeleteTitle) delete user[title];
     this.$forceUpdate()
    }
  },

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
