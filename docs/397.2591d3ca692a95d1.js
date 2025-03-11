"use strict";(self.webpackChunksortear_time=self.webpackChunksortear_time||[]).push([[397],{397:(z,p,i)=>{i.r(p),i.d(p,{HomeModule:()=>y});var l=i(6895),m=i(529),w=i(5874),h=i(7155),C=i(1981),M=i(5128),P=i(7185),O=i(7055),t=i(4650);let b=(()=>{const n=class{};let o=n;return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-button-primary"]],inputs:{value:"value"},decls:5,vars:1,consts:[[1,"text-center","flex","items-center","justify-center","m-2"],[1,"text-center","inline-flex","items-center","rounded-full","border","blue-dsgov-primario","px-6","py-2","font-semibold","text-white"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0)(1,"button",1),t._uU(2),t.qZA(),t._UZ(3,"br")(4,"br"),t.qZA()),2&e&&(t.xp6(2),t.hij(" ",a.value," "))}}),o})();var s=i(4006);function u(o,n){if(1&o&&(t.TgZ(0,"div",16),t._uU(1),t.qZA()),2&o){const d=t.oxw();t.xp6(1),t.hij(" ",d.errorMessage," ")}}function _(o,n){if(1&o&&(t.TgZ(0,"li",21),t._uU(1),t.qZA()),2&o){const d=n.$implicit;t.xp6(1),t.hij("\u26bd ",d,"")}}function f(o,n){if(1&o&&(t.TgZ(0,"div",17)(1,"h4",18),t._uU(2),t.qZA(),t.TgZ(3,"ul",19),t.YNc(4,_,2,1,"li",20),t.qZA()()),2&o){const d=n.$implicit,r=n.index;t.xp6(2),t.hij("\u{1f525} Time ",r+1,""),t.xp6(2),t.Q6J("ngForOf",d)}}const x=[{path:"",component:(()=>{const n=class{constructor(){this.numPlayers=0,this.playerNames="",this.teams=[],this.errorMessage=""}ngOnInit(){}sortearTimes(){const r=this.playerNames.split("\n").flatMap(c=>c.replace(/[\d-]/g," ").replace(/([a-z])([A-Z])/g,"$1 $2").split(/\s{2,}|\s*,\s*|\s*;\s*/g).map(g=>g.trim().toUpperCase())).filter(c=>""!==c);if(!this.numPlayers||this.numPlayers<=0||0===r.length)return this.errorMessage="Por favor, preencha todos os campos!",void(this.teams=[]);if(this.numPlayers>r.length)return this.errorMessage="N\xfamero de jogadores por time n\xe3o pode ser maior que o n\xfamero total de jogadores.",void(this.teams=[]);this.errorMessage="";const e=this.shuffle(r),a=Math.ceil(e.length/this.numPlayers);console.log(e),this.teams=[];for(let c=0;c<a;c++){const g=c*this.numPlayers,k=e.slice(g,g+this.numPlayers);this.teams.push(k)}}shuffle(r){for(let e=r.length-1;e>0;e--){const a=Math.floor(Math.random()*(e+1));[r[e],r[a]]=[r[a],r[e]]}return r}};let o=n;return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-home"]],decls:22,vars:4,consts:[[1,"w-full","max-w-2xl","mx-auto","bg-white","shadow-lg","rounded-lg","p-6"],[1,"text-center","mb-5"],[1,"text-2xl","font-bold","text-gray-800"],[1,"text-gray-500","text-sm"],[1,"mb-4"],["for","num-players",1,"block","text-sm"],["type","number","id","num-players","min","1","max","100","step","1",1,"default-input","w-full","p-2.5",3,"ngModel","ngModelChange"],["for","player-names",1,"block","text-sm"],["id","player-names","rows","10",1,"default-input","w-full","p-2.5",3,"ngModel","ngModelChange"],[1,"flex","justify-center"],["value","\u{1f3b2} Sortear Times",1,"",3,"click"],["class","mt-4 text-red-600 text-center bg-red-100 border border-red-400 px-4 py-2 rounded-lg",4,"ngIf"],["id","resultado",1,"mt-6"],["class","bg-gray-100 p-4 rounded-lg shadow-md mt-4",4,"ngFor","ngForOf"],[1,"flex","justify-center","mt-5"],[1,"text-gray-500"],[1,"mt-4","text-red-600","text-center","bg-red-100","border","border-red-400","px-4","py-2","rounded-lg"],[1,"bg-gray-100","p-4","rounded-lg","shadow-md","mt-4"],[1,"text-lg","font-bold","text-gray-800"],[1,"mt-2","space-y-1"],["class","text-gray-700",4,"ngFor","ngForOf"],[1,"text-gray-700"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h2",2),t._uU(3,"\u{1f3b2} Sorteador de Times"),t.qZA(),t.TgZ(4,"p",3),t._uU(5,"Organize seus times de forma r\xe1pida e aleat\xf3ria!"),t.qZA()(),t.TgZ(6,"div",4)(7,"label",5),t._uU(8,"Jogadores por Time:"),t.qZA(),t.TgZ(9,"input",6),t.NdJ("ngModelChange",function(g){return a.numPlayers=g}),t.qZA()(),t.TgZ(10,"div",4)(11,"label",7),t._uU(12,"Nomes dos Jogadores (um por linha):"),t.qZA(),t.TgZ(13,"textarea",8),t.NdJ("ngModelChange",function(g){return a.playerNames=g}),t.qZA()(),t.TgZ(14,"div",9)(15,"app-button-primary",10),t.NdJ("click",function(){return a.sortearTimes()}),t.qZA()(),t.YNc(16,u,2,1,"div",11),t.TgZ(17,"div",12),t.YNc(18,f,5,2,"div",13),t.qZA(),t.TgZ(19,"div",14)(20,"small",15),t._uU(21,"Criadores: Guilherme e Victor"),t.qZA()()()),2&e&&(t.xp6(9),t.Q6J("ngModel",a.numPlayers),t.xp6(4),t.Q6J("ngModel",a.playerNames),t.xp6(3),t.Q6J("ngIf",a.errorMessage),t.xp6(2),t.Q6J("ngForOf",a.teams))},dependencies:[l.sg,l.O5,b,s.Fj,s.wV,s.JJ,s.qQ,s.Fd,s.On],styles:['*[_ngcontent-%COMP%], [_ngcontent-%COMP%]:before, [_ngcontent-%COMP%]:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}[_ngcontent-%COMP%]:before, [_ngcontent-%COMP%]:after{--tw-content: ""}html[_ngcontent-%COMP%], [_nghost-%COMP%]{line-height:1.5;-webkit-text-size-adjust:100%;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body[_ngcontent-%COMP%]{margin:0;line-height:inherit}hr[_ngcontent-%COMP%]{height:0;color:inherit;border-top-width:1px}abbr[_ngcontent-%COMP%]:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%]{font-size:inherit;font-weight:inherit}a[_ngcontent-%COMP%]{color:inherit;text-decoration:inherit}b[_ngcontent-%COMP%], strong[_ngcontent-%COMP%]{font-weight:bolder}code[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], samp[_ngcontent-%COMP%], pre[_ngcontent-%COMP%]{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small[_ngcontent-%COMP%]{font-size:80%}sub[_ngcontent-%COMP%], sup[_ngcontent-%COMP%]{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub[_ngcontent-%COMP%]{bottom:-.25em}sup[_ngcontent-%COMP%]{top:-.5em}table[_ngcontent-%COMP%]{text-indent:0;border-color:inherit;border-collapse:collapse}button[_ngcontent-%COMP%], input[_ngcontent-%COMP%], optgroup[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%]{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button[_ngcontent-%COMP%], select[_ngcontent-%COMP%]{text-transform:none}button[_ngcontent-%COMP%], input[_ngcontent-%COMP%]:where([type="button"]), input[_ngcontent-%COMP%]:where([type="reset"]), input[_ngcontent-%COMP%]:where([type="submit"]){-webkit-appearance:button;background-color:transparent;background-image:none}[_ngcontent-%COMP%]:-moz-focusring{outline:auto}[_ngcontent-%COMP%]:-moz-ui-invalid{box-shadow:none}progress[_ngcontent-%COMP%]{vertical-align:baseline}[_ngcontent-%COMP%]::-webkit-inner-spin-button, [_ngcontent-%COMP%]::-webkit-outer-spin-button{height:auto}[type=search][_ngcontent-%COMP%]{-webkit-appearance:textfield;outline-offset:-2px}[_ngcontent-%COMP%]::-webkit-search-decoration{-webkit-appearance:none}[_ngcontent-%COMP%]::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary[_ngcontent-%COMP%]{display:list-item}blockquote[_ngcontent-%COMP%], dl[_ngcontent-%COMP%], dd[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], hr[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], p[_ngcontent-%COMP%], pre[_ngcontent-%COMP%]{margin:0}fieldset[_ngcontent-%COMP%]{margin:0;padding:0}legend[_ngcontent-%COMP%]{padding:0}ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], menu[_ngcontent-%COMP%]{list-style:none;margin:0;padding:0}dialog[_ngcontent-%COMP%]{padding:0}textarea[_ngcontent-%COMP%]{resize:vertical}input[_ngcontent-%COMP%]::placeholder, textarea[_ngcontent-%COMP%]::placeholder{opacity:1;color:#9ca3af}button[_ngcontent-%COMP%], [role=button][_ngcontent-%COMP%]{cursor:pointer}[_ngcontent-%COMP%]:disabled{cursor:default}img[_ngcontent-%COMP%], svg[_ngcontent-%COMP%], video[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%], audio[_ngcontent-%COMP%], iframe[_ngcontent-%COMP%], embed[_ngcontent-%COMP%], object[_ngcontent-%COMP%]{display:block;vertical-align:middle}img[_ngcontent-%COMP%], video[_ngcontent-%COMP%]{max-width:100%;height:auto}[hidden][_ngcontent-%COMP%]{display:none}*[_ngcontent-%COMP%], [_ngcontent-%COMP%]:before, [_ngcontent-%COMP%]:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }[_ngcontent-%COMP%]::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }.absolute[_ngcontent-%COMP%]{position:absolute}.relative[_ngcontent-%COMP%]{position:relative}.col-span-1[_ngcontent-%COMP%]{grid-column:span 1 / span 1}.col-span-2[_ngcontent-%COMP%]{grid-column:span 2 / span 2}.col-span-3[_ngcontent-%COMP%]{grid-column:span 3 / span 3}.m-2[_ngcontent-%COMP%]{margin:.5rem}.m-5[_ngcontent-%COMP%]{margin:1.25rem}.m-7[_ngcontent-%COMP%]{margin:1.75rem}.mx-auto[_ngcontent-%COMP%]{margin-left:auto;margin-right:auto}.mb-0[_ngcontent-%COMP%]{margin-bottom:0}.mb-10[_ngcontent-%COMP%]{margin-bottom:2.5rem}.mb-2[_ngcontent-%COMP%]{margin-bottom:.5rem}.mb-4[_ngcontent-%COMP%]{margin-bottom:1rem}.mb-5[_ngcontent-%COMP%]{margin-bottom:1.25rem}.mr-2[_ngcontent-%COMP%]{margin-right:.5rem}.mt-2[_ngcontent-%COMP%]{margin-top:.5rem}.mt-4[_ngcontent-%COMP%]{margin-top:1rem}.mt-5[_ngcontent-%COMP%]{margin-top:1.25rem}.mt-6[_ngcontent-%COMP%]{margin-top:1.5rem}.block[_ngcontent-%COMP%]{display:block}.flex[_ngcontent-%COMP%]{display:flex}.inline-flex[_ngcontent-%COMP%]{display:inline-flex}.grid[_ngcontent-%COMP%]{display:grid}.hidden[_ngcontent-%COMP%]{display:none}.h-4\\/5[_ngcontent-%COMP%]{height:80%}.h-5[_ngcontent-%COMP%]{height:1.25rem}.h-8[_ngcontent-%COMP%]{height:2rem}.h-auto[_ngcontent-%COMP%]{height:auto}.h-full[_ngcontent-%COMP%]{height:100%}.h-screen[_ngcontent-%COMP%]{height:100vh}.max-w-2xl[_ngcontent-%COMP%]{max-width:42rem}.max-w-full[_ngcontent-%COMP%]{max-width:100%}.flex-1[_ngcontent-%COMP%]{flex:1 1 0%}.cursor-pointer[_ngcontent-%COMP%]{cursor:pointer}.grid-cols-1[_ngcontent-%COMP%]{grid-template-columns:repeat(1,minmax(0,1fr))}.grid-cols-2[_ngcontent-%COMP%]{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-4[_ngcontent-%COMP%]{grid-template-columns:repeat(4,minmax(0,1fr))}.flex-col[_ngcontent-%COMP%]{flex-direction:column}.items-end[_ngcontent-%COMP%]{align-items:flex-end}.items-center[_ngcontent-%COMP%]{align-items:center}.justify-start[_ngcontent-%COMP%]{justify-content:flex-start}.justify-end[_ngcontent-%COMP%]{justify-content:flex-end}.justify-center[_ngcontent-%COMP%]{justify-content:center}.justify-between[_ngcontent-%COMP%]{justify-content:space-between}.gap-4[_ngcontent-%COMP%]{gap:1rem}.space-x-2[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not([hidden]) ~ [_ngcontent-%COMP%]:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(.5rem * var(--tw-space-x-reverse));margin-left:calc(.5rem * calc(1 - var(--tw-space-x-reverse)))}.space-y-1[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not([hidden]) ~ [_ngcontent-%COMP%]:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.25rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.25rem * var(--tw-space-y-reverse))}.space-y-2[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not([hidden]) ~ [_ngcontent-%COMP%]:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(.5rem * var(--tw-space-y-reverse))}.space-y-4[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not([hidden]) ~ [_ngcontent-%COMP%]:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(1rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1rem * var(--tw-space-y-reverse))}.rounded-full[_ngcontent-%COMP%]{border-radius:9999px}.rounded-lg[_ngcontent-%COMP%]{border-radius:.5rem}.rounded-md[_ngcontent-%COMP%]{border-radius:.375rem}.rounded-sm[_ngcontent-%COMP%]{border-radius:.125rem}.border[_ngcontent-%COMP%]{border-width:1px}.border-blue-600[_ngcontent-%COMP%]{--tw-border-opacity: 1;border-color:rgb(37 99 235 / var(--tw-border-opacity))}.border-gray-300[_ngcontent-%COMP%]{--tw-border-opacity: 1;border-color:rgb(209 213 219 / var(--tw-border-opacity))}.border-red-400[_ngcontent-%COMP%]{--tw-border-opacity: 1;border-color:rgb(248 113 113 / var(--tw-border-opacity))}.border-transparent[_ngcontent-%COMP%]{border-color:transparent}.bg-blue-500[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:rgb(59 130 246 / var(--tw-bg-opacity))}.bg-gray-100[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity))}.bg-gray-50[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:rgb(249 250 251 / var(--tw-bg-opacity))}.bg-red-100[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:rgb(254 226 226 / var(--tw-bg-opacity))}.bg-white[_ngcontent-%COMP%]{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.p-0[_ngcontent-%COMP%]{padding:0}.p-2[_ngcontent-%COMP%]{padding:.5rem}.p-2\\.5[_ngcontent-%COMP%]{padding:.625rem}.p-3[_ngcontent-%COMP%]{padding:.75rem}.p-4[_ngcontent-%COMP%]{padding:1rem}.p-5[_ngcontent-%COMP%]{padding:1.25rem}.p-6[_ngcontent-%COMP%]{padding:1.5rem}.px-4[_ngcontent-%COMP%]{padding-left:1rem;padding-right:1rem}.px-5[_ngcontent-%COMP%]{padding-left:1.25rem;padding-right:1.25rem}.px-6[_ngcontent-%COMP%]{padding-left:1.5rem;padding-right:1.5rem}.py-2[_ngcontent-%COMP%]{padding-top:.5rem;padding-bottom:.5rem}.py-2\\.5[_ngcontent-%COMP%]{padding-top:.625rem;padding-bottom:.625rem}.pr-10[_ngcontent-%COMP%]{padding-right:2.5rem}.pt-0[_ngcontent-%COMP%]{padding-top:0}.text-center[_ngcontent-%COMP%]{text-align:center}.text-2xl[_ngcontent-%COMP%]{font-size:1.5rem;line-height:2rem}.text-base[_ngcontent-%COMP%]{font-size:1rem;line-height:1.5rem}.text-lg[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem}.text-sm[_ngcontent-%COMP%]{font-size:.875rem;line-height:1.25rem}.text-xl[_ngcontent-%COMP%]{font-size:1.25rem;line-height:1.75rem}.font-bold[_ngcontent-%COMP%]{font-weight:700}.font-medium[_ngcontent-%COMP%]{font-weight:500}.font-semibold[_ngcontent-%COMP%]{font-weight:600}.leading-8[_ngcontent-%COMP%]{line-height:2rem}.leading-tight[_ngcontent-%COMP%]{line-height:1.25}.tracking-tight[_ngcontent-%COMP%]{letter-spacing:-.025em}.tracking-wide[_ngcontent-%COMP%]{letter-spacing:.025em}.text-black[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(0 0 0 / var(--tw-text-opacity))}.text-blue-500[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(59 130 246 / var(--tw-text-opacity))}.text-blue-800[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(30 64 175 / var(--tw-text-opacity))}.text-gray-500[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(107 114 128 / var(--tw-text-opacity))}.text-gray-700[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(55 65 81 / var(--tw-text-opacity))}.text-gray-800[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(31 41 55 / var(--tw-text-opacity))}.text-gray-900[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(17 24 39 / var(--tw-text-opacity))}.text-green-500[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(34 197 94 / var(--tw-text-opacity))}.text-red-600[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(220 38 38 / var(--tw-text-opacity))}.text-white[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.shadow[_ngcontent-%COMP%]{--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-lg[_ngcontent-%COMP%]{--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-md[_ngcontent-%COMP%]{--tw-shadow: 0 4px 6px -1px rgb(0 0 0 / .1), 0 2px 4px -2px rgb(0 0 0 / .1);--tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-sm[_ngcontent-%COMP%]{--tw-shadow: 0 1px 2px 0 rgb(0 0 0 / .05);--tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.full-height[_ngcontent-%COMP%]{height:100vh!important}.bg[_ngcontent-%COMP%]{opacity:.5}hr[_ngcontent-%COMP%]{display:flex;height:1px;width:70%;border:0;border-top:1px solid #ffffff;margin:10px auto;padding:0;align-items:center}.width-50[_ngcontent-%COMP%]{width:30%}.left[_ngcontent-%COMP%]{left:90%}.bg-green-500[_ngcontent-%COMP%]{background-color:#10b981}.w-full[_ngcontent-%COMP%]{width:100%}.bg-default[_ngcontent-%COMP%]{background-color:#00216c}.bg-default[_ngcontent-%COMP%]:hover{background-color:#001859}.bx-show[_ngcontent-%COMP%]{color:#4c4c4c}i[_ngcontent-%COMP%]{width:2px;position:relative;right:30px;top:4px;font-size:20px;line-height:40px;cursor:pointer;z-index:1;color:#03045fc7}.min-h-screen[_ngcontent-%COMP%]{min-height:100vh}.flex-1[_ngcontent-%COMP%]{flex:1}footer[_ngcontent-%COMP%]{background-color:var(--bg_primary_color)}.bx[_ngcontent-%COMP%]{margin:0!important;padding:0!important}.hover\\:bg-blue-100[_ngcontent-%COMP%]:hover{--tw-bg-opacity: 1;background-color:rgb(219 234 254 / var(--tw-bg-opacity))}.hover\\:bg-blue-700[_ngcontent-%COMP%]:hover{--tw-bg-opacity: 1;background-color:rgb(29 78 216 / var(--tw-bg-opacity))}.hover\\:bg-gray-100[_ngcontent-%COMP%]:hover{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity))}.hover\\:bg-green-500[_ngcontent-%COMP%]:hover{--tw-bg-opacity: 1;background-color:rgb(34 197 94 / var(--tw-bg-opacity))}.hover\\:underline[_ngcontent-%COMP%]:hover{text-decoration-line:underline}.focus\\:bg-gray-100[_ngcontent-%COMP%]:focus{--tw-bg-opacity: 1;background-color:rgb(243 244 246 / var(--tw-bg-opacity))}.focus\\:outline-none[_ngcontent-%COMP%]:focus{outline:2px solid transparent;outline-offset:2px}.focus\\:ring-4[_ngcontent-%COMP%]:focus{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus\\:ring-green-300[_ngcontent-%COMP%]:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(134 239 172 / var(--tw-ring-opacity))}.focus\\:ring-green-400[_ngcontent-%COMP%]:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(74 222 128 / var(--tw-ring-opacity))}@media not all and (min-width: 1024px){.max-lg\\:block[_ngcontent-%COMP%]{display:block}}@media not all and (min-width: 640px){.max-sm\\:m-5[_ngcontent-%COMP%]{margin:1.25rem}.max-sm\\:w-full[_ngcontent-%COMP%]{width:100%}.max-sm\\:w-screen[_ngcontent-%COMP%]{width:100vw}}@media (min-width: 640px){.sm\\:m-5[_ngcontent-%COMP%]{margin:1.25rem}.sm\\:flex[_ngcontent-%COMP%]{display:flex}.sm\\:w-full[_ngcontent-%COMP%]{width:100%}.sm\\:w-screen[_ngcontent-%COMP%]{width:100vw}.sm\\:max-w-3xl[_ngcontent-%COMP%]{max-width:48rem}.sm\\:max-w-md[_ngcontent-%COMP%]{max-width:28rem}.sm\\:items-center[_ngcontent-%COMP%]{align-items:center}.sm\\:justify-center[_ngcontent-%COMP%]{justify-content:center}.sm\\:justify-between[_ngcontent-%COMP%]{justify-content:space-between}.sm\\:p-8[_ngcontent-%COMP%]{padding:2rem}.sm\\:text-center[_ngcontent-%COMP%]{text-align:center}.sm\\:text-sm[_ngcontent-%COMP%]{font-size:.875rem;line-height:1.25rem}}@media (min-width: 768px){.md\\:mt-0[_ngcontent-%COMP%]{margin-top:0}.md\\:block[_ngcontent-%COMP%]{display:block}.md\\:flex[_ngcontent-%COMP%]{display:flex}.md\\:w-screen[_ngcontent-%COMP%]{width:100vw}.md\\:justify-center[_ngcontent-%COMP%]{justify-content:center}.md\\:space-y-6[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not([hidden]) ~ [_ngcontent-%COMP%]:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(1.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1.5rem * var(--tw-space-y-reverse))}.md\\:px-4[_ngcontent-%COMP%]{padding-left:1rem;padding-right:1rem}.md\\:py-2[_ngcontent-%COMP%]{padding-top:.5rem;padding-bottom:.5rem}.md\\:py-4[_ngcontent-%COMP%]{padding-top:1rem;padding-bottom:1rem}.md\\:text-2xl[_ngcontent-%COMP%]{font-size:1.5rem;line-height:2rem}.md\\:text-lg[_ngcontent-%COMP%]{font-size:1.125rem;line-height:1.75rem}.md\\:text-xl[_ngcontent-%COMP%]{font-size:1.25rem;line-height:1.75rem}}@media (min-width: 1024px){.lg\\:block[_ngcontent-%COMP%]{display:block}.lg\\:w-screen[_ngcontent-%COMP%]{width:100vw}}@media (min-width: 1280px){.xl\\:p-0[_ngcontent-%COMP%]{padding:0}}@media (prefers-color-scheme: dark){.dark\\:border[_ngcontent-%COMP%]{border-width:1px}.dark\\:text-gray-400[_ngcontent-%COMP%]{--tw-text-opacity: 1;color:rgb(156 163 175 / var(--tw-text-opacity))}}']}),o})(),data:{routeIdentifier:"home"}}];let y=(()=>{const n=class{};let o=n;return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[l.ez,O.m,C.Bz.forChild(x),M.yI.forRoot({dropSpecialCharacters:!1}),m.JF,w.TU,h.p0,P.Rh.forRoot()]}),o})()}}]);