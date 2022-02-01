
//parametresi lmayan foksion
// function dikdortgen(){
//     var a=5;
//     var b=15; cevre;
//     cevre=2*(a+b);
//     // document.getElementById("cevre").innerHTML=cevre;
//     return cevre;

// }
// // dikdortgen();
// function yazdir(){
//     document.getElementById("cevre").innerHTML=dikdortgen();

// }
// yazdir();

// function deneme() {
//     var e; r; cevre;
//     e = parseInt(prompt("a gir"));
//     r = parseInt(prompt("b gir"));
//     cevre = e * r;
//     return cevre

// }

// function yazdir(){
//     document.getElementById("dene").innerHTML=deneme();
// }
// yazdir();

// function dikcevre(ukenar, kkenar) {
//     cevre = 2 * (kkenar + ukenar);
//     return cevre;
// }
// dortgen = dikcevre(15, 30);
// document.getElementById("cevre").innerHTML = dortgen;

// function kare(sayi) {
//     var sayikare = sayi * sayi;
//     return sayikare;
// }

// topla=kare(4)+kare(6);
// document.getElementById("dene").innerHTML=topla;

// function kupHesap(sayi){
//     kup=sayi*sayi*sayi;
//     return kup;
    
// }

// kuptopla=kare(4)+kupHesap(2);
// document.getElementById("kup").innerHTML=kuptopla;

function topla(x,y){
    return x+y;
}
var a =topla(2,8);
document.getElementById("top").innerHTML=a;