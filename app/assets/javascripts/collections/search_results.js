Demo.Collections.SearchResults = Backbone.Collection.extend({

	url: "/api/search",

	parse: function (resp) {
		if (resp.total_count) {
			this.total_count = resp.total_count;
		}

		return resp.results;
	},

	model: function (attrs) {
		var type = attrs._type;
		delete attrs._type;

		return new Demo.Models[type](attrs);

		// if (type === "User") {
		// 	return new Demo.Models.User(attrs);
		// } else {
		// 	return new Demo.Models.Post(attrs);
		// }
	}

});