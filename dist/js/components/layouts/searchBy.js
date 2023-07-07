app.component("search-by", {
    data() {
        return {
            searchResult:[],
        }
    },
    mounted() {
        api
            .searchByName(this.name)
            .then((results) => {
                console.log(results);
                this.searchResult = results;
            })
            .catch(error => console.log(error));
    },
    props: {
        name: String
      },
    methods: {
        change(){
            this.$emit("change-page", {
                page: "index",
                args: {}
            });
        },
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
        <div class="container my-5">
            <button v-on:click="change" type="button" class="btn btn-danger">Back</button>
        </div>
        <main>
            <div class="container my-5">
                <div class="card-header rounded-3 shadow-lg pt-3 ps-3">

                    <div class="row">
                        <div class="col text-center">
                            <h2>Search results:</h2>
                        </div>
                    </div>
              
                    <div class="row">
                        <div v-for="(recipe) in searchResult" class="col-md-4 my-3">
                            <recipe-card v-on:toDetail="openDetail" :id="recipe.id" :image="'http://interactivas3.test/storage/imgs/'+recipe.image" :name="recipe.name" :category="recipe.category" :likes="recipe.likes" :time="recipe.time" :level="recipe.level"></recipe-card>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        `
});