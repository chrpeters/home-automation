var vers = 1;

requirejs.config({
    baseUrl: "js",
    paths : {
        backbone : 'libs/backbone/backbone-min',
        underscore : 'libs/backbone/underscore-min',
        jquery : 'libs/vendor/jquery-2.1.0.min',
        'jquery-ui': 'libs/vendor/jquery-ui-1.10.4.custom.min',
        cookie : 'libs/vendor/jquery.cookie',
        dragsort : 'libs/vendor/jquery.dragsort',
        magicsuggest: 'libs/vendor/magicsuggest-1.3.1',
        alpaca: 'libs/alpaca/alpaca-full.min',
        text: 'libs/require/requirejs-text',
        templates: '../templates'
    },
    shim : {
        jquery : {
            exports : '$'
        },
        'jquery-ui': {
            deps: ['jquery']
        },
        cookie : {
            deps: ['jquery'],
            exports : '$.cookie'
        },
        dragsort : {
            deps: ['jquery'],
            exports : '$.dragsort'
        },
        magicsuggest: {
            deps: ['jquery'],
            exports: '$.magicsuggest'
        },
        drags: {
            deps: ['jquery'],
            exporst: '$.drags'
        },
        underscore : {
            exports : '_'
        },
        backbone : {
            deps : ['jquery', 'underscore'],
            exports : 'Backbone'
        },
        alpaca: {
            deps: ['jquery']
        }
    },
    urlArgs: "v=" + vers
});

require([
    'backbone',
    'views/app',
    'router',
    'vm'
], function (Backbone, AppView, Router, Vm) {
    'use strict';
    AppView = Vm.create({}, 'AppView', AppView);
    Router.initialize({appView: AppView});
    AppView.render();
});