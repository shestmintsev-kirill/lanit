(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-549e78ee"],{"00b4":function(t,e,r){"use strict";r("ac1f");var n=r("23e7"),i=r("da84"),o=r("c65b"),a=r("e330"),c=r("1626"),s=r("861d"),u=function(){var t=!1,e=/[ac]/;return e.exec=function(){return t=!0,/./.exec.apply(this,arguments)},!0===e.test("abc")&&t}(),f=i.Error,d=a(/./.test);n({target:"RegExp",proto:!0,forced:!u},{test:function(t){var e=this.exec;if(!c(e))return d(this,t);var r=o(e,this,t);if(null!==r&&!s(r))throw new f("RegExp exec method returned something other than an Object or null");return!!r}})},"107c":function(t,e,r){var n=r("d039"),i=r("da84"),o=i.RegExp;t.exports=n((function(){var t=o("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")}))},"159b":function(t,e,r){var n=r("da84"),i=r("fdbc"),o=r("785a"),a=r("17c2"),c=r("9112"),s=function(t){if(t&&t.forEach!==a)try{c(t,"forEach",a)}catch(e){t.forEach=a}};for(var u in i)i[u]&&s(n[u]&&n[u].prototype);s(o)},"17c2":function(t,e,r){"use strict";var n=r("b727").forEach,i=r("a640"),o=i("forEach");t.exports=o?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"1d6e":function(t,e,r){"use strict";r("e77e")},"4de4":function(t,e,r){"use strict";var n=r("23e7"),i=r("b727").filter,o=r("1dde"),a=o("filter");n({target:"Array",proto:!0,forced:!a},{filter:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},"4df4":function(t,e,r){"use strict";var n=r("da84"),i=r("0366"),o=r("c65b"),a=r("7b0b"),c=r("9bdd"),s=r("e95a"),u=r("68ee"),f=r("07fa"),d=r("8418"),l=r("9a1f"),h=r("35a1"),g=n.Array;t.exports=function(t){var e=a(t),r=u(this),n=arguments.length,p=n>1?arguments[1]:void 0,b=void 0!==p;b&&(p=i(p,n>2?arguments[2]:void 0));var v,m,x,y,O,w,I=h(e),E=0;if(!I||this==g&&s(I))for(v=f(e),m=r?new this(v):g(v);v>E;E++)w=b?p(e[E],E):e[E],d(m,E,w);else for(y=l(e,I),O=y.next,m=r?new this:[];!(x=o(O,y)).done;E++)w=b?c(y,p,[x.value,E],!0):x.value,d(m,E,w);return m.length=E,m}},7604:function(t,e,r){"use strict";r.r(e);var n=r("7a23"),i=function(t){return Object(n["u"])("data-v-2989d9e7"),t=t(),Object(n["s"])(),t},o=["onMouseup"],a=["onMousedown"],c={class:"desk-item__item"},s=["onClick"],u={class:"desk-item__item_title"},f=i((function(){return Object(n["f"])("hr",null,null,-1)})),d={key:0,class:"return-block",ref:"returnWrapper"};function l(t,e,r,i,l,h){return Object(n["r"])(),Object(n["e"])("div",{onMousemove:e[2]||(e[2]=function(){return t.moveAt&&t.moveAt.apply(t,arguments)})},[(Object(n["r"])(!0),Object(n["e"])(n["a"],null,Object(n["x"])(t.items,(function(r,i){return Object(n["r"])(),Object(n["e"])("div",{key:r.id,class:"desk-item",onMouseup:Object(n["E"])((function(e){return t.setSize(e,i)}),["self"]),style:Object(n["n"])({"z-index":r["z-index"],left:t.draggableIndex!==i?r.left+"px":t.leftPositionByKey(i),top:t.draggableIndex!==i?r.top+"px":t.topPositionByKey(i),width:r.width,height:r.height})},[Object(n["f"])("div",{class:"desk-item__wrapper",onMouseup:e[0]||(e[0]=function(){return t.stopDrag&&t.stopDrag.apply(t,arguments)}),onMousedown:function(e){return t.startDrag(i,e)}},[Object(n["f"])("div",c,[Object(n["f"])("button",{onClick:function(e){return t.removeItem(r.id)},class:"desk-item__close"},"-",8,s),Object(n["f"])("p",u,Object(n["A"])(r.id),1)]),f],40,a)],44,o)})),128)),t.showReturnItem?(Object(n["r"])(),Object(n["e"])("div",d,[Object(n["f"])("p",{class:"return-block__text",onClick:e[1]||(e[1]=function(e){return t.returnLastRemoveItem()})},"+ Return last item to trading desk")],512)):Object(n["d"])("",!0)],32)}r("b64b"),r("a4d3"),r("4de4"),r("d3b7"),r("e439"),r("159b"),r("dbb4");function h(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function g(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?g(Object(r),!0).forEach((function(e){h(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function b(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function v(t){if(Array.isArray(t))return b(t)}r("e01a"),r("d28b"),r("3ca3"),r("ddb0"),r("a630");function m(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}r("fb6a"),r("b0c0"),r("ac1f"),r("00b4");function x(t,e){if(t){if("string"===typeof t)return b(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?b(t,e):void 0}}r("d9e2");function y(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function O(t){return v(t)||m(t)||x(t)||y()}r("a9e3"),r("d81d"),r("e9c4"),r("7db0");var w=[{id:1,left:5,top:5,"z-index":1,width:300,height:100},{id:2,left:100,top:400,"z-index":1,width:300,height:100},{id:3,left:500,top:350,"z-index":1,width:300,height:100},{id:4,left:400,top:600,"z-index":1,width:300,height:100},{id:5,left:200,top:170,"z-index":1,width:300,height:100},{id:6,left:500,top:0,"z-index":1,width:300,height:100}],I=w,E=Object(n["i"])({name:"Desk",data:function(){return{shiftX:null,shiftY:null,showReturnItem:!1,draggableIndex:-1,dragLeft:0,dragTop:0,items:I}},mounted:function(){this.initDeskData()},methods:{startDrag:function(t,e){var r=e.target;"div"===r.localName&&(this.draggableIndex=t,this.setMainItem(t),this.shiftX=e.clientX-r.getBoundingClientRect().left+1,this.shiftY=e.clientY-r.getBoundingClientRect().top+1,this.moveAt(e))},moveAt:function(t){-1!==this.draggableIndex&&(this.dragLeft=t.clientX-(this.shiftX||0),this.dragTop=t.clientY-(this.shiftY||0))},stopDrag:function(){-1!==this.draggableIndex&&(this.items[this.draggableIndex].left=this.dragLeft,this.items[this.draggableIndex].top=this.dragTop,this.saveItemsPosition(),this.shiftX=null,this.shiftY=null,this.draggableIndex=-1,this.dragLeft=0,this.dragTop=0)},isDragging:function(t){return this.draggableIndex===t},leftPositionByKey:function(t){return this.isDragging(t)?this.dragLeft+"px":"0"},topPositionByKey:function(t){return this.isDragging(t)?this.dragTop+"px":"0"},setSize:function(t,e){var r=t.target;this.items[e].width=Number(r.style.width),this.items[e].height=Number(r.style.height),this.saveItemsPosition()},setMainItem:function(t){var e=Math.max.apply(Math,O(this.items.map((function(t){return t["z-index"]}))));this.items[t]["z-index"]=e+1,e>90&&this.items.forEach((function(t){t["z-index"]=Math.ceil(t["z-index"]/5)}))},saveItemsPosition:function(){localStorage.items=JSON.stringify(this.items)},removeItem:function(t){localStorage.removeLastItem=JSON.stringify(this.items.find((function(e){return e.id===t}))),this.items=this.items.filter((function(e){return e.id!==t})),this.showReturnItem=!0,localStorage.showReturn="true"},returnLastRemoveItem:function(){var t=this.$refs.returnWrapper.getBoundingClientRect(),e=t.top,r=t.left,n=p(p({},JSON.parse(localStorage.removeLastItem)),{},{top:e,left:r,height:"100px",width:"300px","z-index":90});this.items.push(n),this.showReturnItem=!1,localStorage.removeItem("showReturn"),localStorage.removeItem("removeLastItem")},initDeskData:function(){localStorage.items&&(this.items=JSON.parse(localStorage.items)),localStorage.showReturn&&(this.showReturnItem=!0)}}}),j=(r("1d6e"),r("6b0d")),S=r.n(j);const R=S()(E,[["render",l],["__scopeId","data-v-2989d9e7"]]);e["default"]=R},"7db0":function(t,e,r){"use strict";var n=r("23e7"),i=r("b727").find,o=r("44d2"),a="find",c=!0;a in[]&&Array(1)[a]((function(){c=!1})),n({target:"Array",proto:!0,forced:c},{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),o(a)},9263:function(t,e,r){"use strict";var n=r("c65b"),i=r("e330"),o=r("577e"),a=r("ad6d"),c=r("9f7f"),s=r("5692"),u=r("7c73"),f=r("69f3").get,d=r("fce3"),l=r("107c"),h=s("native-string-replace",String.prototype.replace),g=RegExp.prototype.exec,p=g,b=i("".charAt),v=i("".indexOf),m=i("".replace),x=i("".slice),y=function(){var t=/a/,e=/b*/g;return n(g,t,"a"),n(g,e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),O=c.BROKEN_CARET,w=void 0!==/()??/.exec("")[1],I=y||w||O||d||l;I&&(p=function(t){var e,r,i,c,s,d,l,I=this,E=f(I),j=o(t),S=E.raw;if(S)return S.lastIndex=I.lastIndex,e=n(p,S,j),I.lastIndex=S.lastIndex,e;var R=E.groups,k=O&&I.sticky,A=n(a,I),D=I.source,P=0,_=j;if(k&&(A=m(A,"y",""),-1===v(A,"g")&&(A+="g"),_=x(j,I.lastIndex),I.lastIndex>0&&(!I.multiline||I.multiline&&"\n"!==b(j,I.lastIndex-1))&&(D="(?: "+D+")",_=" "+_,P++),r=new RegExp("^(?:"+D+")",A)),w&&(r=new RegExp("^"+D+"$(?!\\s)",A)),y&&(i=I.lastIndex),c=n(g,k?r:I,_),k?c?(c.input=x(c.input,P),c[0]=x(c[0],P),c.index=I.lastIndex,I.lastIndex+=c[0].length):I.lastIndex=0:y&&c&&(I.lastIndex=I.global?c.index+c[0].length:i),w&&c&&c.length>1&&n(h,c[0],r,(function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(c[s]=void 0)})),c&&R)for(c.groups=d=u(null),s=0;s<R.length;s++)l=R[s],d[l[0]]=c[l[1]];return c}),t.exports=p},"9bdd":function(t,e,r){var n=r("825a"),i=r("2a62");t.exports=function(t,e,r,o){try{return o?e(n(r)[0],r[1]):e(r)}catch(a){i(t,"throw",a)}}},"9f7f":function(t,e,r){var n=r("d039"),i=r("da84"),o=i.RegExp,a=n((function(){var t=o("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),c=a||n((function(){return!o("a","y").sticky})),s=a||n((function(){var t=o("^r","gy");return t.lastIndex=2,null!=t.exec("str")}));t.exports={BROKEN_CARET:s,MISSED_STICKY:c,UNSUPPORTED_Y:a}},a630:function(t,e,r){var n=r("23e7"),i=r("4df4"),o=r("1c7e"),a=!o((function(t){Array.from(t)}));n({target:"Array",stat:!0,forced:a},{from:i})},a640:function(t,e,r){"use strict";var n=r("d039");t.exports=function(t,e){var r=[][t];return!!r&&n((function(){r.call(null,e||function(){throw 1},1)}))}},ab36:function(t,e,r){var n=r("861d"),i=r("9112");t.exports=function(t,e){n(e)&&"cause"in e&&i(t,"cause",e.cause)}},ac1f:function(t,e,r){"use strict";var n=r("23e7"),i=r("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},ad6d:function(t,e,r){"use strict";var n=r("825a");t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},b0c0:function(t,e,r){var n=r("83ab"),i=r("5e77").EXISTS,o=r("e330"),a=r("9bf2").f,c=Function.prototype,s=o(c.toString),u=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,f=o(u.exec),d="name";n&&!i&&a(c,d,{configurable:!0,get:function(){try{return f(u,s(this))[1]}catch(t){return""}}})},b64b:function(t,e,r){var n=r("23e7"),i=r("7b0b"),o=r("df75"),a=r("d039"),c=a((function(){o(1)}));n({target:"Object",stat:!0,forced:c},{keys:function(t){return o(i(t))}})},b980:function(t,e,r){var n=r("d039"),i=r("5c6c");t.exports=!n((function(){var t=Error("a");return!("stack"in t)||(Object.defineProperty(t,"stack",i(1,7)),7!==t.stack)}))},c770:function(t,e,r){var n=r("e330"),i=n("".replace),o=function(t){return String(Error(t).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,c=a.test(o);t.exports=function(t,e){if(c&&"string"==typeof t)while(e--)t=i(t,a,"");return t}},d9e2:function(t,e,r){var n=r("23e7"),i=r("da84"),o=r("2ba4"),a=r("e5cb"),c="WebAssembly",s=i[c],u=7!==Error("e",{cause:7}).cause,f=function(t,e){var r={};r[t]=a(t,e,u),n({global:!0,forced:u},r)},d=function(t,e){if(s&&s[t]){var r={};r[t]=a(c+"."+t,e,u),n({target:c,stat:!0,forced:u},r)}};f("Error",(function(t){return function(e){return o(t,this,arguments)}})),f("EvalError",(function(t){return function(e){return o(t,this,arguments)}})),f("RangeError",(function(t){return function(e){return o(t,this,arguments)}})),f("ReferenceError",(function(t){return function(e){return o(t,this,arguments)}})),f("SyntaxError",(function(t){return function(e){return o(t,this,arguments)}})),f("TypeError",(function(t){return function(e){return o(t,this,arguments)}})),f("URIError",(function(t){return function(e){return o(t,this,arguments)}})),d("CompileError",(function(t){return function(e){return o(t,this,arguments)}})),d("LinkError",(function(t){return function(e){return o(t,this,arguments)}})),d("RuntimeError",(function(t){return function(e){return o(t,this,arguments)}}))},dbb4:function(t,e,r){var n=r("23e7"),i=r("83ab"),o=r("56ef"),a=r("fc6a"),c=r("06cf"),s=r("8418");n({target:"Object",stat:!0,sham:!i},{getOwnPropertyDescriptors:function(t){var e,r,n=a(t),i=c.f,u=o(n),f={},d=0;while(u.length>d)r=i(n,e=u[d++]),void 0!==r&&s(f,e,r);return f}})},e391:function(t,e,r){var n=r("577e");t.exports=function(t,e){return void 0===t?arguments.length<2?"":e:n(t)}},e439:function(t,e,r){var n=r("23e7"),i=r("d039"),o=r("fc6a"),a=r("06cf").f,c=r("83ab"),s=i((function(){a(1)})),u=!c||s;n({target:"Object",stat:!0,forced:u,sham:!c},{getOwnPropertyDescriptor:function(t,e){return a(o(t),e)}})},e5cb:function(t,e,r){"use strict";var n=r("d066"),i=r("1a2d"),o=r("9112"),a=r("3a9b"),c=r("d2bb"),s=r("e893"),u=r("7156"),f=r("e391"),d=r("ab36"),l=r("c770"),h=r("b980"),g=r("c430");t.exports=function(t,e,r,p){var b=p?2:1,v=t.split("."),m=v[v.length-1],x=n.apply(null,v);if(x){var y=x.prototype;if(!g&&i(y,"cause")&&delete y.cause,!r)return x;var O=n("Error"),w=e((function(t,e){var r=f(p?e:t,void 0),n=p?new x(t):new x;return void 0!==r&&o(n,"message",r),h&&o(n,"stack",l(n.stack,2)),this&&a(y,this)&&u(n,this,w),arguments.length>b&&d(n,arguments[b]),n}));if(w.prototype=y,"Error"!==m&&(c?c(w,O):s(w,O,{name:!0})),s(w,x),!g)try{y.name!==m&&o(y,"name",m),y.constructor=w}catch(I){}return w}}},e77e:function(t,e,r){},fb6a:function(t,e,r){"use strict";var n=r("23e7"),i=r("da84"),o=r("e8b5"),a=r("68ee"),c=r("861d"),s=r("23cb"),u=r("07fa"),f=r("fc6a"),d=r("8418"),l=r("b622"),h=r("1dde"),g=r("f36a"),p=h("slice"),b=l("species"),v=i.Array,m=Math.max;n({target:"Array",proto:!0,forced:!p},{slice:function(t,e){var r,n,i,l=f(this),h=u(l),p=s(t,h),x=s(void 0===e?h:e,h);if(o(l)&&(r=l.constructor,a(r)&&(r===v||o(r.prototype))?r=void 0:c(r)&&(r=r[b],null===r&&(r=void 0)),r===v||void 0===r))return g(l,p,x);for(n=new(void 0===r?v:r)(m(x-p,0)),i=0;p<x;p++,i++)p in l&&d(n,i,l[p]);return n.length=i,n}})},fce3:function(t,e,r){var n=r("d039"),i=r("da84"),o=i.RegExp;t.exports=n((function(){var t=o(".","s");return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)}))}}]);
//# sourceMappingURL=chunk-549e78ee.dd0955ad.js.map