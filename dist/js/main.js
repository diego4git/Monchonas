// import api from './api.js'

const app = Vue.createApp({
  data() {
    return {
      page: "index",
      args: {},
    };
  },
  mounted: function () {},
  methods: {
    changePageF(data) {
      this.page = data.page;
      this.args = data.args;
    },
  },
});
