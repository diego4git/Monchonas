app.component('recipe-detail', {
    props: {
        name:{
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
                <h2>Recipe name</h2>
                <ul class="recipe-details">
                  <li><span>Preparation time:</span> 30 min</li>
                  <li><span>Cooking time:</span> 1 hour</li>
                  <li><span>Total time:</span> 1 hour 30 min</li>
                  <li><span>Portions:</span> 4</li>
                  <li><span>Level:</span> Intermediate</li>
                  <li><span>Category:</span> Main dish</li>
                  <li><span>Occasion:</span> Family dinner</li>
                  <li><span>Featured:</span> Yes</li>
                  <li><span>Likes:</span> 50</li>
                  <button class="btn-mix">Like</button>
                  <button class="btn-mix">Save</button>
                </ul>
              </div>
              <div class="col-lg-5">
                <div class="img-fluid">
                  <img width="300" src="./images/recipes/pollo.jpg" alt="chicken-img">
                </div>
              </div>
            </div>
            <div class="row mt-5">
              <div class="col-12">
                <h3>Description</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac
                  massa vel sapien venenatis faucibus. Fusce vel velit ut augue
                  malesuada finibus. Sed congue, enim id consectetur elementum, arcu
                  orci tincidunt nisl, vitae faucibus quam est in ex. Integer sit
                  amet ex a urna fringilla bibendum. Aliquam eget arcu euismod,
                  vulputate ipsum eu, fermentum arcu. Sed non justo non eros
                  porttitor bibendum. Donec tincidunt nisi id elit mollis ultrices.</p>
              </div>
            </div>
            <div class="row mt-5">
              <div class="col-12">
                <h3>Ingredients</h3>
                <ul>
                  <li>Ingredient 1</li>
                  <li>Ingredient 2</li>
                  <li>Ingredient 3</li>
                  <li>Ingredient 4</li>
                  <li>Ingredient 5</li>
                </ul>
              </div>
            </div>
            <div class="row mt-5">
              <div class="col-12">
                <h3>Instructions</h3>
                <ol>
                  <li>Step 1</li>
                  <li>Step 2</li>
                  <li>Step 3</li>
                  <li>Step 4</li>
                  <li>Step 5</li>
                </ol>
              </div>
          </div>

          </div>
    `





})