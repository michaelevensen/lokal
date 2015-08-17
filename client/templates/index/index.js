Template.index.helpers({
  foods: function(){
    return Items.find({type: 'food'});
  },

  drinks: function(){
    return Items.find({$or: [ {type: 'beer'}, {type: 'wine'} ]});
  }
});
