define([
	'underscore',
	'backbone',
	'Utils'
	], function(_, Backbone, Utils) {

		var AppModel = Backbone.Model.extend({

			initialize: function(){
				Utils.getHTML(this.attributes.url, Utils.getBestImageURL );
			}



		});

	return AppModel;

});
