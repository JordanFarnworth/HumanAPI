if (Meteor.isClient) {
  // counter starts at 0
Session.set('current_url', window.location.toString());
};
if (Meteor.isServer) {

  Meteor.startup(function () {

  });
};
