var subs = new SubsManager();

// Index
FlowRouter.route('/', {
  subscriptions: function() {
    subs.subscribe('allItems');
  },

  action: function() {
    BlazeLayout.render("layout", {main: "index"});
  }
});

// Add new
FlowRouter.route('/new', {
  action: function() {
    BlazeLayout.render("layout", {main: "addNew"});
  }
});
