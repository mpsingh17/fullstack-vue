<template>
  <div id="login" class="box has-text-centered">
    <h2 class="title">Fullstack Clothing</h2>
    <button class="button is-primary" @click="login">Login</button>
  </div>
</template>

<script>
export default {
  name: "LoginBox",
  methods: {
    login() {
      this.$store.dispatch("login").then(() => {
        this.$router.push({ path: "/" });
      });
    }
  }
};
</script>

<style scoped>
.box {
  padding: 30px;
}
</style>