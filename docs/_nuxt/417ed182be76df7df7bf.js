(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{271:function(t,e,o){var content=o(297);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(11).default)("546eec6e",content,!1,{sourceMap:!1})},296:function(t,e,o){"use strict";var n=o(271);o.n(n).a},297:function(t,e,o){(t.exports=o(10)(!1)).push([t.i,"",""])},312:function(t,e,o){"use strict";o.r(e);o(24),o(30);var n=o(253),r=o(263),c={scrollToTop:!0,name:"index",layout:"default",head:function(){return{title:"Home",meta:[{property:"og:title",content:"Traveling Circus of Urbanism"},{property:"og:url",content:"https://www.travelingcircusofurbanism.com/"},{name:"google-site-verification",content:"-Bj3TQCPSg-RgBnJo1xQc7u3Zm6sHiu70lcvUpurJhU"}]}},components:{ContentFooter:n.a,PostList:r.a},asyncData:function(t){return{posts:t.store.state.allPosts}},data:function(){return{showIntro:!1}},computed:{isMobile:function(){return this.$store.state.isMobile},isDev:function(){return this.$store.state.viewingAsDev},userLanguage:function(){return this.$i18n.locale},showablePosts:function(){var t=this;return this.posts.filter(function(p){return t.$store.state.currentShowablePosts.includes(p)})}},created:function(){this.$store.commit("setBreadcrumbs",[])},mounted:function(){this.$store.commit("setPan",!0),this.$store.commit("setView",this.showablePosts),this.$store.commit("setHighlight")},methods:{}},l=(o(296),o(1)),component=Object(l.a)(c,function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"content"},[e("PostList",{attrs:{posts:this.showablePosts,title:"Recent Posts"}}),this._v(" "),e("ContentFooter")],1)},[],!1,null,"2c867804",null);e.default=component.exports}}]);