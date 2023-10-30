import{c as W,d as O,q as R,aM as E,n as Y,t as F,x as q,a as i,L as G,aK as H,I as K,w as Q,a4 as p,a5 as s,a6 as a,H as m,af as v,az as X,a9 as e,ad as c,aL as k,ah as S,ai as Z,ag as $,aI as U,aN as J,a7 as P,a8 as N,D as tt,aa as et,aO as st,b as L,k as at,aP as ot}from"./index-12ba5279.js";import{h as nt}from"./index-d9b78adb.js";import{a as ct,S as lt}from"./index-8229e0d2.js";import{R as it}from"./index-885e3e8f.js";import{u as dt}from"./useScroll-eee8e1c5.js";const[rt,g]=W("nav-bar"),ut={title:String,fixed:Boolean,zIndex:Y,border:F,leftText:String,rightText:String,leftDisabled:Boolean,rightDisabled:Boolean,leftArrow:Boolean,placeholder:Boolean,safeAreaInsetTop:Boolean,clickable:F};var _t=O({name:rt,props:ut,emits:["clickLeft","clickRight"],setup(t,{emit:r,slots:l}){const n=R(),o=E(n,g),d=h=>{t.leftDisabled||r("clickLeft",h)},u=h=>{t.rightDisabled||r("clickRight",h)},_=()=>l.left?l.left():[t.leftArrow&&i(K,{class:g("arrow"),name:"arrow-left"},null),t.leftText&&i("span",{class:g("text")},[t.leftText])],y=()=>l.right?l.right():i("span",{class:g("text")},[t.rightText]),w=()=>{const{title:h,fixed:D,border:b,zIndex:x}=t,z=q(x),T=t.leftArrow||t.leftText||l.left,M=t.rightText||l.right;return i("div",{ref:n,style:z,class:[g({fixed:D}),{[H]:b,"van-safe-area-top":t.safeAreaInsetTop}]},[i("div",{class:g("content")},[T&&i("div",{class:[g("left",{disabled:t.leftDisabled}),t.clickable&&!t.leftDisabled?G:""],onClick:d},[_()]),i("div",{class:[g("title"),"van-ellipsis"]},[l.title?l.title():h]),M&&i("div",{class:[g("right",{disabled:t.rightDisabled}),t.clickable&&!t.rightDisabled?G:""],onClick:u},[y()])])])};return()=>t.fixed&&t.placeholder?o(w):w()}});const ht=Q(_t);function mt(t){return nt.get({url:"/detail/infos",params:{houseId:t}})}const ft="data:image/png;base64,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";const bt={props:{titles:{type:Array,default:()=>[]}},data(){return{currentIndex:0}},emits:["tabItemClick"],methods:{itemClick(t){this.currentIndex=t,this.$emit("tabItemClick",t)},setCurrentIndex(t){this.currentIndex=t}}},vt={class:"tab-control"},pt=["onClick"];function yt(t,r,l,n,o,d){return s(),a("div",vt,[(s(!0),a(m,null,v(l.titles,(u,_)=>(s(),a("div",{key:u,class:X(["tab-control-item",{active:_===o.currentIndex}]),onClick:y=>d.itemClick(_)},[e("span",null,c(u),1)],10,pt))),128))])}const xt=p(bt,[["render",yt],["__scopeId","data-v-02593d15"]]);const gt={class:"swipe"},kt=["src"],St={class:"indicator"},Mt={class:"text"},At={key:0,class:"count"},Ct={__name:"detail_01-swipe",props:{swipeData:{type:Array,default:()=>[]}},setup(t){const r=t,l={};for(const u of r.swipeData){let _=l[u.enumPictureCategory];_||(_=[],l[u.enumPictureCategory]=_),_.push(u)}const n=/【(.*?)】/i,o=u=>n.exec(u)[1],d=u=>l[u.enumPictureCategory].findIndex(y=>y===u)+1;return(u,_)=>{const y=ct,w=lt;return s(),a("div",gt,[i(w,{class:"swipe-list",autoplay:3e3,"indicator-color":"white"},{indicator:k(({active:h,total:D})=>[e("div",St,[(s(),a(m,null,v(l,(b,x,z)=>{var T,M;return e("span",{key:x,class:X(["item",{active:((T=t.swipeData[h])==null?void 0:T.enumPictureCategory)==x}])},[e("span",Mt,c(o(b[0].title)),1),((M=t.swipeData[h])==null?void 0:M.enumPictureCategory)==x?(s(),a("span",At,c(d(t.swipeData[h]))+" /"+c(b.length),1)):S("",!0)],2)}),64))])]),default:k(()=>[(s(!0),a(m,null,v(t.swipeData,(h,D)=>(s(),Z(y,{class:"item"},{default:k(()=>[e("img",{src:h.url,alt:""},null,8,kt)]),_:2},1024))),256))]),_:1})])}}},wt=p(Ct,[["__scopeId","data-v-282704c5"]]);const Tt={class:"infos"},It={class:"name"},Bt={class:"tags"},Rt={class:"comment extra"},Dt={class:"left"},zt={class:"score"},Pt={class:"title"},Nt={class:"brief"},Vt={class:"right"},Lt={class:"count"},Kt={class:"position extra"},$t={class:"left address"},jt={class:"right"},Ft={__name:"detail_02-infos",props:{topInfos:{type:Object,default:()=>({})}},setup(t){return(r,l)=>{const n=K;return s(),a("div",Tt,[e("div",It,c(t.topInfos.houseName),1),e("div",Bt,[(s(!0),a(m,null,v(t.topInfos.houseTags,(o,d)=>(s(),a(m,{key:d},[o.tagText?(s(),a("span",{key:0,class:"item",style:$({color:o.tagText.color,background:o.tagText.background.color})},c(o.tagText.text),5)):S("",!0)],64))),128))]),e("div",Rt,[e("div",Dt,[e("span",zt,c(t.topInfos.commentBrief.overall),1),e("span",Pt,c(t.topInfos.commentBrief.scoreTitle),1),e("span",Nt,c(t.topInfos.commentBrief.commentBrief),1)]),e("div",Vt,[e("div",Lt,[U(c(t.topInfos.commentBrief.totalCount)+"条评论 ",1),i(n,{name:"arrow"})])])]),e("div",Kt,[e("div",$t,c(t.topInfos.nearByPosition.address),1),e("div",jt,[U(" 地图·周边 "),i(n,{name:"arrow"})])])])}}},Gt=p(Ft,[["__scopeId","data-v-58381e84"]]);const Ut=t=>(P("data-v-a66f9c65"),t=t(),N(),t),Xt={class:"section"},Zt={class:"header"},Wt={class:"title"},Ot={class:"content"},Et=Ut(()=>e("h3",null,"我是默认内容",-1)),Yt={key:0,class:"footer"},qt={class:"more"},Ht={__name:"detail-section",props:{title:{type:String,default:"默认标题"},moreText:{type:String,default:""}},setup(t){return(r,l)=>{const n=K;return s(),a("div",Xt,[e("div",Zt,[e("h2",Wt,c(t.title),1)]),e("div",Ot,[J(r.$slots,"default",{},()=>[Et],!0)]),t.moreText.length?(s(),a("div",Yt,[e("span",qt,c(t.moreText),1),i(n,{name:"arrow"})])):S("",!0)])}}},V=p(Ht,[["__scopeId","data-v-a66f9c65"]]);const Qt=t=>(P("data-v-54b860b8"),t=t(),N(),t),Jt={class:"facility"},te={class:"facility-inner"},ee={key:0,class:"item"},se={class:"head"},ae=["src"],oe={class:"text"},ne={class:"list"},ce=Qt(()=>e("i",{class:"icon_check icon"},null,-1)),le={__name:"detail_03-facility",props:{houseFacility:{type:Object,default:()=>({})}},setup(t){return(r,l)=>(s(),a("div",Jt,[i(V,{title:"房屋设施","more-text":"查看全部设施"},{default:k(()=>[e("div",te,[(s(!0),a(m,null,v(t.houseFacility.houseFacilitys,(n,o)=>{var d;return s(),a(m,{key:o},[(d=t.houseFacility.facilitySort)!=null&&d.includes(o)?(s(),a("div",ee,[e("div",se,[e("img",{src:n.icon,alt:""},null,8,ae),e("div",oe,c(n.groupName),1)]),e("div",ne,[(s(!0),a(m,null,v(n.facilitys.slice(0,4),(u,_)=>(s(),a("div",{key:_,class:"iten"},[ce,e("span",null,c(u.name),1)]))),128))])])):S("",!0)],64)}),128))])]),_:1})]))}},ie=p(le,[["__scopeId","data-v-54b860b8"]]);const de=t=>(P("data-v-8ca530dd"),t=t(),N(),t),re={class:"landlord"},ue={class:"intro"},_e={class:"top"},he=["src"],me={class:"header"},fe={class:"left"},be={class:"avatar"},ve=["src"],pe={class:"info"},ye={class:"name"},xe={class:"tags"},ge={key:0,class:"divider"},ke=de(()=>e("div",{class:"right"},[e("div",{class:"contact"},"联系房东")],-1)),Se={class:"bottom"},Me={class:"item"},Ae={class:"title"},Ce={class:"score"},we={class:"desc"},Te={__name:"detail_04-landlord",props:{landlord:{type:Object,default:()=>({})}},setup(t){return(r,l)=>(s(),a("div",re,[i(V,{title:"房东介绍","more-text":"查看房东主页"},{default:k(()=>[e("div",ue,[e("div",_e,[e("img",{src:t.landlord.topScroll,alt:""},null,8,he)]),e("div",me,[e("div",fe,[e("div",be,[e("img",{src:t.landlord.hotelLogo,alt:""},null,8,ve)]),e("div",pe,[e("div",ye,c(t.landlord.hotelName),1),e("div",xe,[(s(!0),a(m,null,v(t.landlord.hotelTags,(n,o)=>(s(),a("div",{class:"item",style:$({color:n.tagText.color})},[e("span",null,c(n.tagText.text),1),o!==t.landlord.hotelTags.length-1?(s(),a("span",ge,"|")):S("",!0)],4))),256))])])]),ke]),e("div",Se,[(s(!0),a(m,null,v(t.landlord.hotelSummary,(n,o)=>(s(),a("div",Me,[e("div",Ae,c(n.title),1),e("div",Ce,c(n.introduction),1),e("div",we,c(n.tip),1)]))),256))])])]),_:1})]))}},Ie=p(Te,[["__scopeId","data-v-8ca530dd"]]);const Be=t=>(P("data-v-6a227343"),t=t(),N(),t),Re={class:"comment"},De={class:"comment-inner"},ze={class:"header"},Pe={class:"left"},Ne={class:"score"},Ve={class:"text"},Le=Be(()=>e("div",{class:"line"},null,-1)),Ke={class:"info"},$e={class:"title"},je={class:"count"},Fe={class:"star"},Ge={class:"right"},Ue={class:"tags"},Xe={class:"content"},Ze={class:"user"},We={class:"avatar"},Oe=["src"],Ee={class:"profile"},Ye={class:"name"},qe={class:"date"},He={class:"text"},Qe={__name:"detail_05-comment",props:{comment:{type:Object,default:()=>({})}},setup(t){return(r,l)=>{const n=it;return s(),a("div",Re,[i(V,{title:"热门评论","more-text":`查看全部${t.comment.totalCount}条评论`},{default:k(()=>[e("div",De,[e("div",ze,[e("div",Pe,[e("div",Ne,[e("span",Ve,c(t.comment.overall),1),Le]),e("div",Ke,[e("div",$e,c(t.comment.scoreTitle),1),e("div",je,c(t.comment.totalCount)+"条评论",1),e("div",Fe,[i(n,{modelValue:t.comment.overall,"onUpdate:modelValue":l[0]||(l[0]=o=>t.comment.overall=o),color:"#ff9645",size:"12",readonly:"","allow-half":""},null,8,["modelValue"])])])]),e("div",Ge,[(s(!0),a(m,null,v(t.comment.subScores,(o,d)=>(s(),a("span",{key:o,class:"item"},c(o),1))),128))])]),e("div",Ue,[(s(!0),a(m,null,v(t.comment.commentTagVo,(o,d)=>(s(),a("span",{key:d,class:"item",style:$({color:o.color,background:o.backgroundColor})},c(o.text),5))),128))]),e("div",Xe,[e("div",Ze,[e("div",We,[e("img",{src:t.comment.comment.userAvatars,alt:""},null,8,Oe)]),e("div",Ee,[e("div",Ye,c(t.comment.comment.userName),1),e("div",qe,c(t.comment.comment.checkInDate),1)])]),e("div",He,c(t.comment.comment.commentDetail),1)])])]),_:1},8,["more-text"])])}}},Je=p(Qe,[["__scopeId","data-v-6a227343"]]);const ts={class:"notice"},es={class:"notice-inner"},ss={class:"title"},as={class:"intro"},os={key:0,class:"tip"},ns={__name:"detail_06-notice",props:{orderRules:{type:Array,default:()=>[]}},setup(t){return(r,l)=>(s(),a("div",ts,[i(V,{title:"预订须知"},{default:k(()=>[e("div",es,[(s(!0),a(m,null,v(t.orderRules,(n,o)=>(s(),a("div",{key:o,class:"item"},[e("span",ss,c(n.title),1),e("span",as,c(n.introduction),1),n.tips?(s(),a("span",os,"查看说明")):S("",!0)]))),128))])]),_:1})]))}},cs=p(ns,[["__scopeId","data-v-9e26b4e7"]]);const ls={class:"map"},is={__name:"detail_07-map",props:{position:{type:Object,default:()=>({})}},setup(t){const r=t,l=R();return tt(()=>{const n=new BMapGL.Map(l.value),o=new BMapGL.Point(r.position.longitude,r.position.latitude);n.centerAndZoom(o,15);const d=new BMapGL.Marker(o);n.addOverlay(d)}),(n,o)=>(s(),a("div",ls,[i(V,{title:"位置周边","more-text":"查看更多周边信息"},{default:k(()=>[e("div",{class:"baidu",ref_key:"mapRef",ref:l},null,512)]),_:1})]))}},ds=p(is,[["__scopeId","data-v-b1b51280"]]);const rs={class:"intro"},us={class:"title"},_s={class:"content"},hs={__name:"detail_08-intro",props:{priceIntro:{type:Object,default:()=>({})}},setup(t){return(r,l)=>(s(),a("div",rs,[e("h2",us,c(t.priceIntro.title),1),e("div",_s,c(t.priceIntro.introduction),1)]))}},ms=p(hs,[["__scopeId","data-v-01750075"]]);const fs=t=>(P("data-v-102db31d"),t=t(),N(),t),bs=fs(()=>e("div",{class:"footer"},[e("img",{src:ft,alt:""}),e("div",{class:"text"},"弘源旅途, 永无止境!")],-1)),vs={__name:"detail",setup(t){const r=et(),n=st().params.id,o=R({}),d=L(()=>o.value.mainPart);mt(n).then(f=>{o.value=f.data});const u=()=>{r.back()},_=R(),{scrollTop:y}=dt(_),w=L(()=>y.value>300),h=R({}),D=L(()=>Object.keys(h.value)),b=f=>{if(!f)return;const I=f.$el.getAttribute("name");h.value[I]=f.$el};let x=!1,z=-1;const T=f=>{const I=Object.keys(h.value)[f];let C=h.value[I].offsetTop;f!==0&&(C=C-44),x=!0,z=C,_.value.scrollTo({top:C,behavior:"smooth"})},M=R();return at(y,f=>{var j;if(f===z&&(x=!1),x)return;const A=Object.values(h.value).map(B=>B.offsetTop);console.log(A);let C=A.length-1;for(let B=0;B<A.length;B++)if(A[B]>f+44){C=B-1;break}(j=M.value)==null||j.setCurrentIndex(C)}),(f,I)=>{const A=ht;return s(),a("div",{class:"detail top-page",ref_key:"detailRef",ref:_},[w.value?(s(),Z(xt,{key:0,class:"tabs",titles:D.value,onTabItemClick:T,ref_key:"tabControlRef",ref:M},null,8,["titles"])):S("",!0),i(A,{title:"房屋详情","left-text":"旅途","left-arrow":"",onClickLeft:u}),d.value?ot([d.value],()=>(s(),a("div",{key:1,class:"main"},[i(wt,{"swipe-data":d.value.topModule.housePicture.housePics},null,8,["swipe-data"]),i(Gt,{name:"描述",ref:b,"top-infos":d.value.topModule},null,8,["top-infos"]),i(ie,{name:"设施",ref:b,"house-facility":d.value.dynamicModule.facilityModule.houseFacility},null,8,["house-facility"]),i(Ie,{name:"房东",ref:b,landlord:d.value.dynamicModule.landlordModule},null,8,["landlord"]),i(Je,{name:"评论",ref:b,comment:d.value.dynamicModule.commentModule},null,8,["comment"]),i(cs,{name:"须知",ref:b,"order-rules":d.value.dynamicModule.rulesModule.orderRules},null,8,["order-rules"]),i(ds,{name:"周边",ref:b,position:d.value.dynamicModule.positionModule},null,8,["position"]),i(ms,{"price-intro":d.value.introductionModule},null,8,["price-intro"])])),I,0):S("",!0),bs],512)}}},Ss=p(vs,[["__scopeId","data-v-102db31d"]]);export{Ss as default};
