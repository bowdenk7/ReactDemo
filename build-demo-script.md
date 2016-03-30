#Anders //build demo script

##From empty folder to Angular2##
- Create empty folder: `mkdir ng2-demo`
- Make sure you have node, npm, and typescript installed
- run in cmd
```
    > npm init
    > npm install angular2 (--save)
    > npm install --save angular2
    > npm install --save es6-promise@^3.0.2 es6-shim@^0.33.3 reflect-metadata@0.1.2 rxjs@5.0.0-beta.2 zone.js@0.5.15
    > npm install typings -g
    > typings install --ambient --save es6-shim lodash node
    > tsc --init
```
- in `tscongif.json`
    - `"module": "system"`
    - `"experimentalDecorators": "true"`
    - `"outDir": "built"`
    - Replace `excludes` with `files` and include `typings/main.d.ts`
- copy over app code (from `ngStuff` folder)
    - index.html
    - app folder
- run in cmd
```
    > tsc
    > npm install -g http-server
    > http-server
```
- navigate to `localhost:7777`
   		
##Switch to same thing in React##
- Change directories to `react-reddit-reader`
- run in cmd
```
> npm install -g webpack
> webpack (add -w for watch)
```
- NOTE: Already have typings and dependencies installed
- Run with http-server
    - `> http-server`
    - navigate to `localhost:7777`
- Add image filtering:
    - Uncomment line 13 (`index.tsx`)
- Add images to react component
    - Line 29 (`RedditSubmission.tsx`):  `<img src={submission.url} style={imageStyle} />`
- Show JSX refactor
    - Line 13 (`RedditSubmission.tsx`): `SubmissionComp` -> `SubmissionComponent`
    - Note the change in `index.tsx` (in JSX!)
    - NOTE: Make sure all files get saved.
		
##Node server##
- Change directories to `node-reddit-server`
- run in cmd
```	
    > tsc
	> node built/server.js
```	
- Navigate to `locahost:8000/r/aww.json` to see json data dump	
- Setup VS Code Build
	- Press **ctrl + shift + b** (build hotkey) - You will be notified that you have no configuration
	- Click **Configure task runner**
	- Comment out the first block (line 11 - 29)
	- Uncomment line 34/54 (this will use the block that basically says "use tsconfig")
	- Add `"watch": "true"`  (tsconfig)
	- Run build with **ctrl + shift + b** - NOTE: If the spinner in the bottom left doesn't stop, it's working
 
##Modify node server to serve React app##
- Uncomment line 21 (`server.ts`)
- Navigate to `localhost:8000` to see react app
	
##Make React app pull data from node server (rather than reddit)##
- Launch extra cmd with VS Code (right click a file + open in cmd)
- Run `webpack -w` to get a watch going
- Line 9 (`index.tsx`): change url to `/r/${subreddit}.json` and change response type to `string`
- Replace:
 ```js
 let submissions = response.data.children;
```
- With:
```js
let parsedResponse: ApiResponse = JSON.parse(response);
let submissions = parsedResponse.data.children;
```
	
##Debugging##
- Stop node running in cmd
- Click debugging icon is VS Code
- Click gear in the top left
- Select node.js
- Line 8: change `app.js` -> `/built/server.js`
- Flip source maps to true
    - Line 21: `false` -> `true`
    - Line 31: `false` -> `true`
- Note: If it is working, you should be able to hit f5, place a breakpoint in `server.ts`, and it should be a red (not grey) dot
- Show some debugging example
	
	
##Summary##

