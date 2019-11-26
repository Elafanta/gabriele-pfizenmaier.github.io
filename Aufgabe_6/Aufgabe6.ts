var a:string = "Die Emission von ";
var b:string = "ist ";
var c:string = "kg CO2. Relativ zur Gesamtemission der Welt verursacht ";
var d:string = "damit ";
var e:string = "%. Für ";
var f:string = "hat sich 2018 im Vergleich zu 2008 die Emission um ";
var g:string = "% verändert. 2018 im Vergleich zu 2008 sind das ";
var h:string = "kg CO2.";

var afrika:string = "Afrika ";
var südamerika:string = "Süd Amerika ";
var europa:string = "Europa ";
var nordamerika:string = "Nord Amerika ";
var asien:string = "Asien ";
var australien:string = "Australien ";

var afrika08:number = 1028;
var südamerika08:number = 1132.6;
var europa08:number = 4965.7;
var nordamerika08:number = 6600.4;
var asien08:number = 12954.7;
var australien08:number = 1993;

var afrika18:number = 1235.5;
var südamerika18:number = 1261.5;
var europa18:number = 4209.3;
var nordamerika18:number = 6035.6;
var asien18:number = 16274.1;
var australien18:number = 2100.5;

var gesamt08:number = afrika08+südamerika08+europa08+nordamerika08+asien08+australien08
var gesamt18:number = afrika18+südamerika18+europa18+nordamerika18+asien18+australien18


var afr1: number = (afrika18/gesamt18)*100;
var afr2:number = ((afrika08/afrika18)*100);    
var afr3:number = 100-afr2;
var afr4:number = afrika18-afrika08;

console.log(a+afrika+b+afrika18+c+afrika+d+afr1+e+afrika+f+afr3+g+afr4+h);


var sa1: number = (südamerika18/gesamt18)*100;
var sa2: number = ((südamerika08/südamerika18)*100);
var sa3: number = 100-sa2;
var sa4: number = südamerika18-südamerika08;

console.log(a+südamerika+b+südamerika18+c+südamerika+d+sa1+e+südamerika+f+sa3+g+sa4+h)


var eu1: number = (europa18/gesamt18)*100;
var eu2: number = (europa08/europa18)*100;
var eu3: number = 100-eu2;
var eu4: number = europa18-europa08;

console.log(a+europa+b+europa18+c+europa+d+eu1+e+europa+f+eu3+g+eu4+h)


var na1: number = (nordamerika18/gesamt18)*100;
var na2: number = (nordamerika08/nordamerika18)*100;
var na3: number = 100-na2;
var na4: number = nordamerika18-nordamerika08;

console.log(a+nordamerika+b+nordamerika18+c+nordamerika+d+na1+e+nordamerika+f+na3+g+na4+h)


var as1: number = (asien18/gesamt18)*100;
var as2: number = (asien08/asien18)*100;
var as3: number = 100-as2;
var as4: number = asien18-asien08;

console.log(a+asien+b+asien18+c+asien+d+as1+e+asien+f+as3+g+as4+h)


var au1: number = (australien18/gesamt18)*100;
var au2: number = (australien08/australien18)*100;
var au3: number = 100-au2;
var au4: number = australien18-australien08;

console.log(a+australien+b+australien18+c+australien+d+au1+e+australien+f+au3+g+au4+h)


function europe(){
    document.querySelector("#title").innerHTML = "Carbon Dioxide Emissions in Europe";
    document.querySelector("#text1").innerHTML = "Emission absolute of Europe in 2018";
    document.querySelector("#zahl1").innerHTML = "" + eu1;
    document.querySelector("#zahl2").innerHTML = "" + eu2;
    document.querySelector("#zahl3").innerHTML = "" + eu3;
    document.querySelector("#zahl4").innerHTML = "" + eu4;
    document.querySelector(".chart").setAttribute('style', 'height:' + eu2 + '%');
}
}
window.addEventListener('load', function () {
    document.querySelector('#Europe').addEventListener('click', function europe);
});


------------------------------------

