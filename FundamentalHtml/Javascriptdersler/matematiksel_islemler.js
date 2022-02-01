var a = 40, b = 7, islem ,ad="bilişim";
//Arttırma işlemi
islem = a + b;
document.writeln("\n" + islem + " toplama <br> ");

//Eksiltme işlemi
islem = a - b;
document.writeln("\n" + islem + " çıkartma <br> ");

//Çarpma işlemı
islem = a * b;
document.writeln(islem + " çarpma <br> ");


//Bölme işlemi
islem = a / b;
document.writeln(islem + " bölme <br> ");

//Kalan bulma Modunu alma
islem = a % b;
document.writeln(islem + " Modunu alma <br> ");


a = a + 20;
document.writeln(a + " a degerin arttirme <br> ");

a += 30;
document.writeln(a + " a degerin arttirme kısa yol <br> ");

a -= 10;
document.writeln(a + " a degerin eksilte <br> ");

a *= b;
document.writeln(a + " a çarpma atama <br>");

a /= b;
document.writeln(a + " a bölme atama <br>");

a++;
document.writeln(a + " a degerini 1 arttir <br>");

++a;
document.writeln(a + " a öncelikli atama  arttırma <br> ");

a--;
document.writeln(a + " a degerini 1 eksiltme <br>");

--a;
document.writeln(a + " a öncelikli atama  eksiltme <br> ");

b = --a;
document.writeln(a + " a degeri" + " b " + b + " degeri <br>  ");

b = ++a;
document.writeln(a + " a degeri" + " b " + b + " degeri <br> ");

b = a++;
document.writeln(a + " a degeri" + " b " + b + " degeri önceden arttirma <br> ");

b = --a;
document.writeln(a + " a degeri" + " b " + b + " degeri önceden eksiltme <br> ");

islem = --a + b--;
document.writeln(islem + " işlem degeri  " + a + " a degeri" + " b " + b + " degeri <br> ");

islem = a == b;// dogru ise ture yalniş ise false;
document.writeln(islem + "<br>");
islem = a < b;
document.writeln(islem + "<br>");
islem = a > b;
document.writeln(islem + "<br>");
b++;
islem = a >= b;
document.writeln(islem + "<br>");
islem=a+ad;
document.writeln(islem + "<br>");














