app.component("recipe-card", {
  props: {
    id: {
      type: Number,
    },
    image: {
      type: String,
    },
    name: {
      type: String,
    },
    category: {
      type: String,
    },
    likes: {
      type: Number
    },
    level: {
      type: String,
    },
  },
  methods: {
    recipeDetail() {
      this.$emit("toDetail", this.id);
    },
  },
  template:
    /* html */
    `
    <div class="card">
        <div class="card-content">
            <div class="card-image">
                <img v-bind:src="image" alt="img"/>
            </div>
            <div class="card-details">
                <h5>{{ name }}</h5>
                <p>{{ category }}</p>
                <p>Likes: {{likes}}</p>
                <p>{{ level }}</p>
                <div class="text-end">
                    <button v-on:click="recipeDetail">Recipe details</button>
                </div>
            </div>
        </div>
    </div>
    `,
});
