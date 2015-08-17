Template.viewDrink.helpers({
  drink: function(){
    var slug = FlowRouter.getParam('slug');
    return Items.findOne({slug: slug});
  }
});
