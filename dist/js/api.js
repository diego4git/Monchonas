class Api {

	constructor() {
		this.axiosInstance = axios.create({
			baseURL: 'http://interactivas3.test/api/recipes/',
		})
	}

	all() {
		return new Promise((resolve, reject) => {
			this.axiosInstance
				.get('all')
				.then((response) => {
					resolve(response.data)
				})
				.catch((err) => {
					reject(err)
				})
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

	//al hacerle click a un boton llena un arreglo con las recetas que coincidan con la categoria elegia para posteriormente mostrarlos
	filterByCategory(id){
		return new Promise((resolve, reject) => {
			this.axiosInstance
			.get("filterby/category/"+id)
			.then((response) => {
				resolve(response.data)
			})
			.catch((err) => {
				reject(err)
			})
		})
	}

	// Para cargar el detalle
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

	//carga los botones dependiendo la cantidad de categorias
	filterButtons() {
		return new Promise((resolve, reject) => {
			this.axiosInstance
				.get('categories')
				.then((response) => {
					resolve(response.data);
				})
				.catch((err) => {
					reject(err)
				})
		})
	}

	//ayuda a buscar por nombre las recetas desde el header
	searchByName(name) {
		return new Promise((resolve, reject) => {
			this.axiosInstance
				.get('searchbyname/' + name)
				.then((response) => {
						resolve(response.data);
				})
				.catch((err) => {
					reject(err)
				})
		});
	}
}

const api = new Api()
// export default api
