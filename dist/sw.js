parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"NqYy":[function(require,module,exports) {
var c="1.0.0",s="https://shlokd.github.io/fylo-landing-page";self.addEventListener("install",function(a){a.waitUntil(caches.open("fylo-".concat(c)).then(function(c){return c.addAll(["/","https://use.fontawesome.com/releases/v5.8.1/css/all.css","https://fonts.googleapis.com/css?family=Open+Sans|Raleway","https://unpkg.com/normalize.css@8.0.1/normalize.css","".concat(s,"/css/flexbox.css"),"".concat(s,"/css/spacing.css"),"".concat(s,"/css/typography.css"),"".concat(s,"/css/styles.css"),"".concat(s,"/images/favicon-32x32.png"),"".concat(s,"/images/bg-curvy-desktop.svg"),"".concat(s,"/images/bg-curvy-mobile.svg"),"".concat(s,"/images/bg-quotes.png"),"".concat(s,"/images/icon-access-anywhere.svg"),"".concat(s,"/images/icon-any-file.svg"),"".concat(s,"/images/icon-arrow.svg"),"".concat(s,"/images/icon-collaboration.svg"),"".concat(s,"/images/icon-email.svg"),"".concat(s,"/images/icon-location.svg"),"".concat(s,"/images/icon-phone.svg"),"".concat(s,"/images/icon-security.svg"),"".concat(s,"/images/illustration-intro.png"),"".concat(s,"/images/illustration-stay-productive.png"),"".concat(s,"/images/profile-1.jpg"),"".concat(s,"/images/profile-2.jpg"),"".concat(s,"/images/profile-3.jpg"),"".concat(s,"/index.html"),"".concat(s,"/app.js")])}))}),self.addEventListener("fetch",function(c){c.respondWith(caches.match(c.request).then(function(s){return s||fetch(c.request)}))});
},{}]},{},["NqYy"], null)
//# sourceMappingURL=https://shlokd.github.io/fylo-landing-page/sw.js.map