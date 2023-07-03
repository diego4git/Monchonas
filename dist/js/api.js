class Api {
  constructor() {
    const axios = axios_.create({
      baseURL: "www.themealdb.com/api/json/v1/1/",
      //headers: { Accept: "application/json" },
    });
  }

  top10() {
    return new Promise((resolve, reject) => {
      recetas = [];
      while (recetas.length <= 10) {
        axios
          .get("/random.php")
          .then((response) => {
            response.data.meals.forEach((receta) => {
              recetas.push({
                id: receta.idMeal,
                image: receta.strMealThumb,
                name: receta.strMeal,
                category: "Seafood",
                time: "20 min",
                level: "Easy",
              });
            });
          })
          .catch((err) => {
            reject(err);
          });
      }
      resolve(recetas);
    });
  }

  filterByCategory(category) {
    return new Promise((resolve, reject) => {
    recetas = [];
      axios
        .get("/filter.php?c=" + category)
        .then((response) => {
          response.data.meals.forEach((receta) => {
            recetas.push({
              id: receta.idMeal,
              image: receta.strMealThumb,
              name: receta.strMeal,
              category: "Seafood",
              time: "20 min",
              level: "Easy",
            });
          });
        })
        .catch((err) => {
          reject(err);
        });
        resolve(recetas);
    });
  }
}

var api = new Api();
export default api;
