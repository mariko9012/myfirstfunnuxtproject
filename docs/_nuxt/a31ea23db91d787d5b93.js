(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{262:function(t,e,o){"use strict";o(45),o(24),o(30);var n=o(253),r=o(263),c=o(107),l={components:{ContentFooter:n.a,PostList:r.a,BlueBanner:c.a},props:{postListTitle:{required:!0},posts:{required:!0},marker:{required:!1}},scrollToTop:!0,data:function(){return{skippingToFirstPost:!1,clientLanguage:this.$i18n.locale}},computed:{isMobile:function(){return this.$store.state.isMobile},isDev:function(){return this.$store.state.viewingAsDev},userLanguage:function(){return this.$i18n.locale},showablePosts:function(){var t=this;return this.posts.filter(function(p){return t.$store.state.currentShowablePosts.includes(p)})}},beforeDestroy:function(){this.$store.commit("setHighlight")},created:function(){if(1===this.showablePosts.length){this.$store.commit("setHighlight"),this.$store.commit("setViewPolygons"),this.skippingToFirstPost=!0;var t=this.showablePosts[0];return this.$router.replace({path:this.localePath({name:"city-post",params:{city:t.city,post:t.slug}})})}},mounted:function(){if(!this.skippingToFirstPost)if(this.clientLanguage=(window?window.navigator.userLanguage||window.navigator.language:"en").substring(0,2),this.$el.parentElement.scrollTop=0,this.$store.commit("setPan",!1),this.marker)this.$store.commit("setView",this.marker),this.$store.commit("setHighlight",this.marker);else{this.$store.commit("setView",this.showablePosts);var t=this.showablePosts.map(function(p){return p.polygons}).filter(function(p){return p}).reduce(function(t,p){return t.concat(p)},[]);t.length>0&&this.$store.commit("setViewPolygons",t),this.$store.commit("setHighlight",this.showablePosts)}},methods:{}},h=o(1),component=Object(h.a)(l,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[0===t.showablePosts.length&&t.clientLanguage===t.$i18n.locale?o("BlueBanner",{scopedSlots:t._u([{key:"ja",fn:function(){return[t._v("\n      ここの日本語の記事はまだありません。\n      "),o("nuxt-link",{attrs:{to:t.localePath("index"),exact:""}},[t._v("ホームに戻る")]),t._v("と日本語での記事があります！\n    ")]},proxy:!0}],null,!1,1802923211)},[t._v("\n    There are no English posts here yet!\n    "),o("nuxt-link",{attrs:{to:t.localePath("index"),exact:""}},[t._v("Check out our home page")]),t._v(" "),o("span",[t._v("to find articles in English.")])],1):t._e(),t._v(" "),o("section",{key:Date.now(),staticClass:"content"},[o("PostList",{attrs:{posts:t.showablePosts,title:t.postListTitle}}),t._v(" "),o("ContentFooter")],1)],1)},[],!1,null,"6e989fce",null);e.a=component.exports},309:function(t,e,o){"use strict";o.r(e);o(40),o(24),o(30),o(45),o(31);var n,r=o(3),c=o(152),l=o.n(c),h=o(262),m=o(39).capitalize,f={components:{PostListPage:h.a},scrollToTop:!0,layout:"default",head:function(){var t="Urbanist case studies, interviews, and stories from ".concat(this.capitalize(this.location)," on the Traveling Circus of Urbanism."),meta=[{property:"og:title",content:"".concat(this.capitalize(this.location)," | Traveling Circus of Urbanism")},{hid:"description",name:"description",content:t},{hid:"og:description",property:"og:description",content:t},{hid:"og:url",property:"og:url",content:"https://www.travelingcircusofurbanism.com/at/".concat(this.location)},{hid:"og:image",property:"og:image",content:this.posts[0]?"http"===this.posts[0].image.substring(0,4)?this.posts[0].image:"https://www.travelingcircusofurbanism.com".concat(this.posts[0].image):"https://www.travelingcircusofurbanism.com/assets/sitethumbnail.jpg"}];return this.posts&&0!==this.posts.length||meta.push({rel:"canonical",href:"https://www.travelingcircusofurbanism.com".concat(this.switchLocalePath("ja"===this.$i18n.locale?"en":"ja"))}),{title:this.capitalize(this.location),meta:meta}},asyncData:(n=Object(r.a)(regeneratorRuntime.mark(function t(e){var o,n,r,c,h,m,f,d,w,marker;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:o=e.route,n=e.redirect,r=e.error,c=e.store,h=e.app,m=decodeURIComponent(decodeURIComponent(o.path)).replace("/ja/","/").replace("/at/","").replace(/\/$/,"").toLowerCase(),f=[],t.next=8;break;case 8:return t.prev=8,d={validateStatus:function(t){return!0}},t.next=12,l.a.get("/generated/locations.json",d).then(function(t){return f=t.data}).catch(function(t){return console.log(t)});case 12:t.next=18;break;case 14:return t.prev=14,t.t0=t.catch(8),console.log(t.t0),t.abrupt("return",r({statusCode:404,message:"Page not found."}));case 18:if(f.includes(m)){t.next=20;break}return t.abrupt("return",r({statusCode:404,message:"Page not found."}));case 20:if(w=c.viewingAsDev?c.state.allPosts:c.state.currentShowablePosts,marker={},1!==(w=w.filter(function(p){var t=(Array.isArray(p.mapPosition)?p.mapPosition:[p.mapPosition]).concat(p.polygons).filter(function(p){return p});if(t.length>0){var e=t.find(function(t){return t.location&&t.location.toLowerCase()===m});return e&&(marker=e),e}})).length){t.next=25;break}return t.abrupt("return",n(h.localePath({name:"city-post",params:{city:w[0].city,post:w[0].slug}})));case 25:return t.abrupt("return",{posts:w,location:m,marker:marker});case 26:case"end":return t.stop()}},t,null,[[8,14]])})),function(t){return n.apply(this,arguments)}),created:function(){this.$store.commit("setBreadcrumbs",[{label:"at: "+this.location,url:this.localePath({name:"at-location",params:{location:this.location}})}])},methods:{capitalize:m}},d=o(1),component=Object(d.a)(f,function(){var t=this.$createElement;return(this._self._c||t)("PostListPage",{attrs:{postListTitle:this.location,posts:this.posts,marker:this.marker}})},[],!1,null,"5a18fe1a",null);e.default=component.exports}}]);