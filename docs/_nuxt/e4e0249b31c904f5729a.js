(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{262:function(t,e,s){var o=s(263);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,s(6).default)("b02ace04",o,!0,{})},263:function(t,e,s){(t.exports=s(5)(!1)).push([t.i,"",""])},282:function(t,e,s){"use strict";s.r(e);var o=s(221),i=s(235),n=s(234),r={head:()=>({title:"Home",meta:[{property:"og:title",content:"Traveling Circus of Urbanism"},{property:"og:url",content:"https://www.travelingcircusofurbanism.com/"},{name:"google-site-verification",content:"-Bj3TQCPSg-RgBnJo1xQc7u3Zm6sHiu70lcvUpurJhU"}]}),components:{ContentFooter:o.a,PostList:i.a,SearchSelector:n.a},asyncData:({store:t})=>({posts:t.state.allPosts}),data:()=>({showIntro:!1}),computed:{isMobile(){return this.$store.state.isMobile},isDev(){return this.$store.state.viewingAsDev},userLanguage(){return this.$i18n.locale},showablePosts(){return this.posts.filter(t=>this.$store.state.currentShowablePosts.includes(t))}},mounted(){this.$store.commit("setPan",!0),this.$store.commit("setView",this.showablePosts),this.$store.commit("setHighlight")},methods:{}},a=s(1);var c=function(t){s(262)},l=Object(a.a)(r,function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"content"},[e("SearchSelector"),this._v(" "),e("PostList",{attrs:{posts:this.showablePosts,title:"Recent Posts"}}),this._v(" "),e("ContentFooter")],1)},[],!1,c,"data-v-0324ee1d",null);e.default=l.exports}}]);