<template>
  <div id="app">
    <!-- Navigation bar -->
    <div class="navigation-buttons" v-if="$route.path !== '/login'">
      <button @click="logout" class="button is-text is-pulled-left">Logout</button>
      <div class="is-pulled-right">
        <router-link to="/products" class="button">
          <i class="fa fa-user-circle"></i>
          <span>Shop</span>
        </router-link>
        <router-link to="/cart" class="button is-primary">
          <i class="fa fa-shopping-cart"></i>
          <span>{{ cartQuantity }}</span>
        </router-link>
      </div>
    </div>
    <!-- Navigation bar ends -->

    <div class="container">
      <div class="columns">
        <div class="column is-6 column--align-center">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "App",
  computed: {
    ...mapGetters(["cartQuantity", "token"])
  },
  created() {
    const token = localStorage.getItem("token");
    if (token) {
      this.updateInitialState(token);
    }
  },
  methods: {
    logout() {
      this.$store
        .dispatch("logout")
        .then(() => {
          this.$router.push("/login");
        })
        .catch(error => {
          console.log(error);
        });
    },
    updateInitialState(token) {
      this.$store.dispatch("getCartItems", token);
      this.$store.dispatch("getProductItems", token);
    }
  },
  watch: {
    token() {
      if (this.token) {
        this.updateInitialState(this.token);
      }
    }
  }
};
</script>

<style>
html,
body {
  height: 100%;
  background: #f2f6fa;
}

#app {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  width: 100%;
}

.column--align-center {
  margin: 0 auto;
}

.navigation-buttons {
  position: absolute;
  top: 5px;
  width: 99%;
  z-index: 99;
}

.navigation-buttons .button {
  margin: 0 2px;
}

.navigation-buttons .button .fa {
  padding-right: 5px;
}
</style>
