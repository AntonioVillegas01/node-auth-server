(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{UJ0D:function(t,n,o){"use strict";o.r(n),o.d(n,"ProtectedModule",function(){return i});var e=o("ofXK"),r=o("tyNb"),c=o("fXoL"),a=o("N/25");const s=[{path:"",children:[{path:"",component:(()=>{class t{constructor(t,n){this.router=t,this.authService=n}get usuario(){return this.authService.usuario}logout(){this.router.navigateByUrl("/auth"),this.authService.logout()}}return t.\u0275fac=function(n){return new(n||t)(c.Ib(r.a),c.Ib(a.a))},t.\u0275cmp=c.Cb({type:t,selectors:[["app-dashboard"]],decls:12,vars:3,consts:[[3,"click"]],template:function(t,n){1&t&&(c.Lb(0,"h1"),c.ac(1,"Dashboard"),c.Kb(),c.Jb(2,"hr"),c.Lb(3,"p"),c.ac(4," Esta pagina solo funciona si estas autenticado\n"),c.Kb(),c.Lb(5,"h4"),c.ac(6,"User info:"),c.Kb(),c.Lb(7,"pre"),c.ac(8),c.Tb(9,"json"),c.Kb(),c.Lb(10,"button",0),c.Rb("click",function(){return n.logout()}),c.ac(11,"Log Out"),c.Kb()),2&t&&(c.yb(8),c.bc(" ",c.Ub(9,1,n.usuario),"\n"))},pipes:[e.e],styles:["*[_ngcontent-%COMP%]{\n      margin: 15px;\n    }"]}),t})()},{path:"**",redirectTo:""}]}];let u=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=c.Gb({type:t}),t.\u0275inj=c.Fb({imports:[[r.c.forChild(s)],r.c]}),t})(),i=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=c.Gb({type:t}),t.\u0275inj=c.Fb({imports:[[e.b,u]]}),t})()}}]);