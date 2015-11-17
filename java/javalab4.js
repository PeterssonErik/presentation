/* uppgift 1 */
console.log("Hello world"); // Printar ut "Hello world" i consolen. Uppgift 1, moment 1.

/* uppgift 1 moment 2 */
alert("Rad1\nRad2"); // pop-up ruta som har 2 rader med text, "Rad1" & "Rad2". Uppgift 1, moment 2.

/* uppgift 2, moment 1 */
var summa = function(tal1, tal2, tal3, tal4) { // variabel, function med parametrar
    var summera = (tal1 + tal2 + tal3 + tal4) / 4; // variabel som säger att tal1, tal2, tal3, tal4 ska adderas ihop till ett tal sen ska svaret delas med 4.
    console.log(summera); //skriver ut i konsolen vad svaret blir
};
summa(5, 6, 4, 2); //kallar på varabeln "summa" och berättar vilket värde tal1, tal2, tal3, tal4 ska ha. 

/* uppgift 2, moment2 */
var frukt = function(frukt1, frukt2) { //variabel, function med parametrar
    console.log(frukt1 + ", " + frukt2); //skriver ut frukt1 + [mellanslag] + frukt2 i konsolen.
};
frukt("Melon", "Hallon"); // ger fruk1 värdet "Melon" och frukt2 värdet "Hallon"

/*gissa talet, uppgift 3, moment1 */
function matte() { //deklarerar hela funktionen, kalla på funktionen så körs koden nedan.
    var computerNumber = Math.round(Math.random() * 99) + 1; //en variabel som genererar ett nummer mellan 0-100, och Math-round avrundar talet så det blir ett tal utan decimaler.
    console.log(computerNumber); //här printar vi ut det numret som genererades.
    var fortsättGissa = false; //om gissningen är fel så körs false vilket loopar så att du får en ny chans att svara rätt tills ditt svar blir rätt.
    var totalGuess = 0; //variabel för antalet försök.


    while (fortsättGissa === false) { //alla svar är false och frågan loopar, enda sättet att få loopen att sluta är att svara rätt helt enkelt, alltså numret som genereras.
        var userGuess = prompt("Gissa på ett nummer mellan 1-100"); //ruta som ber dig gissa svaret
        var userGuessNumber = parseInt(userGuess, 10); //berättar att talet avrundas till närmaste heltal (1-100)
        if (userGuessNumber === computerNumber) { // if sats börjar
            totalGuess += 1; //räknar antalet försök det tog dig att hamna på den här if satsen, alla försök med "totalGuess +=1;" räknas samman när svaret blir correct.
            fortsättGissa = true; //loopen blir nu true av avslutas
            alert("Correct! It took you" + " " + totalGuess + " " + "Tries"); //en alert ruta som säger hur många försök det tog dig
        }
        else if (userGuessNumber < computerNumber) { // else if sats börjar, om din gissning är lägre än det genererade svaret
            alert("Too low!"); //alert ruta som skriver meddelande
            totalGuess += 1; //räknar antalet försök det tog dig att hamna på den här if satsen, alla försök med "totalGuess +=1;" räknas samman när svaret blir correct.
        }
        else if (userGuessNumber > computerNumber) { // else if sats
            alert("Too high!"); //alert ruta som skriver meddelande
            totalGuess += 1; //räknar antalet försök det tog dig att hamna på den här if satsen, alla försök med "totalGuess +=1;" räknas samman när svaret blir correct.
        }
        else { //else sats
            alert("You did not enter a number, please be serious"); //alert ruta som skriver meddelande
            totalGuess += 1; //räknar antalet försök det tog dig att hamna på den här if satsen, alla försök med "totalGuess +=1;" räknas samman när svaret blir correct.
        }
    }
}

/* uppgift 4, moment 1 */
function menu() {
    var nästaRuta = false;
    var x = document.getElementById("Meny");

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
            case 2:
                grader();
                break;
        }
    }
}

/* uppgift 4, moment 2 */
function grader() {
    var cel =0;
    var far =0 * 9 / 5 +32;
    var värde = Math.round(1);
    
    var siffra = prompt("Celsius till Fahrenheit");
    var siffraParsel = parseInt(siffra, 10);
    
    
    
    
}



/*
.value * 9 / 5 + 32;
.value -32) * 5 / 9;
Math.round()
var f = 120;
    var c = 5/9*(f-34);
    var svar = Math.round(1);

var cTemp = celsius;  
    var cToFahr = cTemp * 9 / 5 + 32;  
    var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';  
    console.log(message);
var f = 120;
    var c = 5/9*(f-34);
    var svar = Math.round(1);
    
    var dinSiffra = prompt(f + "är lika med" + c);
    var siffra = parseInt(dinSiffra,10);
* 9 / 5) + 32
*/

var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} console.log("Computer: " + computerChoice);
var compare = function(choice1, choice2) {
if(choice1 === choice2) {
return "The result is a tie!";
}
else if(choice1 === "rock") {   
if(choice2 === "scissors") {
return "rock wins";
}
else {
return "paper wins";
}
} 
else if(choice1 === "paper") {
    if(choice2 === "rock"); {
        return "paper wins";
    }
    else {
        return "scissors wins";
    }
}
}
