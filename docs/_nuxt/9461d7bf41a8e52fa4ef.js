(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{218:function(t,e,s){var a=s(219);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,s(5).default)("e4647fa2",a,!0,{})},219:function(t,e,s){(t.exports=s(4)(!1)).push([t.i,"\n.breadcrumb[data-v-8873ca0a] {\n  background: #f7f6f3;\n  padding: 0;\n  width: 50vw;\n  white-space: nowrap;\n  position: relative;\n  border-bottom: 1px solid rgba(224, 223, 214, 0.5);\n  font-size: 0.9em;\n  position: relative;\n  z-index: 3;\n  overflow: hidden;\n}\n.breadcrumb > *[data-v-8873ca0a] {\n    z-index: 1;\n}\n.breadcrumb[data-v-8873ca0a]:after {\n    content: '';\n    pointer-events: none;\n    position: absolute;\n    right: 0;\n    bottom: 0;\n    top: 0;\n    left: 0;\n    background-image: linear-gradient(to right, rgba(247, 246, 243, 0) 90%, #f7f6f3 99.5%);\n    z-index: 2;\n}\n.crumb[data-v-8873ca0a] {\n  transition: all 0.2s;\n  color: #626262 !important;\n  position: relative;\n  margin: 0;\n  padding: 12px 24px;\n  color: #222;\n  text-decoration: none;\n  display: inline-block;\n}\n.crumb[data-v-8873ca0a]:hover {\n    color: #222 !important;\n}\n.crumb[data-v-8873ca0a]:first-of-type {\n    padding-left: 96px;\n    margin-left: -48px;\n}\n.crumb > *[data-v-8873ca0a] {\n    position: relative;\n    z-index: 4;\n    white-space: nowrap;\n}\n.crumb[data-v-8873ca0a]:before {\n    transition: all 0.2s;\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    transform: skew(-25deg);\n    border-right: 1px solid rgba(224, 223, 214, 0.7);\n    z-index: 3;\n}\n.crumb[data-v-8873ca0a]:last-of-type:before {\n    border-right: none;\n}\n.crumb[data-v-8873ca0a]:hover::before {\n    background: #f1efea !important;\n    z-index: 4;\n    box-shadow: 0px 2px 10px #cec8b6 !important;\n}\n",""])},220:function(t,e,s){"use strict";const{capitalize:a,softTruncate:i}=s(21);var n={props:{title:{required:!1}},computed:{isMobile(){return this.$store.state.isMobile},pathEls(){const t=this.$nuxt.$route.path.substring(1),e=[{label:"Home",url:"/"}];let s=t.substring(0,t.indexOf("/")),a=t.substring(t.indexOf("/")+1),i="";return"is"!==s&&"at"!==s||(i=s+": "),"tag"===s?i="#":""!==s&&e.push({label:this.capitalize(decodeURI(s)),url:`/${s}`}),e.push({label:this.title?this.capitalize(this.softTruncate(this.title,70)):`${i||""}${this.capitalize(decodeURI(a.replace(/\/$/,"")))}`,url:`/${t}`}),e}},methods:{capitalize:a,softTruncate:i}},o=s(1);var r=function(t){s(218)},l=Object(o.a)(n,function(){var t=this,e=t.$createElement,s=t._self._c||e;return!1===t.isMobile?s("div",{staticClass:"breadcrumb content-top-full"},t._l(t.pathEls,function(e,a){return s("nuxt-link",{key:a,staticClass:"crumb",class:(a===t.pathEls.length-1?"last ":"")+"gray"+a,attrs:{to:e.url,exact:""}},[s("span",[t._v(t._s(e.label))])])})):t._e()},[],!1,r,"data-v-8873ca0a",null);e.a=l.exports},221:function(t,e,s){var a=s(222);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,s(5).default)("7132e261",a,!0,{})},222:function(t,e,s){(t.exports=s(4)(!1)).push([t.i,"",""])},223:function(t,e,s){"use strict";var a=s(211),i=s(226),n=s(220),o=s(224),r=s(227);const{capitalize:l}=s(21);var c={components:{ContentFooter:a.a,PostList:i.a,Breadcrumb:n.a,SearchSelector:o.a,LanguagePicker:r.a},props:{postListTitle:{required:!0},posts:{required:!0},marker:{required:!1}},scrollToTop:!0,data:()=>({skippingToFirstPost:!1}),computed:{isMobile(){return this.$store.state.isMobile},isDev(){return this.$store.state.isDev},userLanguage(){return this.$store.state.language},onlyShowLanguage(){return this.$store.state.onlyShowLanguage},showablePosts(){return this.posts.filter(t=>this.$store.state.currentShowablePosts.includes(t))}},beforeDestroy(){this.$store.commit("setHighlight")},created(){if(1===this.showablePosts.length)return this.$store.commit("setHighlight"),this.$store.commit("setViewPolygons"),this.skippingToFirstPost=!0,this.$router.replace({path:this.showablePosts[0].url})},mounted(){if(!this.skippingToFirstPost)if(this.$store.commit("setPan",!1),this.marker)this.$store.commit("setView",this.marker),this.$store.commit("setHighlight",this.marker);else{this.$store.commit("setView",this.showablePosts);const t=this.showablePosts.map(t=>t.polygons).filter(t=>t).reduce((t,e)=>t.concat(e),[]);t.length>0&&this.$store.commit("setViewPolygons",t),this.$store.commit("setHighlight",this.showablePosts)}},methods:{capitalize:l}},p=s(1);var u=function(t){s(221)},h=Object(p.a)(c,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{key:Date.now(),staticClass:"content"},[t.showablePosts.find(function(e){return e.languages["en"===t.userLanguage?"ja":"en"]})?s("LanguagePicker"):t._e(),t._v(" "),s("Breadcrumb"),t._v(" "),s("SearchSelector"),t._v(" "),s("PostList",{attrs:{posts:t.showablePosts,title:t.postListTitle}}),t._v(" "),s("ContentFooter")],1)},[],!1,u,"data-v-3f4fafe8",null);e.a=h.exports},259:function(t,e,s){var a=s(260);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);(0,s(5).default)("2d63547d",a,!0,{})},260:function(t,e,s){(t.exports=s(4)(!1)).push([t.i,"",""])},282:function(t,e,s){"use strict";s.r(e);var a=s(223);const{capitalize:i}=s(21);var n={components:{PostListPage:a.a},scrollToTop:!0,head(){return{title:this.capitalize(this.tag),meta:[{property:"og:title",content:`${this.capitalize(this.tag)} | Traveling Circus of Urbanism`},{property:"og:url",content:`https://www.travelingcircusofurbanism.com/tag/${this.tag}`},{hid:"og:image",property:"og:image",content:"http"===this.posts[0].image.substring(0,4)?this.posts[0].image:`https://www.travelingcircusofurbanism.com${this.posts[0].image}`}]}},asyncData({route:t,redirect:e,error:s,isStatic:a,store:i}){const n=decodeURI(t.path).replace("/tag/","").toLowerCase();let o=i.state.allPosts;return o&&0!==o.length?1===(o=o.filter(t=>t.tags&&t.tags.find(t=>t.toLowerCase()===n))).length?e(o[0].url):{posts:o,tag:n}:s({statusCode:404,message:"Page not found."})},methods:{capitalize:i}},o=s(1);var r=function(t){s(259)},l=Object(o.a)(n,function(){var t=this.$createElement;return(this._self._c||t)("PostListPage",{attrs:{postListTitle:"#"+this.tag,posts:this.posts}})},[],!1,r,"data-v-6b348e84",null);e.default=l.exports}}]);