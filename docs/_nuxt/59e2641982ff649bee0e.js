(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{228:function(t,e,s){var o=s(229);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,s(6).default)("6c30645b",o,!0,{})},229:function(t,e,s){(t.exports=s(5)(!1)).push([t.i,"\n.breadcrumb[data-v-3b16be55] {\n  background: #f7f6f3;\n  padding: 0;\n  width: 50vw;\n  white-space: nowrap;\n  position: relative;\n  border-bottom: 1px solid rgba(224, 223, 214, 0.5);\n  font-size: 0.9em;\n  position: relative;\n  z-index: 3;\n  overflow: hidden;\n}\n.breadcrumb > *[data-v-3b16be55] {\n    z-index: 1;\n}\n.breadcrumb[data-v-3b16be55]:after {\n    content: '';\n    pointer-events: none;\n    position: absolute;\n    right: 0;\n    bottom: 0;\n    top: 0;\n    left: 0;\n    background-image: linear-gradient(to right, rgba(247, 246, 243, 0) 90%, #f7f6f3 99.5%);\n    z-index: 2;\n}\n.crumb[data-v-3b16be55] {\n  transition: all 0.2s;\n  color: #5e5e5e !important;\n  position: relative;\n  margin: 0;\n  padding: 12px 24px;\n  color: #1f1f1f;\n  text-decoration: none;\n  display: inline-block;\n}\n.crumb[data-v-3b16be55]:hover {\n    color: #1f1f1f !important;\n}\n.crumb[data-v-3b16be55]:first-of-type {\n    padding-left: 96px;\n    margin-left: -48px;\n}\n.crumb > *[data-v-3b16be55] {\n    position: relative;\n    z-index: 4;\n    white-space: nowrap;\n}\n.crumb[data-v-3b16be55]:before {\n    transition: all 0.2s;\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    transform: skew(-25deg);\n    border-right: 1px solid rgba(224, 223, 214, 0.7);\n    z-index: 3;\n}\n.crumb[data-v-3b16be55]:last-of-type:before {\n    border-right: none;\n}\n.crumb[data-v-3b16be55]:hover::before {\n    background: #f1efea !important;\n    z-index: 4;\n    box-shadow: 0px 2px 10px #cec8b6 !important;\n}\n",""])},230:function(t,e,s){"use strict";const{capitalize:o,softTruncate:i}=s(31);var n={props:{title:{required:!1}},computed:{isMobile(){return this.$store.state.isMobile},breadcrumbs(){return this.$store.state.breadcrumbs},pathEls(){return[{label:"Home",url:this.localePath("index")},...this.breadcrumbs]}},methods:{capitalize:o,softTruncate:i}},a=s(1);var r=function(t){s(228)},c=Object(a.a)(n,function(){var t=this,e=t.$createElement,s=t._self._c||e;return!1===t.isMobile&&t.breadcrumbs&&t.breadcrumbs.length>0?s("div",{staticClass:"breadcrumb content-top-full"},t._l(t.pathEls,function(e,o){return s("nuxt-link",{key:o,staticClass:"crumb",class:(o===t.pathEls.length-1?"last ":"")+"gray"+o,attrs:{to:e.url,exact:""}},[s("span",[t._v(t._s(t.capitalize(e.label)))])])})):t._e()},[],!1,r,"data-v-3b16be55",null);e.a=c.exports},231:function(t,e,s){var o=s(232);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,s(6).default)("e0e56cb4",o,!0,{})},232:function(t,e,s){(t.exports=s(5)(!1)).push([t.i,"",""])},233:function(t,e,s){"use strict";var o=s(221),i=s(235),n=s(230),a=s(234),r={components:{ContentFooter:o.a,PostList:i.a,Breadcrumb:n.a,SearchSelector:a.a},props:{postListTitle:{required:!0},posts:{required:!0},marker:{required:!1}},scrollToTop:!0,data:()=>({skippingToFirstPost:!1}),computed:{isMobile(){return this.$store.state.isMobile},isDev(){return this.$store.state.viewingAsDev},userLanguage(){return this.$i18n.locale},showablePosts(){return this.posts.filter(t=>this.$store.state.currentShowablePosts.includes(t))}},beforeDestroy(){this.$store.commit("setHighlight")},created(){if(1===this.showablePosts.length){this.$store.commit("setHighlight"),this.$store.commit("setViewPolygons"),this.skippingToFirstPost=!0;const t=this.showablePosts[0];return this.$router.replace({path:this.localePath({name:"city-post",params:{city:t.city,post:t.slug}})})}},mounted(){if(!this.skippingToFirstPost)if(this.$store.commit("setPan",!1),this.marker)this.$store.commit("setView",this.marker),this.$store.commit("setHighlight",this.marker);else{this.$store.commit("setView",this.showablePosts);const t=this.showablePosts.map(t=>t.polygons).filter(t=>t).reduce((t,e)=>t.concat(e),[]);t.length>0&&this.$store.commit("setViewPolygons",t),this.$store.commit("setHighlight",this.showablePosts)}},methods:{}},c=s(1);var l=function(t){s(231)},p=Object(c.a)(r,function(){var t=this.$createElement,e=this._self._c||t;return e("section",{key:Date.now(),staticClass:"content"},[e("Breadcrumb"),this._v(" "),e("SearchSelector"),this._v(" "),e("PostList",{attrs:{posts:this.showablePosts,title:this.postListTitle}}),this._v(" "),e("ContentFooter")],1)},[],!1,l,"data-v-2f629f38",null);e.a=p.exports},260:function(t,e,s){var o=s(261);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,s(6).default)("15d4580c",o,!0,{})},261:function(t,e,s){(t.exports=s(5)(!1)).push([t.i,"",""])},281:function(t,e,s){"use strict";s.r(e);var o=s(233);const{capitalize:i}=s(31);var n={components:{PostListPage:o.a},scrollToTop:!0,head(){return{title:this.capitalize(this.tag),meta:[{property:"og:title",content:`${this.capitalize(this.tag)} | Traveling Circus of Urbanism`},{property:"og:url",content:`https://www.travelingcircusofurbanism.com/tag/${this.tag}`},{hid:"og:image",property:"og:image",content:"http"===this.posts[0].image.substring(0,4)?this.posts[0].image:`https://www.travelingcircusofurbanism.com${this.posts[0].image}`}]}},asyncData({route:t,redirect:e,error:s,isStatic:o,store:i}){const n=decodeURIComponent(decodeURIComponent(t.path)).replace("/ja/","/").replace("/tag/","").replace(/%2F/g,"/").toLowerCase();let a=i.state.allPosts;return a&&0!==a.length?1===(a=a.filter(t=>t.tags&&t.tags.find(t=>t.toLowerCase()===n))).length?e(a[0].url):{posts:a,tag:n}:s({statusCode:404,message:"Page not found."})},created(){this.$store.commit("setBreadcrumbs",[{label:"#"+this.tag,url:this.localePath({name:"tag-tag",params:{tag:this.tag}})}])},methods:{capitalize:i}},a=s(1);var r=function(t){s(260)},c=Object(a.a)(n,function(){var t=this.$createElement;return(this._self._c||t)("PostListPage",{attrs:{postListTitle:"#"+this.tag,posts:this.posts}})},[],!1,r,"data-v-63db58fa",null);e.default=c.exports}}]);