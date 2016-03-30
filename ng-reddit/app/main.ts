import { bootstrap }  from "angular2/platform/browser";
import { JSONP_PROVIDERS } from "angular2/http";
import "rxjs/add/operator/map";

import { Feed } from "./components/feed";

bootstrap(Feed, [...JSONP_PROVIDERS]).catch(err => console.error(err));