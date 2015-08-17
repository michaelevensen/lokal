Template.newFood.events({
  "submit form": function(event, template){
    event.preventDefault();

    var item = {
      title: $('input[name=item-title]').val(),
      // type: $('input[name=item-type]').val(),
      type: 'food',
      note: $('textarea[name=item-note]').val(),
      origin: $('input[name=location]').val()
    };

    // add
    Items.insert(item, function(error, result) {
      if(error)
        return alert(error);

      // go to index
      FlowRouter.go('index');
    });
  }
});
