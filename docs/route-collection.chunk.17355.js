webpackJsonp([2],{kx8e:function(e,t,n){"use strict";function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function c(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=n("KM04"),r=(n.n(l),n("E/bI")),a=n("Q1yZ"),i=n("uOgf"),u=(n("MeGi"),n("sJaT")),s=n("x1lW"),b=n("7/cg"),p=n("sC8g"),h=n("vyGZ"),O=document.getElementById("app").getBoundingClientRect().width,j=O<=768,f=Object(l.h)(i.a.Section,{"align-start":!0},Object(l.h)(i.a.Title,null,"我的收藏")),m=Object(l.h)(i.a.Row,null),g=Object(l.h)(u.a,null,Object(l.h)(u.a.Primary,null,Object(l.h)(u.a.Subtitle,null,"还没有收藏..."))),y=Object(l.h)(p.a,{path:"/"}),d=function(e){function t(){for(var t,n,c,l=arguments.length,r=Array(l),a=0;a<l;a++)r[a]=arguments[a];return t=n=o(this,e.call.apply(e,[this].concat(r))),n.openMenu=function(){return n.menu.MDComponent.open=!0},c=t,o(n,c)}return c(t,e),t.prototype.componentDidMount=function(){this.props.getCollections(),this.menu.MDComponent.open=!1},t.prototype.render=function(){var e=this,t=this.props.collections;return Object(l.h)("div",null,Object(l.h)(i.a,{fixed:!0,className:"toolbar"},Object(l.h)(i.a.Row,null,f,Object(l.h)(i.a.Icon,{onClick:this.openMenu},"more_vert"),Object(l.h)(s.a.Anchor,null,Object(l.h)(s.a,{ref:function(t){e.menu=t}},Object(l.h)(s.a.Item,{onClick:function(){return window.open("https://github.com/xrr2016/my-gank.io")}},"Github")))),m),Object(l.h)(a.a,{className:"margin-top-104px"},Object(l.h)(a.a.Inner,null,Object(l.h)(a.a.Cell,{cols:"12"},t.length?t.map(function(t){var n="";return t.images&&j&&(n=t.images[0]+"?imageView2/0/w/"+(O-64)),Object(l.h)(u.a,null,Object(l.h)(u.a.Primary,null,Object(l.h)(u.a.Title,null,t.desc),Object(l.h)(u.a.Subtitle,{style:{marginTop:4}},Object(l.h)("span",{className:"badge"},t.type),Object(l.h)("span",{className:"badge"},t.who),Object(l.h)("span",{className:"badge"},t.publishedAt.slice(0,10)))),!!n&&Object(l.h)(u.a.Media,null,Object(l.h)(u.a.MediaItem,{src:n})),Object(l.h)(u.a.Actions,null,Object(l.h)(b.a,{ripple:!0,href:t.url,target:"_blank"},"查看"),Object(l.h)(b.a,{ripple:!0,style:{color:"red"},onClick:function(){return e.props.removeCollection(t)}},"删除")))}):g)),y))},t}(l.Component),C=function(e){return{collections:e.collections}},v={getCollections:h.k,removeCollection:h.l};t.default=Object(r.b)(C,v)(d)},sC8g:function(e,t,n){"use strict";var o=n("KM04"),c=(n.n(o),n("xAvD")),l=n("/QC5"),r=Object(o.h)(c.d,null,"reply");t.a=function(e){var t=e.path;return Object(o.h)(c.c,{ripple:!0,mini:!0,className:"toolbar return-fab",onClick:function(){return Object(l.b)(t,!0)}},r)}}});
//# sourceMappingURL=route-collection.chunk.17355.js.map