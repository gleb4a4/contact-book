<template>
  <div class="about">
    <div class="product">
      <div class="col" v-for="(user, index) in Users" :key="index">
        <div v-if="UserId === index" class="line">
          <div class="row">
            <div class="left"><h3>FirstName:</h3></div>
            <div class="right">
              <h2>{{ user.FirstName }}</h2>
            </div>
          </div>
          <div class="row">
            <div class="left"><h3>LastName:</h3></div>
            <div class="right">
              <h2 >{{ user.LastName }}</h2>
            </div>
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
      EditingUsers:{}
    };
  },
  computed: {
    ...mapGetters(["Users"])
  },
  methods:{},

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
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
.left {
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  text-transform: uppercase;
}
.right {
  width: 45%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  font-size: 14px;
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
