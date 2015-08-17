
Template.itemLocation.onRendered(function(){
  this.autorun(function () {
    if (GoogleMaps.loaded()) {
      $('input[name=location]').geocomplete({
        map: "#location-map"
      });
    }
  });
});
