Images = new FS.Collection("images", {
  stores: [new FS.Store.FileSystem("images", {path: "~/uploads"})]
});

if (Meteor.isClient) {
  Meteor.subscribe('images');
  Session.set('current_url', window.location.toString());
}
if (Meteor.isServer) {
  Meteor.publish('images', function() {
    return Images.find();
  });
  Images.allow({
    insert: function(userId, doc) {
      return true;
    },
    download: function(userId) {
      return true;
    }
  });
  Meteor.startup(function () {

  });
};
