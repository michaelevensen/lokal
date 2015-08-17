Template.header.events({
  "click .brand": function(event, template){
    event.preventDefault();

    // Redirect
    FlowRouter.go('/');
  }
});
