(this["webpackJsonpreact_phone-catalog"]=this["webpackJsonpreact_phone-catalog"]||[]).push([[0],{25:function(e,t,c){},30:function(e,t,c){},31:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){"use strict";c.r(t);var a=c(19),s=c.n(a),n=(c(30),c(25),c(9)),r=c(4),i=c(1),o=(c(31),c(3)),l=c(6),d=c(7),j=c(0),u="ADD_TO_CART",b="REMOVE_FROM_CART",h="ADD_TO_FAVORITES",m="REMOVE_FROM_FAVORITES",O={cartProducts:JSON.parse(localStorage.getItem("cart"))||[],favoriteProducts:JSON.parse(localStorage.getItem("favorites"))||[]},p=Object(i.createContext)(),v=Object(i.createContext)(),x=function(e,t){switch(t.type){case u:var c=t.payload;return e.cartProducts.find((function(e){return e.id===c}))?Object(d.a)(Object(d.a)({},e),{},{cartProducts:e.cartProducts.map((function(e){return e.id===c?Object(d.a)(Object(d.a)({},e),{},{quantity:(e.quantity||0)+1}):e}))}):Object(d.a)(Object(d.a)({},e),{},{cartProducts:[].concat(Object(l.a)(e.cartProducts),[{id:c,quantity:1}])});case b:var a=t.payload,s=e.cartProducts.map((function(e){if(e.id===a){var t=void 0!==e.quantity?Math.max(e.quantity-1,0):0;return t>0?Object(d.a)(Object(d.a)({},e),{},{quantity:t}):null}return e})).filter(Boolean);return Object(d.a)(Object(d.a)({},e),{},{cartProducts:s});case h:var n=t.payload;return Object(d.a)(Object(d.a)({},e),{},{favoriteProducts:[].concat(Object(l.a)(e.favoriteProducts),[n])});case m:var r=t.payload;return Object(d.a)(Object(d.a)({},e),{},{favoriteProducts:e.favoriteProducts.filter((function(e){return e!==r}))});default:return e}},f=function(e){var t=e.children,c=Object(i.useReducer)(x,O),a=Object(o.a)(c,2),s=a[0],n=a[1];return Object(i.useEffect)((function(){localStorage.setItem("cart",JSON.stringify(s.cartProducts))}),[s.cartProducts]),Object(i.useEffect)((function(){localStorage.setItem("favorites",JSON.stringify(s.favoriteProducts))}),[s.favoriteProducts]),Object(j.jsx)(v.Provider,{value:Object(d.a)(Object(d.a)({},s),{},{addToFavorites:function(e){n({type:h,payload:e})},removeFromFavorites:function(e){n({type:m,payload:e})}}),children:Object(j.jsx)(p.Provider,{value:Object(d.a)(Object(d.a)({},s),{},{addToCart:function(e){n({type:u,payload:e})},removeFromCart:function(e){n({type:b,payload:e})}}),children:t})})},g=function(){var e=Object(i.useContext)(p);if(!e)throw new Error("useCartContext must be used within a CartProvider");return e},N=function(){var e=Object(i.useContext)(v);if(!e)throw new Error("useFavoritesContext must be used within a CartProvider");return e},y=function(){var e=Object(r.l)(),t=N().favoriteProducts,c=g().cartProducts;return Object(j.jsxs)("header",{className:"header",children:[Object(j.jsx)(n.b,{to:"/",children:Object(j.jsx)("img",{src:"".concat("/react_phone-catalog","/img/Logo.svg"),alt:"Logo",className:"logo__image"})}),Object(j.jsxs)("nav",{className:"nav",children:[Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{className:"le",children:Object(j.jsx)(n.b,{to:"/",children:"Home"})}),Object(j.jsx)("li",{className:"le",children:Object(j.jsx)(n.b,{to:"/phones",children:"Phones"})}),Object(j.jsx)("li",{className:"le",children:Object(j.jsx)(n.b,{to:"/tablets",children:"Tablets"})}),Object(j.jsx)("li",{className:"le",children:Object(j.jsx)(n.b,{to:"/accessories",children:"Accessories"})})]}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)("div",{className:"rectangle ".concat(e.pathname.includes("/cart")?"activeLink":""),children:Object(j.jsxs)(n.b,{to:"/cart",className:"a",children:[Object(j.jsx)("img",{src:"".concat("/react_phone-catalog","/img/Group.svg"),alt:"Logo",className:""}),c.length>0&&Object(j.jsx)("div",{className:"cart-count",children:c.length})]})})}),Object(j.jsx)("li",{children:Object(j.jsx)("div",{className:"rectangle ".concat(e.pathname.includes("/favourites")?"activeLink":""),children:Object(j.jsxs)(n.b,{to:"/favourites",children:[Object(j.jsx)("img",{src:"".concat("/react_phone-catalog","/img/Favourites.svg"),alt:"Logo",className:""}),t.length>0&&Object(j.jsx)("div",{className:"favorite-count",children:t.length})]})})})]})]})]})},S=(c(34),function(){return Object(j.jsx)("footer",{className:"footer",children:Object(j.jsxs)("div",{className:"footer-content",children:[Object(j.jsx)("div",{className:"footer-section1",children:Object(j.jsx)("a",{href:"#home",children:Object(j.jsx)("img",{src:"".concat("/react_phone-catalog","/img/Logo.svg"),alt:"Logo",className:"logo__image"})})}),Object(j.jsx)("div",{className:"footer-section2",children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"/github",children:"GITHUB"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"/contacts",children:"CONTACTS"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{href:"/rights",children:"RIGHTS"})})]})}),Object(j.jsxs)("div",{className:"footer-section3",children:[Object(j.jsx)("h2",{children:"Back to top"}),Object(j.jsx)("img",{src:"".concat("/react_phone-catalog","/img/Chevron-right.svg"),alt:"Chevron",className:"chevron"})]})]})})}),C=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(f,{children:[Object(j.jsx)(y,{}),Object(j.jsx)("main",{style:{maxWidth:"1200px",margin:"0 auto",minHeight:"100vh"},children:Object(j.jsx)(r.a,{})}),Object(j.jsx)(S,{})]})})},P=(c(35),function(){var e=Object(i.useState)(0),t=Object(o.a)(e,2),c=t[0],a=t[1],s="_new/img/",n=["".concat(s,"banner-accessories.png"),"".concat(s,"banner-phones.png"),"".concat(s,"banner-tablets.png")],r=function(e){a(e)},l=function(){a((function(e){return 0===e?n.length-1:e-1}))},d=function(){a((function(e){return e===n.length-1?0:e+1}))};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"carousel-container",children:[Object(j.jsx)("div",{className:"button-left",onClick:l,onKeyDown:function(e){"Enter"!==e.key&&" "!==e.key||l()},role:"button",tabIndex:0,"aria-label":"Previous",children:Object(j.jsx)("img",{className:"chevron",src:"".concat("/react_phone-catalog","/img/Chevron-left.svg"),alt:"Previous"})}),Object(j.jsx)("div",{className:"slider-container",children:Object(j.jsx)("div",{className:"slides",style:{transform:"translateX(-".concat(100*c,"%)")},children:n.map((function(e,t){return Object(j.jsx)("div",{className:"slide",children:Object(j.jsx)("img",{src:"".concat("/react_phone-catalog","/").concat(e),alt:"Slide ".concat(t+1)})},e)}))})}),Object(j.jsx)("div",{className:"button-right",onClick:d,onKeyDown:function(e){"Enter"!==e.key&&" "!==e.key||d()},role:"button",tabIndex:0,"aria-label":"Next",children:Object(j.jsx)("img",{className:"chevron",src:"".concat("/react_phone-catalog","/img/Chevron-right.svg"),alt:"Next"})})]}),Object(j.jsx)("div",{className:"dots-container",children:n.map((function(e,t){return Object(j.jsx)("div",{className:"dot ".concat(t===c?"active":""),onClick:function(){return r(t)},onKeyDown:function(e){"Enter"!==e.key&&" "!==e.key||r(t)},role:"button",tabIndex:0,"aria-label":"Slide ".concat(t+1)},e)}))})]})}),k=c(8),I=c(5),_=c.n(I),F=function(e){var t=e.productId,c=Object(i.useState)(null),a=Object(o.a)(c,2),s=a[0],r=a[1],l=g(),d=l.cartProducts,u=l.addToCart,b=l.removeFromCart,h=N(),m=h.favoriteProducts,O=h.addToFavorites,p=h.removeFromFavorites;Object(i.useEffect)((function(){var e=function(){var e=Object(k.a)(_.a.mark((function e(){var c,a,s;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://mate-academy.github.io/react_phone-catalog/api/products.json");case 3:return c=e.sent,e.next=6,c.json();case 6:a=e.sent,s=a.find((function(e){return e.id===t})),r(s||null),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),u(t);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();e()}),[t]);return Object(j.jsxs)("div",{className:"product-card",children:[Object(j.jsxs)(n.a,{className:"Link",to:"/".concat(t),state:{product:s},children:[s&&Object(j.jsx)("img",{src:"".concat("/react_phone-catalog","/").concat(s.imageUrl),className:"image",alt:s.name}),s&&Object(j.jsx)("h2",{className:"name",children:s.name}),function(){if(s&&s.discount){var e=s.price-s.price*s.discount/100;return Object(j.jsxs)("div",{className:"prices",children:[Object(j.jsxs)("p",{className:"discounted-price",children:[e,"$"]}),Object(j.jsxs)("p",{className:"original-price",children:[s.price,"$"]})]})}return Object(j.jsxs)("p",{className:"price",children:[null===s||void 0===s?void 0:s.price,"$"]})}(),Object(j.jsx)("div",{className:"line"}),s&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"card-field",children:[Object(j.jsx)("p",{className:"screen",children:"Screen"}),Object(j.jsx)("p",{children:s.screen})]}),Object(j.jsxs)("div",{className:"card-field",children:[Object(j.jsx)("p",{className:"capacity",children:"Capacity"})," ",s.capacity]}),Object(j.jsxs)("div",{className:"card-field",children:[Object(j.jsx)("p",{className:"ram",children:"RAM"}),s.ram]})]})]}),Object(j.jsxs)("div",{className:"card-buttons",children:[Object(j.jsx)("button",{type:"button",onClick:function(){d.some((function(e){return e.id===t}))?b(t):u(t)},className:d.some((function(e){return e.id===t}))?"button-add added":"button-add",children:d.some((function(e){return e.id===t}))?"Added to cart":"Add to cart"}),Object(j.jsx)("button",{type:"button",onClick:function(){m.includes(t)?p(t):O(t)},className:m.includes(t)?"button-like liked":"button-like"})]})]})},T=(c(36),function(e){var t=e.discountedProducts,c=e.startIndex,a=e.setStartIndex,s=e.favoriteProducts,n=e.setFavoriteProducts,r=e.cartProducts,o=e.setCartProducts;Object(i.useEffect)((function(){var e=localStorage.getItem("favorites"),t=e?JSON.parse(e):[];n((function(e){return[].concat(Object(l.a)(e),Object(l.a)(t))}))}),[n]);return Object(j.jsxs)("div",{className:"discount-products-container",children:[Object(j.jsxs)("div",{className:"title-holder",children:[Object(j.jsx)("p",{className:"title",id:"hotPricesTitle",children:"Hot prices"}),Object(j.jsxs)("div",{className:"buttons-container",children:[Object(j.jsx)("div",{className:"button-container",children:Object(j.jsx)("button",{className:"button left ".concat(0===c?"inactive":""),onClick:function(){a((function(e){return Math.max(e-1,0)}))},disabled:0===c,type:"button","aria-labelledby":"hotPricesTitle"})}),Object(j.jsx)("div",{className:"button-container",children:Object(j.jsx)("button",{className:"button right ".concat(c+4>=t.length?"inactive":""),onClick:function(){a((function(e){return Math.min(e+1,t.length-1)}))},disabled:c+4>=t.length,type:"button","aria-labelledby":"hotPricesTitle"})})]})]}),Object(j.jsx)("div",{className:"cards-container",children:Object(j.jsx)("div",{className:"scrollable-container",children:t.length>0&&t.slice(c,c+4).map((function(e){return Object(j.jsx)(F,{productId:e.id,onAddToFavorite:function(){return function(e){if(!s.includes(e)){var t=[].concat(Object(l.a)(s),[e]);n(t),localStorage.setItem("favorites",JSON.stringify(t))}}(e.id)},onAddToCart:function(){return function(e){if(!r.includes(e)){var t=[].concat(Object(l.a)(r),[e]);o(t),localStorage.setItem("cart",JSON.stringify(t))}}(e.id)}},e.id)}))})})]})}),w=(c(37),function(){var e=Object(i.useState)({tablets:0,phones:0,accessories:0}),t=Object(o.a)(e,2),c=t[0],a=t[1];return Object(i.useEffect)((function(){fetch("https://mate-academy.github.io/react_phone-catalog/api/products.json").then((function(e){return e.json()})).then((function(e){var t=e.reduce((function(e,t){var c=Object(d.a)({},e);return"tablet"===t.type?c.tablets+=1:"phone"===t.type?c.phones+=1:"accessory"===t.type&&(c.accessories+=1),c}),{tablets:0,phones:0,accessories:0});a(t)})).catch((function(){return[]}))}),[]),Object(j.jsxs)("div",{className:"categories-container",children:[Object(j.jsx)("h1",{className:"categories-title",children:"Shop by Category"}),Object(j.jsxs)("div",{className:"categories-row",children:[Object(j.jsxs)(n.b,{to:"/phones",className:"category",children:[Object(j.jsx)("img",{src:"".concat("/react_phone-catalog","/img/phones.png"),className:"category-img phones",alt:"phones"}),Object(j.jsx)("h3",{className:"category-name",children:"Mobile Phones"}),Object(j.jsxs)("p",{className:"category-counter",children:[c.phones,"models"]})]}),Object(j.jsxs)(n.b,{to:"/tablets",className:"category",children:[Object(j.jsx)("img",{src:"".concat("/react_phone-catalog","/img/tablets.png"),className:"category-img tablets",alt:"tablets"}),Object(j.jsx)("h3",{className:"category-name",children:"Tablets"}),Object(j.jsxs)("p",{className:"category-counter",children:[c.tablets,"models"]})]}),Object(j.jsxs)(n.b,{to:"/accessories",className:"category",children:[Object(j.jsx)("img",{src:"".concat("/react_phone-catalog","/img/accesories.png"),className:"category-img accessories last",alt:"accessories"}),Object(j.jsx)("h3",{className:"category-name",children:"Accessories"}),Object(j.jsxs)("p",{className:"category-counter",children:[c.accessories,"models"]})]})]})]})}),A=(c(38),function(e){var t=e.filteredProducts,c=e.startIndex,a=e.setStartIndex,s=e.favoriteProducts,n=e.setFavoriteProducts,r=e.cartProducts,i=e.setCartProducts;return Object(j.jsxs)("div",{className:"discount-products-container",children:[Object(j.jsxs)("div",{className:"title-holder",children:[Object(j.jsx)("p",{id:"newModelsTitle",className:"title",children:"Brand new models"}),Object(j.jsxs)("div",{className:"buttons-container",children:[Object(j.jsx)("div",{className:"button-container",children:Object(j.jsx)("button",{className:"button left ".concat(0===c?"inactive":""),onClick:function(){a((function(e){return Math.max(e-1,0)}))},disabled:0===c,type:"button","aria-labelledby":"newModelsTitle"})}),Object(j.jsx)("div",{className:"button-container",children:Object(j.jsx)("button",{className:"button right ".concat(c+4>=t.length?"inactive":""),onClick:function(){a((function(e){return Math.min(e+1,t.length-1)}))},disabled:c+4>=t.length,type:"button","aria-labelledby":"newModelsTitle"})})]})]}),Object(j.jsx)("div",{className:"cards-container",children:Object(j.jsx)("div",{className:"scrollable-container",children:t.length>0&&t.slice(c,c+4).map((function(e){return Object(j.jsx)(F,{productId:e.id,onAddToFavorite:function(){return function(e){if(!s.includes(e)){var t=[].concat(Object(l.a)(s),[e]);n(t),localStorage.setItem("favorites",JSON.stringify(t))}}(e.id)},onAddToCart:function(){return function(e){if(!r.includes(e)){var t=[].concat(Object(l.a)(r),[e]);i(t),localStorage.setItem("cart",JSON.stringify(t))}}(e.id)}},e.id)}))})})]})}),E=function(){var e=Object(i.useState)([]),t=Object(o.a)(e,2),c=t[0],a=t[1],s=Object(i.useState)([]),n=Object(o.a)(s,2),r=n[0],d=n[1],u=Object(i.useState)(0),b=Object(o.a)(u,2),h=b[0],m=b[1],O=Object(i.useState)([]),p=Object(o.a)(O,2),v=p[0],x=p[1],f=Object(i.useState)([]),g=Object(o.a)(f,2),N=g[0],y=g[1];return Object(i.useEffect)((function(){fetch("https://mate-academy.github.io/react_phone-catalog/api/products.json").then((function(e){return e.json()})).then((function(e){d(e);var t=e.filter((function(e){return 0!==e.discount}));a((function(e){return[].concat(Object(l.a)(e),Object(l.a)(t))}))})).catch((function(e){return a([e])}));var e=localStorage.getItem("favorites"),t=e?JSON.parse(e):[];x(t);var c=localStorage.getItem("cart"),s=c?JSON.parse(c):[];y(s)}),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(P,{}),Object(j.jsx)(T,{discountedProducts:c,startIndex:h,setStartIndex:m,favoriteProducts:v,setFavoriteProducts:x,cartProducts:N,setCartProducts:y}),Object(j.jsx)(w,{}),Object(j.jsx)(A,{filteredProducts:r,startIndex:h,setStartIndex:m,favoriteProducts:v,setFavoriteProducts:x,cartProducts:N,setCartProducts:y})]})},R=(c(39),c(40),function(){var e=Object(i.useState)([]),t=Object(o.a)(e,2),c=t[0],a=t[1],s=Object(i.useState)(0),n=Object(o.a)(s,2),r=n[0],d=n[1],u=Object(i.useState)([]),b=Object(o.a)(u,2),h=b[0],m=b[1];Object(i.useEffect)((function(){fetch("https://mate-academy.github.io/react_phone-catalog/api/products.json").then((function(e){return e.json()})).then((function(e){var t=e.filter((function(e){return 0!==e.discount}));a(t)})).catch((function(e){return a([e])}))}),[]),Object(i.useEffect)((function(){var e=localStorage.getItem("favorites"),t=e?JSON.parse(e):[];m(t)}),[]);var O=function(e){if(!h.includes(e.toString())){var t=[].concat(Object(l.a)(h),[e.toString()]);m(t),localStorage.setItem("favorites",JSON.stringify(t))}};return Object(j.jsxs)("div",{className:"discount-products-container",children:[Object(j.jsxs)("div",{className:"title-holder",children:[Object(j.jsx)("p",{className:"title",children:"You may also like"}),Object(j.jsxs)("div",{className:"buttons-container",children:[Object(j.jsx)("div",{className:"button-container",children:Object(j.jsx)("button",{className:"button left ".concat(0===r?"inactive":""),onClick:function(){d((function(e){return Math.max(e-1,0)}))},disabled:0===r,type:"button","aria-label":"Previous Button"})}),Object(j.jsx)("div",{className:"button-container",children:Object(j.jsx)("button",{className:"button right ".concat(r+4>=c.length?"inactive":""),onClick:function(){d((function(e){return Math.min(e+1,c.length-1)}))},disabled:r+4>=c.length,type:"button","aria-label":"Next Button"})})]})]}),Object(j.jsx)("div",{className:"cards-container",children:Object(j.jsx)("div",{className:"scrollable-container",children:c.length>0&&c.slice(r,r+4).map((function(e){return Object(j.jsx)(F,{productId:e.id.toString(),onAddToFavorite:O,onAddToCart:function(){}},e.id)}))})})]})}),M="/img/",J=["".concat(M,"white.svg"),"".concat(M,"black.svg"),"".concat(M,"green.svg")],L=function(){var e=Object(r.p)().productId,t=Object(i.useState)(null),c=Object(o.a)(t,2),a=c[0],s=c[1],l=Object(i.useState)(null),d=Object(o.a)(l,2),u=d[0],b=d[1],h=Object(i.useState)(0),m=Object(o.a)(h,1)[0],O=Object(i.useState)(null),p=Object(o.a)(O,2),v=p[0],x=p[1],f=Object(i.useState)(null),y=Object(o.a)(f,2),S=y[0],C=y[1],P=g(),I=P.cartProducts,F=P.addToCart,T=P.removeFromCart,w=N(),A=w.favoriteProducts,E=w.addToFavorites,M=w.removeFromFavorites;Object(i.useEffect)((function(){var t=function(){var t=Object(k.a)(_.a.mark((function t(){var c,a,n;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://mate-academy.github.io/react_phone-catalog/api/products.json");case 3:return c=t.sent,t.next=6,c.json();case 6:a=t.sent,n=a.find((function(t){return t.id===e})),s(n||null),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),F(e);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(){return t.apply(this,arguments)}}();t()}),[e]),Object(i.useEffect)((function(){fetch("https://mate-academy.github.io/react_phone-catalog/api/products/".concat(e,".json")).then((function(e){return e.json()})).then((function(e){b(e)})).catch((function(){return b({name:"Error",images:[],display:{screenSize:"",screenResolution:""},hardware:{cpu:""},storage:{ram:"",flash:""},camera:{primary:""},connectivity:{cell:""},price:0,description:""})}))}),[e]);var L=function(e){C(e)};return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"details",children:[Object(j.jsxs)("div",{className:"folder-holder",children:[Object(j.jsx)("button",{type:"button",className:"home-button",children:Object(j.jsx)("img",{src:"".concat("/react_phone-catalog","/img/home.svg"),alt:"Home"})}),Object(j.jsx)("img",{src:"".concat("/react_phone-catalog","/img/Chevron-right.svg"),alt:"Chevron",className:"folder-chevron"}),Object(j.jsx)("p",{className:"page-folder",children:"Phones"}),Object(j.jsx)("img",{src:"".concat("/react_phone-catalog","/img/Chevron-right.svg"),alt:"Chevron",className:"folder-chevron"}),Object(j.jsx)("p",{className:"page-name",children:null===u||void 0===u?void 0:u.name})]}),Object(j.jsxs)("div",{className:"page-back__holder",children:[Object(j.jsx)("img",{src:"".concat("/react_phone-catalog","/img/Chevron-left.svg"),alt:"Chevron",className:"folder-chevron"}),Object(j.jsx)(n.a,{className:"page-back",to:"/",children:"Back"})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{className:"details-title",children:null===u||void 0===u?void 0:u.name}),Object(j.jsxs)("div",{className:"product-details",children:[Object(j.jsxs)("div",{className:"product-upside",children:[Object(j.jsxs)("div",{className:"images-holder",children:[Object(j.jsx)("div",{className:"pictures",children:u&&"images"in u&&u.images.map((function(e,t){return Object(j.jsx)("button",{type:"button",className:"image-holder ".concat(t===m?"selected-picture":"unselected-picture"),children:Object(j.jsx)("img",{src:e,alt:"Product ".concat(t+1)})},e)}))}),Object(j.jsx)("div",{className:"selected-picture",children:(null===u||void 0===u?void 0:u.images[m])&&Object(j.jsx)("img",{src:u.images[m],alt:"Selected Product",className:"selected-picture"})})]}),Object(j.jsxs)("div",{className:"product-details2",children:[Object(j.jsxs)("div",{className:"colors",children:[Object(j.jsx)("p",{className:"colors-title",children:"Available colors"}),Object(j.jsx)("div",{className:"colors-holder",children:J.map((function(e){return Object(j.jsx)("div",{role:"button",tabIndex:0,onClick:function(){return L(e)},onKeyPress:function(t){"Enter"!==t.key&&" "!==t.key||L(e)},children:Object(j.jsx)("img",{src:e,alt:e,className:"color ".concat(S===e?"selected":"")})},e)}))}),Object(j.jsx)("div",{className:"line lined"})]}),Object(j.jsxs)("div",{className:"capacity",children:[Object(j.jsx)("p",{className:"colors-title",children:"Select capacity"}),["64GB","256GB","512GB"].map((function(e){return Object(j.jsx)("button",{className:"capacity-button ".concat(v===e?"selected":""),onClick:function(){return function(e){x(e)}(e)},type:"button",children:e},e)}))]}),Object(j.jsx)("div",{className:"line"}),Object(j.jsxs)("div",{className:"add-to-cart",children:[Object(j.jsx)("p",{className:"price-title"}),function(){if(null!==a&&void 0!==a&&a.discount){var e=a.price-a.price*a.discount/100;return Object(j.jsxs)("div",{className:"prices",children:[Object(j.jsxs)("p",{className:"discounted-price",children:[e,"$"]}),Object(j.jsxs)("p",{className:"original-price",children:[a.price,"$"]})]})}return Object(j.jsxs)("p",{className:"price",children:[null===u||void 0===u?void 0:u.price,"$"]})}(),Object(j.jsxs)("div",{className:"buttons-holder",children:[Object(j.jsx)("button",{type:"button",onClick:function(){I.some((function(t){return t.id===e}))?T(e):F(e)},className:I.some((function(t){return t.id===e}))?"button-add added super":"button-add super",children:I.some((function(t){return t.id===e}))?"Added to cart":"Add to cart"}),Object(j.jsx)("button",{type:"button",onClick:function(){void 0!==e&&(A.includes(e)?M(e):E(e))},className:A.includes(e)?"button-like liked super1":"button-like super1"})]})]}),Object(j.jsxs)("div",{className:"SRPR",children:[Object(j.jsxs)("div",{className:"SRPR-title",children:[Object(j.jsx)("div",{className:"names",children:"Screen"}),Object(j.jsx)("div",{className:"text",children:null===u||void 0===u?void 0:u.display.screenSize})]}),Object(j.jsxs)("div",{className:"SRPR-title",children:[Object(j.jsx)("div",{className:"names",children:"RAM"}),Object(j.jsx)("div",{className:"text",children:null===u||void 0===u?void 0:u.storage.ram})]}),Object(j.jsxs)("div",{className:"SRPR-title",children:[Object(j.jsx)("div",{className:"names",children:"Processor"}),Object(j.jsx)("div",{className:"text",children:null===u||void 0===u?void 0:u.hardware.cpu})]}),Object(j.jsxs)("div",{className:"SRPR-title",children:[Object(j.jsx)("div",{className:"names",children:"Resolution "}),Object(j.jsx)("div",{className:"text",children:null===u||void 0===u?void 0:u.display.screenResolution})]})]})]})]}),Object(j.jsxs)("div",{className:"product-downside",children:[Object(j.jsxs)("div",{className:"about",children:[Object(j.jsx)("p",{className:"about-title",children:"About"}),Object(j.jsx)("div",{className:"line lined"}),Object(j.jsx)("div",{className:"description",children:null===u||void 0===u?void 0:u.description})]}),Object(j.jsxs)("div",{className:"techspecs",children:[Object(j.jsx)("p",{className:"about-title",children:"Techspecs"}),Object(j.jsx)("div",{className:"line lined"}),Object(j.jsxs)("div",{className:"specs",children:[Object(j.jsxs)("div",{className:"specs-title",children:[Object(j.jsx)("div",{className:"specs-name",children:"Screen"}),Object(j.jsx)("div",{className:"specs-info",children:null===u||void 0===u?void 0:u.display.screenSize})]}),Object(j.jsxs)("div",{className:"specs-title",children:[Object(j.jsx)("div",{className:"specs-name",children:"Resolution"}),Object(j.jsx)("div",{className:"specs-info",children:null===u||void 0===u?void 0:u.display.screenResolution})]}),Object(j.jsxs)("div",{className:"specs-title",children:[Object(j.jsx)("div",{className:"specs-name",children:"Processor"}),Object(j.jsx)("div",{className:"specs-info",children:null===u||void 0===u?void 0:u.hardware.cpu})]}),Object(j.jsxs)("div",{className:"specs-title",children:[Object(j.jsx)("div",{className:"specs-name",children:"RAM"}),Object(j.jsx)("div",{className:"specs-info",children:null===u||void 0===u?void 0:u.storage.ram})]}),Object(j.jsxs)("div",{className:"specs-title",children:[Object(j.jsx)("div",{className:"specs-name",children:"Built-in memory"}),Object(j.jsx)("div",{className:"specs-info",children:null===u||void 0===u?void 0:u.storage.flash})]}),Object(j.jsxs)("div",{className:"specs-title",children:[Object(j.jsx)("div",{className:"specs-name",children:"Camera"}),Object(j.jsx)("div",{className:"specs-info",children:null===u||void 0===u?void 0:u.camera.primary})]}),Object(j.jsxs)("div",{className:"specs-title",children:[Object(j.jsx)("div",{className:"specs-name",children:"Cell"}),Object(j.jsx)("div",{className:"specs-info",children:null===u||void 0===u?void 0:u.connectivity.cell})]})]})]})]})]})]}),Object(j.jsx)(R,{})]})})},B=(c(41),function(){var e=Object(k.a)(_.a.mark((function e(){var t,c;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://mate-academy.github.io/react_phone-catalog/api/products.json");case 2:if((t=e.sent).ok){e.next=5;break}throw new Error("Failed to fetch data: ".concat(t.status," ").concat(t.statusText));case 5:return e.next=7,t.json();case 7:return c=e.sent,e.abrupt("return",c);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()),H=function(e,t){return e.filter((function(e){return"phone"===e.type&&e.name.toLowerCase().includes(t.toLowerCase())}))},D=function(e){return e.reduce((function(e,t){return"tablet"===t.type?Object(d.a)(Object(d.a)({},e),{},{tablets:e.tablets+1}):"phone"===t.type?Object(d.a)(Object(d.a)({},e),{},{phones:e.phones+1}):"accessory"===t.type?Object(d.a)(Object(d.a)({},e),{},{accessories:e.accessories+1}):e}),{tablets:0,phones:0,accessories:0})},q=function(){var e=Object(i.useState)([]),t=Object(o.a)(e,2),c=t[0],a=t[1],s=Object(i.useState)(1),n=Object(o.a)(s,2),r=n[0],d=n[1],u=Object(i.useState)(16),b=Object(o.a)(u,2),h=b[0],m=b[1],O=Object(i.useState)("name"),p=Object(o.a)(O,2),v=p[0],x=p[1],f=Object(i.useState)({tablets:0,phones:0,accessories:0}),g=Object(o.a)(f,2),N=g[0],y=g[1],S=Object(i.useState)([]),C=Object(o.a)(S,2),P=C[0],I=C[1],T=Object(i.useState)(""),w=Object(o.a)(T,2),A=w[0],E=w[1];Object(i.useEffect)((function(){var e,t=JSON.parse(null!==(e=localStorage.getItem("favorites"))&&void 0!==e?e:"[]");I(t)}),[]),Object(i.useEffect)((function(){var e=function(){var e=Object(k.a)(_.a.mark((function e(){var t,c,s,n;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,B();case 3:t=e.sent,c=t.filter((function(e){return"phone"===e.type})),s=H(c,A),a(s),n=D(t),y(n),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();e()}),[A]);var R,M=function(e){if(!P.includes(e)){var t=[].concat(Object(l.a)(P),[e]);I(t),localStorage.setItem("favorites",JSON.stringify(t))}},J=function(){var e=(r-1)*h;return{startIndex:e,endIndex:e+h}};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"folder-holder",children:[Object(j.jsx)("button",{type:"button",className:"home-button",children:Object(j.jsx)("img",{src:"".concat("/react_phone-catalog","/img/Home.svg"),alt:"Home"})}),Object(j.jsx)("img",{src:"".concat("/react_phone-catalog","/img/Chevron-right.svg"),alt:"Chevron"}),Object(j.jsx)("p",{className:"page-name",children:"Phones"})]}),Object(j.jsx)("h3",{className:"page-title",children:"Mobile phones"}),Object(j.jsxs)("p",{className:"product-counter",children:[N.phones," ","models"]}),Object(j.jsxs)("div",{className:"page-container",children:[Object(j.jsxs)("div",{className:"sort",children:[Object(j.jsx)("label",{htmlFor:"sort",className:"label-text",children:"Sort by:"}),Object(j.jsxs)("select",{id:"sort",value:v,onChange:function(e){x(e.target.value),d(1)},className:"select-sorter",children:[Object(j.jsx)("option",{value:"name",children:"Name"}),Object(j.jsx)("option",{value:"price",children:"Price"}),Object(j.jsx)("option",{value:"discount",children:"Discount"})]})]}),Object(j.jsxs)("div",{className:"items",children:[Object(j.jsx)("label",{htmlFor:"itemsPerPage",className:"label-text",children:"Items per Page:"}),Object(j.jsxs)("select",{id:"itemsPerPage",value:h,onChange:function(e){m(parseInt(e.target.value,10)),d(1)},className:"select-items",children:[Object(j.jsx)("option",{value:4,children:"4"}),Object(j.jsx)("option",{value:8,children:"8"}),Object(j.jsx)("option",{value:16,children:"16"})]})]})]}),Object(j.jsx)("div",{className:"search-container",children:Object(j.jsx)("input",{className:"search-input",type:"text",placeholder:"Search in phones...",style:{width:"327px",height:"64px"},value:A,onChange:function(e){E(e.target.value),d(1)}})}),Object(j.jsx)("div",{className:"products-container",children:(R=c,R.sort((function(e,t){return"name"===v?e.name.localeCompare(t.name):"price"===v?e.price-t.price:"discount"===v?(t.discount||0)-(e.discount||0):0}))).slice(J().startIndex,J().endIndex).map((function(e){return Object(j.jsx)(F,{productId:e.id,onAddToFavorite:M,onAddToCart:function(){}},e.id)}))}),Object(j.jsxs)("div",{className:"slider-holder",children:[Object(j.jsx)("button",{type:"button",className:"slider-button left","aria-label":"Previous Page",onClick:function(){d((function(e){return Math.max(e-1,1)}))}}),Array.from({length:Math.ceil(c.length/h)},(function(e,t){return t+1})).map((function(e){return Object(j.jsx)("button",{type:"button",className:"slider-button ".concat(r===e?"selected":""),onClick:function(){d(e)},children:e},e)})),Object(j.jsx)("button",{type:"button",className:"slider-button right","aria-label":"Next Page",onClick:function(){d((function(e){return Math.min(e+1,Math.ceil(c.length/h))}))}})]})]})},$=(c(42),function(){var e=Object(i.useState)([]),t=Object(o.a)(e,2),c=t[0],a=t[1],s=Object(i.useState)(1),n=Object(o.a)(s,2),r=n[0],u=n[1],b=Object(i.useState)(16),h=Object(o.a)(b,2),m=h[0],O=h[1],p=Object(i.useState)("name"),v=Object(o.a)(p,2),x=v[0],f=v[1],g=Object(i.useState)({tablets:0,phones:0,accessories:0}),N=Object(o.a)(g,2),y=N[0],S=N[1],C=Object(i.useState)([]),P=Object(o.a)(C,2),k=P[0],I=P[1],_=Object(i.useState)(""),T=Object(o.a)(_,2),w=T[0],A=T[1];Object(i.useEffect)((function(){var e=localStorage.getItem("favorites"),t=e?JSON.parse(e):[];I(t)}),[]),Object(i.useEffect)((function(){fetch("https://mate-academy.github.io/react_phone-catalog/api/products.json").then((function(e){return e.json()})).then((function(e){var t=e.filter((function(e){return"tablet"===e.type})).filter((function(e){return e.name.toLowerCase().includes(w.toLowerCase())}));a(t);var c=e.reduce((function(e,t){var c=Object(d.a)({},e);return"tablet"===t.type?c.tablets+=1:"phone"===t.type?c.phones+=1:"accessory"===t.type&&(c.accessories+=1),c}),{tablets:0,phones:0,accessories:0});S(c)})).catch((function(e){return S(e)}))}),[w]);var E,R=function(e){if(!k.includes(e)){var t=[].concat(Object(l.a)(k),[e]);I(t),localStorage.setItem("favorites",JSON.stringify(t))}},M=function(){var e=(r-1)*m;return{startIndex:e,endIndex:e+m}};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"folder-holder",children:[Object(j.jsx)("button",{type:"button",className:"home-button",children:Object(j.jsx)("img",{src:"".concat("/react_phone-catalog","/img/Home.svg"),alt:"Home"})}),Object(j.jsx)("img",{src:"".concat("/react_phone-catalog","/img/Chevron-right.svg"),alt:"Chevron"}),Object(j.jsx)("p",{className:"page-name",children:"Tablets"})]}),Object(j.jsx)("h3",{className:"page-title",children:"Tablets"}),Object(j.jsxs)("p",{className:"product-counter",children:[y.tablets," ","models"]}),Object(j.jsxs)("div",{className:"page-container",children:[Object(j.jsxs)("div",{className:"sort",children:[Object(j.jsx)("label",{htmlFor:"sort",className:"label-text",children:"Sort by:"}),Object(j.jsxs)("select",{id:"sort",value:x,onChange:function(e){f(e.target.value),u(1)},className:"select-sorter",children:[Object(j.jsx)("option",{value:"name",children:"Name"}),Object(j.jsx)("option",{value:"price",children:"Price"}),Object(j.jsx)("option",{value:"discount",children:"Discount"})]})]}),Object(j.jsxs)("div",{className:"items",children:[Object(j.jsx)("label",{htmlFor:"itemsPerPage",className:"label-text",children:"Items per Page:"}),Object(j.jsxs)("select",{id:"itemsPerPage",value:m,onChange:function(e){O(parseInt(e.target.value,10)),u(1)},className:"select-items",children:[Object(j.jsx)("option",{value:4,children:"4"}),Object(j.jsx)("option",{value:8,children:"8"}),Object(j.jsx)("option",{value:16,children:"16"})]})]})]}),Object(j.jsx)("div",{className:"search-container",children:Object(j.jsx)("input",{className:"search-input",type:"text",placeholder:"Search in tablets...",style:{width:"327px",height:"64px"},value:w,onChange:function(e){A(e.target.value),u(1)}})}),Object(j.jsx)("div",{className:"products-container",children:(E=c,E.sort((function(e,t){return"name"===x?e.name.localeCompare(t.name):"price"===x?e.price-t.price:"discount"===x?(t.discount||0)-(e.discount||0):0}))).slice(M().startIndex,M().endIndex).map((function(e){return Object(j.jsx)(F,{productId:e.id,onAddToFavorite:R,onAddToCart:function(){}},e.id)}))}),Object(j.jsxs)("div",{className:"slider-holder",children:[Object(j.jsx)("button",{className:"slider-button left",onClick:function(){u((function(e){return Math.max(e-1,1)}))},type:"button","aria-label":"Previous Page"}),Array.from({length:Math.ceil(c.length/m)},(function(e,t){return t+1})).map((function(e){return Object(j.jsx)("button",{className:"slider-button ".concat(r===e?"selected":""),onClick:function(){u(e)},type:"button","aria-label":"Go to Page ".concat(e),children:e},e)})),Object(j.jsx)("button",{className:"slider-button right",onClick:function(){u((function(e){return Math.min(e+1,Math.ceil(c.length/m))}))},type:"button","aria-label":"Next Page"})]})]})}),G=function(){var e=N().favoriteProducts,t=Object(i.useState)(""),c=Object(o.a)(t,2),a=c[0],s=c[1],n=function(e){return e},r=e.filter((function(e){return e.includes(a.toLowerCase())}));return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"folder-holder",children:[Object(j.jsx)("button",{type:"button",className:"home-button",children:Object(j.jsx)("img",{src:"".concat("/react_phone-catalog","/img/Home.svg"),alt:"Home"})}),Object(j.jsx)("img",{src:"".concat("/react_phone-catalog","/img/Chevron-right.svg"),alt:"Chevron"}),Object(j.jsx)("p",{className:"page-name",children:"Favorites"})]}),Object(j.jsx)("h3",{className:"page-title",children:"Favorites"}),Object(j.jsx)("p",{className:"product-counter",children:e.length>1?"".concat(e.length," items"):"".concat(e.length," item")}),Object(j.jsx)("div",{className:"search-container",children:Object(j.jsx)("input",{className:"search-input",type:"text",placeholder:"Search in favorites...",style:{width:"327px",height:"64px"},value:a,onChange:function(e){s(e.target.value)}})}),Object(j.jsx)("div",{className:"products-container",children:r.map((function(e){return Object(j.jsx)(F,{productId:e,onAddToCart:n,onAddToFavorite:n},e)}))})]})},K=(c(43),function(e){var t=e.productId,c=g(),a=c.cartProducts,s=c.addToCart,n=c.removeFromCart,r=Object(i.useState)(null),l=Object(o.a)(r,2),d=l[0],u=l[1],b=function(){var e=a.find((function(e){return e.id===t}));return e?e.quantity:0};if(Object(i.useEffect)((function(){fetch("https://mate-academy.github.io/react_phone-catalog/api/products.json").then((function(e){return e.json()})).then((function(e){var c=e.find((function(e){return e.id===t}));c&&u(c)})).catch((function(e){return u(e)}))}),[t]),!d)return null;return Object(j.jsxs)("div",{className:"cart-card",children:[Object(j.jsx)("button",{type:"button",className:"x",onClick:function(){n(t)},children:Object(j.jsx)("img",{src:"".concat("/react_phone-catalog","/img/Close.svg"),alt:"close"})}),Object(j.jsx)("img",{src:d.imageUrl,className:"img",alt:d.name}),Object(j.jsx)("div",{className:"name",children:d.name}),Object(j.jsxs)("div",{className:"buttons-holder1",children:[Object(j.jsx)("button",{type:"button",className:"plusminus",onClick:function(){b()>1&&n(t)},children:Object(j.jsx)("img",{src:"".concat("/react_phone-catalog","/img/Minus.svg"),className:"",alt:"minus"})}),Object(j.jsx)("div",{children:b()}),Object(j.jsx)("button",{type:"button",className:"plusminus",onClick:function(){s(t)},children:Object(j.jsx)("img",{src:"".concat("/react_phone-catalog","/img/Plus.svg"),className:"",alt:"plus"})})]}),Object(j.jsx)("div",{className:"totalprice",children:"".concat(d.price*b(),"$")})]})}),V=function(){var e=Object(i.useState)([]),t=Object(o.a)(e,2),c=t[0],a=t[1];return Object(i.useEffect)((function(){fetch("https://mate-academy.github.io/react_phone-catalog/api/products.json").then((function(e){return e.json()})).then((function(e){return a(e)})).catch((function(e){return a(e)}))}),[]),c},z=(c(44),function(){var e=g(),t=e.cartProducts,c=e.removeFromCart,a=Object(i.useState)(0),s=Object(o.a)(a,2),r=s[0],l=s[1],d=V(),u=function(e){c(e)};return Object(i.useEffect)((function(){!function(){var e=t.reduce((function(e,t){var c=t.id,a=t.quantity,s=d.find((function(e){return e.id===c}));return s?e+s.price*a:e}),0);l(e)}()}),[t,d]),Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("div",{className:"product-div",children:[Object(j.jsxs)("div",{className:"page-back__holder",children:[Object(j.jsx)("img",{src:"".concat("/react_phone-catalog","/img/Chevron-left.svg"),alt:"Chevron",className:"folder-chevron"}),Object(j.jsx)(n.a,{className:"page-back",to:"/",children:"Back"})]}),Object(j.jsx)("h3",{className:"title",children:"Cart"}),Object(j.jsxs)("div",{className:"cart-holder",children:[Object(j.jsx)("div",{className:"cart-cards",children:t.map((function(e){var t=e.id;return Object(j.jsx)(K,{productId:t,onRemoveFromCart:u},t)}))}),Object(j.jsxs)("div",{className:"total",children:[Object(j.jsxs)("div",{className:"total-money",children:["$",r.toFixed(2)]}),Object(j.jsx)("div",{className:"total-total",children:"Total for your items"}),Object(j.jsx)("div",{className:"line total"}),Object(j.jsx)("button",{type:"button",className:"checkout",children:"Checkout"})]})]})]})})}),U=Object(n.d)([{path:"/",element:Object(j.jsx)(C,{}),children:[{path:"/",element:Object(j.jsx)(E,{})},{path:"/:productId",element:Object(j.jsx)(L,{})},{path:"/phones",element:Object(j.jsx)(q,{})},{path:"/tablets",element:Object(j.jsx)($,{})},{path:"/favourites",element:Object(j.jsx)(G,{})},{path:"/cart",element:Object(j.jsx)(z,{})}]}],{basename:"/react_phone-catalog"}),W=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(n.c,{router:U})})};s.a.render(Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(W,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.d0a5b65a.chunk.js.map