(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(3722)}])},3722:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return q}});var r=n(5893),a=n(9008),s=n.n(a),i=(n(5675),n(7294)),o=n(7160),c=n.n(o),l="http://75.119.136.254:3000",d=["user-read-private","user-top-read","user-read-currently-playing","user-read-playback-state"],u=n(8947),f=n(7814),h=n(1417);function m(){return(0,r.jsx)("div",{className:"footer-basic",children:(0,r.jsxs)("footer",{children:[(0,r.jsxs)("div",{className:"social",children:[(0,r.jsx)("a",{href:"https://www.instagram.com/jorgygfx/",children:(0,r.jsx)("i",{children:(0,r.jsx)(f.G,{icon:"fab fa-instagram"})})}),(0,r.jsx)("a",{href:"https://github.com/Uraraka-Chan",children:(0,r.jsx)("i",{children:(0,r.jsx)(f.G,{icon:"fab fa-github"})})}),(0,r.jsx)("a",{href:"https://twitch.com/jorgygfx",children:(0,r.jsx)("i",{children:(0,r.jsx)(f.G,{icon:"fab fa-twitch"})})}),(0,r.jsx)("a",{href:"https://www.youtube.com/channel/UCA78-TRtRUnIZvJwctKvDcg",children:(0,r.jsx)("i",{children:(0,r.jsx)(f.G,{icon:"fab fa-youtube"})})})]}),(0,r.jsxs)("ul",{className:"list-inline",children:[(0,r.jsx)("li",{className:"list-inline-item",children:(0,r.jsx)("a",{href:l,children:"Home"})}),(0,r.jsx)("li",{className:"list-inline-item",children:(0,r.jsx)("a",{href:"https://discord.com/invite/animazing",children:"Animazing"})}),(0,r.jsx)("li",{className:"list-inline-item",children:(0,r.jsx)("a",{href:"https://discord.com/invite/comfy",children:"Comfy"})}),(0,r.jsx)("li",{className:"list-inline-item",children:(0,r.jsx)("a",{href:"https://github.com/Uraraka-Chan",children:"Credits"})})]}),(0,r.jsx)("p",{className:"copyright",children:"Uraraka-Chan \xa9 2022"})]})})}u.vI.add(h.Zzi,h.zhw,h.z0T,h.opf),u.vc.autoAddCss=!1;var p=n(4051),v=n.n(p),j=n(9669),x=n.n(j),y=n(1664),g=n.n(y);function w(e,t,n,r,a,s,i){try{var o=e[s](i),c=o.value}catch(l){return void n(l)}o.done?t(c):Promise.resolve(c).then(r,a)}function b(e){var t,n=e.token,a=(0,i.useState)([]),s=a[0],o=a[1],c=(0,i.useCallback)((t=v().mark((function e(){return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",x().get("https://api.spotify.com/v1/me/top/artists",{headers:{Authorization:"Bearer ".concat(n)}}).then((function(e){o(e.data.items)})));case 1:case"end":return e.stop()}}),e)})),function(){var e=this,n=arguments;return new Promise((function(r,a){var s=t.apply(e,n);function i(e){w(s,r,a,i,o,"next",e)}function o(e){w(s,r,a,i,o,"throw",e)}i(void 0)}))}),[n]);return(0,i.useEffect)((function(){c()}),[c]),(0,r.jsxs)("div",{className:"spotify-artists",children:[(0,r.jsx)("div",{className:"artists-title",children:"Top Artists"}),(0,r.jsx)("div",{className:"artists-description",children:"The Artists you most listen in spotify!"}),s.map((function(e,t){var n,a;return(0,r.jsxs)("div",{className:"artist",id:"artist-".concat(t),onClick:function(){var t;return window.location=null===(t=e.external_urls)||void 0===t?void 0:t.spotify},children:[(0,r.jsx)("div",{className:"artist-index",children:t+1}),(0,r.jsx)("div",{className:"artist-image",style:{backgroundImage:"url(".concat(e.images[0].url,")")}}),(0,r.jsx)("div",{className:"artist-name",children:(0,r.jsx)(g(),{href:e.external_urls.spotify,children:e.name})}),(0,r.jsxs)("div",{className:"artist-followers",children:[(a=null===(n=e.followers)||void 0===n?void 0:n.total,a.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")||0),(0,r.jsx)("br",{}),"Followers"]})]},t)}))]})}var N=n(9398);function k(e,t,n,r,a,s,i){try{var o=e[s](i),c=o.value}catch(l){return void n(l)}o.done?t(c):Promise.resolve(c).then(r,a)}function S(e){var t,n=e.token,a=(0,i.useState)([]),s=a[0],o=a[1],c=(0,i.useCallback)((t=v().mark((function e(){return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",x().get("https://api.spotify.com/v1/me/top/tracks",{headers:{Authorization:"Bearer ".concat(n)}}).then((function(e){o(e.data.items)})));case 1:case"end":return e.stop()}}),e)})),function(){var e=this,n=arguments;return new Promise((function(r,a){var s=t.apply(e,n);function i(e){k(s,r,a,i,o,"next",e)}function o(e){k(s,r,a,i,o,"throw",e)}i(void 0)}))}),[n]);return(0,i.useEffect)((function(){c()}),[c]),(0,r.jsxs)("div",{className:"spotify-tracks",children:[(0,r.jsx)("div",{className:"tracks-title",children:"Top Tracks"}),(0,r.jsx)("div",{className:"tracks-description",children:"The Tracks you most listen in spotify!"}),s.map((function(e,t){return(0,r.jsxs)("div",{className:"track",id:"track-".concat(t),onClick:function(){var t;return window.location=null===(t=e.external_urls)||void 0===t?void 0:t.spotify},children:[(0,r.jsx)("div",{className:"track-index",children:t+1}),(0,r.jsx)(f.G,{icon:"fas fa-compact-disc"}),(0,r.jsx)("div",{className:"track-name",children:(0,r.jsx)(g(),{href:e.external_urls.spotify,children:e.name})}),(0,r.jsxs)("div",{className:"track-followers",children:[e.popularity||0,(0,r.jsx)(f.G,{icon:"fas fa-heart"})]})]},t)}))]})}u.vI.add(N.m6i,N.qAL),u.vc.autoAddCss=!1;var A=Math.floor(7*Math.random())+1;function C(){var e=(0,i.useState)(!1),t=e[0],n=e[1],a=(0,i.useState)(null),s=a[0],o=a[1];return i.useEffect((function(){o(A)}),[]),i.useEffect((function(){window.setTimeout((function(){t||(document.getElementById("loader").innerHTML="",n(!0))}),2e3)}),[t]),(0,r.jsx)("div",{id:"loader",children:(0,r.jsx)("div",{className:"loader",id:"loader",children:(0,r.jsxs)("div",{className:"loader-inner",children:[(0,r.jsx)("div",{className:"loader-line-wrap",children:(0,r.jsx)("div",{className:"loader-line-".concat(s)})}),(0,r.jsx)("div",{className:"loader-line-wrap",children:(0,r.jsx)("div",{className:"loader-line-".concat(s)})}),(0,r.jsx)("div",{className:"loader-line-wrap",children:(0,r.jsx)("div",{className:"loader-line-".concat(s)})}),(0,r.jsx)("div",{className:"loader-line-wrap",children:(0,r.jsx)("div",{className:"loader-line-".concat(s)})}),(0,r.jsx)("div",{className:"loader-line-wrap",children:(0,r.jsx)("div",{className:"loader-line-".concat(s)})})]})})})}function _(e,t,n,r,a,s,i){try{var o=e[s](i),c=o.value}catch(l){return void n(l)}o.done?t(c):Promise.resolve(c).then(r,a)}function E(e){var t,n,a=e.token,s=(0,i.useState)({}),o=s[0],c=s[1],l=(0,i.useState)("https://i.pinimg.com/originals/a3/e6/50/a3e650a67d4422433d94eb032492bbc7.png"),d=l[0],u=l[1],f=(0,i.useState)(!1),h=f[0],m=f[1],p=(0,i.useCallback)((n=v().mark((function e(){return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",x().get("https://api.spotify.com/v1/me",{headers:{Authorization:"Bearer ".concat(a)}}).then((function(e){c(e.data),u(e.data.images[0].url),m(!0)})));case 1:case"end":return e.stop()}}),e)})),function(){var e=this,t=arguments;return new Promise((function(r,a){var s=n.apply(e,t);function i(e){_(s,r,a,i,o,"next",e)}function o(e){_(s,r,a,i,o,"throw",e)}i(void 0)}))}),[a]);return(0,i.useEffect)((function(){p()}),[p]),(0,r.jsxs)(r.Fragment,{children:[!h&&(0,r.jsx)("style",{children:"\n          @media (max-width: 1302px) {\n            .spotify-genres {\n              width: 100% !important;\n            }\n          }\n          .spotify-genres {\n            width: 92%;\n          }        \n        "}),h&&(0,r.jsxs)("div",{className:"spotify-profile",children:[(0,r.jsx)("div",{className:"spotify-image",style:{backgroundImage:"url(".concat(d,")")}}),(0,r.jsx)("div",{className:"spotify-country",style:{backgroundImage:"url(https://hatscripts.github.io/circle-flags/flags/".concat(o.country.toLowerCase(),".svg)")}}),(0,r.jsx)("div",{className:"spotify-name",children:o.display_name}),(0,r.jsxs)("div",{className:"spotify-followers",children:[null===(t=o.followers)||void 0===t?void 0:t.total," Followers"]})]})]})}function O(e){var t={};return e.forEach((function(e){t[e]=(t[e]||0)+1})),t}var I=n(5376),T=n(3328);function P(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function M(e,t,n,r,a,s,i){try{var o=e[s](i),c=o.value}catch(l){return void n(l)}o.done?t(c):Promise.resolve(c).then(r,a)}function z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function G(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){z(e,t,n[t])}))}return e}function U(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,s=[],i=!0,o=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(s.push(r.value),!t||s.length!==t);i=!0);}catch(c){o=!0,a=c}finally{try{i||null==n.return||n.return()}finally{if(o)throw a}}return s}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return P(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return P(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function L(e){var t,n=e.token,a=(0,i.useState)({}),s=a[0],o=a[1],c=(0,i.useState)(!1),l=c[0],d=c[1],u=(0,i.useCallback)((t=v().mark((function e(){return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",x().get("https://api.spotify.com/v1/me/top/artists",{headers:{Authorization:"Bearer ".concat(n)}}).then((function(e){var t,n=[];null===(t=e.data.items)||void 0===t||t.map((function(e){var t;null===(t=e.genres)||void 0===t||t.map((function(e){return n.push(e)}))}));var r=O(n),a=Object.entries(r).sort((function(e,t){var n=U(e,2)[1];return U(t,2)[1]-n})).reduce((function(e,t){var n=U(t,2);return G({},e,z({},n[0],n[1]))}),{}),s={labels:Object.keys(a).map((function(e){return e.split(" ").map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})).join(" ")})),datasets:[{label:"Top Genres",data:Object.values(a),backgroundColor:Object.values(a).map((function(e){return"rgba("+Math.floor(256*Math.random())+", "+Math.floor(256*Math.random())+","+Math.floor(256*Math.random())+", 0.8)"})),borderWidth:0}]};o(s),d(!0)})).catch((function(e){window.location="/"})));case 2:case"end":return e.stop()}}),e)})),function(){var e=this,n=arguments;return new Promise((function(r,a){var s=t.apply(e,n);function i(e){M(s,r,a,i,o,"next",e)}function o(e){M(s,r,a,i,o,"throw",e)}i(void 0)}))}),[n]);return(0,i.useEffect)((function(){u()}),[u]),(0,r.jsxs)("div",{className:"spotify-genres",children:[(0,r.jsxs)("div",{className:"genres-info",children:[(0,r.jsx)("div",{className:"genres-title",children:"Top Genres"}),(0,r.jsx)("div",{className:"genres-description",children:"The Genres you most listen in spotify!"}),(0,r.jsx)("div",{className:"genres-container",children:l&&s.labels.map((function(e,t){return(0,r.jsx)("div",{style:{backgroundColor:s.datasets[0].backgroundColor[t]},children:e},t)}))})]}),(0,r.jsx)("div",{className:"genres",children:l&&(0,r.jsx)(I.$I,{data:s,width:250,height:250,options:{maintainAspectRatio:!1}})})]})}function B(){return(0,r.jsxs)("div",{className:"credits",children:[(0,r.jsx)("div",{className:"credits-title",children:"About the project"}),(0,r.jsxs)("div",{className:"credits-description",children:["SpotiStats or Jorgify is an ad-free and open source website made with Next.js",(0,r.jsx)("br",{}),"I originally created this website for my girlfriend since she uses Spotify a lot and loves the music.",(0,r.jsx)("br",{}),"The only developer of this project is me Jorgy or Uraraka-Chan in GitHub, if you enjoy please share it!"]}),(0,r.jsx)("div",{className:"credits-profiles",children:(0,r.jsx)("div",{className:"profile",style:{backgroundImage:"url(https://avatars.githubusercontent.com/u/71365133?v=4)"},onClick:function(){return window.location="https://www.instagram.com/jorgy.ts/"},children:(0,r.jsx)("span",{className:"profile-name",children:"jorgy.ts"})})})]})}function F(){return(0,r.jsxs)("section",{id:"home","data-parallax":"scroll","data-image-src":"images/hero-bg.jpg","data-natural-width":3e3,"data-natural-height":1800,children:[(0,r.jsx)("div",{className:"overlay"}),(0,r.jsx)("div",{className:"home-content",children:(0,r.jsxs)("div",{className:"row contents",children:[(0,r.jsxs)("div",{className:"home-content-left",children:[(0,r.jsx)("h3",{"data-aos":"fade-up",children:"Welcome to SpotiStats"}),(0,r.jsxs)("h1",{"data-aos":"fade-up",children:["Check your Monthly ",(0,r.jsx)("br",{}),"Spotify Stats for free ",(0,r.jsx)("br",{})]}),(0,r.jsx)("div",{className:"buttons","data-aos":"fade-up",children:(0,r.jsx)("a",{href:"".concat("https://accounts.spotify.com/authorize","?client_id=").concat("48889495d12e4d27bd788c7f16b9a928","&redirect_uri=").concat(l,"&scope=").concat(d.join("%20"),"&response_type=token&show_dialog=true"),className:"smoothscroll button stroke",children:"Login to Spotify"})})]}),(0,r.jsx)("div",{className:"home-image-right",children:(0,r.jsx)("img",{src:"./Phone.png",alt:"Phone","data-aos":"fade-up"})})]})}),(0,r.jsx)("div",{className:"home-scrolldown",children:(0,r.jsxs)("a",{className:"scroll-icon smoothscroll",children:[(0,r.jsx)("span",{children:"Scroll Down"}),(0,r.jsx)("i",{className:"icon-arrow-right","aria-hidden":"true"})]})})]})}function H(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function R(e){return function(e){if(Array.isArray(e))return H(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return H(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return H(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function q(){var e=(0,i.useState)(null),t=e[0],n=e[1];return(0,i.useEffect)((function(){var e=window.location.hash.substring(1).split(/[&]/).reduce((function(e,t){if(t){var n=t.split(/[=]/);e[n[0]]=decodeURIComponent(n[1])}return e}),{}).access_token;n(e)}),[]),(0,i.useEffect)((function(){var e=function(){document.documentElement.dataset.scroll=window.scrollY};document.addEventListener("scroll",function(e){var t;return function(){for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];t&&cancelAnimationFrame(t),t=requestAnimationFrame((function(){e.apply(void 0,R(r))}))}}(e),{passive:!0}),e()})),(0,r.jsxs)("div",{className:c().container,children:[(0,r.jsxs)(s(),{children:[(0,r.jsx)("title",{children:"SpotiStats"}),(0,r.jsx)("meta",{name:"description",content:"Check your Spotify Stats for free without Ads!\\nFollow @jorgy.ts on Instagram for more content"}),(0,r.jsx)("meta",{name:"theme-color",content:"#33d486"}),(0,r.jsx)("link",{rel:"icon",href:"./icon.png"})]}),(0,r.jsxs)("div",{className:"navbar",children:[(0,r.jsx)("div",{className:"logo"}),(0,r.jsx)("div",{className:"title",children:"SpotiStats"})]}),(0,r.jsx)(C,{}),(0,r.jsxs)("main",{className:c().main,children:[!t&&(0,r.jsx)(F,{}),(0,r.jsx)("div",{className:c()["spotify-container"],children:t&&(0,r.jsxs)("div",{className:"wrapper",children:[(0,r.jsx)(E,{token:t}),(0,r.jsx)(L,{token:t}),(0,r.jsx)(b,{token:t}),(0,r.jsx)(S,{token:t}),(0,r.jsx)(B,{})]})})]}),(0,r.jsx)(m,{})]})}T.kL.register(T.qi,T.u)},7160:function(e){e.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ"}}},function(e){e.O(0,[570,523,112,392,774,888,179],(function(){return t=5557,e(e.s=t);var t}));var t=e.O();_N_E=t}]);