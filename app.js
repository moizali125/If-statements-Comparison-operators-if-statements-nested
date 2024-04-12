document.write("<br>");
document.write("<h3>Question no 01</h3>");
document.write("<br>");
document.write("<h4>Result :</h4>");
document.write("<br>");
document.write('<button id="btn" onclick="checkCharacterType() ">Click Me</button>');
document.write("<br>");
document.write("<br>");
function checkCharacterType(character) {
    let cityName = prompt("Enter the name of the city:");
    if (cityName.toLowerCase() === "karachi") {
        console.log("Welcome to the city of lights!");
        alert("Welcome to the city of lights!");
    } else if (cityName.toLowerCase() === "lahore") {
        console.log("the capital of the Pakistani province of Punjab and the second largest city in the country!");
        alert("the capital of the Pakistani province of Punjab and the second largest city in the country!");

    } else {
        console.log("Welcome to " + cityName + "!");
        alert("Welcome to " + cityName + "!");
    }
}

document.write("<h3>Question no 02</h3>");
document.write("<br>");
document.write("<h4>Result :</h4>");
document.write("<br>");
document.write('<button id="btn" onclick="displayLarger();">Click Me</button>');
function displayLarger() {
    var gender = prompt("Enter the Gender :");
    if (gender.toLowerCase() === 'male') {
        alert('Good Morning Sir!');
        console.log('Good Morning Sir!');
    } else if (gender.toLowerCase() === 'female') {
        alert('Good Morning Ma’am!');
        console.log('Good Morning Ma’am!');
    } else {
        alert('this is no gender')
        console.log('this is no gender')
    }
}
document.write("<br>");
document.write("<br>");

document.write("<h3>Question no 03</h3>");
document.write("<br>");
document.write("<h4>Result :</h4>");
document.write("<br>");
document.write('<button id="btn" onclick="moiza()">Click Me</button>');
// Prompt the user to enter a number
function moiza() {
    //color of road traffic signal 
    var signal = prompt("Enter the color of road traffic signal:");
    if (signal.toLowerCase() === 'red') {
        alert('Must Stop!');
        console.log('Must Stop!');
    } else if (signal.toLowerCase() === 'yellow') {
        alert('Ready to move!');
        console.log('Ready to move!');
    } else if (signal.toLowerCase() === 'green') {//Move now
        alert('Move now!');
        console.log('Move now!');

    } else {
        alert('this is no colour')
        console.log('this is no colour')
    }
}
document.write("<br>");
document.write("<br>");

//question no 4

document.write("<h3>Question no 04</h3>");
document.write("<br>");
document.write("<h4>Result :</h4>");
document.write("<br>");
document.write('<button id="btn" onclick="ques4()">Click Me</button>');
function ques4() {
    let remainingFuel = parseFloat(prompt("Enter the remaining fuel in your car (in liters):"));

    // Checking if the remaining fuel is less than 0.25 liters
    if (remainingFuel < 0.25) {
        console.log("Please refill the fuel in your car.");
        alert("Please refill the fuel in your car.");
    } else {
        console.log("Your fuel level is sufficient.");
        alert("Your fuel level is sufficient.");
    }
};
document.write("<br>");
document.write("<br>");
//question no 5
document.write("<h3>Question no 05</h3>");
document.write("<br>");
document.write("<h4>Result :</h4>");
document.write("<br>");
document.write('<button id="btn" onclick="ques5()">Click Me</button>');
function ques5() {
    // Script

    var a = 4;
    if (++a === 5) {
        console.log("a. given condition for variable a is true");
    }

    var b = 82;
    if (b++ === 83) {
        console.log("b. given condition for variable b is true");
    }

    var c = 12;
    if (c++ === 13) {
        console.log("c. condition 1 is true");
    }
    if (c === 13) {
        console.log("c. condition 2 is true");
    }
    if (++c < 14) {
        console.log("c. condition 3 is true");
    }
    if (c === 14) {
        console.log("c. condition 4 is true");
    }

    var materialCost = 20000;
    var laborCost = 2000;
    var totalCost = materialCost + laborCost;
    if (totalCost === laborCost + materialCost) {
        console.log("d. The cost equals");
    }

    if (true) {
        console.log("e. True");
    }
    if (false) {
        console.log("e. False");
    }

    if ("car" < "cat") {
        console.log("f. car is smaller than cat");
    }
    var per = document.getElementById("pere");
    per.innerHTML = '<br> <ol><li>a. given condition for variable a is true</li><li>c. condition 2 is true</li><li>c. condition 4 is true</li><li>d. The cost equals</li><li>e. True</li><li>f. car is smaller than cat</li></ol><br>';
}

document.write('<div id="pere"></div>')
document.write("<br>");
document.write("<br>");

//question no 6

document.write("<h3>Question no 06</h3>");
document.write("<br>");
document.write("<h3>Generator MarkSheet</h3>");
document.write("<br>");
document.write("<h4>Result :</h4>");
document.write("<br>");
document.write('<button id="btn" onclick="calculateGrade()"">Click Me</button>');
function calculateGrade() {
    // Get input values from user using prompts
    var subject1Marks = parseFloat(prompt("Enter marks obtained in subject 1:"));
    var subject2Marks = parseFloat(prompt("Enter marks obtained in subject 2:"));
    var subject3Marks = parseFloat(prompt("Enter marks obtained in subject 3:"));
    var totalMarks = parseFloat(prompt("Enter total marks:"));

    // Calculate percentage
    var totalObtainedMarks = subject1Marks + subject2Marks + subject3Marks;
    var percentage = (totalObtainedMarks / totalMarks) * 100;

    // Calculate grade
    var grade;
    if (percentage >= 90) {
        grade = 'A+';
    } else if (percentage >= 80) {
        grade = 'A-One';
    } else if (percentage >= 70) {
        grade = 'A';
    } else if (percentage >= 60) {
        grade = 'B';
    } else if (percentage >= 50) {
        grade = 'c';
    } else if (percentage >= 40) {
        grade = 'D';
    } else {
        grade = 'Fail';
    }
    //Remarks
    var Remarks;
    if (percentage >= 90) {
        Remarks = 'Wonderful';
    } else if (percentage >= 80) {
        Remarks = 'Excellent';
    } else if (percentage >= 70) {
        Remarks = 'Very Good';
    } else if (percentage >= 60) {
        Remarks = 'Good';
    } else if (percentage >= 50) {
        Remarks = 'Fair';
    } else if (percentage >= 40) {
        Remarks = 'Bad';
    } else {
        Remarks = 'You Need To Improve';
    }
    // Display result
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = '<br><h4>MarkSheet</h4><br>' + "Percentage: " + percentage.toFixed(2) + "%<br>Grade: " + grade + '<br>Total Marks :' + totalMarks + '<br>Obtain Marks :' + totalObtainedMarks + '<br>Remarks :' + Remarks;
}
document.write('<div id="result"></div>')
document.write("<br>");
document.write("<br>");


//question no 7

document.write("<h3>Question no 07</h3>");
document.write("<br>");
document.write("<h4>Result :</h4>");
document.write("<br>");
document.write('<button id="btn" onclick="ques7()">Click Me</button>');
function ques7() {
    var secretNumber = Math.floor(Math.random() * 10) + 1;
    var userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));
    if (userGuess === secretNumber) {
        console.log("Bingo! Correct answer");
        alert("Bingo! Correct answer");
    } else if (userGuess + 1 === secretNumber || userGuess - 1 === secretNumber) {
        console.log("Close enough to the correct answer");
        alert("Close enough to the correct answer");
    } else {
        console.log("Sorry, incorrect guess. The secret number was " + secretNumber);
        alert("Sorry, incorrect guess. The secret number was " + secretNumber);
    }

}
document.write("<br>");
document.write("<br>");


//question no 8

document.write("<h3>Question no 08</h3>");
document.write("<br>");
document.write("<h4>Result :</h4>");
document.write("<br>");
document.write('<button id="btn" onclick="ques8()">Click Me</button>');
function ques8() {
    var number = parseInt(prompt("Enter a number:"));
    if (number % 3 === 0) {
        console.log(number + " is divisible by 3.");
        alert(number + " is divisible by 3.");
    } else {
        console.log(number + " is not divisible by 3.");
        alert(number + " is not divisible by 3.");
    }
}
document.write("<br>");
document.write("<br>");

//question no 9

document.write("<h3>Question no 09</h3>");
document.write("<br>");
document.write("<h4>Result :</h4>");
document.write("<br>");
document.write('<button id="btn" onclick="ques9()">Click Me</button>');
function ques9() {
    var oddeven = parseInt(prompt("Enter a number:"));
    if (oddeven % 2 === 0) {
        console.log(oddeven + " is an even number.");
        alert(oddeven + " is an even number.");
    } else {
        console.log(oddeven + " is an odd number.");
        alert(oddeven + " is an odd number.");
    }

}
document.write("<br>");
document.write("<br>");

//question no 10

document.write("<h3>Question no 10</h3>");
document.write("<br>");
document.write("<h4>Result :</h4>");
document.write("<br>");
document.write('<button id="btn" onclick="ques10()">Click Me</button>');
function ques10() {
    var tempratu = parseInt(prompt("Enter a wether temprature"));
    if (tempratu >= 40) {
        console.log('It is too hot outside!');
        alert('It is too hot outside!');
    } else if (tempratu >= 30) {
        console.log('The Weather today is Normal!');
        alert('The Weather today is Normal!');
    } else if (tempratu >= 20) {
        console.log('Today’s Weather is cool!');
        alert('Today’s Weather is cool!');
    } else if (tempratu >= 10) {
        console.log('OMG! Today’s weather is so Cool!');
        alert('OMG! Today’s weather is so Cool!');
    } else if (tempratu >= 50) {
        onsole.log('Tempratureis very high! ');
        alert('Temprature is very high!');
    } else {
        console.log('Please Put the Temprature! ');
        alert(' Please Put the Temprature!');
    }
}
document.write("<br>");
document.write("<br>");

//question no 11

document.write("<h3>Question no 11</h3>");
document.write("<br>");
document.write("<h4>Result :</h4>");
document.write("<br>");
document.write('<button id="btn" onclick="ques11()">Click Me</button>');
function ques11() {
    var firstnum = parseInt(prompt("Enter a first number:"));
    var secondnum = parseInt(prompt("Enter a second number:"));
    var thirednum = prompt("Enter a Operation (+, -, *, /, %):");
    if (thirednum === "+") {
        console.log(firstnum + secondnum);
        alert(firstnum + secondnum);
    } else if (thirednum === "-") {
        console.log(firstnum - secondnum);
        alert(firstnum - secondnum);
    } else if (thirednum === "/") {
        console.log(firstnum / secondnum);
        alert(firstnum / secondnum);
    } else if (thirednum === "*") {
        console.log(firstnum * secondnum);
        alert(firstnum * secondnum);
    } else if (thirednum === "%") {
        console.log(firstnum % secondnum);
        alert(firstnum % secondnum);
    } else {
        console.log(oddeven + " is an odd number.");
        alert(oddeven + " is an odd number.");
    }

}
document.write("<br>");
document.write("<br>");

document.write('<div style="color: blue;background-color: black;"><br><h1>Best OF luck<span style="font-size:50px;">👋</span></h1><br></div>')//&#128075
