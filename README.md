# presentation
presentation
var birthday = function() { //uppgift 8 moment 1
    var month = prompt("Vilken månad fyller du år i? 1-12");
    var dag = prompt("Vilken dag fyller du år i? 1-31");

    var selectedMonth = Math.floor(month);

    var selectedDay = Math.floor(dag);

    var time = new Date(selectedMonth, selectedDay);

    var copy = new Date();

    var date = copy.getTime();

    copy.setTime(time.getTime());

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();

    if (dd < 10) {
        dd = '0' + dd;
    }

    if (mm < 10) {
        mm = '0' + mm;
    }

    today = mm + '/' + dd + '/' + yyyy;

    var x = date;

    var ms = x;

    var seconds = ms;

    var minutes = seconds;

    var hours = minutes;

    var days = hours;

    x = ms / 1000;
    seconds = x % 60;
    x /= 60;
    minutes = x % 60;
    x /= 60;
    hours = x % 24;
    x /= 24;
    days = x;






    return date + "\n" + today + "\n" + x;

};
//confirm(birthday());
console.log(birthday());