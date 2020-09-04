<template>
  <div class="about">
    <div class="product">
      <div class="col-md-12" v-for="(user, index) in Users" :key="index">
        <div v-if="UserId === index">
          <h1>{{ user.FirstName }}</h1>
          <h2>{{ user.LastName }}</h2>
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
      UserId: this.$route.params.UserId
    };
  },
  computed: {
    ...mapGetters(["Users"])
  }
};
</script>
