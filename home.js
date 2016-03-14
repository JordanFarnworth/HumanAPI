if (Meteor.isClient) {
  Meteor.subscribe('subCategories');
  Template.SubCategories.helpers({
    subCategories: function() {
      return SubCategories.find();
    },
    images: function () {
       return Images.find(); // Where Images is an FS.Collection instance
     }
  });

  Template.SubCategories.events({
    //
  });
  Template.createSubCat.events({
    "click #back-to-sub-button": function() {
      window.location = '/sub_categories'
    }
  });
}

if (Meteor.isServer) {
    Meteor.startup(function () {
      Meteor.publish("subCategories", function () {
        return SubCategories.find();
      });
  });
}
