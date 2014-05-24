define([
  'jquery',
  'underscore',
  'backbone',
  'views/sidebar/SidebarView',
  'models/AppModel',
  'collections/AppsCollection',
  'views/AppsListView',
  'text!templates/appsTemplate.html'
], function($, _, Backbone, SidebarView, AppModel, AppsCollection, AppsListView, appsTemplate){

  var AppsView = Backbone.View.extend({
    el: $("#mostVisited_div"),
    render: function(){
      $('.menu li').removeClass('active');
      $('.menu li a[href="'+window.location.hash+'"]').parent().addClass('active');
      this.$el.html(appsTemplate);

      var topSites;
      var apps = [];
      chrome.topSites.get(function(localTopSites){
        topSites = localTopSites;
        //console.log("topSites: ");
        //console.log(topSites);
        topSites.forEach(function (elem){
          apps.push(new AppModel(elem));
        });

        var appsCollection = new AppsCollection(apps);  
        var appsListView = new AppsListView({ collection: appsCollection}); 
        
        appsListView.render(); 

      });





      

      // add the sidebar 
      var sidebarView = new SidebarView();
      sidebarView.render();

    }
  });

  return AppsView;
});
