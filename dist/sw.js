parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"NqYy":[function(require,module,exports) {
var s="1.0.0";self.addEventListener("install",function(e){e.waitUntil(caches.open("fylo-".concat(s)).then(function(s){return s.addAll(["/","https://use.fontawesome.com/releases/v5.8.1/css/all.css","https://fonts.googleapis.com/css?family=Open+Sans|Raleway","https://unpkg.com/normalize.css@8.0.1/normalize.css","/css/flexbox.css","/css/spacing.css","/css/typography.css","/css/styles.css","/images/favicon-32x32.png","/images/bg-curvy-desktop.svg","/images/bg-curvy-mobile.svg","/images/bg-quotes.png","/images/icon-access-anywhere.svg","/images/icon-any-file.svg","/images/icon-arrow.svg","/images/icon-collaboration.svg","/images/icon-email.svg","/images/icon-location.svg","/images/icon-phone.svg","/images/icon-security.svg","/images/illustration-intro.png","/images/illustration-stay-productive.png","/images/profile-1.jpg","/images/profile-2.jpg","/images/profile-3.jpg","/index.html","/app.js"])}))}),self.addEventListener("fetch",function(s){s.respondWith(caches.match(s.request).then(function(e){return e||fetch(s.request)}))});
},{}]},{},["NqYy"], null)
//# sourceMappingURL=https://shlokd.github.io/fylo-landing-page/sw.js.map