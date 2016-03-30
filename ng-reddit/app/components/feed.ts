import { Component } from "angular2/core";
import { Jsonp } from "angular2/http";
import { Observable } from "rxjs"
import { ApiResponse, Submission } from "./reddit";

@Component({
    selector: "reddit-feed",
    templateUrl: "app/components/feed.html",
    providers: []
})
export class Feed {
    feedData: Observable<Submission[]>;

    constructor(private jsonp: Jsonp) {}

    ngOnInit() {
        this.displaySubreddit("aww");
    }
    
    private displaySubreddit(subreddit: string) {
        this.feedData = this.jsonp.get("http://reddit.com/r/aww.json?jsonp=JSONP_CALLBACK")
            .map(response => (response.json() as ApiResponse).data.children)
            .map(submissions => submissions.map(val => val.data));
    }
}
