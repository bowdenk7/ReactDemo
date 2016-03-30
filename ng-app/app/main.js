System.register(["rxjs/add/operator/map", "angular2/platform/browser", "angular2/core", "angular2/http"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var browser_1, core_1, http_1;
    var App;
    return {
        setters:[
            function (_1) {},
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            App = (function () {
                function App(jsonp) {
                    this.jsonp = jsonp;
                }
                App.prototype.ngOnInit = function () {
                    this.displaySubreddit("aww");
                };
                App.prototype.displaySubreddit = function (subreddit) {
                    this.feedData = this.jsonp.get("http://reddit.com/r/aww.json?jsonp=JSONP_CALLBACK")
                        .map(function (response) { return response.json().data.children; })
                        .map(function (submissions) { return submissions.map(function (val) { return val.data; }); });
                };
                App = __decorate([
                    core_1.Component({
                        selector: "app",
                        templateUrl: "app/app.html",
                        providers: [http_1.JSONP_PROVIDERS]
                    })
                ], App);
                return App;
            }());
            browser_1.bootstrap(App);
        }
    }
});
