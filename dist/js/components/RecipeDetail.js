app.component('recipe-detail', {
    props: {
        name:{
          type: String
        },
        preparationTime:{
          type: String
        },
        cockingTime:{
          type: String
        },
        totalTime:{
          type: String
        },
        portions:{
          type: String
        },
        level:{
          type: String
        },
        category:{
          type: String
        },
        occasion:{
          type: String
        },
        featured:{
          type: String
        },
        likes:{
          type: String
        },
        image:{
          type: String
        },
        description:{
          type: String
        },
        ingredients:{
          type: Array
        },
        instructions:{
          type: String
        },
        related:{
          type: Array
        }
    },
    methods: {
        
    },
    template: 
    /* html */
    `
    <div class="card-header rounded-3 shadow-lg pt-3 ps-3">
            <div class="row">
              <div class="col-lg-7">
                <h2>{{ name }}</h2>
                <ul class="recipe-details">
                  <li><span>Preparation time:</span> {{ preparationTime }}</li>
                  <li><span>Cooking time:</span> {{ cockingTime }}</li>
                  <li><span>Total time:</span> {{ totalTime }}</li>
                  <li><span>Portions:</span> {{ portions }}</li>
                  <li><span>Level:</span> {{ level }}</li>
                  <li><span>Category:</span> {{ category }}</li>
                  <li><span>Occasion:</span> {{ occasion }}</li>
                  <li><span>Featured:</span> Yes</li>
                  <li><span>Likes:</span> {{ likes }}</li>
                  <button class="btn-mix">Like</button>
                  <button class="btn-mix">Save</button>
                </ul>
              </div>
              <div class="col-lg-5">
                <div class="img-fluid">
                  <img width="300" v-bind:src="image" alt="img">
                </div>
              </div>
            </div>
            <div class="row mt-5">
              <div class="col-12">
                <h3>Description</h3>
                <p>{{ description }}</p>
              </div>
            </div>
            <div class="row mt-5">
              <div class="col-12">
                <h3>Ingredients</h3>
                <ul>
                  <li v-for="(ingredient) in ingredients">Ingredient 1</li>
                </ul>
              </div>
            </div>
            <div class="row mt-5">
              <div class="col-12">
                <h3>Instructions</h3>
                <p>{{ instructions }}</p>
              </div>
          </div>
          <div class="row">
            <div v-for="(recipe, index) in related" class="col-md-4 my-3">
              <recipe-card :image="recipe.image" :name="recipe.name" :category="recipe.category" :time="recipe.time" :dificulty="recipe.dificulty"></recipe-card>
            </div>
          </div>
          </div>
    `





})