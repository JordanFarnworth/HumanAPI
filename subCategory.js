if (Meteor.isClient) {

  Template.createSubCat.helpers({
    //
  });

  Template.createSubCat.events({
    //
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {

  });
}

SubCategories = new Mongo.Collection("subCategories");
SubCategories.attachSchema(SubCatSchema)
