define([
  'underscore',
  'backbone',
  'models/AppModel',
  'text!templates/appTemplate.html'
], function(_, Backbone, AppModel, appTemplate){    
    
    console.log("app view called");

    var AppView = Backbone.View.extend({

        template : _.template(appTemplate),

        render : function() {
          //console.log("render called");
          //console.log("this.model: ");
          //console.log(this.model);
          this.$el.html(this.template(this.model.attributes));
          var elem = this.el;
          //console.log("this.el: ");
          //console.log(this.el);

          console.log($("#apps-list")[0]);
          $("#mostVisited_div").append(elem);

          return this;
        }
        
    });

    return AppView;

}); 