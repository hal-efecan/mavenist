(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"2rMq":function(e,t,n){var r;!function(){"use strict";var a=!("undefined"==typeof window||!window.document||!window.document.createElement),i={canUseDOM:a,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:a&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:a&&!!window.screen};void 0===(r=function(){return i}.call(t,n,t,e))||(e.exports=r)}()},"5t3b":function(e,t,n){e.exports={header:"header-module--header--1C-DW",container:"header-module--container--2xPcW",link:"header-module--link--1EMsL",title:"header-module--title--3_b9J"}},"8+s/":function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}n("V+eJ"),n("bWfx"),n("f3/d"),n("/SS/"),n("hHhE");var a=n("q1tI"),i=r(a),o=r(n("2rMq")),M=r(n("Gytx"));function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var T=[],l=void 0;function N(){l=e(T.map((function(e){return e.props}))),s.canUseDOM?t(l):n&&(l=n(l))}var s=function(e){function t(){return c(this,t),u(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.peek=function(){return l},t.rewind=function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,T=[],e},t.prototype.shouldComponentUpdate=function(e){return!M(e,this.props)},t.prototype.componentWillMount=function(){T.push(this),N()},t.prototype.componentDidUpdate=function(){N()},t.prototype.componentWillUnmount=function(){var e=T.indexOf(this);T.splice(e,1),N()},t.prototype.render=function(){return i.createElement(r,this.props)},t}(a.Component);return s.displayName="SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")",s.canUseDOM=o.canUseDOM,s}}},"8k0H":function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),i=(n("tUrg"),n("Q6fv")),o=n("Wbzz"),M=n("UPyN"),c=n.n(M),u=function(){return a.a.createElement("ul",{className:c.a.container},a.a.createElement(o.Link,{className:c.a.link,activeClassName:c.a.active,to:"/"},a.a.createElement("li",{className:c.a.nav_item},"Home")),a.a.createElement(o.Link,{className:c.a.link,activeClassName:c.a.active,to:"/fashion"},a.a.createElement("li",{className:c.a.nav_item},"Fashion")),a.a.createElement(o.Link,{className:c.a.link,activeClassName:c.a.active,to:"/style"},a.a.createElement("li",{className:c.a.nav_item},"Style")),a.a.createElement(o.Link,{className:c.a.link,activeClassName:c.a.active,to:"/thoughts"},a.a.createElement("li",{className:c.a.nav_item},"Thoughts")))},T=n("5t3b"),l=n.n(T),N=function(){var e=i.data.site.siteMetadata.title;return Object(r.useEffect)((function(){if("undefined"!=typeof window){var e=window.pageYOffset;window.onscroll=function(){var t=window.pageYOffset;t<0&&(t=0);var n=document.querySelector("#head");n.style.top=t<=e?"0":"-140px",e=t}}}),[]),a.a.createElement("div",{id:"head",className:l.a.header},a.a.createElement("h1",{id:"title",className:l.a.title},a.a.createElement(o.Link,{className:l.a.link,to:"/"},e)),a.a.createElement(u,null))},s=(n("f3/d"),n("kX2+")),E=n.n(s),A=n("Hh/F"),g=n.n(A),D=n("B88h"),I=n.n(D),y=n("NaA2"),f=n.n(y),j=function(){return a.a.createElement("div",{className:f.a.social_wrapper},a.a.createElement("a",{className:f.a.link,rel:"noopener noreferrer",href:"https://www.facebook.com/themavenist-113576677029420/",target:"_blank"},a.a.createElement("img",{className:f.a.img,src:E.a,alt:"facebook",width:"23px"})),a.a.createElement("a",{className:f.a.link,rel:"noopener noreferrer",href:"https://twitter.com/the_mavenist",target:"_blank"},a.a.createElement("img",{className:f.a.img,src:g.a,alt:"twitter",width:"23px"})),a.a.createElement("a",{className:f.a.link,rel:"noopener noreferrer",href:"https://www.instagram.com/themavenist/",target:"_blank"},a.a.createElement("img",{className:f.a.img,src:I.a,alt:"instagram",width:"23px"})))},d=function(){return a.a.createElement("div",{className:f.a.container},a.a.createElement("div",{className:f.a.name_container},a.a.createElement("h3",{className:f.a.name},"The Mavenist")),a.a.createElement("div",{className:f.a.wrapper},a.a.createElement("div",{className:f.a.info},a.a.createElement(o.Link,{to:"/about"},a.a.createElement("li",null,"About"))),a.a.createElement("div",{className:f.a.social},a.a.createElement(j,null))))},p=n("kl0w"),m=n.n(p);t.a=function(e){return a.a.createElement("div",{className:m.a.container},a.a.createElement("div",{className:m.a.content},a.a.createElement(N,null),e.children),a.a.createElement(d,null))}},B88h:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMCkiPgo8cGF0aCBkPSJNMTk5LjgwNCA1OC44MDA1QzE5OS4zMzYgNDguMTczOCAxOTcuNjE3IDQwLjg2OCAxOTUuMTU2IDM0LjUzNzRDMTkyLjYxNiAyNy44MTc2IDE4OC43MDkgMjEuODAxNCAxODMuNTkgMTYuODAwMkMxNzguNTg5IDExLjcyMSAxNzIuNTMzIDcuNzc0MzUgMTY1Ljg5MSA1LjI3NDQ3QzE1OS41MjQgMi44MTI3NCAxNTIuMjU2IDEuMDk0MjcgMTQxLjYzIDAuNjI1NzMyQzEzMC45MjMgMC4xMTc1MTYgMTI3LjUyNSAwIDEwMC4zNzEgMEM3My4yMTcxIDAgNjkuODE4MyAwLjExNzUxNiA1OS4xNTE5IDAuNTg2MDUyQzQ4LjUyNTEgMS4wNTQ1OSA0MS4yMTkzIDIuNzc0NTkgMzQuODkwMiA1LjIzNDc5QzI4LjE2OSA3Ljc3NDM1IDIyLjE1MjggMTEuNjgxNCAxNy4xNTE1IDE2LjgwMDJDMTIuMDcyNCAyMS44MDE0IDguMTI3MiAyNy44NTczIDUuNjI1NzkgMzQuNDk5MkMzLjE2NDA3IDQwLjg2OCAxLjQ0NTU5IDQ4LjEzNDEgMC45NzcwNTggNTguNzYwOUMwLjQ2ODg0MSA2OS40NjcgMC4zNTEzMjYgNzIuODY1OCAwLjM1MTMyNiAxMDAuMDJDMC4zNTEzMjYgMTI3LjE3MyAwLjQ2ODg0MSAxMzAuNTcyIDAuOTM3Mzc4IDE0MS4yMzlDMS40MDU5MSAxNTEuODY1IDMuMTI1OTIgMTU5LjE3MSA1LjU4NzY0IDE2NS41MDJDOC4xMjcyIDE3Mi4yMjEgMTIuMDcyNCAxNzguMjM4IDE3LjE1MTUgMTgzLjIzOUMyMi4xNTI4IDE4OC4zMTggMjguMjA4NiAxOTIuMjY1IDM0Ljg1MDYgMTk0Ljc2NUM0MS4yMTkzIDE5Ny4yMjYgNDguNDg1NCAxOTguOTQ1IDU5LjExMzcgMTk5LjQxM0M2OS43Nzg2IDE5OS44ODMgNzMuMTc5IDE5OS45OTkgMTAwLjMzMyAxOTkuOTk5QzEyNy40ODYgMTk5Ljk5OSAxMzAuODg1IDE5OS44ODMgMTQxLjU1MiAxOTkuNDEzQzE1Mi4xNzggMTk4Ljk0NSAxNTkuNDg0IDE5Ny4yMjYgMTY1LjgxMyAxOTQuNzY1QzE3OS4yNTQgMTg5LjU2OCAxODkuODgxIDE3OC45NDEgMTk1LjA3OCAxNjUuNTAyQzE5Ny41MzggMTU5LjEzMyAxOTkuMjU4IDE1MS44NjUgMTk5LjcyNiAxNDEuMjM5QzIwMC4xOTUgMTMwLjU3MiAyMDAuMzEzIDEyNy4xNzMgMjAwLjMxMyAxMDAuMDJDMjAwLjMxMyA3Mi44NjU4IDIwMC4yNzMgNjkuNDY3IDE5OS44MDQgNTguODAwNVpNMTgxLjc5NCAxNDAuNDU3QzE4MS4zNjQgMTUwLjIyNSAxNzkuNzIzIDE1NS40OTkgMTc4LjM1NSAxNTkuMDE1QzE3NC45OTUgMTY3LjcyOCAxNjguMDggMTc0LjY0MyAxNTkuMzY3IDE3OC4wMDRDMTU1Ljg1IDE3OS4zNzIgMTUwLjUzOCAxODEuMDEyIDE0MC44MDggMTgxLjQ0MUMxMzAuMjU5IDE4MS45MTEgMTI3LjA5NiAxODIuMDI3IDEwMC40MTEgMTgyLjAyN0M3My43MjUzIDE4Mi4wMjcgNzAuNTIxOSAxODEuOTExIDYwLjAxMTEgMTgxLjQ0MUM1MC4yNDM2IDE4MS4wMTIgNDQuOTY5MSAxNzkuMzcyIDQxLjQ1MjggMTc4LjAwNEMzNy4xMTY5IDE3Ni40MDIgMzMuMTcwMiAxNzMuODYyIDI5Ljk2NjggMTcwLjU0MUMyNi42NDU4IDE2Ny4yOTggMjQuMTA2MyAxNjMuMzkxIDIyLjUwMzggMTU5LjA1NUMyMS4xMzYzIDE1NS41MzkgMTkuNDk1NyAxNTAuMjI1IDE5LjA2NjggMTQwLjQ5N0MxOC41OTY4IDEyOS45NDggMTguNDgwOCAxMjYuNzgzIDE4LjQ4MDggMTAwLjA5N0MxOC40ODA4IDczLjQxMjIgMTguNTk2OCA3MC4yMDg3IDE5LjA2NjggNTkuNjk5NUMxOS40OTU3IDQ5LjkzMTkgMjEuMTM2MyA0NC42NTc1IDIyLjUwMzggNDEuMTQxMkMyNC4xMDYzIDM2LjgwMzggMjYuNjQ1OCAzMi44NTg2IDMwLjAwNjUgMjkuNjUzNkMzMy4yNDgxIDI2LjMzMjcgMzcuMTU1MSAyMy43OTMxIDQxLjQ5MjUgMjIuMTkyMUM0NS4wMDg4IDIwLjgyNDcgNTAuMzIyOSAxOS4xODQgNjAuMDUwOCAxOC43NTM3QzcwLjU5OTcgMTguMjg1MSA3My43NjUgMTguMTY3NiAxMDAuNDQ5IDE4LjE2NzZDMTI3LjE3NCAxOC4xNjc2IDEzMC4zMzcgMTguMjg1MSAxNDAuODQ4IDE4Ljc1MzdDMTUwLjYxNiAxOS4xODQgMTU1Ljg5IDIwLjgyNDcgMTU5LjQwNiAyMi4xOTIxQzE2My43NDIgMjMuNzkzMSAxNjcuNjg5IDI2LjMzMjcgMTcwLjg5MiAyOS42NTM2QzE3NC4yMTMgMzIuODk2NyAxNzYuNzUzIDM2LjgwMzggMTc4LjM1NSA0MS4xNDEyQzE3OS43MjMgNDQuNjU3NSAxODEuMzY0IDQ5Ljk3MDEgMTgxLjc5NCA1OS42OTk1QzE4Mi4yNjIgNzAuMjQ4NCAxODIuMzggNzMuNDEyMiAxODIuMzggMTAwLjA5N0MxODIuMzggMTI2Ljc4MyAxODIuMjYyIDEyOS45MDggMTgxLjc5NCAxNDAuNDU3WiIgZmlsbD0iI0NDQ0NDQyIvPgo8cGF0aCBkPSJNMTAwLjM3MSA0OC42NDIzQzcyLjAwNjggNDguNjQyMyA0OC45OTM2IDcxLjY1NCA0OC45OTM2IDEwMC4wMkM0OC45OTM2IDEyOC4zODUgNzIuMDA2OCAxNTEuMzk3IDEwMC4zNzEgMTUxLjM5N0MxMjguNzM2IDE1MS4zOTcgMTUxLjc0OCAxMjguMzg1IDE1MS43NDggMTAwLjAyQzE1MS43NDggNzEuNjU0IDEyOC43MzYgNDguNjQyMyAxMDAuMzcxIDQ4LjY0MjNaTTEwMC4zNzEgMTMzLjM0N0M4MS45Njk3IDEzMy4zNDcgNjcuMDQzNyAxMTguNDIyIDY3LjA0MzcgMTAwLjAyQzY3LjA0MzcgODEuNjE2OSA4MS45Njk3IDY2LjY5MjQgMTAwLjM3MSA2Ni42OTI0QzExOC43NzMgNjYuNjkyNCAxMzMuNjk4IDgxLjYxNjkgMTMzLjY5OCAxMDAuMDJDMTMzLjY5OCAxMTguNDIyIDExOC43NzMgMTMzLjM0NyAxMDAuMzcxIDEzMy4zNDdaIiBmaWxsPSIjQ0NDQ0NDIi8+CjxwYXRoIGQ9Ik0xNjUuNzc1IDQ2LjYxMDlDMTY1Ljc3NSA1My4yMzQ1IDE2MC40MDUgNTguNjA1MiAxNTMuNzc5IDU4LjYwNTJDMTQ3LjE1NiA1OC42MDUyIDE0MS43ODUgNTMuMjM0NSAxNDEuNzg1IDQ2LjYxMDlDMTQxLjc4NSAzOS45ODU4IDE0Ny4xNTYgMzQuNjE2NyAxNTMuNzc5IDM0LjYxNjdDMTYwLjQwNSAzNC42MTY3IDE2NS43NzUgMzkuOTg1OCAxNjUuNzc1IDQ2LjYxMDlWNDYuNjEwOVoiIGZpbGw9IiNDQ0NDQ0MiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMCI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSJ3aGl0ZSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo="},"Hh/F":function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMCkiPgo8cGF0aCBkPSJNMTg1LjU3NiAwSDE0LjQyNDFDNi40NTc1MiAwIDAgNi40NTc1MiAwIDE0LjQyNDFWMTg1LjU3NkMwIDE5My41NDIgNi40NTc1MiAyMDAgMTQuNDI0MSAyMDBIMTg1LjU3NkMxOTMuNTQyIDIwMCAyMDAgMTkzLjU0MiAyMDAgMTg1LjU3NlYxNC40MjQxQzIwMCA2LjQ1NzUyIDE5My41NDIgMCAxODUuNTc2IDBWMFpNMTQ1LjY1OSA3Ny45Njk0QzE0NS43MDMgNzguOTUzNiAxNDUuNzI0IDc5Ljk0MjMgMTQ1LjcyNCA4MC45MzU3QzE0NS43MjQgMTExLjI2NiAxMjIuNjM4IDE0Ni4yNCA4MC40MTg0IDE0Ni4yNDJIODAuNDE5OUg4MC40MTg0QzY3LjQ1NjEgMTQ2LjI0MiA1NS4zOTQgMTQyLjQ0MiA0NS4yMzYyIDEzNS45MzFDNDcuMDMyMiAxMzYuMTQzIDQ4Ljg2MDIgMTM2LjI0OSA1MC43MTExIDEzNi4yNDlDNjEuNDY1NSAxMzYuMjQ5IDcxLjM2MjMgMTMyLjU4MSA3OS4yMTkxIDEyNi40MjRDNjkuMTcxMSAxMjYuMjM3IDYwLjY5OTUgMTE5LjYwMSA1Ny43NzU5IDExMC40ODFDNTkuMTc1MSAxMTAuNzUgNjAuNjE0IDExMC44OTYgNjIuMDg5NSAxMTAuODk2QzY0LjE4NDYgMTEwLjg5NiA2Ni4yMTQgMTEwLjYxNCA2OC4xNDI3IDExMC4wODhDNTcuNjQwMSAxMDcuOTg1IDQ5LjcyODQgOTguNzAzIDQ5LjcyODQgODcuNTg4NUM0OS43Mjg0IDg3LjQ4NDcgNDkuNzI4NCA4Ny4zOTE3IDQ5LjczMTQgODcuMjk1NUM1Mi44MjQ0IDg5LjAxNTIgNTYuMzYxNCA5MC4wNDk3IDYwLjEyNzMgOTAuMTY1N0M1My45NjQyIDg2LjA1MzUgNDkuOTEzIDc5LjAyMzcgNDkuOTEzIDcxLjA2MDJDNDkuOTEzIDY2Ljg1NDkgNTEuMDQ5OCA2Mi45MTUgNTMuMDIxMiA1OS41MjNDNjQuMzQwMiA3My40MTE2IDgxLjI1NjEgODIuNTQ1NSAxMDAuMzMzIDgzLjUwNTJDOTkuOTM5IDgxLjgyMzcgOTkuNzM2IDgwLjA3MiA5OS43MzYgNzguMjcxNUM5OS43MzYgNjUuNjAwNiAxMTAuMDE2IDU1LjMyMDcgMTIyLjY5MSA1NS4zMjA3QzEyOS4yOTQgNTUuMzIwNyAxMzUuMjU3IDU4LjExMTYgMTM5LjQ0NSA2Mi41NzMyQzE0NC42NzUgNjEuNTQxNyAxNDkuNTg1IDU5LjYzMTMgMTU0LjAyMSA1Ny4wMDIzQzE1Mi4zMDQgNjIuMzU5NiAxNDguNjY2IDY2Ljg1NDkgMTQzLjkyNyA2OS42OTc2QzE0OC41NyA2OS4xNDIyIDE1Mi45OTUgNjcuOTEwOCAxNTcuMTA4IDY2LjA4MjhDMTU0LjAzNiA3MC42ODYzIDE1MC4xNCA3NC43Mjk5IDE0NS42NTkgNzcuOTY5NFY3Ny45Njk0WiIgZmlsbD0iI0NDQ0NDQyIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwIj4KPHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg=="},JfHY:function(e,t,n){"use strict";n("eM6i"),n("jqX0");var r=n("q1tI"),a=n.n(r),i=n("TJpk"),o=function(e){var t=e.url,n=e.type,r=e.title,o=e.desc,M=e.image,c=e.locale;return a.a.createElement(i.Helmet,null,a.a.createElement("meta",{property:"og:locale",content:c}),a.a.createElement("meta",{property:"og:url",content:t}),a.a.createElement("meta",{property:"og:type",content:n}),a.a.createElement("meta",{property:"og:title",content:r}),a.a.createElement("meta",{property:"og:description",content:o}),a.a.createElement("meta",{property:"og:image",content:M}),a.a.createElement("meta",{property:"og:image:alt",content:o}))},M=function(e){var t=e.type,n=void 0===t?"summary_large_image":t,r=e.username,o=e.title,M=e.desc,c=e.image;return a.a.createElement(i.Helmet,null,r&&a.a.createElement("meta",{name:"twitter:creator",content:r}),a.a.createElement("meta",{name:"twitter:card",content:n}),a.a.createElement("meta",{name:"twitter:title",content:o}),a.a.createElement("meta",{name:"twitter:description",content:M}),a.a.createElement("meta",{name:"twitter:image",content:c}),a.a.createElement("meta",{name:"twitter:image:alt",content:M}))};t.a=function(e){var t=e.title,n=e.titleTemplate,r=e.description,c=e.pathname,u=e.article,T=void 0!==u&&u,l=e.image,N=e.siteLanguage,s=e.siteLocale,E=e.twitterUsername,A=e.author,g=void 0===A?"J Doe.":A,D=e.datePublished,I=e.dateModified,y={title:t.slice(0,70),description:r.slice(0,160),datePublished:D?null:new Date(Date.now()).toISOString(),dateModified:I?null:new Date(Date.now()).toISOString()},f=(new Date).getFullYear(),j={"@context":"http://schema.org","@type":"WebPage",url:c,headline:y.description,inLanguage:N,mainEntityOfPage:c,description:y.description,name:y.title,author:{"@type":"Person",name:g},copyrightHolder:{"@type":"Person",name:g},copyrightYear:f,creator:{"@type":"Person",name:g},publisher:{"@type":"Person",name:g},datePublished:y.datePublished,dateModified:y.dateModified,image:{"@type":"ImageObject",url:""+l}},d=[{"@type":"ListItem",item:{"@id":c,name:"Homepage"},position:1}],p=null;T&&(p={"@context":"http://schema.org","@type":"Article",author:{"@type":"Person",name:g},copyrightHolder:{"@type":"Person",name:g},copyrightYear:f,creator:{"@type":"Person",name:g},publisher:{"@type":"Organization",name:g,logo:{"@type":"ImageObject",url:""+l}},datePublished:y.datePublished,dateModified:y.dateModified,description:y.description,headline:y.title,inLanguage:N,url:c,name:y.title,image:{"@type":"ImageObject",url:l},mainEntityOfPage:c},d.push({"@type":"ListItem",item:{"@id":c,name:y.title},position:2}));var m={"@context":"http://schema.org","@type":"BreadcrumbList",description:"Breadcrumbs list",name:"Breadcrumbs",itemListElement:d};return a.a.createElement(a.a.Fragment,null,a.a.createElement(i.Helmet,{title:y.title,titleTemplate:"%s | "+n},a.a.createElement("html",{lang:N||"en"}),a.a.createElement("link",{rel:"canonical",href:c}),a.a.createElement("meta",{name:"description",content:y.description}),!T&&a.a.createElement("script",{type:"application/ld+json"},JSON.stringify(j)),T&&a.a.createElement("script",{type:"application/ld+json"},JSON.stringify(p)),a.a.createElement("script",{type:"application/ld+json"},JSON.stringify(m))),l&&a.a.createElement(a.a.Fragment,null,a.a.createElement(o,{desc:y.description,image:l,title:y.title,type:T?"article":"website",url:c,locale:s||"en_gb"}),a.a.createElement(M,{title:y.title,image:l,desc:y.description,username:E})))}},NaA2:function(e,t,n){e.exports={container:"footer-module--container--2KCTH",name_container:"footer-module--name_container--1bSi7",name:"footer-module--name--w-j9f",wrapper:"footer-module--wrapper--3L7H9",info:"footer-module--info--1mDhE",social:"footer-module--social--2y2si",social_wrapper:"footer-module--social_wrapper--3xaJC",link:"footer-module--link--NrUy3",img:"footer-module--img--692EX"}},Q6fv:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"The Mavenist"}}}}')},TJpk:function(e,t,n){n("LK8F"),n("dZ+Y"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("8+KV"),n("/SS/"),n("hHhE"),n("V+eJ"),n("HAE/"),n("91GP"),t.__esModule=!0,t.Helmet=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=l(n("q1tI")),o=l(n("17x9")),M=l(n("8+s/")),c=l(n("bmMU")),u=n("v1p5"),T=n("hFT/");function l(e){return e&&e.__esModule?e:{default:e}}function N(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function E(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var A,g,D,I=(0,M.default)(u.reducePropsToState,u.handleClientStateChange,u.mapStateOnServer)((function(){return null})),y=(A=I,D=g=function(e){function t(){return s(this,t),E(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,c.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case T.TAG_NAMES.SCRIPT:case T.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case T.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,a=e.arrayTypeChildren,i=e.newChildProps,o=e.nestedChildren;return r({},a,((t={})[n.type]=[].concat(a[n.type]||[],[r({},i,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,a=e.child,i=e.newProps,o=e.newChildProps,M=e.nestedChildren;switch(a.type){case T.TAG_NAMES.TITLE:return r({},i,((t={})[a.type]=M,t.titleAttributes=r({},o),t));case T.TAG_NAMES.BODY:return r({},i,{bodyAttributes:r({},o)});case T.TAG_NAMES.HTML:return r({},i,{htmlAttributes:r({},o)})}return r({},i,((n={})[a.type]=r({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=r({},t);return Object.keys(e).forEach((function(t){var a;n=r({},n,((a={})[t]=e[t],a))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return i.default.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,i=a.children,o=N(a,["children"]),M=(0,u.convertReactPropstoHtmlAttributes)(o);switch(n.warnOnInvalidChildren(e,i),e.type){case T.TAG_NAMES.LINK:case T.TAG_NAMES.META:case T.TAG_NAMES.NOSCRIPT:case T.TAG_NAMES.SCRIPT:case T.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:M,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:M,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=N(e,["children"]),a=r({},n);return t&&(a=this.mapChildrenToProps(t,a)),i.default.createElement(A,a)},a(t,null,[{key:"canUseDOM",set:function(e){A.canUseDOM=e}}]),t}(i.default.Component),g.propTypes={base:o.default.object,bodyAttributes:o.default.object,children:o.default.oneOfType([o.default.arrayOf(o.default.node),o.default.node]),defaultTitle:o.default.string,defer:o.default.bool,encodeSpecialCharacters:o.default.bool,htmlAttributes:o.default.object,link:o.default.arrayOf(o.default.object),meta:o.default.arrayOf(o.default.object),noscript:o.default.arrayOf(o.default.object),onChangeClientState:o.default.func,script:o.default.arrayOf(o.default.object),style:o.default.arrayOf(o.default.object),title:o.default.string,titleAttributes:o.default.object,titleTemplate:o.default.string},g.defaultProps={defer:!0,encodeSpecialCharacters:!0},g.peek=A.peek,g.rewind=function(){var e=A.rewind();return e||(e=(0,u.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},D);y.renderStatic=y.rewind,t.Helmet=y,t.default=y},UPyN:function(e,t,n){e.exports={container:"nav-module--container--2cmxS",nav_item:"nav-module--nav_item--Pjs41",active:"nav-module--active--2hEen",link:"nav-module--link--1MkHc"}},bmMU:function(e,t,n){"use strict";n("f3/d"),n("SRfc"),n("a1Th"),n("h7Nl"),n("Oyvg"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("LK8F");var r=Array.isArray,a=Object.keys,i=Object.prototype.hasOwnProperty,o="undefined"!=typeof Element;e.exports=function(e,t){try{return function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){var M,c,u,T=r(t),l=r(n);if(T&&l){if((c=t.length)!=n.length)return!1;for(M=c;0!=M--;)if(!e(t[M],n[M]))return!1;return!0}if(T!=l)return!1;var N=t instanceof Date,s=n instanceof Date;if(N!=s)return!1;if(N&&s)return t.getTime()==n.getTime();var E=t instanceof RegExp,A=n instanceof RegExp;if(E!=A)return!1;if(E&&A)return t.toString()==n.toString();var g=a(t);if((c=g.length)!==a(n).length)return!1;for(M=c;0!=M--;)if(!i.call(n,g[M]))return!1;if(o&&t instanceof Element&&n instanceof Element)return t===n;for(M=c;0!=M--;)if(!("_owner"===(u=g[M])&&t.$$typeof||e(t[u],n[u])))return!1;return!0}return t!=t&&n!=n}(e,t)}catch(n){if(n.message&&n.message.match(/stack|recursion/i)||-2146828260===n.number)return console.warn("Warning: react-fast-compare does not handle circular references.",n.name,n.message),!1;throw n}}},"hFT/":function(e,t,n){n("DNiP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("bWfx"),t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var r=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},a=(t.VALID_TAG_NAMES=Object.keys(r).map((function(e){return r[e]})),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(a).reduce((function(e,t){return e[a[t]]=t,e}),{}),t.SELF_CLOSING_TAGS=[r.NOSCRIPT,r.SCRIPT,r.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},jqX0:function(e,t,n){var r=n("XKFU"),a=n("jtBr");r(r.P+r.F*(Date.prototype.toISOString!==a),"Date",{toISOString:a})},jtBr:function(e,t,n){"use strict";var r=n("eeVq"),a=Date.prototype.getTime,i=Date.prototype.toISOString,o=function(e){return e>9?e:"0"+e};e.exports=r((function(){return"0385-07-25T07:06:39.999Z"!=i.call(new Date(-50000000000001))}))||!r((function(){i.call(new Date(NaN))}))?function(){if(!isFinite(a.call(this)))throw RangeError("Invalid time value");var e=this,t=e.getUTCFullYear(),n=e.getUTCMilliseconds(),r=t<0?"-":t>9999?"+":"";return r+("00000"+Math.abs(t)).slice(r?-6:-4)+"-"+o(e.getUTCMonth()+1)+"-"+o(e.getUTCDate())+"T"+o(e.getUTCHours())+":"+o(e.getUTCMinutes())+":"+o(e.getUTCSeconds())+"."+(n>99?n:"0"+o(n))+"Z"}:i},"kX2+":function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMCkiPgo8cGF0aCBkPSJNMTg1LjU3NiAwSDE0LjQyNDFDNi40NTc1MiAwIDAgNi40NTc1MiAwIDE0LjQyNDFWMTg1LjU3NkMwIDE5My41NDIgNi40NTc1MiAyMDAgMTQuNDI0MSAyMDBIMTA2LjgzNlYxMjIuNjU2SDgwLjg1OTRWOTIuMzgyOEgxMDYuODM2VjcwLjEwMzVDMTA2LjgzNiA0NC4yNjczIDEyMi42MDkgMzAuMjA0OCAxNDUuNjU2IDMwLjIwNDhDMTU2LjY5NCAzMC4yMDQ4IDE2Ni4xOCAzMS4wMjcyIDE2OC45NDUgMzEuMzk1VjU4LjM5ODRIMTUzLjA1M0MxNDAuNTE0IDU4LjM5ODQgMTM4LjA4NiA2NC4zNTcgMTM4LjA4NiA3My4xMDE4VjkyLjM4MjhIMTY4LjA2NkwxNjQuMTYgMTIyLjY1NkgxMzguMDg2VjIwMEgxODUuNTc2QzE5My41NDIgMjAwIDIwMCAxOTMuNTQyIDIwMCAxODUuNTc2VjE0LjQyNDFDMjAwIDYuNDU3NTIgMTkzLjU0MiAwIDE4NS41NzYgMFYwWiIgZmlsbD0iI0NDQ0NDQyIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwIj4KPHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg=="},kl0w:function(e,t,n){e.exports={container:"layout-module--container--28I70",content:"layout-module--content--dHzMz"}},tUrg:function(e,t,n){"use strict";n("OGtf")("link",(function(e){return function(t){return e(this,"a","href",t)}}))},v1p5:function(e,t,n){(function(e){n("dZ+Y"),n("KKXr"),n("eM6i"),n("8+KV"),n("LK8F"),n("V+eJ"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("0l/t"),n("bWfx"),n("DNiP"),n("pIFo"),n("91GP"),n("rE2o"),n("ioFf"),t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=c(n("q1tI")),o=c(n("MgzW")),M=n("hFT/");function c(e){return e&&e.__esModule?e:{default:e}}var u,T=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},l=function(e){var t=g(e,M.TAG_NAMES.TITLE),n=g(e,M.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,(function(){return t}));var r=g(e,M.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},N=function(e){return g(e,M.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},s=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return a({},e,t)}),{})},E=function(e,t){return t.filter((function(e){return void 0!==e[M.TAG_NAMES.BASE]})).map((function(e){return e[M.TAG_NAMES.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a++){var i=r[a].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},A=function(e,t,n){var a={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&j("Helmet: "+e+' should be of type "Array". Instead found type "'+r(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var r={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),o=0;o<i.length;o++){var c=i[o],u=c.toLowerCase();-1===t.indexOf(u)||n===M.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||u===M.TAG_PROPERTIES.REL&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(c)||c!==M.TAG_PROPERTIES.INNER_HTML&&c!==M.TAG_PROPERTIES.CSS_TEXT&&c!==M.TAG_PROPERTIES.ITEM_PROP||(n=c)}if(!n||!e[n])return!1;var T=e[n].toLowerCase();return a[n]||(a[n]={}),r[n]||(r[n]={}),!a[n][T]&&(r[n][T]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(r),c=0;c<i.length;c++){var u=i[c],T=(0,o.default)({},a[u],r[u]);a[u]=T}return e}),[]).reverse()},g=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},D=(u=Date.now(),function(e){var t=Date.now();t-u>16?(u=t,e(t)):setTimeout((function(){D(e)}),0)}),I=function(e){return clearTimeout(e)},y="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||D:e.requestAnimationFrame||D,f="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||I:e.cancelAnimationFrame||I,j=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},d=null,p=function(e,t){var n=e.baseTag,r=e.bodyAttributes,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,T=e.scriptTags,l=e.styleTags,N=e.title,s=e.titleAttributes;S(M.TAG_NAMES.BODY,r),S(M.TAG_NAMES.HTML,a),O(N,s);var E={baseTag:L(M.TAG_NAMES.BASE,n),linkTags:L(M.TAG_NAMES.LINK,i),metaTags:L(M.TAG_NAMES.META,o),noscriptTags:L(M.TAG_NAMES.NOSCRIPT,c),scriptTags:L(M.TAG_NAMES.SCRIPT,T),styleTags:L(M.TAG_NAMES.STYLE,l)},A={},g={};Object.keys(E).forEach((function(e){var t=E[e],n=t.newTags,r=t.oldTags;n.length&&(A[e]=n),r.length&&(g[e]=E[e].oldTags)})),t&&t(),u(e,A,g)},m=function(e){return Array.isArray(e)?e.join(""):e},O=function(e,t){void 0!==e&&document.title!==e&&(document.title=m(e)),S(M.TAG_NAMES.TITLE,t)},S=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(M.HELMET_ATTRIBUTE),a=r?r.split(","):[],i=[].concat(a),o=Object.keys(t),c=0;c<o.length;c++){var u=o[c],T=t[u]||"";n.getAttribute(u)!==T&&n.setAttribute(u,T),-1===a.indexOf(u)&&a.push(u);var l=i.indexOf(u);-1!==l&&i.splice(l,1)}for(var N=i.length-1;N>=0;N--)n.removeAttribute(i[N]);a.length===i.length?n.removeAttribute(M.HELMET_ATTRIBUTE):n.getAttribute(M.HELMET_ATTRIBUTE)!==o.join(",")&&n.setAttribute(M.HELMET_ATTRIBUTE,o.join(","))}},L=function(e,t){var n=document.head||document.querySelector(M.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+M.HELMET_ATTRIBUTE+"]"),a=Array.prototype.slice.call(r),i=[],o=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===M.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===M.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(M.HELMET_ATTRIBUTE,"true"),a.some((function(e,t){return o=t,n.isEqualNode(e)}))?a.splice(o,1):i.push(n)})),a.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:a,newTags:i}},w=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},h=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[M.REACT_TAG_MAP[n]||n]=e[n],t}),t)},z=function(e,t,n){switch(e){case M.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[M.HELMET_ATTRIBUTE]=!0,a=h(n,r),[i.default.createElement(M.TAG_NAMES.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=w(n),i=m(t);return a?"<"+e+" "+M.HELMET_ATTRIBUTE+'="true" '+a+">"+T(i,r)+"</"+e+">":"<"+e+" "+M.HELMET_ATTRIBUTE+'="true">'+T(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case M.ATTRIBUTE_NAMES.BODY:case M.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return h(t)},toString:function(){return w(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})[M.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach((function(e){var n=M.REACT_TAG_MAP[e]||e;if(n===M.TAG_PROPERTIES.INNER_HTML||n===M.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;a.dangerouslySetInnerHTML={__html:r}}else a[n]=t[e]})),i.default.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!(e===M.TAG_PROPERTIES.INNER_HTML||e===M.TAG_PROPERTIES.CSS_TEXT)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+T(r[t],n)+'"';return e?e+" "+a:a}),""),i=r.innerHTML||r.cssText||"",o=-1===M.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+M.HELMET_ATTRIBUTE+'="true" '+a+(o?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[M.HTML_TAG_MAP[n]||n]=e[n],t}),t)},t.handleClientStateChange=function(e){d&&f(d),e.defer?d=y((function(){p(e,(function(){d=null}))})):(p(e),d=null)},t.mapStateOnServer=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,a=e.htmlAttributes,i=e.linkTags,o=e.metaTags,c=e.noscriptTags,u=e.scriptTags,T=e.styleTags,l=e.title,N=void 0===l?"":l,s=e.titleAttributes;return{base:z(M.TAG_NAMES.BASE,t,r),bodyAttributes:z(M.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:z(M.ATTRIBUTE_NAMES.HTML,a,r),link:z(M.TAG_NAMES.LINK,i,r),meta:z(M.TAG_NAMES.META,o,r),noscript:z(M.TAG_NAMES.NOSCRIPT,c,r),script:z(M.TAG_NAMES.SCRIPT,u,r),style:z(M.TAG_NAMES.STYLE,T,r),title:z(M.TAG_NAMES.TITLE,{title:N,titleAttributes:s},r)}},t.reducePropsToState=function(e){return{baseTag:E([M.TAG_PROPERTIES.HREF],e),bodyAttributes:s(M.ATTRIBUTE_NAMES.BODY,e),defer:g(e,M.HELMET_PROPS.DEFER),encode:g(e,M.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:s(M.ATTRIBUTE_NAMES.HTML,e),linkTags:A(M.TAG_NAMES.LINK,[M.TAG_PROPERTIES.REL,M.TAG_PROPERTIES.HREF],e),metaTags:A(M.TAG_NAMES.META,[M.TAG_PROPERTIES.NAME,M.TAG_PROPERTIES.CHARSET,M.TAG_PROPERTIES.HTTPEQUIV,M.TAG_PROPERTIES.PROPERTY,M.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:A(M.TAG_NAMES.NOSCRIPT,[M.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:N(e),scriptTags:A(M.TAG_NAMES.SCRIPT,[M.TAG_PROPERTIES.SRC,M.TAG_PROPERTIES.INNER_HTML],e),styleTags:A(M.TAG_NAMES.STYLE,[M.TAG_PROPERTIES.CSS_TEXT],e),title:l(e),titleAttributes:s(M.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=y,t.warn=j}).call(this,n("yLpj"))},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n}}]);
//# sourceMappingURL=7b5008533d0e31015764126f1fded6cbd7782ed7-8ea09c152f4c38d40b1a.js.map