"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[61],{2634:function(n,t,e){e.d(t,{$:function(){return u},W:function(){return c}});var r,i,a=e(168),o=e(7691),c=o.ZP.div(r||(r=(0,a.Z)(["\n  width: 1200px;\n  padding-top: 40px;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-left: auto;\n  margin-right: auto;\n"]))),u=o.ZP.section(i||(i=(0,a.Z)(["\n  position: relative;\n  background-color: #fff;\n  margin-top: 4.6875rem;\n  /* padding-top: 30px; */\n"])))},9245:function(n,t,e){e.d(t,{Z:function(){return u}});var r,i=e(8402),a=e(168),o=e(1109).Z.div(r||(r=(0,a.Z)(["\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100vw;\n  height: 100vh;\n"]))),c=e(184);var u=function(){return(0,c.jsx)(o,{children:(0,c.jsx)(i.NB,{visible:!0,height:"80",width:"80",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper",colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]})})}},6368:function(n,t,e){e.d(t,{O:function(){return c}});e(2791);var r=e(7689),i=e(8603),a=e(4401),o=e(184),c=function(n){var t=n.trendingMovies,e=(0,r.TH)();return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(i.TU,{children:(0,o.jsx)(i.Ul,{children:t.map((function(n){return(0,o.jsx)(i.Li,{children:(0,o.jsxs)(i.Fg,{to:"/movies/".concat(n.id),state:{from:e},children:[(0,o.jsx)(i.bU,{children:n.poster_path?(0,o.jsx)(i.Ei,{src:"https://image.tmdb.org/t/p/w500/".concat(n.poster_path),width:"200",alt:"preview"}):(0,o.jsx)(i.Ei,{src:a,alt:"No Image Available"})}),n.title&&(0,o.jsx)(i.Dx,{children:n.title}),n.name&&(0,o.jsx)(i.Dx,{children:n.name})]})},n.id)}))})})})}},8603:function(n,t,e){e.d(t,{Dx:function(){return y},Ei:function(){return Z},Fg:function(){return b},Li:function(){return m},TU:function(){return x},Ul:function(){return v},bU:function(){return w},r1:function(){return g}});var r,i,a,o,c,u,s,p,d,l=e(168),f=e(1109),h=e(1087),x=(f.Z.section(r||(r=(0,l.Z)(["\n  border-radius: 5px;\n"]))),f.Z.div(i||(i=(0,l.Z)(["\n  padding-top: 30px;\n"])))),g=f.Z.h1(a||(a=(0,l.Z)(["\n  text-align: center;\n  text-transform: uppercase;\n  color: #000;\n  padding-top: 30px;\n"]))),v=f.Z.ul(o||(o=(0,l.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  list-style: none;\n  justify-content: space-between;\n  margin-bottom: 10px;\n  padding-right: 15px;\n  padding-left: 15px;\n"]))),m=f.Z.li(c||(c=(0,l.Z)(["\n  text-align: center;\n  width: 220px;\n  margin-bottom: 10px;\n  border-radius: 5px;\n"]))),b=(0,f.Z)(h.rU)(u||(u=(0,l.Z)(["\n  text-decoration: none;\n  border-radius: 5px;\n"]))),w=f.Z.div(s||(s=(0,l.Z)(["\n  position: relative;\n  overflow: hidden;\n  /* border-radius: 5px; */\n  width: 220px;\n  height: 330px;\n"]))),Z=f.Z.img(p||(p=(0,l.Z)(["\n  display: block;\n  height: 100%;\n  width: 100%;\n"]))),y=f.Z.p(d||(d=(0,l.Z)(["\n  font-size: 12px;\n  font-weight: 700;\n  line-height: 1.14;\n  letter-spacing: 0.03em;\n  text-transform: uppercase;\n  display: flex;\n  text-align: center;\n  justify-content: center;\n  align-items: center;\n  color: #fff;\n  /* position: absolute; */\n  width: 100%;\n  left: 0;\n  bottom: 0;\n  height: 60px;\n  margin: 0;\n  background-color: rgba(47, 48, 58, 0.4);\n"])))},9204:function(n,t,e){e.d(t,{Df:function(){return c},Gc:function(){return d},Pt:function(){return x},TP:function(){return s},tx:function(){return f}});var r=e(5861),i=e(4687),a=e.n(i),o=e(1243).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"b88a81f4023f887d7c5099f96529b634",language:"en-US"}});function c(){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)(a().mark((function n(){var t,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return"movie/popular",n.prev=1,n.next=4,o.get("movie/popular");case 4:return t=n.sent,e=t.data,n.abrupt("return",e.results);case 9:throw n.prev=9,n.t0=n.catch(1),n.t0;case 12:case"end":return n.stop()}}),n,null,[[1,9]])})))).apply(this,arguments)}function s(n){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(a().mark((function n(t){var e,r,i;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="/movie/".concat(t),n.prev=1,n.next=4,o.get(e);case 4:return r=n.sent,i=r.data,n.abrupt("return",i);case 9:throw n.prev=9,n.t0=n.catch(1),n.t0;case 12:case"end":return n.stop()}}),n,null,[[1,9]])})))).apply(this,arguments)}function d(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(a().mark((function n(t){var e,r,i;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="/movie/".concat(t,"/credits"),n.prev=1,n.next=4,o.get(e);case 4:return r=n.sent,i=r.data,n.abrupt("return",i);case 9:throw n.prev=9,n.t0=n.catch(1),n.t0;case 12:case"end":return n.stop()}}),n,null,[[1,9]])})))).apply(this,arguments)}function f(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(a().mark((function n(t){var e,r,i;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="/movie/".concat(t,"/reviews"),n.prev=1,n.next=4,o.get(e);case 4:return r=n.sent,i=r.data,n.abrupt("return",i);case 9:throw n.prev=9,n.t0=n.catch(1),n.t0;case 12:case"end":return n.stop()}}),n,null,[[1,9]])})))).apply(this,arguments)}function x(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(a().mark((function n(t){var e,r,i;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="/search/movie?query=".concat(t),n.prev=1,n.next=4,o.get(e);case 4:return r=n.sent,i=r.data,console.log(i),n.abrupt("return",i);case 10:throw n.prev=10,n.t0=n.catch(1),n.t0;case 13:case"end":return n.stop()}}),n,null,[[1,10]])})))).apply(this,arguments)}},9596:function(n,t,e){e.r(t),e.d(t,{default:function(){return U}});var r,i,a,o=e(5861),c=e(9439),u=e(4687),s=e.n(u),p=e(2791),d=e(1087),l=e(9204),f=e(2634),h=(e(5462),e(3313)),x=e(168),g=e(1109),v=g.Z.form(r||(r=(0,x.Z)(["\n  font: inherit;\n\n  padding-top: 30px;\n  width: 100%;\n  padding: 10px;\n  border-radius: 10px;\n  max-width: 520px;\n  width: 100%;\n  margin: 16px auto;\n  display: flex;\n  justify-content: center;\n  background: #546e7c;\n  opacity: 0.7;\n  border: none;\n"]))),m=g.Z.input(i||(i=(0,x.Z)(["\n  font: inherit;\n  max-width: 350px;\n  width: 100%;\n  border-radius: 10px;\n  margin: 16px auto;\n  padding: 12px;\n  display: block;\n"]))),b=g.Z.button(a||(a=(0,x.Z)(["\n  width: 70px;\n  height: 45px;\n  margin: auto;\n  font: inherit;\n  border-radius: 5px;\n  padding: 0;\n"]))),w=e(184);function Z(n){var t=n.onSubmit,e=(0,p.useState)(""),r=(0,c.Z)(e,2),i=r[0],a=r[1];return(0,w.jsxs)(v,{onSubmit:function(n){n.preventDefault(),""!==i.trim()?(t(i.trim()),a("")):a("")},children:[(0,w.jsx)(b,{type:"submit",children:(0,w.jsx)(h.jRj,{style:{marginRight:8}})}),(0,w.jsx)(m,{type:"text",name:"searchQuery",autoComplete:"off",autoFocus:!0,placeholder:"Search movie",value:i,onChange:function(n){a(n.currentTarget.value.toLowerCase())}})]})}var y=e(6368),j=e(9245),k=e(8603),S=e.p+"static/media/movies_popcorn.bffb621d7925ca8752c8.gif",U=function(){var n=(0,p.useState)([]),t=(0,c.Z)(n,2),e=t[0],r=t[1],i=(0,p.useState)(!0),a=(0,c.Z)(i,2),u=a[0],h=a[1],x=(0,d.lr)(),g=(0,c.Z)(x,2),v=g[0],m=g[1],b=v.get("query");(0,p.useEffect)((function(){var n=function(){var n=(0,o.Z)(s().mark((function n(){var t,e;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,h(!0),n.next=4,(0,l.Pt)(b);case 4:t=n.sent,e=t.results,r(e),console.log(e),h(!1),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),console.log(n.t0);case 14:return n.prev=14,h(!1),n.finish(14);case 17:case"end":return n.stop()}}),n,null,[[0,11,14,17]])})));return function(){return n.apply(this,arguments)}}();b&&n()}),[b]);return(0,w.jsx)(f.W,{children:(0,w.jsxs)(f.$,{children:[(0,w.jsx)(k.r1,{children:"Search movies:"}),(0,w.jsx)(Z,{onSubmit:function(n){m({query:n})}}),0===e.length&&(0,w.jsx)("img",{src:S,alt:"searching"}),u&&(0,w.jsx)(j.Z,{}),0!==e.length&&(0,w.jsx)(y.O,{trendingMovies:e})]})})}},4401:function(n,t,e){n.exports=e.p+"static/media/noImage.baba1a7394e8054d69cf.png"}}]);
//# sourceMappingURL=61.d145a38f.chunk.js.map