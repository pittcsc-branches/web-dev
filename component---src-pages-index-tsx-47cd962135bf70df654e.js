(self.webpackChunkpitt_csc_web_dev=self.webpackChunkpitt_csc_web_dev||[]).push([[691],{2993:function(t){var e="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(t,a){if(t===a)return!0;if(t&&a&&"object"==typeof t&&"object"==typeof a){if(t.constructor!==a.constructor)return!1;var s,c,l,u;if(Array.isArray(t)){if((s=t.length)!=a.length)return!1;for(c=s;0!=c--;)if(!i(t[c],a[c]))return!1;return!0}if(r&&t instanceof Map&&a instanceof Map){if(t.size!==a.size)return!1;for(u=t.entries();!(c=u.next()).done;)if(!a.has(c.value[0]))return!1;for(u=t.entries();!(c=u.next()).done;)if(!i(c.value[1],a.get(c.value[0])))return!1;return!0}if(n&&t instanceof Set&&a instanceof Set){if(t.size!==a.size)return!1;for(u=t.entries();!(c=u.next()).done;)if(!a.has(c.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(a)){if((s=t.length)!=a.length)return!1;for(c=s;0!=c--;)if(t[c]!==a[c])return!1;return!0}if(t.constructor===RegExp)return t.source===a.source&&t.flags===a.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===a.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===a.toString();if((s=(l=Object.keys(t)).length)!==Object.keys(a).length)return!1;for(c=s;0!=c--;)if(!Object.prototype.hasOwnProperty.call(a,l[c]))return!1;if(e&&t instanceof Element)return!1;for(c=s;0!=c--;)if(("_owner"!==l[c]&&"__v"!==l[c]&&"__o"!==l[c]||!t.$$typeof)&&!i(t[l[c]],a[l[c]]))return!1;return!0}return t!=t&&a!=a}t.exports=function(t,e){try{return i(t,e)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},4839:function(t,e,r){"use strict";var n,o=r(7294),i=(n=o)&&"object"==typeof n&&"default"in n?n.default:n;function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var s=!("undefined"==typeof window||!window.document||!window.document.createElement);t.exports=function(t,e,r){if("function"!=typeof t)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof e)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var c,l=[];function u(){c=t(l.map((function(t){return t.props}))),p.canUseDOM?e(c):r&&(c=r(c))}var p=function(t){var e,r;function o(){return t.apply(this,arguments)||this}r=t,(e=o).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r,o.peek=function(){return c},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var t=c;return c=void 0,l=[],t};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){l.push(this),u()},a.componentDidUpdate=function(){u()},a.componentWillUnmount=function(){var t=l.indexOf(this);l.splice(t,1),u()},a.render=function(){return i.createElement(n,this.props)},o}(o.PureComponent);return a(p,"displayName","SideEffect("+function(t){return t.displayName||t.name||"Component"}(n)+")"),a(p,"canUseDOM",s),p}}},7969:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return Zt}});var n=r(3964),o=r(7294),i=["children"];var a,s,c,l,u={name:"1fo4c6i",styles:'*,*::before,*::after{box-sizing:border-box;}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:Poppins,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";}body{margin:0;font-family:inherit;line-height:inherit;}hr{height:0;color:inherit;border-top-width:1px;}abbr[title]{text-decoration:underline dotted;}b,strong{font-weight:bolder;}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Consolas,\'Liberation Mono\',Menlo,monospace;font-size:1em;}small{font-size:80%;}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline;}sub{bottom:-0.25em;}sup{top:-0.5em;}table{text-indent:0;border-color:inherit;border-collapse:collapse;}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:inherit;margin:0;padding:0;color:inherit;}button,select{text-transform:none;}button,[type=\'button\'],[type=\'reset\'],[type=\'submit\']{-webkit-appearance:button;}::-moz-focus-inner{border-style:none;padding:0;}:-moz-focusring{outline:1px dotted ButtonText;}:-moz-ui-invalid{box-shadow:none;}legend{padding:0;}progress{vertical-align:baseline;}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto;}[type=\'search\']{-webkit-appearance:textfield;outline-offset:-2px;}::-webkit-search-decoration{-webkit-appearance:none;}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}summary{display:list-item;}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0;}button{background-color:transparent;background-image:none;}button:focus:not(/**/){outline:1px dotted;}button:focus{outline:5px auto -webkit-focus-ring-color;}fieldset{margin:0;padding:0;}ol,ul{list-style:none;margin:0;padding:0;}*,::before,::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb;}img{border-style:solid;}textarea{resize:vertical;}input::placeholder,textarea::placeholder{color:#9ca3af;}button,[role="button"]{cursor:pointer;}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit;}a{color:inherit;text-decoration:inherit;}pre,code,kbd,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle;}img,video{max-width:100%;height:auto;}@keyframes spin{to{transform:rotate(360deg);}}@keyframes ping{75%,100%{transform:scale(2);opacity:0;}}@keyframes pulse{50%{opacity:.5;}}@keyframes bounce{0%,100%{transform:translateY(-25%);animation-timing-function:cubic-bezier(0.8,0,1,1);}50%{transform:none;animation-timing-function:cubic-bezier(0,0,0.2,1);}}*{--tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59, 130, 246, 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;}'},p=function(){return(0,n.tZ)(n.xB,{styles:u})},d=function(t){var e=t.children,r=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,i);return(0,n.tZ)("div",r,(0,n.tZ)(p,null),e)},f=r(18),m=r(5697),w=r.n(m),h=r(4839),y=r.n(h),b=r(2993),g=r.n(b),v=r(6494),x=r.n(v),T="bodyAttributes",k="htmlAttributes",C="titleAttributes",S={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},A=(Object.keys(S).map((function(t){return S[t]})),"charset"),O="cssText",E="href",j="http-equiv",P="innerHTML",z="itemprop",L="name",M="property",I="rel",N="src",_="target",Y={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},Z="defaultTitle",R="defer",B="encodeSpecialCharacters",D="onChangeClientState",q="titleTemplate",F=Object.keys(Y).reduce((function(t,e){return t[Y[e]]=e,t}),{}),H=[S.NOSCRIPT,S.SCRIPT,S.STYLE],U="data-react-helmet",X="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},W=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},K=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),V=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},J=function(t,e){var r={};for(var n in t)e.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n]);return r},G=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},$=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===e?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},Q=function(t){var e=ot(t,S.TITLE),r=ot(t,q);if(r&&e)return r.replace(/%s/g,(function(){return Array.isArray(e)?e.join(""):e}));var n=ot(t,Z);return e||n||void 0},tt=function(t){return ot(t,D)||function(){}},et=function(t,e){return e.filter((function(e){return void 0!==e[t]})).map((function(e){return e[t]})).reduce((function(t,e){return V({},t,e)}),{})},rt=function(t,e){return e.filter((function(t){return void 0!==t[S.BASE]})).map((function(t){return t[S.BASE]})).reverse().reduce((function(e,r){if(!e.length)for(var n=Object.keys(r),o=0;o<n.length;o++){var i=n[o].toLowerCase();if(-1!==t.indexOf(i)&&r[i])return e.concat(r)}return e}),[])},nt=function(t,e,r){var n={};return r.filter((function(e){return!!Array.isArray(e[t])||(void 0!==e[t]&&lt("Helmet: "+t+' should be of type "Array". Instead found type "'+X(e[t])+'"'),!1)})).map((function(e){return e[t]})).reverse().reduce((function(t,r){var o={};r.filter((function(t){for(var r=void 0,i=Object.keys(t),a=0;a<i.length;a++){var s=i[a],c=s.toLowerCase();-1===e.indexOf(c)||r===I&&"canonical"===t[r].toLowerCase()||c===I&&"stylesheet"===t[c].toLowerCase()||(r=c),-1===e.indexOf(s)||s!==P&&s!==O&&s!==z||(r=s)}if(!r||!t[r])return!1;var l=t[r].toLowerCase();return n[r]||(n[r]={}),o[r]||(o[r]={}),!n[r][l]&&(o[r][l]=!0,!0)})).reverse().forEach((function(e){return t.push(e)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var s=i[a],c=x()({},n[s],o[s]);n[s]=c}return t}),[]).reverse()},ot=function(t,e){for(var r=t.length-1;r>=0;r--){var n=t[r];if(n.hasOwnProperty(e))return n[e]}return null},it=(a=Date.now(),function(t){var e=Date.now();e-a>16?(a=e,t(e)):setTimeout((function(){it(t)}),0)}),at=function(t){return clearTimeout(t)},st="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||it:r.g.requestAnimationFrame||it,ct="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||at:r.g.cancelAnimationFrame||at,lt=function(t){return console&&"function"==typeof console.warn&&console.warn(t)},ut=null,pt=function(t,e){var r=t.baseTag,n=t.bodyAttributes,o=t.htmlAttributes,i=t.linkTags,a=t.metaTags,s=t.noscriptTags,c=t.onChangeClientState,l=t.scriptTags,u=t.styleTags,p=t.title,d=t.titleAttributes;mt(S.BODY,n),mt(S.HTML,o),ft(p,d);var f={baseTag:wt(S.BASE,r),linkTags:wt(S.LINK,i),metaTags:wt(S.META,a),noscriptTags:wt(S.NOSCRIPT,s),scriptTags:wt(S.SCRIPT,l),styleTags:wt(S.STYLE,u)},m={},w={};Object.keys(f).forEach((function(t){var e=f[t],r=e.newTags,n=e.oldTags;r.length&&(m[t]=r),n.length&&(w[t]=f[t].oldTags)})),e&&e(),c(t,m,w)},dt=function(t){return Array.isArray(t)?t.join(""):t},ft=function(t,e){void 0!==t&&document.title!==t&&(document.title=dt(t)),mt(S.TITLE,e)},mt=function(t,e){var r=document.getElementsByTagName(t)[0];if(r){for(var n=r.getAttribute(U),o=n?n.split(","):[],i=[].concat(o),a=Object.keys(e),s=0;s<a.length;s++){var c=a[s],l=e[c]||"";r.getAttribute(c)!==l&&r.setAttribute(c,l),-1===o.indexOf(c)&&o.push(c);var u=i.indexOf(c);-1!==u&&i.splice(u,1)}for(var p=i.length-1;p>=0;p--)r.removeAttribute(i[p]);o.length===i.length?r.removeAttribute(U):r.getAttribute(U)!==a.join(",")&&r.setAttribute(U,a.join(","))}},wt=function(t,e){var r=document.head||document.querySelector(S.HEAD),n=r.querySelectorAll(t+"["+"data-react-helmet]"),o=Array.prototype.slice.call(n),i=[],a=void 0;return e&&e.length&&e.forEach((function(e){var r=document.createElement(t);for(var n in e)if(e.hasOwnProperty(n))if(n===P)r.innerHTML=e.innerHTML;else if(n===O)r.styleSheet?r.styleSheet.cssText=e.cssText:r.appendChild(document.createTextNode(e.cssText));else{var s=void 0===e[n]?"":e[n];r.setAttribute(n,s)}r.setAttribute(U,"true"),o.some((function(t,e){return a=e,r.isEqualNode(t)}))?o.splice(a,1):i.push(r)})),o.forEach((function(t){return t.parentNode.removeChild(t)})),i.forEach((function(t){return r.appendChild(t)})),{oldTags:o,newTags:i}},ht=function(t){return Object.keys(t).reduce((function(e,r){var n=void 0!==t[r]?r+'="'+t[r]+'"':""+r;return e?e+" "+n:n}),"")},yt=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,r){return e[Y[r]||r]=t[r],e}),e)},bt=function(t,e,r){switch(t){case S.TITLE:return{toComponent:function(){return t=e.title,r=e.titleAttributes,(n={key:t})[U]=!0,i=yt(r,n),[o.createElement(S.TITLE,i,t)];var t,r,n,i},toString:function(){return function(t,e,r,n){var o=ht(r),i=dt(e);return o?"<"+t+' data-react-helmet="true" '+o+">"+$(i,n)+"</"+t+">":"<"+t+' data-react-helmet="true">'+$(i,n)+"</"+t+">"}(t,e.title,e.titleAttributes,r)}};case T:case k:return{toComponent:function(){return yt(e)},toString:function(){return ht(e)}};default:return{toComponent:function(){return function(t,e){return e.map((function(e,r){var n,i=((n={key:r})[U]=!0,n);return Object.keys(e).forEach((function(t){var r=Y[t]||t;if(r===P||r===O){var n=e.innerHTML||e.cssText;i.dangerouslySetInnerHTML={__html:n}}else i[r]=e[t]})),o.createElement(t,i)}))}(t,e)},toString:function(){return function(t,e,r){return e.reduce((function(e,n){var o=Object.keys(n).filter((function(t){return!(t===P||t===O)})).reduce((function(t,e){var o=void 0===n[e]?e:e+'="'+$(n[e],r)+'"';return t?t+" "+o:o}),""),i=n.innerHTML||n.cssText||"",a=-1===H.indexOf(t);return e+"<"+t+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+t+">")}),"")}(t,e,r)}}}},gt=function(t){var e=t.baseTag,r=t.bodyAttributes,n=t.encode,o=t.htmlAttributes,i=t.linkTags,a=t.metaTags,s=t.noscriptTags,c=t.scriptTags,l=t.styleTags,u=t.title,p=void 0===u?"":u,d=t.titleAttributes;return{base:bt(S.BASE,e,n),bodyAttributes:bt(T,r,n),htmlAttributes:bt(k,o,n),link:bt(S.LINK,i,n),meta:bt(S.META,a,n),noscript:bt(S.NOSCRIPT,s,n),script:bt(S.SCRIPT,c,n),style:bt(S.STYLE,l,n),title:bt(S.TITLE,{title:p,titleAttributes:d},n)}},vt=y()((function(t){return{baseTag:rt([E,_],t),bodyAttributes:et(T,t),defer:ot(t,R),encode:ot(t,B),htmlAttributes:et(k,t),linkTags:nt(S.LINK,[I,E],t),metaTags:nt(S.META,[L,A,j,M,z],t),noscriptTags:nt(S.NOSCRIPT,[P],t),onChangeClientState:tt(t),scriptTags:nt(S.SCRIPT,[N,P],t),styleTags:nt(S.STYLE,[O],t),title:Q(t),titleAttributes:et(C,t)}}),(function(t){ut&&ct(ut),t.defer?ut=st((function(){pt(t,(function(){ut=null}))})):(pt(t),ut=null)}),gt)((function(){return null})),xt=(s=vt,l=c=function(t){function e(){return W(this,e),G(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.shouldComponentUpdate=function(t){return!g()(this.props,t)},e.prototype.mapNestedChildrenToProps=function(t,e){if(!e)return null;switch(t.type){case S.SCRIPT:case S.NOSCRIPT:return{innerHTML:e};case S.STYLE:return{cssText:e}}throw new Error("<"+t.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},e.prototype.flattenArrayTypeChildren=function(t){var e,r=t.child,n=t.arrayTypeChildren,o=t.newChildProps,i=t.nestedChildren;return V({},n,((e={})[r.type]=[].concat(n[r.type]||[],[V({},o,this.mapNestedChildrenToProps(r,i))]),e))},e.prototype.mapObjectTypeChildren=function(t){var e,r,n=t.child,o=t.newProps,i=t.newChildProps,a=t.nestedChildren;switch(n.type){case S.TITLE:return V({},o,((e={})[n.type]=a,e.titleAttributes=V({},i),e));case S.BODY:return V({},o,{bodyAttributes:V({},i)});case S.HTML:return V({},o,{htmlAttributes:V({},i)})}return V({},o,((r={})[n.type]=V({},i),r))},e.prototype.mapArrayTypeChildrenToProps=function(t,e){var r=V({},e);return Object.keys(t).forEach((function(e){var n;r=V({},r,((n={})[e]=t[e],n))})),r},e.prototype.warnOnInvalidChildren=function(t,e){return!0},e.prototype.mapChildrenToProps=function(t,e){var r=this,n={};return o.Children.forEach(t,(function(t){if(t&&t.props){var o=t.props,i=o.children,a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,r){return e[F[r]||r]=t[r],e}),e)}(J(o,["children"]));switch(r.warnOnInvalidChildren(t,i),t.type){case S.LINK:case S.META:case S.NOSCRIPT:case S.SCRIPT:case S.STYLE:n=r.flattenArrayTypeChildren({child:t,arrayTypeChildren:n,newChildProps:a,nestedChildren:i});break;default:e=r.mapObjectTypeChildren({child:t,newProps:e,newChildProps:a,nestedChildren:i})}}})),e=this.mapArrayTypeChildrenToProps(n,e)},e.prototype.render=function(){var t=this.props,e=t.children,r=J(t,["children"]),n=V({},r);return e&&(n=this.mapChildrenToProps(e,n)),o.createElement(s,n)},K(e,null,[{key:"canUseDOM",set:function(t){s.canUseDOM=t}}]),e}(o.Component),c.propTypes={base:w().object,bodyAttributes:w().object,children:w().oneOfType([w().arrayOf(w().node),w().node]),defaultTitle:w().string,defer:w().bool,encodeSpecialCharacters:w().bool,htmlAttributes:w().object,link:w().arrayOf(w().object),meta:w().arrayOf(w().object),noscript:w().arrayOf(w().object),onChangeClientState:w().func,script:w().arrayOf(w().object),style:w().arrayOf(w().object),title:w().string,titleAttributes:w().object,titleTemplate:w().string},c.defaultProps={defer:!0,encodeSpecialCharacters:!0},c.peek=s.peek,c.rewind=function(){var t=s.rewind();return t||(t=gt({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},l);xt.renderStatic=xt.rewind;var Tt=r(5444);var kt=function(t){var e,r,o=t.description,i=t.lang,a=t.title,s=t.meta,c=(0,Tt.K2)("63159454").site,l=o||c.siteMetadata.description,u=null===(e=c.siteMetadata)||void 0===e?void 0:e.title;return(0,n.tZ)(xt,{htmlAttributes:{lang:i},title:a,titleTemplate:"%s | "+u,defaultTitle:u,meta:[{name:"description",content:l},{property:"og:title",content:a},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:(null===(r=c.siteMetadata)||void 0===r?void 0:r.author)||""},{name:"twitter:title",content:a},{name:"twitter:description",content:l}].concat((0,f.Z)(null!=s?s:[]))})};var Ct={name:"16qwt36",styles:"--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity));text-align:center;background-image:linear-gradient(to right, var(--tw-gradient-stops));padding-left:1rem;padding-right:1rem;--tw-gradient-from:#243E8B;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(36, 62, 139, 0));--tw-gradient-to:#1d4ed8;display:flex;justify-content:center;align-items:center;flex-direction:column;> :not([hidden]) ~ :not([hidden]){--tw-space-y-reverse:0;margin-top:calc(2rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(2rem * var(--tw-space-y-reverse));}width:100%;height:100vh"},St={name:"j20ztp",styles:"font-weight:200;font-size:1.875rem;line-height:2.25rem;@media (min-width: 768px){font-size:3rem;line-height:1;}@media (min-width: 1024px){font-size:4.5rem;line-height:1;}"},At={name:"1ezepr3",styles:"--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;display:inline-block;:hover{--tw-scale-x:1.1;--tw-scale-y:1.1;}"},Ot={name:"3bb64r",styles:"--tw-bg-opacity:1;background-color:rgba(248, 227, 180, var(--tw-bg-opacity));width:100%;max-width:72rem;padding:2rem;border-radius:1rem;--tw-text-opacity:1;color:rgba(0, 0, 0, var(--tw-text-opacity))"},Et={name:"73qeq",styles:"display:flex;flex-direction:column;> :not([hidden]) ~ :not([hidden]){--tw-space-y-reverse:0;margin-top:calc(2rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(2rem * var(--tw-space-y-reverse));}justify-content:center;align-items:center;flex-wrap:wrap;@media (min-width: 768px){> :not([hidden]) ~ :not([hidden]){--tw-space-x-reverse:0;margin-right:calc(1rem * var(--tw-space-x-reverse));margin-left:calc(1rem * calc(1 - var(--tw-space-x-reverse)));--tw-space-y-reverse:0;margin-top:calc(0px * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(0px * var(--tw-space-y-reverse));}flex-direction:row;justify-content:center;}"},jt={name:"8l53j7",styles:"width:100%;text-align:center;> :not([hidden]) ~ :not([hidden]){--tw-space-y-reverse:0;margin-top:calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(0.5rem * var(--tw-space-y-reverse));}@media (min-width: 768px){width:16rem;}@media (min-width: 1280px){width:20rem;}"},Pt={name:"r7019t",styles:"z-index:10;position:relative;border-radius:0.25rem;--tw-shadow:0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)"},zt={name:"1rcimms",styles:"--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;position:relative;z-index:0;.group:hover &, .group:focus &{opacity:1;pointer-events:auto;--tw-translate-y:0px;}@media (min-width: 768px){opacity:0;pointer-events:none;--tw-translate-y:-2.5rem;}"},Lt={name:"8l53j7",styles:"width:100%;text-align:center;> :not([hidden]) ~ :not([hidden]){--tw-space-y-reverse:0;margin-top:calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(0.5rem * var(--tw-space-y-reverse));}@media (min-width: 768px){width:16rem;}@media (min-width: 1280px){width:20rem;}"},Mt={name:"r7019t",styles:"z-index:10;position:relative;border-radius:0.25rem;--tw-shadow:0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)"},It={name:"1rcimms",styles:"--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;position:relative;z-index:0;.group:hover &, .group:focus &{opacity:1;pointer-events:auto;--tw-translate-y:0px;}@media (min-width: 768px){opacity:0;pointer-events:none;--tw-translate-y:-2.5rem;}"},Nt={name:"8l53j7",styles:"width:100%;text-align:center;> :not([hidden]) ~ :not([hidden]){--tw-space-y-reverse:0;margin-top:calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(0.5rem * var(--tw-space-y-reverse));}@media (min-width: 768px){width:16rem;}@media (min-width: 1280px){width:20rem;}"},_t={name:"r7019t",styles:"z-index:10;position:relative;border-radius:0.25rem;--tw-shadow:0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)"},Yt={name:"1rcimms",styles:"--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;position:relative;z-index:0;.group:hover &, .group:focus &{opacity:1;pointer-events:auto;--tw-translate-y:0px;}@media (min-width: 768px){opacity:0;pointer-events:none;--tw-translate-y:-2.5rem;}"},Zt=function(){return(0,n.tZ)(d,null,(0,n.tZ)(kt,null),(0,n.tZ)("main",{css:Ct},(0,n.tZ)("h1",{css:St},"Pitt CSC Web-Dev Branch"," ",(0,n.tZ)("span",{css:At},"👩‍💻")),(0,n.tZ)("div",{css:Ot},(0,n.tZ)("div",{css:Et},(0,n.tZ)("a",{href:"https://pittcs.wiki/skills/getting-started-with-x/web-dev/",rel:"noreferrer noopener",target:"_blank"},(0,n.tZ)("div",{className:"group",css:jt},(0,n.tZ)("img",{src:"https://i.ibb.co/LgnJ94t/cs-wiki.png",alt:"Pitt CS Wiki Web Dev Getting Started",css:Pt}),(0,n.tZ)("p",{css:zt},"Pitt CS Wiki Web-Dev Guide"))),(0,n.tZ)("a",{href:"https://dev.to/",rel:"noreferrer noopener",target:"_blank"},(0,n.tZ)("div",{className:"group",css:Lt},(0,n.tZ)("img",{src:"https://i.ibb.co/WVJJNWF/dev-community.png",alt:"Dev Community",css:Mt}),(0,n.tZ)("p",{css:It},"DEV Community"))),(0,n.tZ)("a",{href:"https://css-tricks.com/",rel:"noreferrer noopener",target:"_blank"},(0,n.tZ)("div",{className:"group",css:Nt},(0,n.tZ)("img",{src:"https://i.ibb.co/fdF6Q0B/css-tricks.png",alt:"CSS Tricks",css:_t}),(0,n.tZ)("p",{css:Yt},"CSS-Tricks")))))))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-47cd962135bf70df654e.js.map