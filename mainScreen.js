require("./runtime.js");require("./vendor.js");module.exports =
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle"],{

/***/ "./ sync ^\\.\\/app\\.(css|scss|less|sass)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app.css": "./app.css"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync ^\\.\\/app\\.(css|scss|less|sass)$";

/***/ }),

/***/ "./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./app.css": "./app.css",
	"./app.js": "./app.js",
	"./views/main/mainScreen.css": "./views/main/mainScreen.css",
	"./views/main/mainScreen.js": "./views/main/mainScreen.js",
	"./views/main/mainScreen.xml": "./views/main/mainScreen.xml"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$";

/***/ }),

/***/ "./app.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {global.registerModule("~@nativescript/theme/css/core.css", () => __webpack_require__("../node_modules/@nativescript/theme/css/core.css"));
global.registerModule("@nativescript/theme/css/core.css", () => __webpack_require__("../node_modules/@nativescript/theme/css/core.css"));
global.registerModule("~@nativescript/theme/css/blue.css", () => __webpack_require__("../node_modules/@nativescript/theme/css/blue.css"));
global.registerModule("@nativescript/theme/css/blue.css", () => __webpack_require__("../node_modules/@nativescript/theme/css/blue.css"));module.exports = {"type":"stylesheet","stylesheet":{"rules":[{"type":"import","import":"\"~@nativescript/theme/css/core.css\""},{"type":"import","import":"\"~@nativescript/theme/css/blue.css\""},{"type":"rule","selectors":[".bgDark"],"declarations":[{"type":"declaration","property":"background-color","value":"#000000"}]},{"type":"rule","selectors":[".progressBar"],"declarations":[]}],"parsingErrors":[]}};; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./app.css") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "style", path: "./app.css" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _nativescript_core_bundle_entry_points__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@nativescript/core/bundle-entry-points.js");

        const isAndroid = __webpack_require__("../node_modules/@nativescript/core/index.js").isAndroid;
        if (isAndroid && !global["__snapshot"]) {
            __webpack_require__("../node_modules/@nativescript/core/ui/frame/index.js");
__webpack_require__("../node_modules/@nativescript/core/ui/frame/activity.js");
        }

        
            __webpack_require__("../node_modules/@nativescript/webpack/helpers/load-application-css-regular.js")();
            
            
        if (true) {
            const hmrUpdate = __webpack_require__("../node_modules/@nativescript/webpack/hmr/index.js").hmrUpdate;
            global.__coreModulesLiveSync = global.__onLiveSync;

            global.__onLiveSync = function () {
                // handle hot updated on LiveSync
                hmrUpdate();
            };

            global.hmrRefresh = function({ type, path } = {}) {
                // the hot updates are applied, ask the modules to apply the changes
                setTimeout(() => {
                    global.__coreModulesLiveSync({ type, path });
                });
            };

            // handle hot updated on initial app start
            hmrUpdate();
        }
        
            const context = __webpack_require__("./ sync recursive (?<!\\bApp_Resources\\b.*)(?<!\\.\\/\\btests\\b\\/.*?)\\.(xml|css|js|(?<!\\.d\\.)ts|(?<!\\b_[\\w-]*\\.)scss)$");
            global.registerWebpackModules(context);
            if (true) {
                module.hot.accept(context.id, () => { 
                    console.log("HMR: Accept module '" + context.id + "' from '" + module.i + "'"); 
                });
            }
            
        
        const application = __webpack_require__("../node_modules/@nativescript/core/index.js").Application;

application.run({ moduleName: "./views/main/mainScreen" });

; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./app.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./app.js" });
    });
} 
    
        
        
    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./views/main/mainScreen.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = {"type":"stylesheet","stylesheet":{"rules":[{"type":"rule","selectors":[".bgDark"],"declarations":[{"type":"declaration","property":"background-color","value":"#000000"}]},{"type":"rule","selectors":[".initPanelButton"],"declarations":[{"type":"declaration","property":"width","value":"50"},{"type":"declaration","property":"height","value":"50"},{"type":"declaration","property":"background-image","value":"url(\"~/Img/cog.png\")"},{"type":"declaration","property":"background-position","value":"center center"},{"type":"declaration","property":"background-color","value":"transparent"},{"type":"declaration","property":"background-size","value":"contain"},{"type":"declaration","property":"background-repeat","value":"no-repeat"},{"type":"declaration","property":"margin-bottom","value":"5px"}]},{"type":"rule","selectors":[".overallStatus"],"declarations":[{"type":"declaration","property":"width","value":"50%"},{"type":"declaration","property":"height","value":"50"},{"type":"declaration","property":"background-color","value":"#2c3e50"},{"type":"declaration","property":"border-color","value":"green"},{"type":"declaration","property":"border-width","value":"5px"},{"type":"declaration","property":"margin-bottom","value":"5px"},{"type":"declaration","property":"font-size","value":"25px"},{"type":"declaration","property":"color","value":"green"}]},{"type":"rule","selectors":[".initPanelButton:active",".overallStatus:active"],"declarations":[{"type":"declaration","property":"margin-top","value":"5px"},{"type":"declaration","property":"margin-bottom","value":"0px"},{"type":"declaration","property":"color","value":"green"}]}],"parsingErrors":[]}};; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./views/main/mainScreen.css") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "style", path: "./views/main/mainScreen.css" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./views/main/mainScreen.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {const Observable = __webpack_require__("../node_modules/@nativescript/core/data/observable/index.js").Observable;
const application = __webpack_require__("../node_modules/@nativescript/core/application/index.js");
const gestures = __webpack_require__("../node_modules/@nativescript/core/ui/gestures/index.js");
const AnimationCurve = __webpack_require__("../node_modules/@nativescript/core/ui/enums/index.js").AnimationCurve;

exports.webViewLoaded = function (args) {

let webview = args.object;
let mainLayout = webview.parent;
let initPanelIcon = mainLayout.getViewById("initPanelIcon");
let valueManager = new Observable();

let myWebChromeClientClass = android.webkit.WebChromeClient.extend({
onProgressChanged: (view, progress) => {
valueManager.set("progressBarValue", (progress >= 100) ? 0 : progress)
mainLayout.bindingContext = valueManager;
}
});

let myWebViewClientClass = android.webkit.WebViewClient.extend({
onPageFinished: (view, url) => {
webview.android.loadUrl(`javascript:

function getElementByXpath(path) {
return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}

let enemy = getElementByXpath("//img[@alt = '*']");
let attackButton = getElementByXpath("//input[contains(@value, 'ATTACK')]");
let continueButton = getElementByXpath("//input[contains(@value, 'Continue')]");

if(enemy){enemy.click();} else if (attackButton){attackButton.click();} else {continueButton.click();}
`);        
}
});

webview.android.getSettings().setDisplayZoomControls(false);
webview.android.getSettings().setBuiltInZoomControls(false);
webview.android.getSettings().setAllowFileAccessFromFileURLs(true);
webview.android.getSettings().setAllowUniversalAccessFromFileURLs(true);
webview.android.getSettings().setMediaPlaybackRequiresUserGesture(false);
webview.android.getSettings().setUseWideViewPort(true);
webview.android.getSettings().setDomStorageEnabled(true);
webview.android.getSettings().setJavaScriptEnabled(true);
webview.android.setWebChromeClient(new myWebChromeClientClass());
webview.android.setWebViewClient(new myWebViewClientClass());

application.android.on(application.AndroidApplication.activityBackPressedEvent, (data)  => {
data.cancel = true;
if (webview.canGoBack){
webview.goBack();
}
});

}

exports.initPanel = function (args){
console.log("Touched");
}

exports.onPan = function (element){
let image = element.object;
let itemContainer = image.parent;

// calculate the conversion from DP to pixels

image.on(gestures.GestureTypes.pan, function (args) {
	
let convFactor = image.width / image.getMeasuredWidth();
let edgeX = (itemContainer.getMeasuredWidth() - image.getMeasuredWidth()) * convFactor;
let edgeY = (itemContainer.getMeasuredHeight() - image.getMeasuredHeight()) * convFactor;      

  if (args.state === 1) // down
  {
    image.prevDeltaX = 0;
    image.prevDeltaY = 0;
  }
  else if (args.state === 2) // panning
  {
    image.translateX += args.deltaX - image.prevDeltaX;
    image.translateY += args.deltaY - image.prevDeltaY;

    image.prevDeltaX = args.deltaX;
    image.prevDeltaY = args.deltaY;

    // X border
    if (image.translateX < 0) {
      image.translateX = 0;
    }
    else if (image.translateX > edgeX) {
      image.translateX = edgeX;
    }

    // Y border
    if (image.translateY < 0) {
      image.translateY = 0;
    }
    else if (image.translateY > edgeY) {
      image.translateY = edgeY;
    }
}
  else if (args.state === 3) // up
{

if (image.aligned == "left"){
	
if (image.translateX > ((20/ 100) * edgeX)){
image.aligned = "right";
animateElement(image, edgeX, image.translateY);
} else {
animateElement(image, 0, image.translateY);
}

} else if (image.aligned == "right"){
if (image.translateX < edgeX - ((20/ 100) * edgeX)){
image.aligned = "left";
animateElement(image, 0, image.translateY);
} else {
animateElement(image, edgeX, image.translateY);
}
}

console.log(image.aligned);

}














});
}


function animateElement(element, x, y){
element.animate({
translate: { x: x , y: y },
duration: 1000,
curve: AnimationCurve.cubicBezier(0.1, 0.1, 0.1, 1)
});      
}


var Physics = __webpack_require__("../node_modules/nativescript-physics-js/index.js");

var init = false;
function pageLoaded(args) {
    // Prevent double initialization
    if (init) {
        return;
    }
    
    // Get references to container and meta-info views
    var page = args.object;
    var container = page.getViewById("container");
    var metaText = page.getViewById("meta");
    
    // Create physics world and configure NS renderer
    var world = Physics();
    world.add(Physics.renderer('ns', {
        container: container,
        metaText: metaText,
        meta: true
    }));
    
    // Add bodies
    world.add(Physics.body('circle', {
        x: 80,
        y: 50,
        radius: 15,
        styles: { image: "~/images/ns-logo.png" }
    }));

    // Add behaviors
    world.add([
        Physics.behavior('edge-collision-detection', { aabb: Physics.aabb(0, 0, 300, 300) }),
        Physics.behavior('body-collision-detection'),
        Physics.behavior('body-impulse-response'),
        Physics.behavior('sweep-prune'),
        Physics.behavior('constant-acceleration') // Gravity
    ]);

    // Start ticking...
    world.on('step', function () { world.render() });
    setInterval(function () { world.step(Date.now()); }, 20);
}
exports.pageLoaded = pageLoaded;






; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./views/main/mainScreen.js") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "script", path: "./views/main/mainScreen.js" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./views/main/mainScreen.xml":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
module.exports = "<StackLayout\r\nactionBarHidden=\"true\"\r\nxmlns=\"http://schemas.nativescript.org/tns.xsd\"\r\nxmlns:nota=\"@nota/nativescript-webview-ext\"\r\nclass=\"bgDark\"\r\nloaded=\"onNavigatingTo\"\r\n>\r\n\r\n<!--\r\n<GridLayout rows=\"auto\" columns=\"*\">\r\n<Button row=\"0\" horizontalAlignment=\"center\" alignSelf=\"center\" class=\"overallStatus\" id=\"updateStatus\" text=\"ON\" />\r\n<Button row=\"0\" horizontalAlignment=\"right\" alignSelf=\"flex-end\" class=\"initPanelButton\" id=\"initPanelButton\" tap=\"initPanel\" />\r\n</GridLayout>\r\n\r\n\r\n<Progress value=\"{{ progressBarValue }}\" maxValue=\"100\"/>\r\n<WebView loaded=\"webViewLoaded\" src=\"https://blackdragon.mobi\" />\r\n\r\n<GridLayout class=\"conatiner\" width=\"100%\" height=\"400\" backgroundColor=\"gray\">\r\n    <Image class=\"image\" width=\"100\" height=\"100\" horizontalAlignment=\"left\" verticalAlignment=\"top\" loaded=\"onPan\" src=\"~/Img/cog.png\" aligned=\"left\"></Image>\r\n</GridLayout>\r\n-->\r\n    <!-- Definte the container for the phisics scene -->\r\n    <GridLayout id=\"container\" width=\"300\" height=\"300\" backgroundColor=\"lightgreen\" loaded=\"pageLoaded\">\r\n    \r\n        <!-- Label for meta info is note requiered -->\r\n        <Label id=\"meta\"/>\r\n    </GridLayout>\r\n</StackLayout>\r\n"; 
if ( true && global._isModuleLoadedForUI && global._isModuleLoadedForUI("./views/main/mainScreen.xml") ) {
    
    module.hot.accept();
    module.hot.dispose(() => {
        global.hmrRefresh({ type: "markup", path: "./views/main/mainScreen.xml" });
    });
} 
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "~/package.json":
/***/ (function(module, exports) {

module.exports = require("~/package.json");

/***/ })

},[["./app.js","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLiBzeW5jIG5vbnJlY3Vyc2l2ZSBeXFwuXFwvYXBwXFwuKGNzc3xzY3NzfGxlc3N8c2FzcykkIiwid2VicGFjazovLy9cXGJfW1xcdy1dKlxcLilzY3NzKSQiLCJ3ZWJwYWNrOi8vLy4vYXBwLmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vdmlld3MvbWFpbi9tYWluU2NyZWVuLmNzcyIsIndlYnBhY2s6Ly8vLi92aWV3cy9tYWluL21haW5TY3JlZW4uanMiLCJ3ZWJwYWNrOi8vLy4vdmlld3MvbWFpbi9tYWluU2NyZWVuLnhtbCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ+L3BhY2thZ2UuanNvblwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFOzs7Ozs7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0o7Ozs7Ozs7QUMxQkEsK0dBQWlFLG1CQUFPLENBQUMsa0RBQWtDO0FBQzNHLGdFQUFnRSxtQkFBTyxDQUFDLGtEQUFrQztBQUMxRyxpRUFBaUUsbUJBQU8sQ0FBQyxrREFBa0M7QUFDM0csZ0VBQWdFLG1CQUFPLENBQUMsa0RBQWtDLEdBQUcsa0JBQWtCLGtDQUFrQyxVQUFVLGlFQUFpRSxFQUFFLGlFQUFpRSxFQUFFLHVEQUF1RCxxRUFBcUUsRUFBRSxFQUFFLDZEQUE2RCx3QjtBQUM5ZSxJQUFJLEtBQVU7O0FBRWQ7QUFDQTtBQUNBLDJCQUEyQixtQ0FBbUM7QUFDOUQsS0FBSztBQUNMLEM7Ozs7Ozs7Ozs7OztB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O0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLEtBQUs7O0FBRUw7QUFDQTtBQUNBLHNEQUFzRCxxQ0FBcUM7QUFDM0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtDQUFrQyxpQkFBaUI7QUFDbkQsNkJBQTZCLHdCQUF3QixFQUFFO0FBQ3ZEO0FBQ0E7Ozs7Ozs7QUFPQSxDO0FBQ0EsSUFBSSxLQUFVOztBQUVkO0FBQ0E7QUFDQSwyQkFBMkIscURBQXFEO0FBQ2hGLEtBQUs7QUFDTCxDOzs7Ozs7Ozs7QUNoTkEsbWxCQUFtbEIsb0JBQW9CLDBzQjtBQUN2bUIsSUFBSSxLQUFVOztBQUVkO0FBQ0E7QUFDQSwyQkFBMkIsc0RBQXNEO0FBQ2pGLEtBQUs7QUFDTCxDOzs7Ozs7OztBQ1JBLDJDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9hcHAuY3NzXCI6IFwiLi9hcHAuY3NzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vIHN5bmMgXlxcXFwuXFxcXC9hcHBcXFxcLihjc3N8c2Nzc3xsZXNzfHNhc3MpJFwiOyIsInZhciBtYXAgPSB7XG5cdFwiLi9hcHAuY3NzXCI6IFwiLi9hcHAuY3NzXCIsXG5cdFwiLi9hcHAuanNcIjogXCIuL2FwcC5qc1wiLFxuXHRcIi4vdmlld3MvbWFpbi9tYWluU2NyZWVuLmNzc1wiOiBcIi4vdmlld3MvbWFpbi9tYWluU2NyZWVuLmNzc1wiLFxuXHRcIi4vdmlld3MvbWFpbi9tYWluU2NyZWVuLmpzXCI6IFwiLi92aWV3cy9tYWluL21haW5TY3JlZW4uanNcIixcblx0XCIuL3ZpZXdzL21haW4vbWFpblNjcmVlbi54bWxcIjogXCIuL3ZpZXdzL21haW4vbWFpblNjcmVlbi54bWxcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi8gc3luYyByZWN1cnNpdmUgKD88IVxcXFxiQXBwX1Jlc291cmNlc1xcXFxiLiopKD88IVxcXFwuXFxcXC9cXFxcYnRlc3RzXFxcXGJcXFxcLy4qPylcXFxcLih4bWx8Y3NzfGpzfCg/PCFcXFxcLmRcXFxcLil0c3woPzwhXFxcXGJfW1xcXFx3LV0qXFxcXC4pc2NzcykkXCI7IiwiZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwifkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2NvcmUuY3NzXCIsICgpID0+IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9jb3JlLmNzc1wiKSk7XG5nbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9jb3JlLmNzc1wiLCAoKSA9PiByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvY29yZS5jc3NcIikpO1xuZ2xvYmFsLnJlZ2lzdGVyTW9kdWxlKFwifkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2JsdWUuY3NzXCIsICgpID0+IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9ibHVlLmNzc1wiKSk7XG5nbG9iYWwucmVnaXN0ZXJNb2R1bGUoXCJAbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9ibHVlLmNzc1wiLCAoKSA9PiByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC90aGVtZS9jc3MvYmx1ZS5jc3NcIikpO21vZHVsZS5leHBvcnRzID0ge1widHlwZVwiOlwic3R5bGVzaGVldFwiLFwic3R5bGVzaGVldFwiOntcInJ1bGVzXCI6W3tcInR5cGVcIjpcImltcG9ydFwiLFwiaW1wb3J0XCI6XCJcXFwifkBuYXRpdmVzY3JpcHQvdGhlbWUvY3NzL2NvcmUuY3NzXFxcIlwifSx7XCJ0eXBlXCI6XCJpbXBvcnRcIixcImltcG9ydFwiOlwiXFxcIn5AbmF0aXZlc2NyaXB0L3RoZW1lL2Nzcy9ibHVlLmNzc1xcXCJcIn0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmJnRGFya1wiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjMDAwMDAwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLnByb2dyZXNzQmFyXCJdLFwiZGVjbGFyYXRpb25zXCI6W119XSxcInBhcnNpbmdFcnJvcnNcIjpbXX19OzsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi9hcHAuY3NzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInN0eWxlXCIsIHBhdGg6IFwiLi9hcHAuY3NzXCIgfSk7XG4gICAgfSk7XG59ICIsIlxuICAgICAgICBjb25zdCBpc0FuZHJvaWQgPSByZXF1aXJlKFwiQG5hdGl2ZXNjcmlwdC9jb3JlXCIpLmlzQW5kcm9pZDtcbiAgICAgICAgaWYgKGlzQW5kcm9pZCAmJiAhZ2xvYmFsW1wiX19zbmFwc2hvdFwiXSkge1xuICAgICAgICAgICAgcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvY29yZS91aS9mcmFtZVwiKTtcbnJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmUvdWkvZnJhbWUvYWN0aXZpdHlcIik7XG4gICAgICAgIH1cblxuICAgICAgICBcbiAgICAgICAgICAgIHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L3dlYnBhY2svaGVscGVycy9sb2FkLWFwcGxpY2F0aW9uLWNzcy1yZWd1bGFyXCIpKCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIFxuICAgICAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgICAgICAgY29uc3QgaG1yVXBkYXRlID0gcmVxdWlyZShcIkBuYXRpdmVzY3JpcHQvd2VicGFjay9obXJcIikuaG1yVXBkYXRlO1xuICAgICAgICAgICAgZ2xvYmFsLl9fY29yZU1vZHVsZXNMaXZlU3luYyA9IGdsb2JhbC5fX29uTGl2ZVN5bmM7XG5cbiAgICAgICAgICAgIGdsb2JhbC5fX29uTGl2ZVN5bmMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgLy8gaGFuZGxlIGhvdCB1cGRhdGVkIG9uIExpdmVTeW5jXG4gICAgICAgICAgICAgICAgaG1yVXBkYXRlKCk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCA9IGZ1bmN0aW9uKHsgdHlwZSwgcGF0aCB9ID0ge30pIHtcbiAgICAgICAgICAgICAgICAvLyB0aGUgaG90IHVwZGF0ZXMgYXJlIGFwcGxpZWQsIGFzayB0aGUgbW9kdWxlcyB0byBhcHBseSB0aGUgY2hhbmdlc1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBnbG9iYWwuX19jb3JlTW9kdWxlc0xpdmVTeW5jKHsgdHlwZSwgcGF0aCB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8vIGhhbmRsZSBob3QgdXBkYXRlZCBvbiBpbml0aWFsIGFwcCBzdGFydFxuICAgICAgICAgICAgaG1yVXBkYXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBjb250ZXh0ID0gcmVxdWlyZS5jb250ZXh0KFwifi9cIiwgdHJ1ZSwgLyg/PCFcXGJBcHBfUmVzb3VyY2VzXFxiLiopKD88IVxcLlxcL1xcYnRlc3RzXFxiXFwvLio/KVxcLih4bWx8Y3NzfGpzfCg/PCFcXC5kXFwuKXRzfCg/PCFcXGJfW1xcdy1dKlxcLilzY3NzKSQvKTtcbiAgICAgICAgICAgIGdsb2JhbC5yZWdpc3RlcldlYnBhY2tNb2R1bGVzKGNvbnRleHQpO1xuICAgICAgICAgICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmFjY2VwdChjb250ZXh0LmlkLCAoKSA9PiB7IFxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkhNUjogQWNjZXB0IG1vZHVsZSAnXCIgKyBjb250ZXh0LmlkICsgXCInIGZyb20gJ1wiICsgbW9kdWxlLmlkICsgXCInXCIpOyBcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICBpbXBvcnQgXCJAbmF0aXZlc2NyaXB0L2NvcmUvYnVuZGxlLWVudHJ5LXBvaW50c1wiO1xuICAgICAgICBjb25zdCBhcHBsaWNhdGlvbiA9IHJlcXVpcmUoXCJAbmF0aXZlc2NyaXB0L2NvcmVcIikuQXBwbGljYXRpb247XHJcblxyXG5hcHBsaWNhdGlvbi5ydW4oeyBtb2R1bGVOYW1lOiBcIi4vdmlld3MvbWFpbi9tYWluU2NyZWVuXCIgfSk7XHJcblxyXG47IFxuaWYgKG1vZHVsZS5ob3QgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSShcIi4vYXBwLmpzXCIpICkge1xuICAgIFxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgZ2xvYmFsLmhtclJlZnJlc2goeyB0eXBlOiBcInNjcmlwdFwiLCBwYXRoOiBcIi4vYXBwLmpzXCIgfSk7XG4gICAgfSk7XG59IFxuICAgIFxuICAgICAgICBcbiAgICAgICAgXG4gICAgIiwibW9kdWxlLmV4cG9ydHMgPSB7XCJ0eXBlXCI6XCJzdHlsZXNoZWV0XCIsXCJzdHlsZXNoZWV0XCI6e1wicnVsZXNcIjpbe1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmJnRGFya1wiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjMDAwMDAwXCJ9XX0se1widHlwZVwiOlwicnVsZVwiLFwic2VsZWN0b3JzXCI6W1wiLmluaXRQYW5lbEJ1dHRvblwiXSxcImRlY2xhcmF0aW9uc1wiOlt7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIndpZHRoXCIsXCJ2YWx1ZVwiOlwiNTBcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJoZWlnaHRcIixcInZhbHVlXCI6XCI1MFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtaW1hZ2VcIixcInZhbHVlXCI6XCJ1cmwoXFxcIn4vSW1nL2NvZy5wbmdcXFwiKVwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtcG9zaXRpb25cIixcInZhbHVlXCI6XCJjZW50ZXIgY2VudGVyXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1jb2xvclwiLFwidmFsdWVcIjpcInRyYW5zcGFyZW50XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYmFja2dyb3VuZC1zaXplXCIsXCJ2YWx1ZVwiOlwiY29udGFpblwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtcmVwZWF0XCIsXCJ2YWx1ZVwiOlwibm8tcmVwZWF0XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLWJvdHRvbVwiLFwidmFsdWVcIjpcIjVweFwifV19LHtcInR5cGVcIjpcInJ1bGVcIixcInNlbGVjdG9yc1wiOltcIi5vdmVyYWxsU3RhdHVzXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwid2lkdGhcIixcInZhbHVlXCI6XCI1MCVcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJoZWlnaHRcIixcInZhbHVlXCI6XCI1MFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImJhY2tncm91bmQtY29sb3JcIixcInZhbHVlXCI6XCIjMmMzZTUwXCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiYm9yZGVyLWNvbG9yXCIsXCJ2YWx1ZVwiOlwiZ3JlZW5cIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJib3JkZXItd2lkdGhcIixcInZhbHVlXCI6XCI1cHhcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJtYXJnaW4tYm90dG9tXCIsXCJ2YWx1ZVwiOlwiNXB4XCJ9LHtcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwiZm9udC1zaXplXCIsXCJ2YWx1ZVwiOlwiMjVweFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcImNvbG9yXCIsXCJ2YWx1ZVwiOlwiZ3JlZW5cIn1dfSx7XCJ0eXBlXCI6XCJydWxlXCIsXCJzZWxlY3RvcnNcIjpbXCIuaW5pdFBhbmVsQnV0dG9uOmFjdGl2ZVwiLFwiLm92ZXJhbGxTdGF0dXM6YWN0aXZlXCJdLFwiZGVjbGFyYXRpb25zXCI6W3tcInR5cGVcIjpcImRlY2xhcmF0aW9uXCIsXCJwcm9wZXJ0eVwiOlwibWFyZ2luLXRvcFwiLFwidmFsdWVcIjpcIjVweFwifSx7XCJ0eXBlXCI6XCJkZWNsYXJhdGlvblwiLFwicHJvcGVydHlcIjpcIm1hcmdpbi1ib3R0b21cIixcInZhbHVlXCI6XCIwcHhcIn0se1widHlwZVwiOlwiZGVjbGFyYXRpb25cIixcInByb3BlcnR5XCI6XCJjb2xvclwiLFwidmFsdWVcIjpcImdyZWVuXCJ9XX1dLFwicGFyc2luZ0Vycm9yc1wiOltdfX07OyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL3ZpZXdzL21haW4vbWFpblNjcmVlbi5jc3NcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwic3R5bGVcIiwgcGF0aDogXCIuL3ZpZXdzL21haW4vbWFpblNjcmVlbi5jc3NcIiB9KTtcbiAgICB9KTtcbn0gIiwiY29uc3QgT2JzZXJ2YWJsZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiKS5PYnNlcnZhYmxlO1xyXG5jb25zdCBhcHBsaWNhdGlvbiA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCIpO1xyXG5jb25zdCBnZXN0dXJlcyA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2dlc3R1cmVzXCIpO1xyXG5jb25zdCBBbmltYXRpb25DdXJ2ZSA9IHJlcXVpcmUoXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2VudW1zXCIpLkFuaW1hdGlvbkN1cnZlO1xyXG5cclxuZXhwb3J0cy53ZWJWaWV3TG9hZGVkID0gZnVuY3Rpb24gKGFyZ3MpIHtcclxuXHJcbmxldCB3ZWJ2aWV3ID0gYXJncy5vYmplY3Q7XHJcbmxldCBtYWluTGF5b3V0ID0gd2Vidmlldy5wYXJlbnQ7XHJcbmxldCBpbml0UGFuZWxJY29uID0gbWFpbkxheW91dC5nZXRWaWV3QnlJZChcImluaXRQYW5lbEljb25cIik7XHJcbmxldCB2YWx1ZU1hbmFnZXIgPSBuZXcgT2JzZXJ2YWJsZSgpO1xyXG5cclxubGV0IG15V2ViQ2hyb21lQ2xpZW50Q2xhc3MgPSBhbmRyb2lkLndlYmtpdC5XZWJDaHJvbWVDbGllbnQuZXh0ZW5kKHtcclxub25Qcm9ncmVzc0NoYW5nZWQ6ICh2aWV3LCBwcm9ncmVzcykgPT4ge1xyXG52YWx1ZU1hbmFnZXIuc2V0KFwicHJvZ3Jlc3NCYXJWYWx1ZVwiLCAocHJvZ3Jlc3MgPj0gMTAwKSA/IDAgOiBwcm9ncmVzcylcclxubWFpbkxheW91dC5iaW5kaW5nQ29udGV4dCA9IHZhbHVlTWFuYWdlcjtcclxufVxyXG59KTtcclxuXHJcbmxldCBteVdlYlZpZXdDbGllbnRDbGFzcyA9IGFuZHJvaWQud2Via2l0LldlYlZpZXdDbGllbnQuZXh0ZW5kKHtcclxub25QYWdlRmluaXNoZWQ6ICh2aWV3LCB1cmwpID0+IHtcclxud2Vidmlldy5hbmRyb2lkLmxvYWRVcmwoYGphdmFzY3JpcHQ6XHJcblxyXG5mdW5jdGlvbiBnZXRFbGVtZW50QnlYcGF0aChwYXRoKSB7XHJcbnJldHVybiBkb2N1bWVudC5ldmFsdWF0ZShwYXRoLCBkb2N1bWVudCwgbnVsbCwgWFBhdGhSZXN1bHQuRklSU1RfT1JERVJFRF9OT0RFX1RZUEUsIG51bGwpLnNpbmdsZU5vZGVWYWx1ZTtcclxufVxyXG5cclxubGV0IGVuZW15ID0gZ2V0RWxlbWVudEJ5WHBhdGgoXCIvL2ltZ1tAYWx0ID0gJyonXVwiKTtcclxubGV0IGF0dGFja0J1dHRvbiA9IGdldEVsZW1lbnRCeVhwYXRoKFwiLy9pbnB1dFtjb250YWlucyhAdmFsdWUsICdBVFRBQ0snKV1cIik7XHJcbmxldCBjb250aW51ZUJ1dHRvbiA9IGdldEVsZW1lbnRCeVhwYXRoKFwiLy9pbnB1dFtjb250YWlucyhAdmFsdWUsICdDb250aW51ZScpXVwiKTtcclxuXHJcbmlmKGVuZW15KXtlbmVteS5jbGljaygpO30gZWxzZSBpZiAoYXR0YWNrQnV0dG9uKXthdHRhY2tCdXR0b24uY2xpY2soKTt9IGVsc2Uge2NvbnRpbnVlQnV0dG9uLmNsaWNrKCk7fVxyXG5gKTsgICAgICAgIFxyXG59XHJcbn0pO1xyXG5cclxud2Vidmlldy5hbmRyb2lkLmdldFNldHRpbmdzKCkuc2V0RGlzcGxheVpvb21Db250cm9scyhmYWxzZSk7XHJcbndlYnZpZXcuYW5kcm9pZC5nZXRTZXR0aW5ncygpLnNldEJ1aWx0SW5ab29tQ29udHJvbHMoZmFsc2UpO1xyXG53ZWJ2aWV3LmFuZHJvaWQuZ2V0U2V0dGluZ3MoKS5zZXRBbGxvd0ZpbGVBY2Nlc3NGcm9tRmlsZVVSTHModHJ1ZSk7XHJcbndlYnZpZXcuYW5kcm9pZC5nZXRTZXR0aW5ncygpLnNldEFsbG93VW5pdmVyc2FsQWNjZXNzRnJvbUZpbGVVUkxzKHRydWUpO1xyXG53ZWJ2aWV3LmFuZHJvaWQuZ2V0U2V0dGluZ3MoKS5zZXRNZWRpYVBsYXliYWNrUmVxdWlyZXNVc2VyR2VzdHVyZShmYWxzZSk7XHJcbndlYnZpZXcuYW5kcm9pZC5nZXRTZXR0aW5ncygpLnNldFVzZVdpZGVWaWV3UG9ydCh0cnVlKTtcclxud2Vidmlldy5hbmRyb2lkLmdldFNldHRpbmdzKCkuc2V0RG9tU3RvcmFnZUVuYWJsZWQodHJ1ZSk7XHJcbndlYnZpZXcuYW5kcm9pZC5nZXRTZXR0aW5ncygpLnNldEphdmFTY3JpcHRFbmFibGVkKHRydWUpO1xyXG53ZWJ2aWV3LmFuZHJvaWQuc2V0V2ViQ2hyb21lQ2xpZW50KG5ldyBteVdlYkNocm9tZUNsaWVudENsYXNzKCkpO1xyXG53ZWJ2aWV3LmFuZHJvaWQuc2V0V2ViVmlld0NsaWVudChuZXcgbXlXZWJWaWV3Q2xpZW50Q2xhc3MoKSk7XHJcblxyXG5hcHBsaWNhdGlvbi5hbmRyb2lkLm9uKGFwcGxpY2F0aW9uLkFuZHJvaWRBcHBsaWNhdGlvbi5hY3Rpdml0eUJhY2tQcmVzc2VkRXZlbnQsIChkYXRhKSAgPT4ge1xyXG5kYXRhLmNhbmNlbCA9IHRydWU7XHJcbmlmICh3ZWJ2aWV3LmNhbkdvQmFjayl7XHJcbndlYnZpZXcuZ29CYWNrKCk7XHJcbn1cclxufSk7XHJcblxyXG59XHJcblxyXG5leHBvcnRzLmluaXRQYW5lbCA9IGZ1bmN0aW9uIChhcmdzKXtcclxuY29uc29sZS5sb2coXCJUb3VjaGVkXCIpO1xyXG59XHJcblxyXG5leHBvcnRzLm9uUGFuID0gZnVuY3Rpb24gKGVsZW1lbnQpe1xyXG5sZXQgaW1hZ2UgPSBlbGVtZW50Lm9iamVjdDtcclxubGV0IGl0ZW1Db250YWluZXIgPSBpbWFnZS5wYXJlbnQ7XHJcblxyXG4vLyBjYWxjdWxhdGUgdGhlIGNvbnZlcnNpb24gZnJvbSBEUCB0byBwaXhlbHNcclxuXHJcbmltYWdlLm9uKGdlc3R1cmVzLkdlc3R1cmVUeXBlcy5wYW4sIGZ1bmN0aW9uIChhcmdzKSB7XHJcblx0XHJcbmxldCBjb252RmFjdG9yID0gaW1hZ2Uud2lkdGggLyBpbWFnZS5nZXRNZWFzdXJlZFdpZHRoKCk7XHJcbmxldCBlZGdlWCA9IChpdGVtQ29udGFpbmVyLmdldE1lYXN1cmVkV2lkdGgoKSAtIGltYWdlLmdldE1lYXN1cmVkV2lkdGgoKSkgKiBjb252RmFjdG9yO1xyXG5sZXQgZWRnZVkgPSAoaXRlbUNvbnRhaW5lci5nZXRNZWFzdXJlZEhlaWdodCgpIC0gaW1hZ2UuZ2V0TWVhc3VyZWRIZWlnaHQoKSkgKiBjb252RmFjdG9yOyAgICAgIFxyXG5cclxuICBpZiAoYXJncy5zdGF0ZSA9PT0gMSkgLy8gZG93blxyXG4gIHtcclxuICAgIGltYWdlLnByZXZEZWx0YVggPSAwO1xyXG4gICAgaW1hZ2UucHJldkRlbHRhWSA9IDA7XHJcbiAgfVxyXG4gIGVsc2UgaWYgKGFyZ3Muc3RhdGUgPT09IDIpIC8vIHBhbm5pbmdcclxuICB7XHJcbiAgICBpbWFnZS50cmFuc2xhdGVYICs9IGFyZ3MuZGVsdGFYIC0gaW1hZ2UucHJldkRlbHRhWDtcclxuICAgIGltYWdlLnRyYW5zbGF0ZVkgKz0gYXJncy5kZWx0YVkgLSBpbWFnZS5wcmV2RGVsdGFZO1xyXG5cclxuICAgIGltYWdlLnByZXZEZWx0YVggPSBhcmdzLmRlbHRhWDtcclxuICAgIGltYWdlLnByZXZEZWx0YVkgPSBhcmdzLmRlbHRhWTtcclxuXHJcbiAgICAvLyBYIGJvcmRlclxyXG4gICAgaWYgKGltYWdlLnRyYW5zbGF0ZVggPCAwKSB7XHJcbiAgICAgIGltYWdlLnRyYW5zbGF0ZVggPSAwO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoaW1hZ2UudHJhbnNsYXRlWCA+IGVkZ2VYKSB7XHJcbiAgICAgIGltYWdlLnRyYW5zbGF0ZVggPSBlZGdlWDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBZIGJvcmRlclxyXG4gICAgaWYgKGltYWdlLnRyYW5zbGF0ZVkgPCAwKSB7XHJcbiAgICAgIGltYWdlLnRyYW5zbGF0ZVkgPSAwO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoaW1hZ2UudHJhbnNsYXRlWSA+IGVkZ2VZKSB7XHJcbiAgICAgIGltYWdlLnRyYW5zbGF0ZVkgPSBlZGdlWTtcclxuICAgIH1cclxufVxyXG4gIGVsc2UgaWYgKGFyZ3Muc3RhdGUgPT09IDMpIC8vIHVwXHJcbntcclxuXHJcbmlmIChpbWFnZS5hbGlnbmVkID09IFwibGVmdFwiKXtcclxuXHRcclxuaWYgKGltYWdlLnRyYW5zbGF0ZVggPiAoKDIwLyAxMDApICogZWRnZVgpKXtcclxuaW1hZ2UuYWxpZ25lZCA9IFwicmlnaHRcIjtcclxuYW5pbWF0ZUVsZW1lbnQoaW1hZ2UsIGVkZ2VYLCBpbWFnZS50cmFuc2xhdGVZKTtcclxufSBlbHNlIHtcclxuYW5pbWF0ZUVsZW1lbnQoaW1hZ2UsIDAsIGltYWdlLnRyYW5zbGF0ZVkpO1xyXG59XHJcblxyXG59IGVsc2UgaWYgKGltYWdlLmFsaWduZWQgPT0gXCJyaWdodFwiKXtcclxuaWYgKGltYWdlLnRyYW5zbGF0ZVggPCBlZGdlWCAtICgoMjAvIDEwMCkgKiBlZGdlWCkpe1xyXG5pbWFnZS5hbGlnbmVkID0gXCJsZWZ0XCI7XHJcbmFuaW1hdGVFbGVtZW50KGltYWdlLCAwLCBpbWFnZS50cmFuc2xhdGVZKTtcclxufSBlbHNlIHtcclxuYW5pbWF0ZUVsZW1lbnQoaW1hZ2UsIGVkZ2VYLCBpbWFnZS50cmFuc2xhdGVZKTtcclxufVxyXG59XHJcblxyXG5jb25zb2xlLmxvZyhpbWFnZS5hbGlnbmVkKTtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG59KTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGFuaW1hdGVFbGVtZW50KGVsZW1lbnQsIHgsIHkpe1xyXG5lbGVtZW50LmFuaW1hdGUoe1xyXG50cmFuc2xhdGU6IHsgeDogeCAsIHk6IHkgfSxcclxuZHVyYXRpb246IDEwMDAsXHJcbmN1cnZlOiBBbmltYXRpb25DdXJ2ZS5jdWJpY0JlemllcigwLjEsIDAuMSwgMC4xLCAxKVxyXG59KTsgICAgICBcclxufVxyXG5cclxuXHJcbnZhciBQaHlzaWNzID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1waHlzaWNzLWpzXCIpO1xyXG5cclxudmFyIGluaXQgPSBmYWxzZTtcclxuZnVuY3Rpb24gcGFnZUxvYWRlZChhcmdzKSB7XHJcbiAgICAvLyBQcmV2ZW50IGRvdWJsZSBpbml0aWFsaXphdGlvblxyXG4gICAgaWYgKGluaXQpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIEdldCByZWZlcmVuY2VzIHRvIGNvbnRhaW5lciBhbmQgbWV0YS1pbmZvIHZpZXdzXHJcbiAgICB2YXIgcGFnZSA9IGFyZ3Mub2JqZWN0O1xyXG4gICAgdmFyIGNvbnRhaW5lciA9IHBhZ2UuZ2V0Vmlld0J5SWQoXCJjb250YWluZXJcIik7XHJcbiAgICB2YXIgbWV0YVRleHQgPSBwYWdlLmdldFZpZXdCeUlkKFwibWV0YVwiKTtcclxuICAgIFxyXG4gICAgLy8gQ3JlYXRlIHBoeXNpY3Mgd29ybGQgYW5kIGNvbmZpZ3VyZSBOUyByZW5kZXJlclxyXG4gICAgdmFyIHdvcmxkID0gUGh5c2ljcygpO1xyXG4gICAgd29ybGQuYWRkKFBoeXNpY3MucmVuZGVyZXIoJ25zJywge1xyXG4gICAgICAgIGNvbnRhaW5lcjogY29udGFpbmVyLFxyXG4gICAgICAgIG1ldGFUZXh0OiBtZXRhVGV4dCxcclxuICAgICAgICBtZXRhOiB0cnVlXHJcbiAgICB9KSk7XHJcbiAgICBcclxuICAgIC8vIEFkZCBib2RpZXNcclxuICAgIHdvcmxkLmFkZChQaHlzaWNzLmJvZHkoJ2NpcmNsZScsIHtcclxuICAgICAgICB4OiA4MCxcclxuICAgICAgICB5OiA1MCxcclxuICAgICAgICByYWRpdXM6IDE1LFxyXG4gICAgICAgIHN0eWxlczogeyBpbWFnZTogXCJ+L2ltYWdlcy9ucy1sb2dvLnBuZ1wiIH1cclxuICAgIH0pKTtcclxuXHJcbiAgICAvLyBBZGQgYmVoYXZpb3JzXHJcbiAgICB3b3JsZC5hZGQoW1xyXG4gICAgICAgIFBoeXNpY3MuYmVoYXZpb3IoJ2VkZ2UtY29sbGlzaW9uLWRldGVjdGlvbicsIHsgYWFiYjogUGh5c2ljcy5hYWJiKDAsIDAsIDMwMCwgMzAwKSB9KSxcclxuICAgICAgICBQaHlzaWNzLmJlaGF2aW9yKCdib2R5LWNvbGxpc2lvbi1kZXRlY3Rpb24nKSxcclxuICAgICAgICBQaHlzaWNzLmJlaGF2aW9yKCdib2R5LWltcHVsc2UtcmVzcG9uc2UnKSxcclxuICAgICAgICBQaHlzaWNzLmJlaGF2aW9yKCdzd2VlcC1wcnVuZScpLFxyXG4gICAgICAgIFBoeXNpY3MuYmVoYXZpb3IoJ2NvbnN0YW50LWFjY2VsZXJhdGlvbicpIC8vIEdyYXZpdHlcclxuICAgIF0pO1xyXG5cclxuICAgIC8vIFN0YXJ0IHRpY2tpbmcuLi5cclxuICAgIHdvcmxkLm9uKCdzdGVwJywgZnVuY3Rpb24gKCkgeyB3b3JsZC5yZW5kZXIoKSB9KTtcclxuICAgIHNldEludGVydmFsKGZ1bmN0aW9uICgpIHsgd29ybGQuc3RlcChEYXRlLm5vdygpKTsgfSwgMjApO1xyXG59XHJcbmV4cG9ydHMucGFnZUxvYWRlZCA9IHBhZ2VMb2FkZWQ7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbjsgXG5pZiAobW9kdWxlLmhvdCAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkgJiYgZ2xvYmFsLl9pc01vZHVsZUxvYWRlZEZvclVJKFwiLi92aWV3cy9tYWluL21haW5TY3JlZW4uanNcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwic2NyaXB0XCIsIHBhdGg6IFwiLi92aWV3cy9tYWluL21haW5TY3JlZW4uanNcIiB9KTtcbiAgICB9KTtcbn0gIiwiXG5tb2R1bGUuZXhwb3J0cyA9IFwiPFN0YWNrTGF5b3V0XFxyXFxuYWN0aW9uQmFySGlkZGVuPVxcXCJ0cnVlXFxcIlxcclxcbnhtbG5zPVxcXCJodHRwOi8vc2NoZW1hcy5uYXRpdmVzY3JpcHQub3JnL3Rucy54c2RcXFwiXFxyXFxueG1sbnM6bm90YT1cXFwiQG5vdGEvbmF0aXZlc2NyaXB0LXdlYnZpZXctZXh0XFxcIlxcclxcbmNsYXNzPVxcXCJiZ0RhcmtcXFwiXFxyXFxubG9hZGVkPVxcXCJvbk5hdmlnYXRpbmdUb1xcXCJcXHJcXG4+XFxyXFxuXFxyXFxuPCEtLVxcclxcbjxHcmlkTGF5b3V0IHJvd3M9XFxcImF1dG9cXFwiIGNvbHVtbnM9XFxcIipcXFwiPlxcclxcbjxCdXR0b24gcm93PVxcXCIwXFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJjZW50ZXJcXFwiIGFsaWduU2VsZj1cXFwiY2VudGVyXFxcIiBjbGFzcz1cXFwib3ZlcmFsbFN0YXR1c1xcXCIgaWQ9XFxcInVwZGF0ZVN0YXR1c1xcXCIgdGV4dD1cXFwiT05cXFwiIC8+XFxyXFxuPEJ1dHRvbiByb3c9XFxcIjBcXFwiIGhvcml6b250YWxBbGlnbm1lbnQ9XFxcInJpZ2h0XFxcIiBhbGlnblNlbGY9XFxcImZsZXgtZW5kXFxcIiBjbGFzcz1cXFwiaW5pdFBhbmVsQnV0dG9uXFxcIiBpZD1cXFwiaW5pdFBhbmVsQnV0dG9uXFxcIiB0YXA9XFxcImluaXRQYW5lbFxcXCIgLz5cXHJcXG48L0dyaWRMYXlvdXQ+XFxyXFxuXFxyXFxuXFxyXFxuPFByb2dyZXNzIHZhbHVlPVxcXCJ7eyBwcm9ncmVzc0JhclZhbHVlIH19XFxcIiBtYXhWYWx1ZT1cXFwiMTAwXFxcIi8+XFxyXFxuPFdlYlZpZXcgbG9hZGVkPVxcXCJ3ZWJWaWV3TG9hZGVkXFxcIiBzcmM9XFxcImh0dHBzOi8vYmxhY2tkcmFnb24ubW9iaVxcXCIgLz5cXHJcXG5cXHJcXG48R3JpZExheW91dCBjbGFzcz1cXFwiY29uYXRpbmVyXFxcIiB3aWR0aD1cXFwiMTAwJVxcXCIgaGVpZ2h0PVxcXCI0MDBcXFwiIGJhY2tncm91bmRDb2xvcj1cXFwiZ3JheVxcXCI+XFxyXFxuICAgIDxJbWFnZSBjbGFzcz1cXFwiaW1hZ2VcXFwiIHdpZHRoPVxcXCIxMDBcXFwiIGhlaWdodD1cXFwiMTAwXFxcIiBob3Jpem9udGFsQWxpZ25tZW50PVxcXCJsZWZ0XFxcIiB2ZXJ0aWNhbEFsaWdubWVudD1cXFwidG9wXFxcIiBsb2FkZWQ9XFxcIm9uUGFuXFxcIiBzcmM9XFxcIn4vSW1nL2NvZy5wbmdcXFwiIGFsaWduZWQ9XFxcImxlZnRcXFwiPjwvSW1hZ2U+XFxyXFxuPC9HcmlkTGF5b3V0Plxcclxcbi0tPlxcclxcbiAgICA8IS0tIERlZmludGUgdGhlIGNvbnRhaW5lciBmb3IgdGhlIHBoaXNpY3Mgc2NlbmUgLS0+XFxyXFxuICAgIDxHcmlkTGF5b3V0IGlkPVxcXCJjb250YWluZXJcXFwiIHdpZHRoPVxcXCIzMDBcXFwiIGhlaWdodD1cXFwiMzAwXFxcIiBiYWNrZ3JvdW5kQ29sb3I9XFxcImxpZ2h0Z3JlZW5cXFwiIGxvYWRlZD1cXFwicGFnZUxvYWRlZFxcXCI+XFxyXFxuICAgIFxcclxcbiAgICAgICAgPCEtLSBMYWJlbCBmb3IgbWV0YSBpbmZvIGlzIG5vdGUgcmVxdWllcmVkIC0tPlxcclxcbiAgICAgICAgPExhYmVsIGlkPVxcXCJtZXRhXFxcIi8+XFxyXFxuICAgIDwvR3JpZExheW91dD5cXHJcXG48L1N0YWNrTGF5b3V0PlxcclxcblwiOyBcbmlmIChtb2R1bGUuaG90ICYmIGdsb2JhbC5faXNNb2R1bGVMb2FkZWRGb3JVSSAmJiBnbG9iYWwuX2lzTW9kdWxlTG9hZGVkRm9yVUkoXCIuL3ZpZXdzL21haW4vbWFpblNjcmVlbi54bWxcIikgKSB7XG4gICAgXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICBtb2R1bGUuaG90LmRpc3Bvc2UoKCkgPT4ge1xuICAgICAgICBnbG9iYWwuaG1yUmVmcmVzaCh7IHR5cGU6IFwibWFya3VwXCIsIHBhdGg6IFwiLi92aWV3cy9tYWluL21haW5TY3JlZW4ueG1sXCIgfSk7XG4gICAgfSk7XG59ICIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIn4vcGFja2FnZS5qc29uXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=
