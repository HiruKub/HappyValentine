
// let x = 0;
// let words;
// function Starting(){
//     displayRandomWord()
// }
// function HPVT(){
//     switch (x) {
//         case 0:
//             words = "H";
//             break;
//         case 1:
//             words = "a";
//             break;
//         case 2:
//             words = "p";
//             break;
//         case 3:
//             words = "p";
//             break;
//         case 4:
//             words = "y";
//             break;
//         case 5:
//             words = "V";
//             break;
//         case 6:
//             words = "a";
//             break;
//         case 7:
//             words = "l";
//             break;
//         case 8:
//             words = "e";
//             break;
//         case 9:
//             words = "n";
//             break;
//         case 10:
//             words = "t";
//             break;
//         case 11:
//             words = "i";
//             break;
//         case 12:
//             words = "n";
//             break;
//         case 13:
//             words = "e";
//             break;
//     }
    
// }


// function displayRandomWord() {
//     const wordElement = document.getElementById("button1");
//     HPVT();
//     wordElement.textContent = words;
//     const para = document.getElementById("parameter");
//     para.textContent = x + words;
//     const random = RandomNumber();
//     const random2 = RandomNumber2();
//     wordElement.onclick = function() {
//         wordElement.style.opacity = 0;
//         wordElement.style.left = random + "%";
//         wordElement.style.top = random2 + "%";
//         x += 1;
//         setTimeout(() => {
//             wordElement.style.opacity = 100;
//             displayRandomWord();
//         }, 500);

//     if (x > 13) {
//         setTimeout(() => {
//             wordElement.style.opacity = 0;
//         }, 501);
//         wordElement.style.opacity = 0;
//         para.style.opacity = 0;
//         document.getElementById("word").textContent = "Happy Valentine!";
//     }
//     };
// }

// function RandomNumber() {
//     // Generate a random decimal between 0 and 1
//     const randomNumber = Math.random();

//     // Scale the random number to be between 0 and 100
//     const scaledNumber = randomNumber * (80 - 20);

//     // Round down to the nearest integer to get a whole number between 0 and 100
//     const randomInteger = Math.floor(scaledNumber) + 20;

//     return randomInteger;
// }
// function RandomNumber2() {
//     // Generate a random decimal between 0 and 1
//     const randomNumber = Math.random();

//     // Scale the random number to be between 0 and 100
//     const scaledNumber = randomNumber * (80 - 20);

//     // Round down to the nearest integer to get a whole number between 0 and 100
//     const randomInteger = Math.floor(scaledNumber) + 20;

//     return randomInteger;
// }

// var vw = window.innerWidth;
// var vh = window.innerHeight;

// var pad = 6;
// var minWidth = 70;
// var maxWidth = 140;
// var bubbleHeight = 70;
// var elastic = Elastic.easeOut.config(0.3, 0.3);
// var bubbles = [];
let x = 0;
let words;
function Starting(){
    displayRandomWord()
}
function HPVT(){
    switch (x) {
        case 0:
            words = "H";
            break;
        case 1:
            words = "a";
            break;
        case 2:
            words = "p";
            break;
        case 3:
            words = "p";
            break;
        case 4:
            words = "y";
            break;
        case 5:
            words = "V";
            break;
        case 6:
            words = "a";
            break;
        case 7:
            words = "l";
            break;
        case 8:
            words = "e";
            break;
        case 9:
            words = "n";
            break;
        case 10:
            words = "t";
            break;
        case 11:
            words = "i";
            break;
        case 12:
            words = "n";
            break;
        case 13:
            words = "e";
            break;
    }
    
}


function displayRandomWord() {
    const wordElement = document.getElementById("button1");
    HPVT();
    wordElement.textContent = words;
    // const para = document.getElementById("parameter");
    // para.textContent = x + words;
    const random = RandomNumber();
    const random2 = RandomNumber2();
    wordElement.onclick = function() {
        wordElement.style.opacity = 0;
        wordElement.style.left = random + "%";
        wordElement.style.top = random2 + "%";
        x += 1;
        setTimeout(() => {
            wordElement.style.opacity = 100;
            displayRandomWord();
        }, 500);

    if (x > 13) {
          document.body.innerHTML = "Happy Valentine! \n\n  ⢀⣤⣾⣿⣿⣿⣿⣿⣶⣤⡀⢀⣤⣶⣿⣿⣿⣿⣿⣷⣤⡀⠀⠀⠀⠀⠀⠀⠀⠀\n ⣰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣆⠀\n⢠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡄\n⢸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇\n ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀\n ⠘⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀\n  ⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠁⠀⠀\n    ⠙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⠀⠀⠀⠀\n      ⠙⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠋⠀⠀⠀⠀⠀⠀\n        ⠙⢿⣿⣿⣿⣿⣿⣿⡿⠋⠀⠀⠀⠀⠀⠀⠀⠀\n           ⠉⠻⣿⣿⠟⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀\n            ⠈⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"
    }
    };
}

function RandomNumber() {
    // Generate a random decimal between 0 and 1
    const randomNumber = Math.random();

    // Scale the random number to be between 0 and 100
    const scaledNumber = randomNumber * (80 - 20);

    // Round down to the nearest integer to get a whole number between 0 and 100
    const randomInteger = Math.floor(scaledNumber) + 20;

    return randomInteger;
}
function RandomNumber2() {
    // Generate a random decimal between 0 and 1
    const randomNumber = Math.random();

    // Scale the random number to be between 0 and 100
    const scaledNumber = randomNumber * (80 - 20);

    // Round down to the nearest integer to get a whole number between 0 and 100
    const randomInteger = Math.floor(scaledNumber) + 20;

    return randomInteger;
}

// function displayRandomWord(){
//     const wordElement = document.getElementById("button1");
//     const sortWord = HPVT();
//     wordElement.textContent = sortWord;
//     const para = document.getElementById("parameter");
//     para.textContent = x + sortWord;
//     wordElement.onclick = function() {
//         wordElement.style.opacity = 0;
//         x +=1;  
//         setTimeout(() => {
//             wordElement.style.opacity = 100;
//             return x;
//         }, 500);
//         displayRandomWord()

    
//         if (x>13){
//             wordElement.style.opacity = 0;
//             document.body.innerHTML = "Happy Valentine!";
//         };
        
        
//     };
// }



// let words;
// switch (words) {
//     case 1
//         words = "H";
//         break;
//     }
//     else if (x=2){
//         words = "a";
//         return words
//     }
//     else if (x=3){
//         words = "p";
//         return words
//     }
//     else if (x=4){
//         words = "p";
//         return words
//     }
//     else if (x=5){
//         words = "y";
//         return words
//     }
//     else if (x=6){
//         words = "V";
//         return words
//     }
//     else if (x=7){
//         words = "a";
//         return words
//     }
//     else if (x=8){
//         words = "l";
//         return words
//     }
//     else if (x=9){
//         words = "e";
//         return words
//     }
//     else if (x=10){
//         words = "n";
//         return words
//     }
//     else if (x=11){
//         words = "t";
//         return words
//     }
//     else if (x=12){
//         words = "i";
//         return words
//     }
//     else if (x=13){
//         words = "n";
//         return words
//     }
//     else if (x=14){
//         words = "e";
//         return words
//     }
//     else {
//         words = ""
//         return words
//     }
    