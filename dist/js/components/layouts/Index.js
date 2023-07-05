app.component("page-index", {
  data() {
    return {
      recipes: [],
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
                  <button class="btn-mix" aria-current="page">All</button>
                  </li>
                  
                  <li v-for="(category, index) in categories" class="nav-item">
                  <button v-on:selectedcategory="onClickSelectedCategory(category.name)" class="btn-mix" aria-current="page"> {{ category.name }}</button>
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
          <div class="col-md-4 my-3">
            <div class="card">
              <div class="card-content">
                <div class="card-image">
                  <img src="./images/recipes/pollo.jpg" alt="Descripción
                              de la
                              imagen" />
                </div>
                <div class="card-details">
                  <h5>Recipe name</h5>
                  <p>Category</p>
                  <p>Time</p>
                  <p>Difficulty</p>
                  <div class="text-end">
                    
                      <button @click="openDetail(1)">Recipe details</button>
                    
                  </div>
                </div>
              </div>
            </div>

            <recipe-card :image="'./images/recipes/pollo.jpg'" :name="'pollo'" :category="'pollo'" :time="'pollo'" :dificulty="'pollo'">

            </recipe-card>

          </div>
        </div>
      </section>
      <!-- All recipes end -->
    </section>
    
    `,
});
