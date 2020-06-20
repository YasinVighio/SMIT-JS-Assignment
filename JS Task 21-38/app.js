/**
===========================================CHAPTER 21-25===========================================


        **************TASK 1**************


var firstName = prompt("Enter your first name");
var lastName = prompt("Enter your last name");
var fullName = firstName + " " + lastName;
alert("Welcome to the website "+fullName);



        **************TASK 2**************


var favPhone = prompt("Enter you favourite mobile phone");
document.writeln("My favorite phone is: " + favPhone + "<br> Length of string: " + favPhone.length);


        **************TASK 3**************


 var nationality = "Pakistani";
 var pos=nationality.indexOf("n");
 document.writeln("String: "+nationality);
 document.writeln("<br> Index of \"n\" is "+ pos);


         **************TASK 4**************


var string = "Hello World";
var lastIndex = string.lastIndexOf("l");
document.writeln("String: "+string);
document.writeln("<br> Index of \"n\" is "+ lastIndex);


         **************TASK 5**************


var nationality = "Pakistani";
var char = nationality.charAt(3);
document.writeln("String: "+nationality);
document.writeln("<br> Character at Index 3 is "+ char);


         **************TASK 6**************


var firstName = prompt("Enter your first name");
var lastName = prompt("Enter your last name");
var fullName = firstName.concat(" " + lastName);
alert("Welcome to the website "+fullName);


         **************TASK 7**************


var city = "Hyderabad";
var city2 = city.replace("Hyder", "Islam");
document.writeln("City: "+city);
document.writeln("<br> After replacement: " +city2);


         **************TASK 8**************


var message = "Ali and Sami are best friends. They play cricket and football together.";
var newMessage = message.replace(/and/g, "&");
document.writeln("Message: "+message);
document.writeln("<br>New Message: " +newMessage);


         **************TASK 9**************


 var numString = "472"
 var type1 =  typeof(numString);
 var num = Number(numString);
 var type2 = typeof(num);

 document.writeln("Value: " + numString + "<br>");
 document.writeln("Type: " + type1 + "<br>"); 
 document.writeln("Value: " + num + "<br>");
 document.writeln("Type: " + type2 + "<br>");



          *************TASK 10**************


 var userInput = prompt("Enter any string: ");
 var upperCase = userInput.toUpperCase();
 document.writeln("User Input: " +userInput);
 document.writeln("<br> Uppercase: " +upperCase);



          *************TASK 11**************


var userInput = prompt("Enter any string: ");
var titleCase = userInput.charAt(0);
titleCase = titleCase.toUpperCase() + userInput.slice(1);
document.writeln("User Input: " +userInput);
document.writeln("<br> Title Case: " +titleCase);



          *************TASK 12**************


var num = 35.36 ;
var string = num.toString();
var pos = string.indexOf(".")
var sub1 = string.substring(0, pos);
var sub2 = string.substring(pos+1);
var string = sub1.concat(sub2);
document.writeln("Number: "+num);
document.writeln("<br> Result: " +string);



          *************TASK 13**************


var userName = prompt("Enter username: ");
if(userName.includes("@") || userName.includes(".") || userName.includes(",") || userName.includes("!"))
alert("Please enter a valid username");
else
alert("Username valid");


          *************TASK 14**************


A = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput =  prompt("Enter item you want");
userInput = userInput.toLowerCase();
var index =  A.indexOf(userInput);
if(index>-1)
document.writeln("<b> " + userInput + " </b> is available at index " +index + " in our bakery");
else
document.writeln("We are sorry <b> " + userInput " </b> is not available in our bakery");


          *************TASK 15**************


var password =  prompt("Enter your password");
var passLength = password.length;
document.writeln("Entered Password: " + password + "<br>");
var validPass=false;


if(password.includes("0") || password.includes("1") || password.includes("2") || password.includes("3")
  || password.includes("4") || password.includes("5") || password.includes("6") || password.includes("7")
  || password.includes("8") || password.includes("9"))
{

        if(Number.isNaN(Number(password[0])))
                validPass = true;
        else 
                document.writeln("Password can not start with a number <br> ");                

}
    
else
        document.writeln("Password does not contain numbers, its not valid <br> ");

if(passLength<6)
        {
                validPass=false;
                document.writeln("Password length can not be less than 6 <br> ");
        }

if(validPass == true)
        document.writeln("Password is valid");
else
        document.writeln("Please Enter a valid password <br> ");



          *************TASK 16**************



var university = "University of Karachi";
var arr = university.split(" ");

for(var i = 0; i<arr.length; i++)
{
        for(var j=0; j<arr[i].length; j++)
                document.writeln(arr[i][j] + "<br>");
        document.writeln("<br><br>");
}


          *************TASK 17**************


var userInput = prompt("Enter something");
document.writeln("User Input: " +userInput + "<br>");
document.writeln("Last character of input: " + userInput.charAt(userInput.length-1));



          *************TASK 18**************



var text="The quick brown fox jumps over the lazy dog";
text=text.toLowerCase();
var newText=text.split(" ");
var count = 0;
for(var i=0; i<newText.length; i++)
{
        if(newText[i]=="the")
        count++;
}
document.writeln("Text: " +text + "<br>");
document.writeln("There are " + count + " occurence(s) of word \"the\" ");



===========================================CHAPTER 26-30===========================================



          *************TASK 1**************


var posInt = prompt("Enter a positive integer");
 
if(posInt.includes("-"))
alert("Please enter postive integer");
else
{
        document.writeln("User Input: " +posInt + "<br>");
        var num = Number(posInt);
        document.writeln("Number: " +num + "<br>");
        var roundOff =  Math.round(posInt);
        document.writeln("Round Off Value: " +roundOff + "<br>");
        var floor =  Math.floor(posInt);
        document.writeln("Floor Value: " +floor + "<br>");
        var ceil =  Math.ceil(posInt);
        document.writeln("Ciel Value: " +ceil + "<br>");
        
}


          *************TASK 2**************


var userInput = prompt("Enter a negative float number");
 
if(userInput.charAt(0) == "-" && userInput.includes("."))
{
        document.writeln("User Input: " +userInput + "<br>");
        var num = Number(userInput);
        document.writeln("Number: " +num + "<br>");
        var roundOff =  Math.round(userInput);
        document.writeln("Round Off Value: " +roundOff + "<br>");
        var floor =  Math.floor(userInput);
        document.writeln("Floor Value: " +floor + "<br>");
        var ceil =  Math.ceil(userInput);
        document.writeln("Ciel Value: " +ceil + "<br>");
        
}

else
        alert("Please enter negative floating point number");

        
          *************TASK 3**************


var userInput = Number(prompt("Enter any number"));
var absolute = Math.abs(userInput);
document.writeln("User Input: " + userInput + "<br>");
document.writeln("Absolute: " +absolute);



          *************TASK 4**************


document.writeln("Random dice value: " + (Math.floor(Math.random()*7)+1));



          *************TASK 5**************


 var coin = (Math.floor(Math.random()*3)+1);

 if(coin==1)
 document.writeln("1 <br> Random coin value: Heads");
 else
 document.writeln("2 <br> Random coin value: Tails");



           *************TASK 6**************


document.writeln("Random number between 1 to 100 value: " + (Math.floor(Math.random()*101)+1));



           *************TASK 7**************


var weight = prompt("Enter your weight: ");

weight =  weight.toLowerCase();

var pos = weight.indexOf("k");

if(pos != -1)
var userWeight = Number(weight.slice(0, pos));
else
var userWeight = Number(weight);

document.writeln("The weight of user is " + userWeight + " kilograms");
 


           *************TASK 8**************


var secretNum =  Math.floor((Math.random()*10 + 1));
var userInput = Number(prompt("Enter a number between 1 to 10"));

if(userInput == secretNum)
alert("Congratulations! You guessed number right");
else
alert("Try again");



===========================================CHAPTER 31-34===========================================


           *************TASK 1**************


var date = new Date();
document.writeln(date);


           *************TASK 2**************


var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September",
"October", "November", "December"];
var date = new Date();
var month = date.getMonth();
document.writeln("Current Month: " +months[month]);



           *************TASK 3**************

           
var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

var date = new Date();
var day = date.getDay();
document.writeln("Today is " +days[day-1].slice(0, 3));



           *************TASK 4**************


var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

var date = new Date();
var day = date.getDay();
if(day==0 || day==6)
document.writeln("Its funday today");
else
document.writeln("Today is " +days[day-1]);



           *************TASK 5**************


var date = new Date();
var today =  date.getDate();
if(today<15)
{
        document.writeln("First fifiteen days of the month");
}
else
document.writeln("Last days of the month");



           *************TASK 6**************


var date = new Date();
var ms = date.getTime();
var minutes = (ms/1000)/60;
document.writeln("Current date: " +date + "<br>");
document.writeln("Elapsed miliseconds since January 1, 1970 " +ms + "<br>");
document.writeln("Elapsed miliseconds since January 1, 1970: " +minutes);



           *************TASK 7**************


var date = new Date();
var time =  date.getHours();
if(time<12)
document.writeln("Its AM");
else
document.writeln("Its PM");



           *************TASK 8**************


var laterDate = new Date("Thu Dec 31 2020 00:00:00  GMT +5:00 (PKT)");
document.writeln(laterDate);



           *************TASK 9**************



var ramadan = new Date("June 18 2015");
var today = new Date();
var days = ((today.getTime()) - (ramadan.getTime())) / (1000 * 3600 * 24);
document.writeln(parseInt(days) + " days have passed since 1<sup>st</sup> Ramadan, 2015");



           *************TASK 10**************


var date1 = new Date("Jan 1 2015 00:00:00 (PKT)");
var date2 = new Date("Dec 5 2015 22:50:16 (PKT)");

var secsElapsed = (date2.getTime() - date1.getTime()) / 1000;
document.writeln(secsElapsed + " seconds had passed from " + date2 + " since beginning of 2015");



           *************TASK 11**************


var date1 = new Date();
date1.setHours(date1.getHours()-1);
var date = new Date();
document.writeln("Current date " + date + "<br>");
document.writeln("1 hour ago it was " + date1 + "<br>");



           *************TASK 12**************


var year1 = new Date();
year1.setFullYear(year1.getFullYear()-100);
var date = new Date();
alert("Current date: " + date);
alert("100 year back it was " + year1);



           *************TASK 13**************


var age = prompt("Enter your age");
var birthyear =  (new Date().getFullYear())-age;
document.writeln("You age: " +age+ "<br>");
document.writeln("Your birthyear: "+ birthyear);



           *************TASK 14**************



var dueDate = new Date("6/25/2020");
var currDate = new Date();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September",
"October", "November", "December"];
var units = 450;
var unitCharges=16;
var latePay = 400;
var amount = units*unitCharges;
var grossAmount = amount + latePay;

document.writeln("<strong style=\"font-size: 25px;\"> K-Electric Bill </strong> <br> <br> <br>");

document.writeln("Customer Name: <b> Yasin </b> <br>");

document.writeln("Month: <b> " + months[currDate.getMonth()] + "</b> <br>");

document.writeln("Number of units: <b> " + units + " </b> <br>");

document.writeln("Charges per unit: <b>" +unitCharges+ " </b><br><br>")

if(dueDate>currDate)
document.writeln("Net amount payable (within due date): <b> "+amount+ " </b> <br>");
else
document.writeln("Net amount payable (within due date): <b> "+grossAmount+ " (Due Date Expired) </b> <br>");

document.writeln("Late Payment Surcharge: <b> " + latePay + "</b><br>");

document.writeln("Gross Amount Payable (after due date) <b> " + grossAmount + " <b>");



===========================================CHAPTER 35-38===========================================


        **************TASK 1**************


function datetTimeNow()
{
       let date = new Date();
       document.writeln(date);
}
datetTimeNow();


        **************TASK 2**************


function greetUser()
{
        var fname = prompt("Enter your first name");
        var lname = prompt("Enter your last name");
        var fullame = fname + " " + lname;
        alert("Welcome to the website " +fullame);
}

greetUser();


        **************TASK 3**************


function sum(num1, num2)
{
        var summed = num1 + num2;
        return summed;
}

alert("Sum is " + sum(Number(prompt("Enter number 1")), Number(prompt("Enter number 2"))));



        **************TASK 4**************


function calculator(num1, num2, op)
{
        num1 = Number(num1);
        num2 = Number(num2);
        if(Number.isNaN(num1) || Number.isNaN(num2))
        alert("Enter correct numbers");
        else
        {
        switch(op)
        {
                case '/':
                        document.writeln("Division is " + (num1/num2));
                        break;
                case 'x':
                        document.writeln("Multiplication is " + (num1*num2));
                        break;
                case '*':
                        document.writeln("Multiplication is " + (num1*num2));
                        break;
                case '+':
                        document.writeln("Addition is " + (num1+num2));
                        break;
                case '-':
                        document.writeln("Subtraction is " + (num1-num2));
                        break;
                case '%':
                        document.writeln("Modulus is " + (num1%num2));
                        break;
                default:
                        alert("Please enter correct mathematical operator");
        }
        }
}
calculator(prompt("Enter number 1"), prompt("Enter number 2"), prompt("Enter operator (/, x, *, +, - %)"));


        **************TASK 5**************


function square(num)
{
        return num*num;
}
var number = Number(prompt("Enter any number"));
document.writeln("Square is " + square(number));


        **************TASK 6**************


function factorial(number)
{
        for(var i = number; i>2; i--)
        {
                number=number*(i-1)
        }
        return number;
}
var num = Number(prompt("Enter any number"));
document.writeln("Factorial of number " +num+ " is " + factorial(num));


        **************TASK 7**************


function count(start, end)
{
        for(var i=start; i<=end; i++)
        document.writeln(i + "<br>");
}

count(Number(prompt("Enter start")), Number(prompt("Enter end")));


        **************TASK 8**************


function calculateHypotenuse(base, perp)
{
        
        function calculateSquare(number)
        {
                for(var i=1; i<number/2; i++)
                {
                        if(i*i==hyp)
                                return i;
                }
                return Math.sqrt(number);
        }

        var hyp_sq = ((base*base)+(perp*perp));

        var hyp = calculateSquare(hyp_sq);

        return hyp;

}

var base = Number(prompt("Enter base: "));
var perp = Number(prompt("Enter perpendicular: "));
alert("Hypotenuse is " + calculateHypotenuse(base, perp));



        **************TASK 9**************


function calculateArea(w, h)
{
        var area = w*h;
        return area;
}

var w = Number(prompt("Enter width"));
var h = Number(prompt("Enter height: "));
document.writeln("<b>Arguments as values</b><br>Area is " + calculateArea(4, 4) + "  <br>");
document.writeln("<b>Arguments as variables</b><br>Area is " + calculateArea(w, h));



        **************TASK 10**************


function checkPalindrome(string)
{
        string2=string.split("");
        string2=string2.reverse();
        string2=string2.join("");
        if(string == string2)
        alert("String is palindrome");
        else
        alert("String is not palindrome");
}

var str = prompt("Enter any string");
str = str.toLowerCase();

checkPalindrome(str);



        **************TASK 11**************


function toTitleCase(string)
{
        var capitalizedString = new String();
        var firstLetter;
        string = string.split(" ");
        for(var i=0; i<string.length; i++)
        {
                firstLetter = string[i].charAt(0);
                capitalizedString += (firstLetter.toUpperCase() + string[i].slice(1) + " ");
        }
        return capitalizedString;
}
var str = prompt("Enter any string");
document.writeln(toTitleCase(str));


        **************TASK 12**************


function longestWord(string)
{
        var temp=0;
        string=string.split(" ");
        var j=string[0].length;
        for(var i=1; i<string.length; i++)
        {
                if(string[i].length>j)
                {
                        j=string[i].length;
                        temp=i;
                }
        }
        return string[temp];
}

var str =  prompt("Enter any string");
document.writeln("String: " +str);
document.writeln("<br>Longest word is " +longestWord(str));


        **************TASK 13**************


function occurence(string, letter)
{
        var occur=0;
        for(var i = 0; i<string.length; i++)
        {
        if(string[i]==letter)
        occur++;
        }
        return occur;
}

var string = prompt("Enter any string");
var letter =  prompt("Enter any letter");
document.writeln("Letter " +letter+ " has occured " +occurence(string, letter)+ " times in string " + string);



        **************TASK 14**************


function calcCircumference(radius)
{
        return (2*3.14*radius)
}
function calcArea(radius)
{
        return (3.14*Math.pow(radius, 2));
}

document.writeln("<h2> The Geometrizer </h2>");
var rad =  Number(prompt("Enter radius"));
document.writeln("Circumference of circle is " + calcCircumference(rad) + "<br>");
document.writeln("Area of circle is " +calcArea(rad));
*/

