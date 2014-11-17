Router.route('/account/:_username', function () {
  this.render('account');
    SEO.set({ title: 'My Account -' + Meteor.App.NAME });
});
