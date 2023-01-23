"use strict";(self["webpackChunkping_wallet"]=self["webpackChunkping_wallet"]||[]).push([[3965],{23965:function(t,s,e){e.r(s),e.d(s,{default:function(){return z}});var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"container-md"},[e("b-card",[e("b-row",[e("b-col",[e("b-input-group",[e("b-form-input",{attrs:{placeholder:"Button on both side"},model:{value:t.rpc,callback:function(s){t.rpc=s},expression:"rpc"}}),e("b-input-group-append",[e("b-button",{attrs:{variant:"outline-primary"},on:{click:function(s){return t.onchange()}}},[t._v(" Monitor ")])],1)],1)],1)],1),200!==t.httpstatus?e("div",{staticClass:"text-danger"},[t._v(" "+t._s(t.httpstatus)+": "+t._s(t.httpStatusText)+" ")]):t._e()],1),t.roundState["height/round/step"]?e("b-row",[e("b-col",{attrs:{lg:"3",sm:"6"}},[e("dashboard-card-horizontal",{attrs:{icon:"ArrowUpCircleIcon",color:"danger",statistic:t.rate,"statistic-title":"Onboard Rate"}})],1),e("b-col",{attrs:{lg:"3",sm:"6"}},[e("dashboard-card-horizontal",{attrs:{icon:"HashIcon",color:"success",statistic:t.height,"statistic-title":"Height"}})],1),e("b-col",{attrs:{lg:"3",sm:"6"}},[e("dashboard-card-horizontal",{attrs:{icon:"RepeatIcon",statistic:t.round,"statistic-title":"Round"}})],1),e("b-col",{attrs:{lg:"3",sm:"6"}},[e("dashboard-card-horizontal",{attrs:{icon:"CodeIcon",color:"info",statistic:t.step,"statistic-title":"Step"}})],1)],1):t._e(),t.roundState["height/round/step"]?e("b-card",[e("b-card-title",{staticClass:"d-flex justify-content-between"},[e("small",{staticClass:"text-danger"},[t._v("Updated at "+t._s(t.format(t.updatetime)))])]),t._l(t.roundState.height_vote_set,(function(s){return e("div",{key:s.round},[e("small",[t._v("Round: "+t._s(s.round)+" "+t._s(s.prevotes_bit_array))]),e("b-card-body",{staticClass:"px-0"},t._l(s.prevotes,(function(s,a){return e("b-badge",{key:a,staticStyle:{margin:"2px"},attrs:{size:"sm",variant:t.color(a,s)}},[e("small",{staticClass:"small"},[t._v(t._s(t.showName(a,s)))])])})),1)],1)})),e("b-card-footer",[e("b-button",{attrs:{variant:"primary",size:"sm"}}),t._v(" Proposer Signed "),e("b-button",{attrs:{variant:"dark",size:"sm"}}),t._v(" Proposer Not Signed "),e("b-button",{attrs:{variant:"success",size:"sm"}}),t._v(" Signed "),e("b-button",{attrs:{variant:"secondary",size:"sm"}}),t._v(" Not Signed ")],1)],2):t._e(),e("b-alert",{attrs:{variant:"info",show:""}},[e("h4",{staticClass:"alert-heading"},[t._v(" Tips ")]),e("div",{staticClass:"alert-body"},[e("ul",[e("li",[t._v("This tool is useful for validators to monitor who is onboard during an upgrade")]),e("li",[t._v('If you want to change the default rpc endpoint. make sure that "https" and "CORS" are enabled on your server.')])])])])],1)},i=[],r=(e(74916),e(15306),e(23123),e(41539),e(54747),e(9653),e(56977),e(21249),e(69826),e(82526),e(41817),e(23157),e(92222),e(73106)),n=e(26034),o=e(26253),c=e(50725),u=e(8775),l=e(40670),d=e(37674),h=e(4060),p=e(22183),v=e(22418),f=e(15193),b=e(47389),g=e(49379),_=e(83300),m=e.n(_),y=e(8385),S=e(19938),x=e.n(S),C=e(14392),w={components:{BAlert:r.F,BBadge:n.k,BRow:o.T,BCol:c.l,BCard:u._,BCardBody:l.O,BCardFooter:d.F,BInputGroup:h.w,BFormInput:p.e,BInputGroupAppend:v.B,BButton:f.T,BAvatar:b.SH,BCardTitle:g._,vSelect:x(),DashboardCardHorizontal:C.Z},data:function(){var t=(0,y.getLocalChains)();return{showPrevote:!1,httpstatus:200,httpStatusText:"",roundState:{},chains:t,vals:[],positions:[],updatetime:new Date,rpc:"",height:"-",round:"-",step:"-",rate:"-"}},computed:{selected:function(){return this.$store.state.chains.selected.chain_name}},created:function(){this.validators(),this.rpc="".concat(this.chains[this.selected].rpc[0],"/consensus_state"),this.fetchPosition(),this.update(),this.timer=setInterval(this.update,6e3)},beforeDestroy:function(){clearInterval(this.timer)},methods:{format:function(t){return(0,y.toDay)(t,"time")},color:function(t,s){return t===this.roundState.proposer.index?"nil-Vote"===s?"dark":"primary":"nil-Vote"===s?"secondary":"success"},fetchPosition:function(){var t=this,s=this.rpc.replace("consensus_state","dump_consensus_state");m()(s).then((function(s){return t.httpstatus=s.status,t.httpStatusText=s.httpStatusText,s.json()})).then((function(s){t.positions=s.result.round_state.validators.validators}))},update:function(){var t=this;this.rate="0%",this.updatetime=new Date,200===this.httpstatus&&m()(this.rpc).then((function(s){return t.httpstatus=s.status,t.httpStatusText=s.httpStatusText,s.json()})).then((function(s){t.roundState=s.result.round_state;var e=t.roundState["height/round/step"].split("/");t.height=e[0],t.round=e[1],t.step=e[2],t.roundState.height_vote_set.forEach((function(s){var e=Number(s.prevotes_bit_array.substring(s.prevotes_bit_array.length-4));e>0&&(t.rate="".concat((100*e).toFixed(),"%"))}))})).catch((function(s){t.httpstatus=500,t.httpStatusText=s}))},validators:function(){var t=this,s=this.chains[this.selected],e=[];this.$http.getValidatorList(s).then((function(t){e=t})).catch((function(){e=(0,y.getCachedValidators)(t.selected.chain_name)||[]})).finally((function(){t.vals=e.map((function(t){var s=t;return s.hex=(0,y.consensusPubkeyToHexAddress)(t.consensus_pubkey),s}))}))},onchange:function(){this.httpstatus=200,this.httpStatusText="",this.roundState={}},showName:function(t,s){var e,a=this;if("nil-Vote"===s){if(this.positions[t]){var i,r=this.vals.find((function(s){return s.hex===a.positions[t].address}));return(null===r||void 0===r||null===(i=r.description)||void 0===i?void 0:i.moniker)||t}return t}var n=s.substring(s.indexOf(":")+1,s.indexOf(" ")),o=s.split(" "),c=this.vals.find((function(t){return t.hex.startsWith(n)}));return"".concat((null===c||void 0===c||null===(e=c.description)||void 0===e?void 0:e.moniker)||n," - ").concat(o[2])}}},B=w,T=e(1001),k=(0,T.Z)(B,a,i,!1,null,null,null),z=k.exports},14392:function(t,s,e){e.d(s,{Z:function(){return v}});var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("b-card",{attrs:{"no-body":""}},[e("b-card-body",{staticClass:"d-flex justify-content-between align-items-center"},[e("div",{staticClass:"truncate"},[e("h4",{staticClass:"mb-25 font-weight-bolder"},[t._v(" "+t._s(t.statistic||"-")+" ")]),t.statistic&&"-"!==t.statistic?0===t.changes?e("span",[t._v(" "+t._s(t.showPrice(t.statistic,t.statisticTitle))+" ")]):t.changes<0?e("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.v-danger",modifiers:{hover:!0,"v-danger":!0}}],staticClass:"text-danger",attrs:{title:t.changes.toFixed(1)+"%"}},[t._v(" "+t._s(t.showPrice(t.statistic,t.statisticTitle))+" ")]):e("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.v-success",modifiers:{hover:!0,"v-success":!0}}],staticClass:"text-success",attrs:{title:"+"+t.changes.toFixed(1)+"%"}},[t._v(" "+t._s(t.showPrice(t.statistic,t.statisticTitle))+" ")]):e("span",[t._v(t._s(t.statisticTitle))])]),e("b-avatar",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{variant:"light-"+t.color,size:"45",text:t.statisticTitle.substring(0,1),title:t.statisticTitle}})],1)],1)},i=[],r=(e(9653),e(74916),e(23123),e(92222),e(56977),e(15306),e(68757),e(8775)),n=e(40670),o=e(47389),c=e(5870),u=e(8385),l={components:{BCard:r._,BCardBody:n.O,BAvatar:o.SH,VBTooltip:c.o},directives:{"b-tooltip":c.o},props:{icon:{type:String,required:!0},statistic:{type:[Number,String],required:!0},statisticTitle:{type:String,default:""},color:{type:String,default:"primary"}},data:function(){return{changes:0}},methods:{showPrice:function(t,s){var e=String(t).split(" ");if(e.length>=2){var a=this.$store.state.chains.quotes[e[1]];if(a){var i=a[(0,u.getUserCurrency)()];return this.changes=a["".concat((0,u.getUserCurrency)(),"_24h_change")],"".concat((0,u.getUserCurrencySign)()).concat((Number(e[0].replaceAll(",",""))*i).toFixed(2))}}return s}}},d=l,h=e(1001),p=(0,h.Z)(d,a,i,!1,null,null,null),v=p.exports}}]);