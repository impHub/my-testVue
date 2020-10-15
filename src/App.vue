<template>
  <div id="app">
    <div id="nav">
      <router-link @click.native="btn" to="/">登录</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link :to="item.path" v-for="item in routes" :key="item.name">
        {{ item.name }}
      </router-link>
      <!-- <router-link to="/page">page</router-link> |
      <router-link to="/page2">page2</router-link> -->
    </div>
    <div class="router">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      home: []
    };
  },
  methods: {
    btn() {
      const route = [
        {
          path: "/page",
          name: "Page",
          component: () => import("@/views/Page.vue")
        },
        {
          path: "/page2",
          name: "Page2",
          component: () => import("@/views/Page2.vue")
        }
      ];
      // console.log(route);
      // console.log("btn");
      this.$store.commit("SET_ROUTES", route);
      this.home = this.$router.options.routes;
      console.log(this.$router.options.routes);
    }
  },
  computed: {
    routes() {
      return this.home;
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.router {
  /* border: 1px solid red; */
}
</style>
