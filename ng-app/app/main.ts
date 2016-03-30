import "rxjs/add/operator/map";
import { bootstrap }  from "angular2/platform/browser";
import { Component } from "angular2/core";
import { JSONP_PROVIDERS, Jsonp } from "angular2/http";
import { ApiResponse, Submission } from "./reddit";
import { Observable } from "rxjs";

@Component({
    selector: "app",
    templateUrl: "app/app.html",
    providers: [JSONP_PROVIDERS]
})
class App {
    feedData: Observable<Submission[]>;

    constructor(private jsonp: Jsonp) { }
    
    ngOnInit() {
        this.displaySubreddit("aww");
    }

    private displaySubreddit(subreddit: string) {
        this.feedData = this.jsonp.get("http://reddit.com/r/aww.json?jsonp=JSONP_CALLBACK")
            .map(response => (response.json() as ApiResponse).data.children)
            .map(submissions => submissions.map(val => val.data));
    }
}

bootstrap(App);
