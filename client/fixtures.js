// client
Meteor.startup(function() {
  GoogleMaps.load({
    key: 'AIzaSyDWixG87FrpSzJDeZD8BpmWZbwtAAi2bPs',
    libraries: 'places'  // also accepts an array if you need more than one
  });
});
