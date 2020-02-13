var drinkBeer = prompt('How many beers do you drink a week?');
var greeting;
if(drinkBeer >= 0 && drinkBeer <= 6){
    greeting = 'Let\'s find the right beer for you!';
} else if(drinkBeer > 6 && drinkBeer <= 12) {
    greeting = 'Let\'s find you some new beers!';
} else {
    greeting = 'Everything you need to know about beer!';
}
document.write(greeting);

var currentDate = new Date();
var date = currentDate.getDate();
var month = currentDate.getMonth();
var year = currentDate.getFullYear();
var fullDate = '      ' 
+ month + '/' + date + '/' + year;
document.write(fullDate);

function myOverFunction() {
    document.getElementById("pinky").innerHTML = "<span style='color: pink;'>Home</span>";
}
