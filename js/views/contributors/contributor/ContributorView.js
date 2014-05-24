define([
  'underscore',
  'backbone',
  'models/contributor/ContributorModel'
], function(_, Backbone, ContributorModel){    
    
    var ContributorView = Backbone.View.extend({
        tagName : "li",
        render : function() {
          console.log("contributor view called");
            
           var contributor = { avatar_url : this.model.get("avatar_url"), 
                               login : this.model.get("login"), 
                               url : this.model.get("url"),
                               contributions: this.model.get("contributions")};       
            
           return this;
        }
        
    });

    return ContributorView;

}); 