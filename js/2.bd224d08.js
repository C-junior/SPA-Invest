(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"186d":function(a,t,e){a.exports=e.p+"img/invest-icon.2fe24a24.png"},"1d54":function(a,t,e){a.exports=e.p+"img/coin.7efe9873.png"},"8b24":function(a,t,e){"use strict";e.r(t);var s=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"bord"},[e("q-page",{staticClass:"flex flex-center"},[e("div",{staticClass:"disp"},[a.totalcap>=0?e("div",[a._v(" Você terá ao final de "+a._s(a.year)+" meses:")]):a._e(),a.totalcap>=0?e("div",{staticClass:"restotal"},[a._v(" R$ "+a._s(a.totalcap)+" ")]):e("div",{staticClass:"restotal"},[a._v(a._s("R$ 0")+" ")])]),e("div",{staticClass:"divider"}),e("div",{staticClass:"blok"},[e("p",[a._v("\n      Capital inical investido\n    ")]),e("input",{on:{input:function(t){a.capital=parseInt(t.target.value)}}})]),e("div",{staticClass:"blok"},[e("p",[a._v("\n      Valor a ser investido todos os meses\n    ")]),e("input",{on:{input:function(t){a.mes=parseInt(t.target.value)}}})]),e("div",{staticClass:"blok"},[e("div",{staticClass:"btns flex-center"},[e("div",[a._v("Quantidade de meses")])]),e("input",{on:{input:function(t){a.year=parseInt(t.target.value)}}})]),e("div",{staticClass:"blok"},[e("p",[a._v("\n      Qual a taxa de rendimento anual do seu investimento\n    ")]),e("input",{on:{input:function(t){a.rmensal=parseFloat(t.target.value)}}})]),e("img",{staticClass:"coin-bg",attrs:{src:a.img.icon,alt:""}}),e("div",{staticClass:"hide"},[a._v("\n      "+a._s(a.rendimento=a.mes*a.yearm-a.total)+"\n    "+a._s(a.rcap.toFixed(2))+"\n    "+a._s(a.rendpar=a.rcap-a.capital)+"\n      "+a._s(a.cap1=1+a.percent)+"\n      "+a._s(a.cap2=Math.pow(a.cap1,a.yearm))+"\n      "+a._s(a.rcap=a.cap2*a.capital)+"\n      "+a._s(a.mes1=a.mes*a.year)+"\n    "+a._s(a.yearm=a.year)+"\n    "+a._s(a.ranual=a.rmensal/12)+"\n     "+a._s(a.percent=a.ranual/100)+" -- "+a._s(a.tax=1+a.percent)+" --\n     "+a._s(a.r2=Math.pow(a.tax,a.yearm))+" -- "+a._s(a.r3=a.r2-1)+"\n     "+a._s(a.r4=a.mes*a.r3)+"\n     "),e("span",[a._v(" "+a._s(a.res=a.r4/a.percent)+" ")]),a._v("\n     "+a._s(a.total=a.res.toFixed(2))+"\n     "+a._s(a.rescap=a.rcap.toFixed(2))+"\n      "+a._s(a.totalcap=parseInt(a.rescap)+parseInt(a.total))+"\n     ")])])],1)},n=[],i={name:"PageIndex",data(){return{capital:0,rcap:0,totalcap:0,mes:0,year:0,yearm:0,meses:0,rmensal:0,rendimento:0,rendpar:0,ranual:0,rmensalm:0,percent:0,tax:0,res:0,r2:0,r3:0,r4:0,total:0,rescap:0,img:{icon:e("1d54"),logo:e("186d")},active:!0,selected:0}},methods:{function(){this.rescap<=0&&(this.rescap=0)}},mounted(){}},r=i,c=e("2877"),o=e("9989"),p=e("eebe"),l=e.n(p),d=Object(c["a"])(r,s,n,!1,null,null,null);t["default"]=d.exports;l()(d,"components",{QPage:o["a"]})}}]);