!function(){function t(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function n(t,n){for(var r=0;r<n.length;r++){var e=n[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function r(t,r,e){return r&&n(t.prototype,r),e&&n(t,e),t}(self.webpackChunksarafan=self.webpackChunksarafan||[]).push([[864],{6864:function(n,e,o){"use strict";o.r(e),o.d(e,{ProvidersFeatureSearchModule:function(){return G},ProvidersSearchComponent:function(){return z}});var i=o(1116),a=o(1671),c=o(322),u=(0,a.PH)("[Providers] Load Providers"),s=(0,a.PH)("[Providers] Load Providers Success",(0,a.Ky)()),p=(0,a.PH)("[Providers] Load Providers Failure",(0,a.Ky)()),d=(0,c.H)(),f=d.getInitialState({loaded:!1}),l=(0,a.Lq)(f,(0,a.on)(u,function(t){return Object.assign(Object.assign({},t),{loaded:!1,error:null})}),(0,a.on)(s,function(t,n){var r=n.providers;return d.setAll(r,Object.assign(Object.assign({},t),{loaded:!0}))}),(0,a.on)(p,function(t,n){var r=n.error;return Object.assign(Object.assign({},t),{error:r})}));function v(t,n){return l(t,n)}var m=(0,a.ZF)("providers"),h=d.getSelectors(),g=h.selectAll,Z=h.selectEntities,b=(0,a.P1)(m,function(t){return t.loaded}),A=((0,a.P1)(m,function(t){return t.error}),(0,a.P1)(m,function(t){return g(t)})),w=(0,a.P1)(m,function(t){return Z(t)}),P=(0,a.P1)(m,function(t){return t.selectedId}),q=(0,a.P1)(w,P,function(t,n){return n&&t[n]}),y=o(5366),T=function(){var n=function(){function n(r){t(this,n),this.store=r,this.loaded$=this.store.pipe((0,a.Ys)(b)),this.allProviders$=this.store.pipe((0,a.Ys)(A)),this.selectedProviders$=this.store.pipe((0,a.Ys)(q))}return r(n,[{key:"dispatch",value:function(t){this.store.dispatch(t)}},{key:"loadProviders",value:function(){this.store.dispatch(u())}}]),n}();return n.\u0275fac=function(t){return new(t||n)(y.LFG(a.yh))},n.\u0275prov=y.Yz7({token:n,factory:n.\u0275fac}),n}(),x=o(4809),_=o(480),O=o(9996),L=o(878),j=o(2693),k=function(){var n=function(){function n(r){t(this,n),this.http=r}return r(n,[{key:"load",value:function(){return(0,L.of)([{id:1,name:"Lorem ipsum",description:"Lorem ipsum dolor sit amet"},{id:2,name:"At vero eos",description:"At vero eos et accusam et justo duo dolores"},{id:3,name:"Duis autem",description:"Duis autem vel eum iriure dolor in hendrerit"}])}}]),n}();return n.\u0275fac=function(t){return new(t||n)(y.LFG(j.eN))},n.\u0275prov=y.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n}(),F=function(){var n=function n(r,e){var o=this;t(this,n),this.actions$=r,this.providerDataService=e,this.loadProviders$=(0,x.GW)(function(){return o.actions$.pipe((0,x.l4)(u),(0,_.he)({run:function(){return console.log("effect"),o.providerDataService.load().pipe((0,O.U)(function(t){return s({providers:t})}))},onError:function(t,n){return console.error("Error",n),p({error:n})}}))})};return n.\u0275fac=function(t){return new(t||n)(y.LFG(x.eX),y.LFG(k))},n.\u0275prov=y.Yz7({token:n,factory:n.\u0275fac}),n}(),S=function(){var n=function n(){t(this,n)};return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=y.oAB({type:n}),n.\u0275inj=y.cJS({imports:[[a.Aw.forFeature("providers",v),x.sQ.forFeature([F])]]}),n}(),U=function(){var n=function n(){t(this,n)};return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=y.oAB({type:n}),n.\u0275inj=y.cJS({providers:[T],imports:[[i.ez,S]]}),n}(),E=o(2852);function $(t,n){if(1&t&&(y.TgZ(0,"div"),y.TgZ(1,"mat-card"),y.TgZ(2,"mat-card-title"),y._uU(3),y.qZA(),y.TgZ(4,"mat-card-content"),y._uU(5),y.qZA(),y.TgZ(6,"mat-card-actions"),y.TgZ(7,"a",1),y._uU(8,"Edit"),y.qZA(),y.TgZ(9,"a",1),y._uU(10,"Calendar"),y.qZA(),y.qZA(),y.TgZ(11,"mat-card-footer"),y.TgZ(12,"button",2),y.TgZ(13,"mat-icon"),y._uU(14,"more_vert"),y.qZA(),y.qZA(),y.TgZ(15,"button",3),y.TgZ(16,"mat-icon"),y._uU(17,"home"),y.qZA(),y.qZA(),y.TgZ(18,"button",4),y.TgZ(19,"mat-icon"),y._uU(20,"menu"),y.qZA(),y.qZA(),y.TgZ(21,"button",5),y.TgZ(22,"mat-icon"),y._uU(23,"favorite"),y.qZA(),y.qZA(),y.TgZ(24,"button",6),y.TgZ(25,"mat-icon"),y._uU(26,"open_in_new"),y.qZA(),y.qZA(),y.qZA(),y.qZA(),y.qZA()),2&t){var r=n.$implicit;y.xp6(3),y.Oqu(r.name),y.xp6(2),y.Oqu(r.description)}}var C,Y,z=((C=function n(r){t(this,n),this.app=r,this.providerList$=this.app.allProviders$,this.app.loadProviders()}).\u0275fac=function(t){return new(t||C)(y.Y36(T))},C.\u0275cmp=y.Xpm({type:C,selectors:[["providers-search"]],decls:4,vars:3,consts:[[4,"ngFor","ngForOf"],["mat-raised-button","","href","https://www.google.com/","target","_blank"],["mat-icon-button","","aria-label","Example icon button with a vertical three dot icon"],["mat-icon-button","","color","primary","aria-label","Example icon button with a home icon"],["mat-icon-button","","color","accent","aria-label","Example icon button with a menu icon"],["mat-icon-button","","color","warn","aria-label","Example icon button with a heart icon"],["mat-icon-button","","aria-label","Example icon button with a open in new tab icon"]],template:function(t,n){1&t&&(y.TgZ(0,"h1"),y._uU(1,"providers-search"),y.qZA(),y.YNc(2,$,27,2,"div",0),y.ALo(3,"async")),2&t&&(y.xp6(2),y.Q6J("ngForOf",y.lcZ(3,1,n.providerList$)))},directives:[i.sg],pipes:[i.Ov],styles:["mat-card[_ngcontent-%COMP%]{margin-top:10px;cursor:pointer}mat-card[_ngcontent-%COMP%]:hover{box-shadow:0 2px 2px 2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 2px 2px 0 rgba(0,0,0,.12);transform:translateZ(0)}"],changeDetection:0}),C),B=[{path:"",component:z}],D=function(){var n=function n(){t(this,n)};return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=y.oAB({type:n}),n.\u0275inj=y.cJS({imports:[[E.Bz.forChild(B)],E.Bz]}),n}(),G=((Y=function n(){t(this,n)}).\u0275fac=function(t){return new(t||Y)},Y.\u0275mod=y.oAB({type:Y}),Y.\u0275inj=y.cJS({imports:[[i.ez,U,D]]}),Y)}}])}();