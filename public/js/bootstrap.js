this.Nbjs = (function() {
    return {
	modules: {},
	module: function(name) {
	    return this.modules[name] || (this.modules[name] = { Models: {}, Collections: {}, Views: {} });
	},
	app: _.extend({},Backbone.Events)
    };
})();

jQuery(function($) {
    var app = Nbjs.app;
    //var First_Module = Nbjs.module("First_Module");
    var Router = Backbone.Router.extend({
	routes: {
	    'first_module/*path': 'first_module',
	},
	first_module : function(path) {
	    //if (!app.first_module) app.first_module = new First_Module.Views.First_View();
	} 
    });
    app.router = new Router;

    Backbone.history.start({pushState: !!(window.history && history.pushState), root: "/"});
});
