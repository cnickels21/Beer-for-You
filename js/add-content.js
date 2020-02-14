//Wrap related steps into a single function. Be sure you are properly defining the function, calling it, and getting the return value you expect.

function runSubHeader() {
    var drinkBeer = prompt('How many beers do you drink a week?');
    var greeting;
    if (drinkBeer >= 0 && drinkBeer <= 6) {
        greeting = 'Let\'s find the right beer for you!';
    } else if (drinkBeer > 6 && drinkBeer <= 12) {
        greeting = 'Let\'s find you some new beers!';
    } else {
        greeting = 'Everything you need to know about beer!';
    }
    document.write('<h2>' + greeting + '</h2>');
    console.log('My Sub Header', greeting);
}
runSubHeader('How many beers do you drink a week?');

// Lab 7

var beerType = function () {
    var type = prompt('What is your favorite brand of beer?').toLowerCase();
    var suggestion;
    while (type === '') {
        type = prompt('Please enter a domestic, craft, or import.');
    }
    if (type === 'domestic') {
        suggestion = 'Check out our domestic section.';
    }  else if (type === 'craft') {
        suggestion = 'Check out our craft section.';
    }  else if (type === 'import') {
        suggestion = 'Check out our import section.';
    }
    document.write('<h3>' + suggestion + '</h3>');
}
beerType ()





// LAB 08 HERE: Adding validation to user input to ensure only acceptable values are given.
// Add validation on one of the user inputs. Keep asking until an acceptable value is entered.
// Prompt the user for how many things they’d like your shop to make.
// Use a loop in your JavaScript to add items to the page that many times.
// Can functions make your code more readable?

var howMany = function () {
    var count = prompt('How many beers do you want today?');

    while (count === '' || isNaN(count)) {
        count = prompt('Please enter a number.');
    }

    console.log('howMany():', Number(count));
    return Number(count);
}

var getItem = function () {
    var order = prompt('What type of beer do you prefer?').toLowerCase();
    var item;

    while (order !== 'light' && order !== 'dark' && order !== 'amber') {
        order = prompt('Please enter light, dark, or amber.');
    }

    if (order === 'light') {
        item = '<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQD4DuYM5F-_W6iQkWogm-loequKrM120DO1YXAIbt0S42SUUys">';
    } else if (order === 'dark') {
        item = '<img src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0016/3943/brand.gif?itok=bZodMoVq">';
    } else if (order === 'amber') {
        item = '<img src="https://lh3.googleusercontent.com/dSkujTKsEm8c19eUpsu-aAZz0g7HriM6BBxlXuVckQduH8aVuy_V_txAVmkDvF-C-6Yal8WVQSjK2gJvItLQpmNqkWMajw=s300">';
    }

    console.log(item);

    document.write(item);
    return item;
}

var showOrder = function () {
    var item = getItem();
    var total = howMany();
    var result = '';

    for (var i = 0; i < total; i++) {
        result = result + '<p>Model #' + i + ' ' + item + '</p>';
    }

    console.log('showOrder():', result);
    return result;
}

howMany();
getItem();
//showOrder();



function makeDate() {
    var currentDate = new Date();
    var date = currentDate.getDate();
    var month = currentDate.getMonth();
    var year = currentDate.getFullYear();
    var fullDate = month + '/' + date + '/' + year;
    document.write(fullDate);
}
makeDate('fullDate');









// Below this is my original code

// var drinkBeer = prompt('How many beers do you drink a week?');
// var greeting;
// if(drinkBeer >= 0 && drinkBeer <= 6){
//     greeting = 'Let\'s find the right beer for you!';
// } else if(drinkBeer > 6 && drinkBeer <= 12) {
//     greeting = 'Let\'s find you some new beers!';
// } else {
//     greeting = 'Everything you need to know about beer!';
// }
// document.write('<h2>' + greeting + '</h2>');

// var currentDate = new Date();
// var date = currentDate.getDate();
// var month = currentDate.getMonth();
// var year = currentDate.getFullYear();
// var fullDate = month + '/' + date + '/' + year;
// document.write(fullDate);

// function myOverFunction() {
//     document.getElementById("pinky").innerHTML = "<span style='color: pink;'>Home</span>";
// }
