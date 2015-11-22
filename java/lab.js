console.log("Hello world"); // uppgift 1 moment 1

// alert("rad1\nrad2"); //uppgift 1 moment 2

var medelTal = function(tal1, tal2, tal3, tal4) { //uppgift 2 moment 1
    tal1 = 4;
    tal2 = 5;
    tal3 = 1;
    tal4 = 2;
    return ((tal1 + tal2 + tal3 + tal4) / 4);
};
console.log(medelTal());

var printOut = function(argument1, argument2) { //uppgift 2 moment 2
    argument1 = "hej";
    argument2 = "på dig";
    return ((argument1) + " , " + (argument2));
};
console.log(printOut());


function matte() { //uppgift 3 moment 1
    var computerNumber = Math.round(Math.random() * 101) + 1;
    console.log(computerNumber);
    var fortsättGissa = false;
    var totalGuess = 0;

    while (fortsättGissa === false) {
        var userGuess = prompt("Gissa på ett nummer mellan 1-100");
        var userGuessNumber = parseInt(userGuess, 10);
        if (userGuessNumber === computerNumber) {
            totalGuess += 1;
            fortsättGissa = true;
            alert("Correct! It took you" + " " + totalGuess + " " + "Tries");
        }
        else if (userGuessNumber < computerNumber) {
            alert("Too low!");
            totalGuess += 1;
        }
        else if (userGuessNumber > computerNumber) {
            alert("Too high!");
            totalGuess += 1;
        }
        else { //else sats
            alert("You did not enter a number, please be serious");
            totalGuess += 1;
        }
    }
}
//confirm(matte());

var F = function() { // uppgift 4 moment 2 fahrenheit
    var avsluta = false;
    var Fahrenheit = prompt("Fahrenheit?");
    var convertFToC = (Fahrenheit - 32) * 5 / 9;
    while (avsluta === false) {
        avsluta = true;
        alert(Fahrenheit + " Fahrenheit " + "equals to " + convertFToC + " Celsius.");
    }
};

var C = function() { // uppgift 4 moment 2 celsius
    var exit = false;
    var Celsius = prompt("Celsius");
    var convertCToF = Celsius * 9 / 5 + 32;
    while (exit === false) {
        alert(convertCToF);
        exit = true;
    }
};

function menu() { // uppgift 4, moment 1 + 3
    var nästaRuta = false;
    while (nästaRuta === false) {
        var ruta = prompt("0. Exit\n\n1. Fahrenheit to Celsius\n2. Celsius to Fahrenheit\n3. Guess my number");
        var userNumber = parseInt(ruta, 10);
        switch (userNumber) {
            case 3:
                matte();
                break;
        }
        switch (userNumber) {
            case 0:
                (nästaRuta(true));
                break;
        }
        switch (userNumber) {
            case 1:
                F();
                break;
        }
        switch (userNumber) {
            case 2:
                C();
                break;
        }
    }
}
//confirm(menu());

var konvertera = function(string) { // uppgift 5 moment 1 + 2
    string = "javascript är Allvarligt kul";
    var str = string.replace(/a|A/g, "#");

    return str;
};
console.log(konvertera());


var triangel = function() {

    var aChoice = prompt("Längden på sida a?");
    var bChoice = prompt("Längden på sida b?");

    var cAnswer = Math.sqrt((aChoice * aChoice) + (bChoice * bChoice));

    return cAnswer;

};
console.log(triangel());


var tentamen = function() { // uppgift 7 moment 1, 2, 3
    var calcArray = [11, 21, 3, 14, 5, 16, 17];
    var average = 0;

    for (var i = 0; i < calcArray.length; i++) {
        average += calcArray[i];
    }
    var aver = average / calcArray.length;
    var nu = Math.floor(aver);


    var largest = 0;
    for (var j = 0; j < calcArray.length; j++) {
        if (calcArray[j] > largest) {
            largest = calcArray[j];
        }
    }

    var min = Math.min.apply(null, calcArray);

    return [nu, largest, min];
};
console.log(tentamen());


var birthday = function() { // uppgift 8 moment 1 2 3
    var month = prompt("Vilken månad fyller du år i? 1-12");
    var day = prompt("Vilken dag fyller du år i? 1-31");

    var myBirthday, today, bday, diff, days;
    myBirthday = [day, month]; // 6th of February
    today = new Date();
    bday = new Date(today.getFullYear(), myBirthday[1] - 1, myBirthday[0]);
    if (today.getTime() > bday.getTime()) {
        bday.setFullYear(bday.getFullYear() + 1);
    }
    diff = bday.getTime() - today.getTime();
    days = Math.floor(diff / (1000 * 60 * 60 * 24));
    alert(days + " dagar tills nästa födelsedag");

    return (days + " dagar tills nästa födelsedag");
};
console.log(birthday());

var generateTable = function() {
    var table = document.createElement('table');

    var th = document.createElement('th');
    var th1 = document.createTextNode('Förnamn:');
    var th2 = document.createTextNode('Efternamn:');
    var th3 = document.createTextNode('Telefon:');

    var tr = document.createElement('tr');

    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');

    var text1 = document.createTextNode('Text1');
    var text2 = document.createTextNode('Text2');
    var text3 = document.createTextNode('Text3');

    
    
    
    th1.appendChild(tr);
    th2.appendChild(tr);
    th3.appendChild(tr);
    td1.appendChild(text1);
    td2.appendChild(text2);
    td3.appendChild(text3);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);

    table.appendChild(th);
    table.appendChild(th1);
    table.appendChild(th2);
    table.appendChild(th3);

    document.body.appendChild(table);

};
document.write(generateTable());