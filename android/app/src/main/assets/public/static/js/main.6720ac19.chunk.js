(this["webpackJsonpion-react-tabs"]=this["webpackJsonpion-react-tabs"]||[]).push([[1],{51:function(e,n,t){e.exports=t(83)},58:function(e,n,t){var a={"./ion-action-sheet.entry.js":[85,5],"./ion-alert.entry.js":[86,6],"./ion-app_8.entry.js":[87,7],"./ion-avatar_3.entry.js":[88,17],"./ion-back-button.entry.js":[89,18],"./ion-backdrop.entry.js":[90,43],"./ion-button_2.entry.js":[91,19],"./ion-card_5.entry.js":[92,20],"./ion-checkbox.entry.js":[93,21],"./ion-chip.entry.js":[94,22],"./ion-col_3.entry.js":[95,44],"./ion-datetime_3.entry.js":[96,10],"./ion-fab_3.entry.js":[97,23],"./ion-img.entry.js":[98,45],"./ion-infinite-scroll_2.entry.js":[99,46],"./ion-input.entry.js":[100,24],"./ion-item-option_3.entry.js":[101,25],"./ion-item_8.entry.js":[102,26],"./ion-loading.entry.js":[103,27],"./ion-menu_3.entry.js":[104,28],"./ion-modal.entry.js":[105,8],"./ion-nav_2.entry.js":[106,14],"./ion-popover.entry.js":[107,9],"./ion-progress-bar.entry.js":[108,29],"./ion-radio_2.entry.js":[109,30],"./ion-range.entry.js":[110,31],"./ion-refresher_2.entry.js":[111,11],"./ion-reorder_2.entry.js":[112,16],"./ion-ripple-effect.entry.js":[113,47],"./ion-route_4.entry.js":[114,32],"./ion-searchbar.entry.js":[115,33],"./ion-segment_2.entry.js":[116,34],"./ion-select_3.entry.js":[117,35],"./ion-slide_2.entry.js":[118,48],"./ion-spinner.entry.js":[119,13],"./ion-split-pane.entry.js":[120,49],"./ion-tab-bar_2.entry.js":[121,36],"./ion-tab_2.entry.js":[122,15],"./ion-text.entry.js":[123,37],"./ion-textarea.entry.js":[124,38],"./ion-toast.entry.js":[125,39],"./ion-toggle.entry.js":[126,12],"./ion-virtual-scroll.entry.js":[127,50]};function r(e){if(!t.o(a,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=a[e],r=n[0];return t.e(n[1]).then((function(){return t(r)}))}r.keys=function(){return Object.keys(a)},r.id=58,e.exports=r},60:function(e,n,t){var a={"./ion-icon.entry.js":[129,57]};function r(e){if(!t.o(a,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=a[e],r=n[0];return t.e(n[1]).then((function(){return t(r)}))}r.keys=function(){return Object.keys(a)},r.id=60,e.exports=r},68:function(e,n,t){},69:function(e,n,t){},70:function(e,n,t){},71:function(e,n,t){},82:function(e,n,t){},83:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(29),l=t.n(o),c=t(24),i=t(2),s=t(45),m=t(12),u=(t(68),function(e){var n=e.name;return r.a.createElement("div",{className:"container"},r.a.createElement("strong",null,n),r.a.createElement("p",null,"Explore ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://ionicframework.com/docs/components"},"UI Components")))}),E=(t(69),function(){return r.a.createElement(i.g,null,r.a.createElement(i.c,null,r.a.createElement(i.n,null,r.a.createElement(i.m,null,"Tab 1"))),r.a.createElement(i.b,{fullscreen:!0},r.a.createElement(i.c,{collapse:"condense"},r.a.createElement(i.n,null,r.a.createElement(i.m,{size:"large"},"Tab 1"))),r.a.createElement(i.e,{placeholder:"hello"}),r.a.createElement(u,{name:"Tab 1 page"})))}),b=(t(70),function(){return r.a.createElement(i.g,null,r.a.createElement(i.c,null,r.a.createElement(i.n,null,r.a.createElement(i.m,null,"Tab 2"))),r.a.createElement(i.b,{fullscreen:!0},r.a.createElement(i.c,{collapse:"condense"},r.a.createElement(i.n,null,r.a.createElement(i.m,{size:"large"},"Tab 2"))),r.a.createElement(u,{name:"Tab 2 page"})))}),y=(t(71),function(){return r.a.createElement(i.g,null,r.a.createElement(i.c,null,r.a.createElement(i.n,null,r.a.createElement(i.m,null,"Tab 3"))),r.a.createElement(i.b,{fullscreen:!0},r.a.createElement(i.c,{collapse:"condense"},r.a.createElement(i.n,null,r.a.createElement(i.m,{size:"large"},"Tab 3"))),r.a.createElement(u,{name:"Tab 3 page"})))}),j=(t(72),t(73),t(74),t(75),t(76),t(77),t(78),t(79),t(80),t(81),t(82),function(){return r.a.createElement(i.a,null,r.a.createElement(s.a,null,r.a.createElement(i.l,null,r.a.createElement(i.i,null,r.a.createElement(c.b,{path:"/tab1",component:E,exact:!0}),r.a.createElement(c.b,{path:"/tab2",component:b,exact:!0}),r.a.createElement(c.b,{path:"/tab3",component:y}),r.a.createElement(c.b,{path:"/",render:function(){return r.a.createElement(c.a,{to:"/tab1"})},exact:!0})),r.a.createElement(i.j,{slot:"bottom"},r.a.createElement(i.k,{tab:"tab1",href:"/tab1"},r.a.createElement(i.d,{icon:m.p}),r.a.createElement(i.f,null,"Tab 1")),r.a.createElement(i.k,{tab:"tab2",href:"/tab2"},r.a.createElement(i.d,{icon:m.h}),r.a.createElement(i.f,null,"Tab 2")),r.a.createElement(i.k,{tab:"tab3",href:"/tab3"},r.a.createElement(i.d,{icon:m.o}),r.a.createElement(i.f,null,"Tab 3"))))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[51,3,4]]]);
//# sourceMappingURL=main.6720ac19.chunk.js.map