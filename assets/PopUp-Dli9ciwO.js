import{g as E,b as p,d as h,ab as w,p as V,y as R,r as O,L as M,w as x,a as T,D as q,ak as I,N,ae as W,e as j,ac as U,af as X,b5 as Y,b6 as z,ag as H,f as Q,h as G,i as J,Q as K,R as Z,ah as _,ad as ee,ai as te,ba as ae,bb as oe,aj as se,be as ne,bf as re,X as ie,a6 as k,a1 as C,$ as b,a0 as le,a3 as P,a4 as ce,a5 as S,br as ue}from"./index-B0AtdWO1.js";import{m as de,V as B}from"./VOverlay-Doyabtbe.js";import{a as y,d as fe,s as D,c as me,g as ge,n as ve,b as pe,f as he}from"./forwardRefs-C8xmhcFN.js";import"./transition-m7Uf4INS.js";const ye=V({target:[Object,Array]},"v-dialog-transition"),be=E()({name:"VDialogTransition",props:ye(),setup(e,i){let{slots:o}=i;const r={onBeforeEnter(t){t.style.pointerEvents="none",t.style.visibility="hidden"},async onEnter(t,c){await new Promise(n=>requestAnimationFrame(n)),await new Promise(n=>requestAnimationFrame(n)),t.style.visibility="";const{x:a,y:l,sx:d,sy:f,speed:s}=L(e.target,t),u=y(t,[{transform:`translate(${a}px, ${l}px) scale(${d}, ${f})`,opacity:0},{}],{duration:225*s,easing:fe});A(t)?.forEach(n=>{y(n,[{opacity:0},{opacity:0,offset:.33},{}],{duration:225*2*s,easing:D})}),u.finished.then(()=>c())},onAfterEnter(t){t.style.removeProperty("pointer-events")},onBeforeLeave(t){t.style.pointerEvents="none"},async onLeave(t,c){await new Promise(n=>requestAnimationFrame(n));const{x:a,y:l,sx:d,sy:f,speed:s}=L(e.target,t);y(t,[{},{transform:`translate(${a}px, ${l}px) scale(${d}, ${f})`,opacity:0}],{duration:125*s,easing:me}).finished.then(()=>c()),A(t)?.forEach(n=>{y(n,[{},{opacity:0,offset:.2},{opacity:0}],{duration:125*2*s,easing:D})})},onAfterLeave(t){t.style.removeProperty("pointer-events")}};return()=>e.target?p(w,h({name:"dialog-transition"},r,{css:!1}),o):p(w,{name:"dialog-transition"},o)}});function A(e){const i=e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list")?.children;return i&&[...i]}function L(e,i){const o=ge(e),r=ve(i),[t,c]=getComputedStyle(i).transformOrigin.split(" ").map(F=>parseFloat(F)),[a,l]=getComputedStyle(i).getPropertyValue("--v-overlay-anchor-origin").split(" ");let d=o.left+o.width/2;a==="left"||l==="left"?d-=o.width/2:(a==="right"||l==="right")&&(d+=o.width/2);let f=o.top+o.height/2;a==="top"||l==="top"?f-=o.height/2:(a==="bottom"||l==="bottom")&&(f+=o.height/2);const s=o.width/r.width,u=o.height/r.height,n=Math.max(1,s,u),m=s/n||0,v=u/n||0,g=r.width*r.height/(window.innerWidth*window.innerHeight),$=g>.12?Math.min(1.5,(g-.12)*10+1):1;return{x:d-(t+r.left),y:f-(c+r.top),sx:m,sy:v,speed:$}}const Pe=V({fullscreen:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,...de({origin:"center center",scrollStrategy:"block",transition:{component:be},zIndex:2400})},"VDialog"),Ee=E()({name:"VDialog",props:Pe(),emits:{"update:modelValue":e=>!0,afterEnter:()=>!0,afterLeave:()=>!0},setup(e,i){let{emit:o,slots:r}=i;const t=R(e,"modelValue"),{scopeId:c}=pe(),a=O();function l(s){const u=s.relatedTarget,n=s.target;if(u!==n&&a.value?.contentEl&&a.value?.globalTop&&![document,a.value.contentEl].includes(n)&&!a.value.contentEl.contains(n)){const m=N(a.value.contentEl);if(!m.length)return;const v=m[0],g=m[m.length-1];u===v?g.focus():v.focus()}}M&&x(()=>t.value&&e.retainFocus,s=>{s?document.addEventListener("focusin",l):document.removeEventListener("focusin",l)},{immediate:!0});function d(){o("afterEnter"),a.value?.contentEl&&!a.value.contentEl.contains(document.activeElement)&&a.value.contentEl.focus({preventScroll:!0})}function f(){o("afterLeave")}return x(t,async s=>{s||(await q(),a.value.activatorEl?.focus({preventScroll:!0}))}),T(()=>{const s=B.filterProps(e),u=h({"aria-haspopup":"dialog"},e.activatorProps),n=h({tabindex:-1},e.contentProps);return p(B,h({ref:a,class:["v-dialog",{"v-dialog--fullscreen":e.fullscreen,"v-dialog--scrollable":e.scrollable},e.class],style:e.style},s,{modelValue:t.value,"onUpdate:modelValue":m=>t.value=m,"aria-modal":"true",activatorProps:u,contentProps:n,role:"dialog",onAfterEnter:d,onAfterLeave:f},c),{activator:r.activator,default:function(){for(var m=arguments.length,v=new Array(m),g=0;g<m;g++)v[g]=arguments[g];return p(I,{root:"VDialog"},{default:()=>[r.default?.(...v)]})}})}),he({},a)}}),Ve=V({color:String,...W(),...j(),...U(),...X(),...Y(),...z(),...H(),...Q(),...G()},"VSheet"),we=E()({name:"VSheet",props:Ve(),setup(e,i){let{slots:o}=i;const{themeClasses:r}=J(e),{backgroundColorClasses:t,backgroundColorStyles:c}=K(Z(e,"color")),{borderClasses:a}=_(e),{dimensionStyles:l}=ee(e),{elevationClasses:d}=te(e),{locationStyles:f}=ae(e),{positionClasses:s}=oe(e),{roundedClasses:u}=se(e);return T(()=>p(e.tag,{class:["v-sheet",r.value,t.value,a.value,d.value,s.value,u.value,e.class],style:[c.value,l.value,f.value,e.style]},o)),{}}}),xe={key:1},De={__name:"PopUp",props:ne({widget:{type:Object,default:void 0}},{modelValue:{type:Boolean,required:!0,default:!1},modelModifiers:{}}),emits:["update:modelValue"],setup(e){const i=re(e,"modelValue"),o=e,[r]=ie([o?.widget]);return(t,c)=>(b(),k("span",null,[p(Ee,{"max-width":"500px","max-height":"500px",absolute:"",scrollable:"","scroll-strategy":"block","close-on-back":"",modelValue:i.value,"onUpdate:modelValue":c[0]||(c[0]=a=>i.value=a)},{default:C(()=>[p(we,null,{default:C(()=>[e.widget?(b(),le(ce(P(r).component),h({key:P(r).id},P(r).props),null,16)):S("v-if",!0),t.$slots.default?(b(),k("span",xe,[ue(t.$slots,"default")])):S("v-if",!0)]),_:3})]),_:3},8,["modelValue"])]))}};export{De as default};
