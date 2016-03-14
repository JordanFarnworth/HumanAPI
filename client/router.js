Router.route('/', function () {
  this.render('Home')
});

Router.route('/sub_categories', function () {
  this.render('SubCategories')
});

Router.route('/new_sub_category', function () {
  this.render('createSubCat')
});
