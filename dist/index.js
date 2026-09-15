"use strict";var f=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var q=f(function(G,l){
var s=require('@stdlib/math-base-special-pow/dist');function w(e,r,a,v,n,i,o,_){var u,d,t;if(e<=0)return i;if(u=_,e===1)return n?i[u]=s(r,v):i[u]=s(r,a),i;for(i[u]=s(r,a),u+=o,n&&(e-=1),d=(v-a)/e,t=1;t<e;t++)i[u]=s(r,a+d*t),u+=o;return n&&(i[u]=s(r,v)),i}l.exports=w
});var y=f(function(H,p){
var E=require('@stdlib/strided-base-stride2offset/dist'),O=q();function h(e,r,a,v,n,i,o){return O(e,r,a,v,n,i,o,E(e,o))}p.exports=h
});var m=f(function(I,j){
var k=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),g=y(),z=q();k(g,"ndarray",z);j.exports=g
});var A=require("path").join,B=require('@stdlib/utils-try-require/dist'),C=require('@stdlib/assert-is-error/dist'),D=m(),c,R=B(A(__dirname,"./native.js"));C(R)?c=D:c=R;module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
