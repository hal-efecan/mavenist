(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"2rMq":function(e,t,n){var r;!function(){"use strict";var a=!("undefined"==typeof window||!window.document||!window.document.createElement),o={canUseDOM:a,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:a&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:a&&!!window.screen};void 0===(r=function(){return o}.call(t,n,t,e))||(e.exports=r)}()},"5t3b":function(e,t,n){e.exports={header:"header-module--header--1C-DW",container:"header-module--container--2xPcW",link:"header-module--link--1EMsL",title:"header-module--title--3_b9J"}},"8+s/":function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}n("V+eJ"),n("bWfx"),n("f3/d"),n("/SS/"),n("hHhE");var a=n("q1tI"),o=r(a),i=r(n("2rMq")),c=r(n("Gytx"));function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var s=[],T=void 0;function f(){T=e(s.map((function(e){return e.props}))),d.canUseDOM?t(T):n&&(T=n(T))}var d=function(e){function t(){return u(this,t),l(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.peek=function(){return T},t.rewind=function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=T;return T=void 0,s=[],e},t.prototype.shouldComponentUpdate=function(e){return!c(e,this.props)},t.prototype.componentWillMount=function(){s.push(this),f()},t.prototype.componentDidUpdate=function(){f()},t.prototype.componentWillUnmount=function(){var e=s.indexOf(this);s.splice(e,1),f()},t.prototype.render=function(){return o.createElement(r,this.props)},t}(a.Component);return d.displayName="SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")",d.canUseDOM=i.canUseDOM,d}}},"9Itc":function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"The Mavenist","description":"A starter blog demonstrating what Gatsby can do.","social":{"twitter":"kylemathews"}}}}}')},Bl7J:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=(n("tUrg"),n("KEYx")),i=n("nu77"),c=n("Wbzz"),u=n("UPyN"),l=n.n(u),s=function(){var e=i.data.site.siteMetadata.pathPrefix;return console.log("pathPrefix",e),a.a.createElement("ul",{className:l.a.container},a.a.createElement(c.Link,{className:l.a.link,activeClassName:l.a.active,to:"/"+e},a.a.createElement("li",{className:l.a.nav_item},"Home")),a.a.createElement(c.Link,{className:l.a.link,activeClassName:l.a.active,to:"/"+e+"/shop"},a.a.createElement("li",{className:l.a.nav_item},"Shop")))},T=n("5t3b"),f=n.n(T),d=n("Fy6p"),p=n("qCPk"),E=n.n(p),h=n("cC7H"),m=n.n(h),A=function(){var e=Object(r.useContext)(d.a);return a.a.createElement(c.Link,{to:"/review",className:f.a.link},0!==e.qty?a.a.createElement("div",{className:m.a.container},a.a.createElement("div",{className:m.a.circle},e.qty),a.a.createElement("img",{style:{padding:"0",margin:"0"},src:E.a,width:"30px",alt:"Logo"})):null)},S=function(){var e=o.data.site.siteMetadata,t=e.title,n=e.pathPrefix;return a.a.createElement("div",{className:f.a.header},a.a.createElement("h1",{className:f.a.title},a.a.createElement(c.Link,{className:f.a.link,to:"/"+n},t)),a.a.createElement("div",{className:f.a.container},a.a.createElement(A,null)),a.a.createElement(s,null))},y=n("NaA2"),R=n.n(y),b=function(){return a.a.createElement("div",{className:R.a.container},a.a.createElement("h1",{className:R.a.title},"Footer"))},v=n("kl0w"),M=n.n(v);t.a=function(e){return a.a.createElement("div",{className:M.a.container},a.a.createElement("div",{className:M.a.content},a.a.createElement(S,null),e.children),a.a.createElement(b,null))}},Gytx:function(e,t,n){n("2Spj"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),e.exports=function(e,t,n,r){var a=n?n.call(r,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var o=Object.keys(e),i=Object.keys(t);if(o.length!==i.length)return!1;for(var c=Object.prototype.hasOwnProperty.bind(t),u=0;u<o.length;u++){var l=o[u];if(!c(l))return!1;var s=e[l],T=t[l];if(!1===(a=n?n.call(r,s,T,l):void 0)||void 0===a&&s!==T)return!1}return!0}},"HAE/":function(e,t,n){var r=n("XKFU");r(r.S+r.F*!n("nh4g"),"Object",{defineProperty:n("hswa").f})},KEYx:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"The Mavenist","pathPrefix":"/themavenist"}}}}')},NaA2:function(e,t,n){e.exports={container:"footer-module--container--2KCTH",title:"footer-module--title--1tsa-"}},OGtf:function(e,t,n){var r=n("XKFU"),a=n("eeVq"),o=n("vhPU"),i=/"/g,c=function(e,t,n,r){var a=String(o(e)),c="<"+t;return""!==n&&(c+=" "+n+'="'+String(r).replace(i,"&quot;")+'"'),c+">"+a+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(c),r(r.P+r.F*a((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",n)}},Oyvg:function(e,t,n){var r=n("dyZX"),a=n("Xbzi"),o=n("hswa").f,i=n("kJMx").f,c=n("quPj"),u=n("C/va"),l=r.RegExp,s=l,T=l.prototype,f=/a/g,d=/a/g,p=new l(f)!==f;if(n("nh4g")&&(!p||n("eeVq")((function(){return d[n("K0xU")("match")]=!1,l(f)!=f||l(d)==d||"/a/i"!=l(f,"i")})))){l=function(e,t){var n=this instanceof l,r=c(e),o=void 0===t;return!n&&r&&e.constructor===l&&o?e:a(p?new s(r&&!o?e.source:e,t):s((r=e instanceof l)?e.source:e,r&&o?u.call(e):t),n?this:T,l)};for(var E=function(e){e in l||o(l,e,{configurable:!0,get:function(){return s[e]},set:function(t){s[e]=t}})},h=i(s),m=0;h.length>m;)E(h[m++]);T.constructor=l,l.prototype=T,n("KroJ")(r,"RegExp",l)}n("elZq")("RegExp")},TJpk:function(e,t,n){n("LK8F"),n("dZ+Y"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("8+KV"),n("/SS/"),n("hHhE"),n("V+eJ"),n("HAE/"),n("91GP"),t.__esModule=!0,t.Helmet=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=T(n("q1tI")),i=T(n("17x9")),c=T(n("8+s/")),u=T(n("bmMU")),l=n("v1p5"),s=n("hFT/");function T(e){return e&&e.__esModule?e:{default:e}}function f(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var E,h,m,A=(0,c.default)(l.reducePropsToState,l.handleClientStateChange,l.mapStateOnServer)((function(){return null})),S=(E=A,m=h=function(e){function t(){return d(this,t),p(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,u.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case s.TAG_NAMES.SCRIPT:case s.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case s.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,a=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return r({},a,((t={})[n.type]=[].concat(a[n.type]||[],[r({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,a=e.child,o=e.newProps,i=e.newChildProps,c=e.nestedChildren;switch(a.type){case s.TAG_NAMES.TITLE:return r({},o,((t={})[a.type]=c,t.titleAttributes=r({},i),t));case s.TAG_NAMES.BODY:return r({},o,{bodyAttributes:r({},i)});case s.TAG_NAMES.HTML:return r({},o,{htmlAttributes:r({},i)})}return r({},o,((n={})[a.type]=r({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=r({},t);return Object.keys(e).forEach((function(t){var a;n=r({},n,((a={})[t]=e[t],a))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return o.default.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,o=a.children,i=f(a,["children"]),c=(0,l.convertReactPropstoHtmlAttributes)(i);switch(n.warnOnInvalidChildren(e,o),e.type){case s.TAG_NAMES.LINK:case s.TAG_NAMES.META:case s.TAG_NAMES.NOSCRIPT:case s.TAG_NAMES.SCRIPT:case s.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:c,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:c,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=f(e,["children"]),a=r({},n);return t&&(a=this.mapChildrenToProps(t,a)),o.default.createElement(E,a)},a(t,null,[{key:"canUseDOM",set:function(e){E.canUseDOM=e}}]),t}(o.default.Component),h.propTypes={base:i.default.object,bodyAttributes:i.default.object,children:i.default.oneOfType([i.default.arrayOf(i.default.node),i.default.node]),defaultTitle:i.default.string,defer:i.default.bool,encodeSpecialCharacters:i.default.bool,htmlAttributes:i.default.object,link:i.default.arrayOf(i.default.object),meta:i.default.arrayOf(i.default.object),noscript:i.default.arrayOf(i.default.object),onChangeClientState:i.default.func,script:i.default.arrayOf(i.default.object),style:i.default.arrayOf(i.default.object),title:i.default.string,titleAttributes:i.default.object,titleTemplate:i.default.string},h.defaultProps={defer:!0,encodeSpecialCharacters:!0},h.peek=E.peek,h.rewind=function(){var e=E.rewind();return e||(e=(0,l.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},m);S.renderStatic=S.rewind,t.Helmet=S,t.default=S},UPyN:function(e,t,n){e.exports={container:"nav-module--container--2cmxS",nav_item:"nav-module--nav_item--Pjs41",active:"nav-module--active--2hEen",link:"nav-module--link--1MkHc"}},bmMU:function(e,t,n){"use strict";n("f3/d"),n("SRfc"),n("a1Th"),n("h7Nl"),n("Oyvg"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("LK8F");var r=Array.isArray,a=Object.keys,o=Object.prototype.hasOwnProperty,i="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var c,u,l,s=r(t),T=r(n);if(s&&T){if((u=t.length)!=n.length)return!1;for(c=u;0!=c--;)if(!e(t[c],n[c]))return!1;return!0}if(s!=T)return!1;var f=t instanceof Date,d=n instanceof Date;if(f!=d)return!1;if(f&&d)return t.getTime()==n.getTime();var p=t instanceof RegExp,E=n instanceof RegExp;if(p!=E)return!1;if(p&&E)return t.toString()==n.toString();var h=a(t);if((u=h.length)!==a(n).length)return!1;for(c=u;0!=c--;)if(!o.call(n,h[c]))return!1;if(i&&t instanceof Element&&n instanceof Element)return t===n;for(c=u;0!=c--;)if(!("_owner"===(l=h[c])&&t.$$typeof||e(t[l],n[l])))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},cC7H:function(e,t,n){e.exports={container:"shopping-module--container--37iYk",circle:"shopping-module--circle--3RLUA"}},"hFT/":function(e,t,n){n("DNiP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("bWfx"),t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var r=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},a=(t.VALID_TAG_NAMES=Object.keys(r).map((function(e){return r[e]})),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(a).reduce((function(e,t){return e[a[t]]=t,e}),{}),t.SELF_CLOSING_TAGS=[r.NOSCRIPT,r.SCRIPT,r.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},kl0w:function(e,t,n){e.exports={container:"layout-module--container--28I70",content:"layout-module--content--dHzMz"}},nu77:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"pathPrefix":"/themavenist"}}}}')},qCPk:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CjxyZWN0IHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgZmlsbD0idXJsKCNwYXR0ZXJuMCkiLz4KPGRlZnM+CjxwYXR0ZXJuIGlkPSJwYXR0ZXJuMCIgcGF0dGVybkNvbnRlbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIHdpZHRoPSIxIiBoZWlnaHQ9IjEiPgo8dXNlIHhsaW5rOmhyZWY9IiNpbWFnZTAiIHRyYW5zZm9ybT0ic2NhbGUoMC4wMTI1KSIvPgo8L3BhdHRlcm4+CjxpbWFnZSBpZD0iaW1hZ2UwIiB3aWR0aD0iODAiIGhlaWdodD0iODAiIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRkFBQUFCUUNBWUFBQUNPRWZLdEFBQUFCbUpMUjBRQS93RC9BUCtndmFlVEFBQURkVWxFUVZSNG5PMmNQVThVUVJpQUh4VU5WRUN0aGJGQUU4RkNSQlE3by93Q0MvNk5zVkQwTnhoaW9RWFJSQXFpaFVwbGpnUXRTSXhSWTJzZ3NWRFFBZ2hHc1hobmNudkw3V1ozZG5adWIvZDlrczNlemMzT3g4Tjg3ZXdHVUJSRlVSUkZVUlJGVVlReDREbncyeHhQZ1ZNOUxWRWZNUTFzQVFleDQ2ZjVUVWxoR3RoR2hMMEFUaUl0YjhtRWJhTVNFNG5LTzZDenl3NEFpNmpFUk9MeTRnSkJKU1lTbGJjSVBES2ZseEJwVVZSaWpMaThBZUEwN1VuRWhrVlJpWVpKWkdZOVFKWXBVVkVYZ1IvbXQyY2NsbmdNZUV4YjRwV3lDMXMxdXJXOEtBUEFTOXJqb2JiRUNGbmtSY1hraVZ0N2lXbmRGcVJyUHFGVGlIWm5nNHM4UytNbEZwRm5hYXhFSC9Jc2paUG9VNTZsTVJMTGtHZXB2Y1F5NVZscUt6R0VQRXZ0SklhVVo2bU54RjdJczFSUzRnbmdBYkRKNGUzMXBod2J3THh4a1p2N0ZhaEFWWTU3TGdJM3pNVlhYUzZ1Q1RPMFcySnVyUDJtaytyaGFNQ0MxQklWV0JBVldKQTBnWnZtUEJPaUlCWGxtams3VFNMemRFN2xjeWE4QmJ5TnhZMkg5ZnYzT1RycmZwY0UwbHJnYldRdGFGdWl2WFA0eCtGWktSN1c3OTl0WFRlUU5lQWRDbkRUSkw1YUpKRStZeFdwOHcwZmlRMERmNEZkSEc5cCtvemp3QTdTS2tkOEpmb1orWXRNK2txd3dseEM2dm9wUytTc3k1ZzFjNjc5YzFmYWRYeVhKWEpXZ1RheEpnbGNTNDJWazBta1dYOHBtRTYzSlZDSThEemtHcTZ5dHNBUHlDUXlCb3k2bFF2b3ZnUUtFWjZWRWVBc3NJZlUyU3N0cEhDenZoT3VFTE5JSFZ0Wkw4aHpMOXlFaWFTVThjOWliMitXQzZUaFkweWJBRmFRSWFYTVhlaGRrODk0V29YaUQxL1M4TkVDaTQ1cEU4aUtZTEJBR2JJeUNGd0gzZ05Ud0VjZmlYNUhLblRHUjJJT3JKajhIK0x4TGlHQkVXREI1UGZhVjZMTGRPN01oTVoyMjdMbFdVWk5manRKRWZKdXFCYnR4a1hIUU50MXR4M3p6OHVXT1E4bFJRZ3RNUFM2cm5TTzVJdy9qTHg5c0c4Kzczc3ZVVHE5bE5uVlZkNFcrQXY0aW5TbEMwVkxWQWRjSGlvVjJWam94YjF0cWJnSXRPUGdaWWRyYXpjR3V1QnJaOGFGWHJ3dDRUM1A2Sloza1owWkZ5b24wS1VML3dIV2tWbHB5ckZRdGNIMXpZUW03TXlVeWkya1dhOFR0aHRYcmd1N01nUjhpeVFlK2doSmFYbWVRM1lweXQ2WHE2M0FYbEE1Z2YzMmV0dWVPWWZjemdMcFpiWGdEZElhRmloLzhocWwvUTh3WHBXY1Z6REdDVC9tN2dEblExUXVGT09FbWJ4MmtaWlhLM21Lb2lpS29paUtVZ24rQTdHcXByWFhpdEhuQUFBQUFFbEZUa1N1UW1DQyIvPgo8L2RlZnM+Cjwvc3ZnPgo="},tUrg:function(e,t,n){"use strict";n("OGtf")("link",(function(e){return function(t){return e(this,"a","href",t)}}))},v1p5:function(e,t,n){(function(e){n("dZ+Y"),n("KKXr"),n("eM6i"),n("8+KV"),n("LK8F"),n("V+eJ"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("0l/t"),n("bWfx"),n("DNiP"),n("pIFo"),n("91GP"),n("rE2o"),n("ioFf"),t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=u(n("q1tI")),i=u(n("MgzW")),c=n("hFT/");function u(e){return e&&e.__esModule?e:{default:e}}var l,s=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},T=function(e){var t=h(e,c.TAG_NAMES.TITLE),n=h(e,c.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,(function(){return t}));var r=h(e,c.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},f=function(e){return h(e,c.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},d=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return a({},e,t)}),{})},p=function(e,t){return t.filter((function(e){return void 0!==e[c.TAG_NAMES.BASE]})).map((function(e){return e[c.TAG_NAMES.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var o=r[a].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},E=function(e,t,n){var a={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&R("Helmet: "+e+' should be of type "Array". Instead found type "'+r(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var r={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),i=0;i<o.length;i++){var u=o[i],l=u.toLowerCase();-1===t.indexOf(l)||n===c.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||l===c.TAG_PROPERTIES.REL&&"stylesheet"===e[l].toLowerCase()||(n=l),-1===t.indexOf(u)||u!==c.TAG_PROPERTIES.INNER_HTML&&u!==c.TAG_PROPERTIES.CSS_TEXT&&u!==c.TAG_PROPERTIES.ITEM_PROP||(n=u)}if(!n||!e[n])return!1;var s=e[n].toLowerCase();return a[n]||(a[n]={}),r[n]||(r[n]={}),!a[n][s]&&(r[n][s]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(r),u=0;u<o.length;u++){var l=o[u],s=(0,i.default)({},a[l],r[l]);a[l]=s}return e}),[]).reverse()},h=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},m=(l=Date.now(),function(e){var t=Date.now();t-l>16?(l=t,e(t)):setTimeout((function(){m(e)}),0)}),A=function(e){return clearTimeout(e)},S="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||m:e.requestAnimationFrame||m,y="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||A:e.cancelAnimationFrame||A,R=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},b=null,v=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,u=e.noscriptTags,l=e.onChangeClientState,s=e.scriptTags,T=e.styleTags,f=e.title,d=e.titleAttributes;P(c.TAG_NAMES.BODY,r),P(c.TAG_NAMES.HTML,a),N(f,d);var p={baseTag:O(c.TAG_NAMES.BASE,n),linkTags:O(c.TAG_NAMES.LINK,o),metaTags:O(c.TAG_NAMES.META,i),noscriptTags:O(c.TAG_NAMES.NOSCRIPT,u),scriptTags:O(c.TAG_NAMES.SCRIPT,s),styleTags:O(c.TAG_NAMES.STYLE,T)},E={},h={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(E[e]=n),r.length&&(h[e]=p[e].oldTags)})),t&&t(),l(e,E,h)},M=function(e){return Array.isArray(e)?e.join(""):e},N=function(e,t){void 0!==e&&document.title!==e&&(document.title=M(e)),P(c.TAG_NAMES.TITLE,t)},P=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(c.HELMET_ATTRIBUTE),a=r?r.split(","):[],o=[].concat(a),i=Object.keys(t),u=0;u<i.length;u++){var l=i[u],s=t[l]||"";n.getAttribute(l)!==s&&n.setAttribute(l,s),-1===a.indexOf(l)&&a.push(l);var T=o.indexOf(l);-1!==T&&o.splice(T,1)}for(var f=o.length-1;f>=0;f--)n.removeAttribute(o[f]);a.length===o.length?n.removeAttribute(c.HELMET_ATTRIBUTE):n.getAttribute(c.HELMET_ATTRIBUTE)!==i.join(",")&&n.setAttribute(c.HELMET_ATTRIBUTE,i.join(","))}},O=function(e,t){var n=document.head||document.querySelector(c.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+c.HELMET_ATTRIBUTE+"]"),a=Array.prototype.slice.call(r),o=[],i=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===c.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===c.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var u=void 0===t[r]?"":t[r];n.setAttribute(r,u)}n.setAttribute(c.HELMET_ATTRIBUTE,"true"),a.some((function(e,t){return i=t,n.isEqualNode(e)}))?a.splice(i,1):o.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:o}},_=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},g=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[c.REACT_TAG_MAP[n]||n]=e[n],t}),t)},w=function(e,t,n){switch(e){case c.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[c.HELMET_ATTRIBUTE]=!0,a=g(n,r),[o.default.createElement(c.TAG_NAMES.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=_(n),o=M(t);return a?"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+a+">"+s(o,r)+"</"+e+">":"<"+e+" "+c.HELMET_ATTRIBUTE+'="true">'+s(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case c.ATTRIBUTE_NAMES.BODY:case c.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return g(t)},toString:function(){return _(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})[c.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach((function(e){var n=c.REACT_TAG_MAP[e]||e;if(n===c.TAG_PROPERTIES.INNER_HTML||n===c.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),o.default.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===c.TAG_PROPERTIES.INNER_HTML||e===c.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+s(r[t],n)+'"';return e?e+" "+a:a}),""),o=r.innerHTML||r.cssText||"",i=-1===c.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+c.HELMET_ATTRIBUTE+'="true" '+a+(i?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[c.HTML_TAG_MAP[n]||n]=e[n],t}),t)},t.handleClientStateChange=function(e){b&&y(b),e.defer?b=S((function(){v(e,(function(){b=null}))})):(v(e),b=null)},t.mapStateOnServer=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,o=e.linkTags,i=e.metaTags,u=e.noscriptTags,l=e.scriptTags,s=e.styleTags,T=e.title,f=void 0===T?"":T,d=e.titleAttributes;return{base:w(c.TAG_NAMES.BASE,t,r),bodyAttributes:w(c.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:w(c.ATTRIBUTE_NAMES.HTML,a,r),link:w(c.TAG_NAMES.LINK,o,r),meta:w(c.TAG_NAMES.META,i,r),noscript:w(c.TAG_NAMES.NOSCRIPT,u,r),script:w(c.TAG_NAMES.SCRIPT,l,r),style:w(c.TAG_NAMES.STYLE,s,r),title:w(c.TAG_NAMES.TITLE,{title:f,titleAttributes:d},r)}},t.reducePropsToState=function(e){return{baseTag:p([c.TAG_PROPERTIES.HREF],e),bodyAttributes:d(c.ATTRIBUTE_NAMES.BODY,e),defer:h(e,c.HELMET_PROPS.DEFER),encode:h(e,c.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:d(c.ATTRIBUTE_NAMES.HTML,e),linkTags:E(c.TAG_NAMES.LINK,[c.TAG_PROPERTIES.REL,c.TAG_PROPERTIES.HREF],e),metaTags:E(c.TAG_NAMES.META,[c.TAG_PROPERTIES.NAME,c.TAG_PROPERTIES.CHARSET,c.TAG_PROPERTIES.HTTPEQUIV,c.TAG_PROPERTIES.PROPERTY,c.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:E(c.TAG_NAMES.NOSCRIPT,[c.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:f(e),scriptTags:E(c.TAG_NAMES.SCRIPT,[c.TAG_PROPERTIES.SRC,c.TAG_PROPERTIES.INNER_HTML],e),styleTags:E(c.TAG_NAMES.STYLE,[c.TAG_PROPERTIES.CSS_TEXT],e),title:T(e),titleAttributes:d(c.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=S,t.warn=R}).call(this,n("yLpj"))},vrFN:function(e,t,n){"use strict";var r=n("9Itc"),a=n("q1tI"),o=n.n(a),i=n("TJpk"),c=n.n(i),u=function(e){var t=e.description,n=e.lang,a=e.meta,i=e.title,u=r.data.site,l=t||u.siteMetadata.description;return o.a.createElement(c.a,{htmlAttributes:{lang:n},title:i,titleTemplate:"%s | "+u.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:i},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:u.siteMetadata.social.twitter},{name:"twitter:title",content:i},{name:"twitter:description",content:l}].concat(a)})};u.defaultProps={lang:"en",meta:[],description:""},t.a=u},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n}}]);
//# sourceMappingURL=e50e9c162871c1d91fba5ce567a5656e16dc6783-a92d89ee6aa33d2097a5.js.map