var subs = new SubsManager();

// Index
FlowRouter.route('/', {
  name: 'index',
  action: function() {
    BlazeLayout.render("layout", {main: "index"});
  }
});

/*
* Drinks
*/

// New
FlowRouter.route('/drinks/new', {
  name: 'new/drink',
  action: function() {
    BlazeLayout.render("layout", {main: "newDrink"});
  }
});

// View
FlowRouter.route('/drinks/:slug', {
  name: 'view/drink',
  action: function() {
    BlazeLayout.render("layout", {main: "viewDrink"});
  }
});

// Add new food
FlowRouter.route('/food/new', {
  name: 'new/food',
  action: function() {
    BlazeLayout.render("layout", {main: "newFood"});
  }
});

// Add new place
FlowRouter.route('/place/new', {
  name: 'new/place',
  action: function() {
    BlazeLayout.render("layout", {main: "newPlace"});
  }
});
