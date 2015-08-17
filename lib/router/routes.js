Router.route('/', function(){
  this.render('slideShell');
});

// // TODO: refactor this to be a postListController(?)
// HomeController = RouteController.extend({
//   template:'slideShell'
//   },
//   action: function(){
//     this.render();
//   }
// });