// Printar ut "Hello world" i consolen. Uppgift 1, moment 1.
console.log("Hello world");

// pop-up ruta som har 2 rader med text, "Rad1" & "Rad2". Uppgift 1, moment 2.
alert("Rad1\nRad2");


//plusar ihop taleno och sen delar skiten med 4 och får ut ett nytt tal. uppgift 2, moment1.
var summa = function(tal1, tal2, tal3, tal4) {
    var summera = (tal1 + tal2 + tal3 + tal4) / 4;
    console.log(summera);
};
summa(5, 6, 4, 2);

// uppgift 2, moment2.
var frukt = function(melon, hallon) {
    var frukttext = melon + ", " + hallon;
    return frukttext;
};
console.log(frukt("Melon", "hallon"));