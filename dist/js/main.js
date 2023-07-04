// import api from './api.js'

const app = Vue.createApp({
	data() {
		return {
			loading: true,
			selectedIndex: 0,
			all_recipes: [],
			hasRecipes: true,
			recipes: [],
			categories: [],
			recipe: {},
		}
	},
	mounted: function () {
		this.all_recipes = this.recipes;
		api
			.top10()
			.then((diezRecetas) => {
				diezRecetas.forEach((receta) => {
					this.recipes.push(receta)
				})
			})
			.catch();
	},
	// onclickCategoryBtn: function () {
	// 	api.filterByCategory(category).then().catch()
	// },
})
