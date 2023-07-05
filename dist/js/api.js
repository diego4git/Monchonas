class Api {

	constructor() {
		this.axiosInstance = axios.create({
			baseURL: 'http://interactivas3.test/api/recipes/',
		})
	}

	top10() {
		return new Promise((resolve, reject) => {
			const diezRecetas = []
				this.axiosInstance
					.get('top10')
					.then((response) => {
						response.data.forEach((receta) => {
							diezRecetas.push({
								id: receta.id,
								image: 	"http://interactivas3.test/storage/imgs/"+receta.image,
								name: receta.name,
								category: receta.category,
								likes: receta.likes,
								level: receta.level,
							})
						})
						resolve(diezRecetas)
					})
					.catch((err) => {
						reject(err)
					})
		})
	}

	detail(id){
		return new Promise((resolve, reject) => {
			this.axiosInstance
				.get('recipe/'+id)
				.then((response) => {
					resolve(response.data);
				})
				.catch((err) => {
					reject(err)
				})
		})
	}

	filterByCategory(category) {
		return new Promise((resolve, reject) => {
			const recetas = []
			this.axiosInstance
				.get('filterby/level/1' + category)
				.then((response) => {
					response.data.meals.forEach((receta) => {
						recetas.push({
							id: receta.idMeal,
							image: receta.strMealThumb,
							name: receta.strMeal,
							category: 'Seafood',
							time: '20 min',
							level: 'Easy',
						})
					})
				})
				.catch((err) => {
					reject(err)
				})
			resolve(recetas)
		})
	}
}

const api = new Api()
// export default api
