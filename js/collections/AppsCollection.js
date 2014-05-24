define([
  'underscore',
  'backbone',
  'models/AppModel'
], function(_, Backbone, AppModel){

  var AppsCollection = Backbone.Collection.extend({
      
      model: AppModel,

      initialize : function(models, options) {
        console.log("AppsCollection.js called");
      },
      
      url : function() {
        return '/apps';
      },
    
      parse : function(data) {
          var uniqueArray = this.removeDuplicates(data.data);
          return uniqueArray;
      },
      
      removeDuplicates: function(myArray) {

          //credit: http://newcodeandroll.blogspot.ca/2012/01/how-to-find-duplicates-in-array-in.html  
          // I was hoping underscore's _uniq would work here but it only seems to work for single values not objects               
          var length = myArray.length;
          var ArrayWithUniqueValues = [];
          
          var objectCounter = {};
          
          for (i = 0; i < length; i++) {
          
              var currentMemboerOfArrayKey = JSON.stringify(myArray[i]);
              var currentMemboerOfArrayValue = myArray[i];
            
              if (objectCounter[currentMemboerOfArrayKey] === undefined){
                  ArrayWithUniqueValues.push(currentMemboerOfArrayValue);
                 objectCounter[currentMemboerOfArrayKey] = 1;
              }else{
                 objectCounter[currentMemboerOfArrayKey]++;
              }
          }
      
          return ArrayWithUniqueValues;
      }        
     
  });

  return AppsCollection;

});