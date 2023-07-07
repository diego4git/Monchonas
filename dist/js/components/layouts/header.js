app.component("page-header", {
    data() {
        return {
            
        }
    },
    mounted() {
        
    },
    props: {

    },
    methods: {
      
      search(){
        console.log("click search");
        const searchField = document.getElementById("searchData");
        console.log(searchData);

        if (searchField.value != "") {
          
          searchField.classList.remove("border-danger");

          this.$emit("change-page",{
            page: "searchBy",
              args: {
                name: searchField.value
              }
            });
          } else {
            searchField.classList.add("border-danger");
          }
        }
    },
    template: 
    /* html */
    `
    <header>
    <nav class="navbar navbar-expand-lg navbar-light header-bg">
      <div class="container-fluid">
        <button  class="navbar-brand">
          <img src="./images/Monchonas.jpg" alt="Logo" width="200" />
        </button>
        <button
          class="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link text-light" href="./profile.html">Profile</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-light" href="./Login.html">Log in</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-light" href="./SingIn.html">Sign In</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-light" href="#">Sign Out</a>
            </li>
          </ul>

          <form class="d-flex my-2 my-lg-0">
            <input class="form-control mr-sm-2 border border-4" type="search" placeholder="Search" aria-label="Search" id="searchData"/>
            <button v-on:click="search" class="btn btn-danger" type="submit">
              <img src="./images/Icons/Search-light.png" alt="Search" width="20" />
            </button>
          </form>
        </div>
      </div>
    </nav>
  </header>
    `,
});