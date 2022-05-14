"use strict";(self.webpackChunkApp=self.webpackChunkApp||[]).push([[886],{886:(O,d,s)=>{s.r(d),s.d(d,{UserInfoRouterModule:()=>_});var l=s(9808),c=s(7363),e=s(1223);let g=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-user-info-page"]],decls:10,vars:0,consts:[[1,"main"],[1,"middle"],["routerLink","heroes","routerLinkActive","selected",1,"btn1","btn-user-page"],["routerLink","history","routerLinkActive","selected",1,"btn-user-page"],["routerLink","powerups","routerLinkActive","selected",1,"btn-user-page"],[1,"content"]],template:function(t,r){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"button",2),e._uU(3,"Heroes"),e.qZA(),e.TgZ(4,"button",3),e._uU(5,"Battle History"),e.qZA(),e.TgZ(6,"button",4),e._uU(7,"PowerUps"),e.qZA()(),e.TgZ(8,"div",5),e._UZ(9,"router-outlet"),e.qZA()())},directives:[c.rH,c.Od,c.lC],styles:[".middle[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center;width:100%;margin:0 0 30px;border-bottom:1px solid #888888}.btn-user-page[_ngcontent-%COMP%]{border:1px solid #2980b9;border-radius:10px;background:none;padding:10px 20px;font-size:20px;font-family:montserrat;cursor:pointer;margin:10px;transition:.6s}.btn-user-page[_ngcontent-%COMP%]:hover, .selected[_ngcontent-%COMP%]{background-color:#2980b9;color:#fff}.content[_ngcontent-%COMP%]{display:flex;justify-content:center}.main[_ngcontent-%COMP%]{position:absolute;margin-left:auto;margin-right:auto;left:0;right:0;top:0}"]}),n})();var u=s(1837),p=s(7594),m=s(4806);let f=(()=>{class n{constructor(t){this.storeService=t,this.selectedHeroes=[]}ngOnInit(){this.selectedHeroes=this.storeService.userState.selectedHeroes}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(p.d))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-heroes"]],decls:4,vars:1,consts:[[1,"container"],[3,"heroes"],["routerLink","select-hero",1,"add-heroes-btn"]],template:function(t,r){1&t&&(e.TgZ(0,"div",0),e._UZ(1,"app-hero-list",1),e.TgZ(2,"button",2),e._uU(3,"+"),e.qZA()()),2&t&&(e.xp6(1),e.Q6J("heroes",r.selectedHeroes.reverse()))},directives:[m.e,c.rH],styles:[".container[_ngcontent-%COMP%]{display:flex}.add-heroes-btn[_ngcontent-%COMP%]{font-size:40px;width:50px;height:50px;border-radius:10px;margin-left:20px;border:3px solid #82589F;transition:.5s}.add-heroes-btn[_ngcontent-%COMP%]:hover{color:#fff;background-color:#82589f;border-color:#000}"]}),n})();var a=s(4444);const h=function(n,o){return{win:n,loser:o}};function C(n,o){if(1&n&&(e.TgZ(0,"li",8)(1,"div",9),e._uU(2),e.ALo(3,"date"),e.qZA(),e.TgZ(4,"div",10),e._uU(5),e.qZA(),e.TgZ(6,"div",11),e._uU(7),e.qZA(),e.TgZ(8,"div",12),e._uU(9),e.qZA()()),2&n){const t=o.$implicit;e.xp6(2),e.Oqu(e.xi3(3,7,t.date,"dd MMMM y, HH:mm")),e.xp6(2),e.MGl("routerLink","/hero-info/",t.myHeroId,""),e.xp6(1),e.Oqu(t.myHero),e.xp6(1),e.MGl("routerLink","/hero-info/",t.enemyHeroId,""),e.xp6(1),e.Oqu(t.enemyHero),e.xp6(1),e.Q6J("ngClass",e.WLB(10,h,"Win"===t.winner,"Loose"===t.winner)),e.xp6(1),e.Oqu(t.winner)}}let P=(()=>{class n{constructor(t){this.storeService=t,this.isDate=!1,this.battles=[],this.isSorted=!0}ngOnInit(){this.battles=[...this.storeService.userState[a.PP.BattleHistory]]}sortByDate(){this.isSorted?(this.battles=[...this.storeService.userState[a.PP.BattleHistory]].sort((t,r)=>new Date(r.date).getTime()-new Date(t.date).getTime()),this.isSorted=!this.isSorted):(this.battles=[...this.storeService.userState[a.PP.BattleHistory]].sort((t,r)=>new Date(t.date).getTime()-new Date(r.date).getTime()),this.isSorted=!this.isSorted)}sortByName(){this.sortByKey("myHero")}sortByEnemyName(){this.sortByKey("enemyHero")}sortByWinner(){this.sortByKey("winner")}sortByKey(t){this.isSorted?(this.battles=[...this.storeService.userState[a.PP.BattleHistory]].sort((r,i)=>r[t]<i[t]?-1:1),this.isSorted=!this.isSorted):(this.battles=[...this.storeService.userState[a.PP.BattleHistory]].sort((r,i)=>i[t]<r[t]?-1:1),this.isSorted=!this.isSorted)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(p.d))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-history"]],decls:12,vars:1,consts:[[1,"container"],[1,"responsive-table"],[1,"table-header"],[1,"col","col-1",3,"click"],[1,"col","col-2",3,"click"],[1,"col","col-3",3,"click"],[1,"col","col-4",3,"click"],["class","table-row",4,"ngFor","ngForOf"],[1,"table-row"],["data-label","Job Id",1,"col","col-1"],["data-label","Customer Name",1,"col","col-2",3,"routerLink"],["data-label","Amount",1,"col","col-3",3,"routerLink"],["data-label","Payment Status",1,"col","col-4",3,"ngClass"]],template:function(t,r){1&t&&(e.TgZ(0,"div",0)(1,"ul",1)(2,"li",2)(3,"div",3),e.NdJ("click",function(){return r.sortByDate()}),e._uU(4,"Date"),e.qZA(),e.TgZ(5,"div",4),e.NdJ("click",function(){return r.sortByName()}),e._uU(6,"My Hero Name"),e.qZA(),e.TgZ(7,"div",5),e.NdJ("click",function(){return r.sortByEnemyName()}),e._uU(8,"Opponent name"),e.qZA(),e.TgZ(9,"div",6),e.NdJ("click",function(){return r.sortByWinner()}),e._uU(10,"Result"),e.qZA()(),e.YNc(11,C,10,13,"li",7),e.qZA()()),2&t&&(e.xp6(11),e.Q6J("ngForOf",r.battles))},directives:[l.sg,c.rH,l.mk],pipes:[l.uU],styles:["body[_ngcontent-%COMP%]{font-family:lato,sans-serif}.win[_ngcontent-%COMP%]{color:green}.loser[_ngcontent-%COMP%]{color:red}.container[_ngcontent-%COMP%]{max-width:1000px;margin-left:auto;margin-right:auto;padding-left:10px;padding-right:10px;width:80vw}h2[_ngcontent-%COMP%]{font-size:26px;margin:20px 0;text-align:center}h2[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]{font-size:.5em}.responsive-table[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{border-radius:3px;padding:25px 30px;display:flex;justify-content:space-between;margin-bottom:25px}.responsive-table[_ngcontent-%COMP%]   .table-header[_ngcontent-%COMP%]{background-color:#95a5a6;font-size:14px;text-transform:uppercase;letter-spacing:.03em;box-shadow:0 5px 10px 15px #223c5033}.responsive-table[_ngcontent-%COMP%]   .table-header[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]{cursor:pointer}.responsive-table[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]{background-color:#fff;box-shadow:0 0 9px #0000001a}.responsive-table[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   .col-2[_ngcontent-%COMP%], .responsive-table[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   .col-3[_ngcontent-%COMP%]{cursor:pointer;transition:.4s}.responsive-table[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   .col-2[_ngcontent-%COMP%]:hover, .responsive-table[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]   .col-3[_ngcontent-%COMP%]:hover{color:#82589f;font-size:18px}.responsive-table[_ngcontent-%COMP%]   .col-1[_ngcontent-%COMP%]{flex-basis:20%}.responsive-table[_ngcontent-%COMP%]   .col-2[_ngcontent-%COMP%]{flex-basis:30%}.responsive-table[_ngcontent-%COMP%]   .col-3[_ngcontent-%COMP%], .responsive-table[_ngcontent-%COMP%]   .col-4[_ngcontent-%COMP%]{flex-basis:25%}@media all and (max-width: 767px){.responsive-table[_ngcontent-%COMP%]   .table-header[_ngcontent-%COMP%]{display:none}.responsive-table[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:block}.responsive-table[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]{flex-basis:100%}.responsive-table[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]{display:flex;padding:10px 0}.responsive-table[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]:before{color:#6c7a89;padding-right:10px;content:attr(data-label);flex-basis:50%;text-align:right}}"]}),n})();function b(n,o){if(1&n&&(e.TgZ(0,"div",1)(1,"div",2),e._UZ(2,"img",3),e.TgZ(3,"div",4)(4,"h3"),e._uU(5),e.qZA(),e.TgZ(6,"span"),e._uU(7),e.qZA(),e.TgZ(8,"span"),e._uU(9),e.qZA()()()()),2&n){const t=o.$implicit;e.xp6(2),e.s9C("src",t.image,e.LSH),e.xp6(3),e.Oqu(t.name),e.xp6(2),e.Oqu(t.stats),e.xp6(2),e.hij("Uses Left: ",t.usesLeft,"")}}let v=(()=>{class n{constructor(t){this.storeService=t}ngOnInit(){this.powerups=this.storeService.userState[a.PP.Powerups]}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(p.d))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-powerups"]],decls:1,vars:1,consts:[["class","container",4,"ngFor","ngForOf"],[1,"container"],[1,"item","item-intelligence"],[3,"src"],[1,"description"]],template:function(t,r){1&t&&e.YNc(0,b,10,4,"div",0),2&t&&e.Q6J("ngForOf",r.powerups)},directives:[l.sg],styles:[".item[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:40vw;height:20vh;border:2px solid #82589F;margin-bottom:10px;background-color:#75001d99}img[_ngcontent-%COMP%]{width:150px;height:150px}.description[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:600px}span[_ngcontent-%COMP%]{padding-bottom:10px;font-size:20px}.container[_ngcontent-%COMP%]{box-shadow:0 5px 10px 15px #223c5033}"]}),n})(),_=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[l.ez,c.Bz.forChild([{path:"",component:g,canActivate:[u.A],children:[{path:"heroes",component:f},{path:"history",component:P},{path:"powerups",component:v}]},{path:"**",redirectTo:"/select-hero"}])]]}),n})()}}]);