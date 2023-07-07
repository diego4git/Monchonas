app.component("page-index", {
  data() {
    return {
      recipes: [],
      recipesByCategory: [],
      filterButtons: []
    };
  },

  mounted() {
    //this.all_recipes = this.recipes;
    api
      .top10()
      .then((diezRecetas) => {
        diezRecetas.forEach((receta) => {
          this.recipes.push(receta);
        });
      })
      .catch();
    api
      .filterButtons()
      .then((data) =>{
        this.filterButtons = data;
      })
      .catch();
    api
      .all()
      .then((data) =>{
        this.recipesByCategory = data;
      })
      .catch();
  },
  props: {},
  methods: {
    openDetail(id) {
      this.$emit("change-page", {
        page: "info",
        args: {
          id: id,
        },
      });
    },
    onClickSelectAll() {
      api
        .all()
        .then((data) => {
          this.recipesByCategory = data;
        })
        .catch();
    },
    onClickSelectedCategory(id) {
      api
        .filterByCategory(id)
        .then((data) => {
          this.recipesByCategory = data;
        })
        .catch();
    },
  },
  template:
    /* html */
    `
        <section class="container-fluid container-lg bg-light">

      <!-- Top 10 -->
      <section class="row">
        <div class="col ps-4 pt-3">
          <h2>Top 10</h2>
        </div>
        <div class="row">
          <div v-for="(recipe, index) in recipes" class="col-md-4 my-3">
            <recipe-card v-on:toDetail="openDetail" :id="recipe.id" :image="recipe.image" :name="recipe.name" :category="recipe.category" :likes="recipe.likes" :time="recipe.time" :level="recipe.level"></recipe-card>
          </div>
        </div>
      </section>
      <!-- Top 10 end -->
      
      <hr />
      <!-- Filters -->
      <section class="row">
        <nav class="navbar navbar-expand-lg">
          <div class="container-fluid">
            <div class="btn-group btn-group-toggle d-flex flex-wrap" data-toggle="buttons">
              <ul class="nav nav-pills">
                <li class="nav-item px-1 py-1">
                  <button v-on:click="onClickSelectAll()" class="btn-mix" aria-current="page">All</button>
                </li>
                  
                <li v-for="(button) in filterButtons" class="nav-item px-1 py-1">
                  <button v-on:click="onClickSelectedCategory(button.id)" class="btn-mix" aria-current="page"> {{ button.category }}</button>
                </li>
                
              </ul>
            </div>
          </div>
        </nav>
      </section>
      <!-- Filters end -->
      <!-- All recipes  -->
      <section class="row">
        <div class="col ps-4 mt-3">
          <h2>Recipes</h2>
        </div>
        <div class="row">
        <div v-for="(recipe) in recipesByCategory" class="col-md-4 my-3">
        <recipe-card v-on:toDetail="openDetail" :id="recipe.id" :image="'http://interactivas3.test/storage/imgs/'+recipe.image" :name="recipe.name" :category="recipe.category" :likes="recipe.likes" :time="recipe.time" :level="recipe.level"></recipe-card>
      </div>
        </div>
      </section>
      <!-- All recipes end -->
    </section>
    
    `,
});
