app.component("page-info", {
  data() {
    return {
      recipe: [],
      ingredients:[],
      related:[]
    };
  },
  mounted() {
    api
      .detail(this.id)
      .then((response) => { 
        this.recipe = response[0][0];
        this.ingredients = response[1];
        this.related = response[2];
      })
      .catch();
  },
  props: {
    id: {
      type: Number
    }
  },
  methods: {
    openDetail(id) {
      api
      .detail(id)
      .then((response) => { 
        this.recipe = response[0][0];
        this.ingredients = response[1];
        this.related = response[2];
        window.scrollTo(0,0);
      })
      .catch();
    },
    change() {
      this.$emit("change-page", {
        page: "index",
        args: {}
      });
    },
  },
  template:
    /* html */
    `
    <div class="container my-5">
      <button v-on:click="change" type="button" class="btn btn-danger">Back</button>
    </div>
        <main id="app" data-v-app="">
          <div class="container my-5">
            <div class="card-header rounded-3 shadow-lg pt-3 ps-3">
              <div class="row">
                <div class="col-lg-7">
                  <h2>{{ recipe.name }}</h2>
                  <ul class="recipe-details">
                    <li><span>Preparation time: {{ recipe.preparation_time }}</span> </li>
                    <li><span>Cooking time: {{ recipe.cooking_time }}</span> </li>
                    <li><span>Total time: {{ recipe.total_time }}</span> </li>
                    <li><span>Portions: {{ recipe.portions }}</span> </li>
                    <li><span>Level: {{ recipe.level }}</span> </li>
                    <li><span>Category: {{ recipe.category }}</span> </li>
                    <li><span>Occasion: {{ recipe.occasion }}</span> </li>
                    <li><span>Likes: {{ recipe.likes }}</span> </li>
                    <button class="btn-mix me-2">Like</button>
                    <button class="btn-mix">Save</button>
                  </ul>
                </div>
                <div class="col-lg-5">
                  <div class="img-fluid">
                    <img width="300" v-bind:src="'http://interactivas3.test/storage/imgs/'+recipe.image" alt="img">
                  </div>
                </div>
              </div>
              <div class="row mt-5">
                <div class="col-12">
                  <h3>Description</h3>
                  <p>{{ recipe.description }}</p>
                </div>
              </div>
              <div class="row mt-5">
                <div class="col-12">
                  <h3>Ingredients</h3>
                  <ul>
                   <li v-for="(ingredient, index) in ingredients">
                   {{ ingredient.description }}
                   </li>
                  </ul>
                </div>
              </div>
              <div class="row mt-5">
                <div class="col-12">
                  <h3>Instructions</h3>
                  <p>{{ recipe.preparation_instructions }}</p>
                </div>
              </div>
              <div class="row">

                <div class="row">
                    <div class="col text-center">
                      <h2>Related recipes</h2>
                    </div>
                </div>

                <div v-for="(recipe, index) in related" class="col-md-4 my-3">
                  <recipe-card v-on:toDetail="openDetail(recipe.id)" :id="recipe.id" :image="'http://interactivas3.test/storage/imgs/'+recipe.image" :name="recipe.name" :category="recipe.category" :likes="recipe.likes" :time="recipe.time" :level="recipe.level"></recipe-card>
                </div>
              </div>
            </div>
          </div>
        </main>
    `,
});
