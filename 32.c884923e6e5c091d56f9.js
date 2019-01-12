(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{xhMi:function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),b=function(){return function(){}}(),t=u("1E4C"),c=u("X2O2"),d=u("pMnS"),o=u("IKgy"),i=u("LuDt"),a=u("leug"),s=function(){function l(){}return l.prototype.ngOnInit=function(){this._componentViewer.componentView=new a.a("Switches","Switches toggle the state of a single setting on or off.","import { MdcSwitchModule } from '@angular-mdc/web';"),this._componentViewer.componentView.references=[{name:"Material Design guidelines: Switches",url:"https://material.io/design/components/selection-controls.html#switches"},{name:"Material Components Web",url:"https://github.com/material-components/material-components-web/blob/master/packages/mdc-switch/README.md"}]},l}(),m=function(){return function(){}}(),r=function(){return function(){}}(),h=function(){function l(){this.isSwitchOn=!0,this.example1={html:'<mdc-switch></mdc-switch>\n\n<mdc-form-field>\n  <mdc-switch></mdc-switch>\n  <label>off/on</label>\n</mdc-form-field>\n\n<mdc-form-field>\n  <mdc-switch disabled></mdc-switch>\n  <label>off/on</label>\n</mdc-form-field>\n\n<mdc-form-field>\n  <mdc-switch class="demo-switch--custom"></mdc-switch>\n  <label>Custom Theme</label>\n</mdc-form-field>',sass:".demo-switch--custom {\n  $color: $material-color-red-500;\n\n  @include mdc-switch-toggled-on-color($color);\n}"},this.exampleNgModel={html:'<mdc-form-field [alignEnd]="false">\n  <mdc-switch [(ngModel)]="isSwitchOn" (change)="onChange($event)"></mdc-switch>\n  <label>off/on</label>\n</mdc-form-field>\n\n<p>NgModel value: {{isSwitchOn}}</p>',ts:"import { MdcSwitchChange } from '@angular-mdc/web';\n\nisSwitchOn: boolean = true;\n\nonChange(evt: MdcSwitchChange): void {\n  console.log(evt);\n}"},this.exampleNgModelForm={html:'<form #demoForm="ngForm" id="demoForm">\n  <mdc-form-field>\n    <mdc-switch #demoSwitch ngModel name="demoSwitch" #demoSwitchModel="ngModel"></mdc-switch>\n    <label>off/on</label>\n  </mdc-form-field>\n</form>\n\n<p>Dirty: {{ demoSwitchModel.dirty }}</p>\n<p>Touched: {{ demoSwitchModel.touched }}</p>\n<p>Value: {{ demoSwitchModel.value }}</p>'}}return l.prototype.onChange=function(l){console.log(l)},l}(),g=u("TCsd"),f=u("QR5D"),p=u("gIcY"),q=u("cb/4"),w=u("n1x2"),A=u("tns+"),y=u("cgwo"),v=u("vYC2"),k=u("XbMX"),H=u("dkiD"),x=u("aXWj"),S=u("ijYY"),E=e.ob({encapsulation:2,styles:[],data:{}});function C(l){return e.Jb(0,[e.Fb(402653184,1,{_componentViewer:0}),(l()(),e.qb(1,0,null,null,1,"component-viewer",[],null,null,null,o.b,o.a)),e.pb(2,49152,[[1,4]],0,i.b,[],null,null)],null,null)}function M(l){return e.Jb(0,[(l()(),e.qb(0,0,null,null,1,"ng-component",[],null,null,null,C,E)),e.pb(1,114688,null,0,s,[],null,null)],function(l,n){l(n,1,0)},null)}var I=e.mb("ng-component",s,M,{},{},[]),F=e.ob({encapsulation:2,styles:[],data:{}});function _(l){return e.Jb(0,[(l()(),e.qb(0,0,null,null,76,"div",[["class","docs-api"]],null,null,null,null,null)),(l()(),e.qb(1,0,null,null,2,"h3",[["class","mdc-typography--headline6"],["mdcHeadline6",""]],null,null,null,null,null)),e.pb(2,16384,null,0,g.i,[],null,null),(l()(),e.Hb(-1,null,["MdcSwitch"])),(l()(),e.qb(4,0,null,null,3,"p",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,[" Selector: "])),(l()(),e.qb(6,0,null,null,1,"span",[["class","docs-api-class-selector-name"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,["mdc-switch"])),(l()(),e.Hb(-1,null,[" Exported as: "])),(l()(),e.qb(9,0,null,null,1,"span",[["class","docs-api-class-selector-name"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,["mdcSwitch"])),(l()(),e.qb(11,0,null,null,2,"h4",[["class","mdc-typography--subtitle2"],["mdcSubtitle2",""]],null,null,null,null,null)),e.pb(12,16384,null,0,g.l,[],null,null),(l()(),e.Hb(-1,null,["Properties"])),(l()(),e.qb(14,0,null,null,42,"table",[],null,null,null,null,null)),(l()(),e.qb(15,0,null,null,5,"thead",[],null,null,null,null,null)),(l()(),e.qb(16,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),e.qb(17,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Name"])),(l()(),e.qb(19,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Description"])),(l()(),e.qb(21,0,null,null,35,"tbody",[],null,null,null,null,null)),(l()(),e.qb(22,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),e.qb(23,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["id: string"])),(l()(),e.qb(25,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Unique Id of the switch button (auto generated if not supplied)."])),(l()(),e.qb(27,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),e.qb(28,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["name: string"])),(l()(),e.qb(30,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Name of the switch."])),(l()(),e.qb(32,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),e.qb(33,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["ariaLabel: string"])),(l()(),e.qb(35,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Used to set the 'aria-label' attribute on the underlying input element."])),(l()(),e.qb(37,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),e.qb(38,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["ariaLabelledby: string"])),(l()(),e.qb(40,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["The 'aria-labelledby' attribute takes precedence as the element's text alternative."])),(l()(),e.qb(42,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),e.qb(43,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["tabIndex: number"])),(l()(),e.qb(45,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Set the underlying tab index of the switch. (Default: 0)"])),(l()(),e.qb(47,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),e.qb(48,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["checked: boolean"])),(l()(),e.qb(50,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Use to set the checked value."])),(l()(),e.qb(52,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),e.qb(53,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["disabled: boolean"])),(l()(),e.qb(55,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Disables the component."])),(l()(),e.qb(57,0,null,null,2,"h4",[["class","mdc-typography--subtitle2"],["mdcSubtitle2",""]],null,null,null,null,null)),e.pb(58,16384,null,0,g.l,[],null,null),(l()(),e.Hb(-1,null,["Methods"])),(l()(),e.qb(60,0,null,null,6,"table",[],null,null,null,null,null)),(l()(),e.qb(61,0,null,null,5,"tbody",[],null,null,null,null,null)),(l()(),e.qb(62,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),e.qb(63,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["focus()"])),(l()(),e.qb(65,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Set focus to the switch."])),(l()(),e.qb(67,0,null,null,2,"h4",[["class","mdc-typography--subtitle2"],["mdcSubtitle2",""]],null,null,null,null,null)),e.pb(68,16384,null,0,g.l,[],null,null),(l()(),e.Hb(-1,null,["Events"])),(l()(),e.qb(70,0,null,null,6,"table",[],null,null,null,null,null)),(l()(),e.qb(71,0,null,null,5,"tbody",[],null,null,null,null,null)),(l()(),e.qb(72,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),e.qb(73,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["change(source: MdcSwitch, checked: boolean)"])),(l()(),e.qb(75,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Event dispatched on value change."]))],null,null)}function D(l){return e.Jb(0,[(l()(),e.qb(0,0,null,null,1,"ng-component",[],null,null,null,_,F)),e.pb(1,49152,null,0,m,[],null,null)],null,null)}var j=e.mb("ng-component",m,D,{},{},[]),O=e.ob({encapsulation:2,styles:[],data:{}});function N(l){return e.Jb(0,[(l()(),e.qb(0,0,null,null,59,"div",[["class","docs-api"]],null,null,null,null,null)),(l()(),e.qb(1,0,null,null,2,"h4",[["class","mdc-typography--subtitle2"],["mdcSubtitle2",""]],null,null,null,null,null)),e.pb(2,16384,null,0,g.l,[],null,null),(l()(),e.Hb(-1,null,["Sass Mixins"])),(l()(),e.qb(4,0,null,null,55,"table",[],null,null,null,null,null)),(l()(),e.qb(5,0,null,null,5,"thead",[],null,null,null,null,null)),(l()(),e.qb(6,0,null,null,4,"tr",[],null,null,null,null,null)),(l()(),e.qb(7,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Mixin"])),(l()(),e.qb(9,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Description"])),(l()(),e.qb(11,0,null,null,48,"tbody",[],null,null,null,null,null)),(l()(),e.qb(12,0,null,null,5,"tr",[],null,null,null,null,null)),(l()(),e.qb(13,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),e.qb(14,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["mdc-switch-toggled-on-color($color)"])),(l()(),e.qb(16,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Sets the base color of the track, thumb, and ripple when the switch is toggled on."])),(l()(),e.qb(18,0,null,null,5,"tr",[],null,null,null,null,null)),(l()(),e.qb(19,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),e.qb(20,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["mdc-switch-toggled-off-color($color)"])),(l()(),e.qb(22,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Sets the base color of the track, thumb, and ripple when the switch is toggled off."])),(l()(),e.qb(24,0,null,null,5,"tr",[],null,null,null,null,null)),(l()(),e.qb(25,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),e.qb(26,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["mdc-switch-toggled-on-track-color($color)"])),(l()(),e.qb(28,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Sets color of the track when the switch is toggled on."])),(l()(),e.qb(30,0,null,null,5,"tr",[],null,null,null,null,null)),(l()(),e.qb(31,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),e.qb(32,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["mdc-switch-toggled-off-track-color($color)"])),(l()(),e.qb(34,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Sets color of the track when the switch is toggled off."])),(l()(),e.qb(36,0,null,null,5,"tr",[],null,null,null,null,null)),(l()(),e.qb(37,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),e.qb(38,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["mdc-switch-toggled-on-thumb-color($color)"])),(l()(),e.qb(40,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Sets color of the thumb when the switch is toggled on."])),(l()(),e.qb(42,0,null,null,5,"tr",[],null,null,null,null,null)),(l()(),e.qb(43,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),e.qb(44,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["mdc-switch-toggled-off-thumb-color($color)"])),(l()(),e.qb(46,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Sets color of the thumb when the switch is toggled off."])),(l()(),e.qb(48,0,null,null,5,"tr",[],null,null,null,null,null)),(l()(),e.qb(49,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),e.qb(50,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["mdc-switch-toggled-on-ripple-color($color)"])),(l()(),e.qb(52,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Sets the color of the ripple surrounding the thumb when the switch is toggled on."])),(l()(),e.qb(54,0,null,null,5,"tr",[],null,null,null,null,null)),(l()(),e.qb(55,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),e.qb(56,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["mdc-switch-toggled-off-ripple-color($color)"])),(l()(),e.qb(58,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Sets the color of the ripple surrounding the thumb when the switch is toggled off."]))],null,null)}function J(l){return e.Jb(0,[(l()(),e.qb(0,0,null,null,1,"ng-component",[],null,null,null,N,O)),e.pb(1,49152,null,0,r,[],null,null)],null,null)}var $=e.mb("ng-component",r,J,{},{},[]),T=e.ob({encapsulation:2,styles:[],data:{}});function V(l){return e.Jb(0,[(l()(),e.qb(0,0,null,null,47,"div",[["class","demo-content"]],null,null,null,null,null)),(l()(),e.qb(1,0,null,null,1,"h3",[["class","demo-content__headline"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Switch"])),(l()(),e.qb(3,0,null,null,42,"div",[["class","demo-layout__column"]],null,null,null,null,null)),(l()(),e.qb(4,0,null,null,5,"div",[["class","demo-container"]],null,null,null,null,null)),(l()(),e.qb(5,0,null,null,4,"mdc-switch",[["class","mdc-switch"]],[[8,"id",0],[8,"tabIndex",0],[2,"mdc-switch--checked",null],[2,"mdc-switch--disabled",null]],null,null,f.b,f.a)),e.Eb(5120,null,p.j,function(l){return[l]},[q.a]),e.Eb(6144,null,w.c,null,[q.a]),e.Eb(131584,null,A.a,A.a,[e.A,y.b]),e.pb(9,4374528,null,0,q.a,[e.h,A.a,e.k,[2,w.b]],null,null),(l()(),e.qb(10,0,null,null,11,"div",[["class","demo-container"]],null,null,null,null,null)),(l()(),e.qb(11,0,null,null,10,"mdc-form-field",[],[[2,"ngx-mdc-form-field--fluid",null],[2,"mdc-form-field--align-end",null]],null,null,v.c,v.a)),e.pb(12,1294336,null,2,w.b,[e.A,e.k],null,null),e.Fb(335544320,1,{_control:0}),e.Fb(603979776,2,{assistiveElements:1}),(l()(),e.qb(15,0,null,0,4,"mdc-switch",[["class","mdc-switch"]],[[8,"id",0],[8,"tabIndex",0],[2,"mdc-switch--checked",null],[2,"mdc-switch--disabled",null]],null,null,f.b,f.a)),e.Eb(5120,null,p.j,function(l){return[l]},[q.a]),e.Eb(131584,null,A.a,A.a,[e.A,y.b]),e.pb(18,4374528,null,0,q.a,[e.h,A.a,e.k,[2,w.b]],null,null),e.Eb(2048,[[1,4]],w.c,null,[q.a]),(l()(),e.qb(20,0,null,0,1,"label",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["off/on"])),(l()(),e.qb(22,0,null,null,11,"div",[["class","demo-container"]],null,null,null,null,null)),(l()(),e.qb(23,0,null,null,10,"mdc-form-field",[],[[2,"ngx-mdc-form-field--fluid",null],[2,"mdc-form-field--align-end",null]],null,null,v.c,v.a)),e.pb(24,1294336,null,2,w.b,[e.A,e.k],null,null),e.Fb(335544320,3,{_control:0}),e.Fb(603979776,4,{assistiveElements:1}),(l()(),e.qb(27,0,null,0,4,"mdc-switch",[["class","mdc-switch"],["disabled",""]],[[8,"id",0],[8,"tabIndex",0],[2,"mdc-switch--checked",null],[2,"mdc-switch--disabled",null]],null,null,f.b,f.a)),e.Eb(5120,null,p.j,function(l){return[l]},[q.a]),e.Eb(131584,null,A.a,A.a,[e.A,y.b]),e.pb(30,4374528,null,0,q.a,[e.h,A.a,e.k,[2,w.b]],{disabled:[0,"disabled"]},null),e.Eb(2048,[[3,4]],w.c,null,[q.a]),(l()(),e.qb(32,0,null,0,1,"label",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Disabled"])),(l()(),e.qb(34,0,null,null,11,"div",[["class","demo-container"]],null,null,null,null,null)),(l()(),e.qb(35,0,null,null,10,"mdc-form-field",[],[[2,"ngx-mdc-form-field--fluid",null],[2,"mdc-form-field--align-end",null]],null,null,v.c,v.a)),e.pb(36,1294336,null,2,w.b,[e.A,e.k],null,null),e.Fb(335544320,5,{_control:0}),e.Fb(603979776,6,{assistiveElements:1}),(l()(),e.qb(39,0,null,0,4,"mdc-switch",[["class","demo-switch--custom mdc-switch"]],[[8,"id",0],[8,"tabIndex",0],[2,"mdc-switch--checked",null],[2,"mdc-switch--disabled",null]],null,null,f.b,f.a)),e.Eb(5120,null,p.j,function(l){return[l]},[q.a]),e.Eb(131584,null,A.a,A.a,[e.A,y.b]),e.pb(42,4374528,null,0,q.a,[e.h,A.a,e.k,[2,w.b]],null,null),e.Eb(2048,[[5,4]],w.c,null,[q.a]),(l()(),e.qb(44,0,null,0,1,"label",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Custom Theme"])),(l()(),e.qb(46,0,null,null,1,"example-viewer",[],null,null,null,k.b,k.a)),e.pb(47,114688,null,0,H.a,[],{example:[0,"example"]},null),(l()(),e.qb(48,0,null,null,36,"div",[["class","demo-content"]],null,null,null,null,null)),(l()(),e.qb(49,0,null,null,1,"h3",[["class","demo-content__headline"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Switch - ngModel"])),(l()(),e.qb(51,0,null,null,15,"div",[["class","demo-layout__row"]],null,null,null,null,null)),(l()(),e.qb(52,0,null,null,4,"button",[["class","mdc-button"],["mdc-button",""]],[[8,"tabIndex",0],[2,"ngx-mdc-button--primary",null],[2,"ngx-mdc-button--secondary",null],[2,"mdc-button--raised",null],[2,"mdc-button--dense",null],[2,"mdc-button--unelevated",null],[2,"mdc-button--outlined",null]],[[null,"click"]],function(l,n,u){var b=!0;return"click"===n&&(b=!1!==e.Ab(l,54).onClick(u)&&b),"click"===n&&(b=0!=(e.Ab(l,68).alignEnd=!e.Ab(l,68).alignEnd)&&b),b},x.b,x.a)),e.Eb(131584,null,A.a,A.a,[e.A,y.b]),e.pb(54,245760,null,1,S.a,[e.k,A.a],null,null),e.Fb(335544320,7,{_icon:0}),(l()(),e.Hb(-1,0,["RTL"])),(l()(),e.qb(57,0,null,null,4,"button",[["class","mdc-button"],["mdc-button",""]],[[8,"tabIndex",0],[2,"ngx-mdc-button--primary",null],[2,"ngx-mdc-button--secondary",null],[2,"mdc-button--raised",null],[2,"mdc-button--dense",null],[2,"mdc-button--unelevated",null],[2,"mdc-button--outlined",null]],[[null,"click"]],function(l,n,u){var b=!0;return"click"===n&&(b=!1!==e.Ab(l,59).onClick(u)&&b),"click"===n&&(b=0!=(e.Ab(l,73).checked=!e.Ab(l,73).checked)&&b),b},x.b,x.a)),e.Eb(131584,null,A.a,A.a,[e.A,y.b]),e.pb(59,245760,null,1,S.a,[e.k,A.a],null,null),e.Fb(335544320,8,{_icon:0}),(l()(),e.Hb(61,0,["Checked: ",""])),(l()(),e.qb(62,0,null,null,4,"button",[["class","mdc-button"],["mdc-button",""]],[[8,"tabIndex",0],[2,"ngx-mdc-button--primary",null],[2,"ngx-mdc-button--secondary",null],[2,"mdc-button--raised",null],[2,"mdc-button--dense",null],[2,"mdc-button--unelevated",null],[2,"mdc-button--outlined",null]],[[null,"click"]],function(l,n,u){var b=!0;return"click"===n&&(b=!1!==e.Ab(l,64).onClick(u)&&b),"click"===n&&(b=0!=(e.Ab(l,73).disabled=!e.Ab(l,73).disabled)&&b),b},x.b,x.a)),e.Eb(131584,null,A.a,A.a,[e.A,y.b]),e.pb(64,245760,null,1,S.a,[e.k,A.a],null,null),e.Fb(335544320,9,{_icon:0}),(l()(),e.Hb(66,0,["Disabled: ",""])),(l()(),e.qb(67,0,null,null,13,"mdc-form-field",[],[[2,"ngx-mdc-form-field--fluid",null],[2,"mdc-form-field--align-end",null]],null,null,v.c,v.a)),e.pb(68,1294336,[["demoformfield",4]],2,w.b,[e.A,e.k],null,null),e.Fb(335544320,10,{_control:0}),e.Fb(603979776,11,{assistiveElements:1}),(l()(),e.qb(71,0,null,0,7,"mdc-switch",[["class","mdc-switch"],["name","demoswitch"]],[[8,"id",0],[8,"tabIndex",0],[2,"mdc-switch--checked",null],[2,"mdc-switch--disabled",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"]],function(l,n,u){var e=!0,b=l.component;return"ngModelChange"===n&&(e=!1!==(b.isSwitchOn=u)&&e),"change"===n&&(e=!1!==b.onChange(u)&&e),e},f.b,f.a)),e.Eb(131584,null,A.a,A.a,[e.A,y.b]),e.pb(73,4374528,[["demoswitch",4]],0,q.a,[e.h,A.a,e.k,[2,w.b]],{name:[0,"name"]},{change:"change"}),e.Eb(1024,null,p.j,function(l){return[l]},[q.a]),e.pb(75,671744,null,0,p.o,[[8,null],[8,null],[8,null],[6,p.j]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Eb(2048,null,p.k,null,[p.o]),e.pb(77,16384,null,0,p.l,[[4,p.k]],null,null),e.Eb(2048,[[10,4]],w.c,null,[q.a]),(l()(),e.qb(79,0,null,0,1,"label",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["off/on"])),(l()(),e.qb(81,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Hb(82,null,["NgModel value: ",""])),(l()(),e.qb(83,0,null,null,1,"example-viewer",[],null,null,null,k.b,k.a)),e.pb(84,114688,null,0,H.a,[],{example:[0,"example"]},null),(l()(),e.qb(85,0,null,null,29,"div",[["class","demo-content"]],null,null,null,null,null)),(l()(),e.qb(86,0,null,null,1,"h3",[["class","demo-content__headline"]],null,null,null,null,null)),(l()(),e.Hb(-1,null,["Switch - NgModel Form"])),(l()(),e.qb(88,0,null,null,18,"form",[["id","demoForm"],["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,u){var b=!0;return"submit"===n&&(b=!1!==e.Ab(l,90).onSubmit(u)&&b),"reset"===n&&(b=!1!==e.Ab(l,90).onReset()&&b),b},null,null)),e.pb(89,16384,null,0,p.u,[],null,null),e.pb(90,4210688,[["demoForm",4]],0,p.n,[[8,null],[8,null]],null,null),e.Eb(2048,null,p.a,null,[p.n]),e.pb(92,16384,null,0,p.m,[[4,p.a]],null,null),(l()(),e.qb(93,0,null,null,13,"mdc-form-field",[],[[2,"ngx-mdc-form-field--fluid",null],[2,"mdc-form-field--align-end",null]],null,null,v.c,v.a)),e.pb(94,1294336,null,2,w.b,[e.A,e.k],null,null),e.Fb(335544320,12,{_control:0}),e.Fb(603979776,13,{assistiveElements:1}),(l()(),e.qb(97,0,null,0,7,"mdc-switch",[["class","mdc-switch"],["name","demoSwitch"],["ngModel",""]],[[8,"id",0],[8,"tabIndex",0],[2,"mdc-switch--checked",null],[2,"mdc-switch--disabled",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],null,null,f.b,f.a)),e.Eb(131584,null,A.a,A.a,[e.A,y.b]),e.pb(99,4374528,[["demoSwitch",4]],0,q.a,[e.h,A.a,e.k,[2,w.b]],{name:[0,"name"]},null),e.Eb(1024,null,p.j,function(l){return[l]},[q.a]),e.pb(101,671744,[["demoSwitchModel",4]],0,p.o,[[2,p.a],[8,null],[8,null],[6,p.j]],{name:[0,"name"],model:[1,"model"]},null),e.Eb(2048,null,p.k,null,[p.o]),e.pb(103,16384,null,0,p.l,[[4,p.k]],null,null),e.Eb(2048,[[12,4]],w.c,null,[q.a]),(l()(),e.qb(105,0,null,0,1,"label",[],null,null,null,null,null)),(l()(),e.Hb(-1,null,["off/on"])),(l()(),e.qb(107,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Hb(108,null,["Dirty: ",""])),(l()(),e.qb(109,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Hb(110,null,["Touched: ",""])),(l()(),e.qb(111,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Hb(112,null,["Value: ",""])),(l()(),e.qb(113,0,null,null,1,"example-viewer",[],null,null,null,k.b,k.a)),e.pb(114,114688,null,0,H.a,[],{example:[0,"example"]},null)],function(l,n){var u=n.component;l(n,12,0),l(n,24,0),l(n,30,0,""),l(n,36,0),l(n,47,0,u.example1),l(n,54,0),l(n,59,0),l(n,64,0),l(n,68,0),l(n,73,0,"demoswitch"),l(n,75,0,"demoswitch",u.isSwitchOn),l(n,84,0,u.exampleNgModel),l(n,94,0),l(n,99,0,"demoSwitch"),l(n,101,0,"demoSwitch",""),l(n,114,0,u.exampleNgModelForm)},function(l,n){var u=n.component;l(n,5,0,e.Ab(n,9).id,e.Ab(n,9).tabIndex,e.Ab(n,9).checked,e.Ab(n,9).disabled),l(n,11,0,e.Ab(n,12).fluid,e.Ab(n,12).alignEnd),l(n,15,0,e.Ab(n,18).id,e.Ab(n,18).tabIndex,e.Ab(n,18).checked,e.Ab(n,18).disabled),l(n,23,0,e.Ab(n,24).fluid,e.Ab(n,24).alignEnd),l(n,27,0,e.Ab(n,30).id,e.Ab(n,30).tabIndex,e.Ab(n,30).checked,e.Ab(n,30).disabled),l(n,35,0,e.Ab(n,36).fluid,e.Ab(n,36).alignEnd),l(n,39,0,e.Ab(n,42).id,e.Ab(n,42).tabIndex,e.Ab(n,42).checked,e.Ab(n,42).disabled),l(n,52,0,e.Ab(n,54).disabled?-1:0,e.Ab(n,54).primary,e.Ab(n,54).secondary,e.Ab(n,54).raised,e.Ab(n,54).dense,e.Ab(n,54).unelevated,e.Ab(n,54).outlined),l(n,57,0,e.Ab(n,59).disabled?-1:0,e.Ab(n,59).primary,e.Ab(n,59).secondary,e.Ab(n,59).raised,e.Ab(n,59).dense,e.Ab(n,59).unelevated,e.Ab(n,59).outlined),l(n,61,0,e.Ab(n,73).checked?"On":"Off"),l(n,62,0,e.Ab(n,64).disabled?-1:0,e.Ab(n,64).primary,e.Ab(n,64).secondary,e.Ab(n,64).raised,e.Ab(n,64).dense,e.Ab(n,64).unelevated,e.Ab(n,64).outlined),l(n,66,0,e.Ab(n,73).disabled?"On":"Off"),l(n,67,0,e.Ab(n,68).fluid,e.Ab(n,68).alignEnd),l(n,71,1,[e.Ab(n,73).id,e.Ab(n,73).tabIndex,e.Ab(n,73).checked,e.Ab(n,73).disabled,e.Ab(n,77).ngClassUntouched,e.Ab(n,77).ngClassTouched,e.Ab(n,77).ngClassPristine,e.Ab(n,77).ngClassDirty,e.Ab(n,77).ngClassValid,e.Ab(n,77).ngClassInvalid,e.Ab(n,77).ngClassPending]),l(n,82,0,u.isSwitchOn),l(n,88,0,e.Ab(n,92).ngClassUntouched,e.Ab(n,92).ngClassTouched,e.Ab(n,92).ngClassPristine,e.Ab(n,92).ngClassDirty,e.Ab(n,92).ngClassValid,e.Ab(n,92).ngClassInvalid,e.Ab(n,92).ngClassPending),l(n,93,0,e.Ab(n,94).fluid,e.Ab(n,94).alignEnd),l(n,97,1,[e.Ab(n,99).id,e.Ab(n,99).tabIndex,e.Ab(n,99).checked,e.Ab(n,99).disabled,e.Ab(n,103).ngClassUntouched,e.Ab(n,103).ngClassTouched,e.Ab(n,103).ngClassPristine,e.Ab(n,103).ngClassDirty,e.Ab(n,103).ngClassValid,e.Ab(n,103).ngClassInvalid,e.Ab(n,103).ngClassPending]),l(n,108,0,e.Ab(n,101).dirty),l(n,110,0,e.Ab(n,101).touched),l(n,112,0,e.Ab(n,101).value)})}function P(l){return e.Jb(0,[(l()(),e.qb(0,0,null,null,1,"ng-component",[],null,null,null,V,T)),e.pb(1,49152,null,0,h,[],null,null)],null,null)}var U=e.mb("ng-component",h,P,{},{},[]),L=u("Ip0R"),R=u("fYNg"),Y=u("Au5/"),Q=u("AaAM"),X=u("QvoI"),Z=u("km6S"),G=u("8lFC"),W=u("7kZ7"),z=u("3I+x"),B=u("sJeF"),K=u("FZl1"),ll=u("AaeQ"),nl=u("OR9S"),ul=u("wsON"),el=u("4/pc"),bl=u("zBxJ"),tl=u("I8gE"),cl=u("MZeD"),dl=u("wc6m"),ol=u("6t+h"),il=u("GNoC"),al=u("3jfj"),sl=u("MU+e"),ml=u("wlvs"),rl=u("MGkL"),hl=u("SJP4"),gl=u("hStE"),fl=u("t0QN"),pl=u("LpfU"),ql=u("hViD"),wl=u("vvyD"),Al=u("ZYCi"),yl=u("Lkda"),vl=u("OQP5"),kl=u("d2mR"),Hl=function(){return function(){}}();u.d(n,"SwitchModuleNgFactory",function(){return xl});var xl=e.nb(b,[],function(l){return e.xb([e.yb(512,e.j,e.cb,[[8,[t.b,t.a,c.b,c.a,d.a,I,j,$,U]],[3,e.j],e.y]),e.yb(4608,L.l,L.k,[e.v,[2,L.w]]),e.yb(4608,p.v,p.v,[]),e.yb(4608,R.a,R.a,[R.b,e.j,e.r,e.A,L.c,[2,L.g]]),e.yb(135680,Y.c,Y.c,[R.a,e.r,[2,Y.b],[3,Y.c]]),e.yb(4608,p.b,p.b,[]),e.yb(1073742336,L.b,L.b,[]),e.yb(1073742336,p.t,p.t,[]),e.yb(1073742336,p.g,p.g,[]),e.yb(1073742336,S.c,S.c,[]),e.yb(1073742336,Q.h,Q.h,[]),e.yb(1073742336,w.d,w.d,[]),e.yb(1073742336,X.b,X.b,[]),e.yb(1073742336,Z.c,Z.c,[]),e.yb(1073742336,G.f,G.f,[]),e.yb(1073742336,W.f,W.f,[]),e.yb(1073742336,R.c,R.c,[]),e.yb(1073742336,Y.k,Y.k,[]),e.yb(1073742336,z.e,z.e,[]),e.yb(1073742336,B.b,B.b,[]),e.yb(1073742336,K.c,K.c,[]),e.yb(1073742336,ll.b,ll.b,[]),e.yb(1073742336,nl.f,nl.f,[]),e.yb(1073742336,ul.b,ul.b,[]),e.yb(1073742336,el.i,el.i,[]),e.yb(1073742336,bl.d,bl.d,[]),e.yb(1073742336,tl.b,tl.b,[]),e.yb(1073742336,cl.d,cl.d,[]),e.yb(1073742336,A.c,A.c,[]),e.yb(1073742336,dl.b,dl.b,[]),e.yb(1073742336,ol.b,ol.b,[]),e.yb(1073742336,il.b,il.b,[]),e.yb(1073742336,al.c,al.c,[]),e.yb(1073742336,sl.b,sl.b,[]),e.yb(1073742336,ml.f,ml.f,[]),e.yb(1073742336,q.b,q.b,[]),e.yb(1073742336,rl.b,rl.b,[]),e.yb(1073742336,hl.e,hl.e,[]),e.yb(1073742336,gl.b,gl.b,[]),e.yb(1073742336,fl.b,fl.b,[]),e.yb(1073742336,pl.c,pl.c,[]),e.yb(1073742336,ql.d,ql.d,[]),e.yb(1073742336,g.n,g.n,[]),e.yb(1073742336,wl.a,wl.a,[]),e.yb(1073742336,p.q,p.q,[]),e.yb(1073742336,Al.o,Al.o,[[2,Al.u],[2,Al.l]]),e.yb(1073742336,yl.b,yl.b,[]),e.yb(1073742336,vl.d,vl.d,[]),e.yb(1073742336,kl.a,kl.a,[]),e.yb(1073742336,Hl,Hl,[]),e.yb(1073742336,b,b,[]),e.yb(1024,Al.j,function(){return[[{path:"",component:s,children:[{path:"",redirectTo:"api"},{path:"api",component:m},{path:"sass",component:r},{path:"examples",component:h}]}]]},[])])})}}]);