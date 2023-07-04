app.component('recipe-card', {
	props: {
		image: {
			type: String,
		},
		name: {
			type: String,
		},
		category: {
			type: String,
		},
		time: {
			type: String,
		},
		dificulty: {
			type: String,
		},
	},
	methods: {},
	template:
		/* html */
		`
    <div class="card">
        <div class="card-content">
            <div class="card-image">
                <img v-bind:src="image" alt="img"/>
            </div>
            <div class="card-details">
                <h5>{{ name }}</h5>
                <p>{{ category }}</p>
                <p>{{ time }}</p>
                <p>{{ dificulty }}</p>
                <div class="text-end">
                    <button>Recipe details</button>
                </div>
            </div>
        </div>
    </div>
    `,
})
