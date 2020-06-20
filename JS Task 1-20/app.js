/**
_______________________________________________ASSIGNMENT 1______________________________________________

TASK1 

alert("Hello visitor \nWelcome to my webiste");

---------------------------------------

TASK 2


function checkform()
{
var form=document.getElementById("myform");
if(form.pass.value != form.cpass.value)
{
    alert("Error! Please enter a valid password");
}
else
{
    alert("Password Coreect");
}
}

--------------------------------------

TASK 3


alert("Welcome to JS Land... \nHappy coding!");


--------------------------------------

TASK 4

alert("Welcome to JS Land...");
alert("Happy coding!");

--------------------------------------

TASK 5

alert("Hello... I can run JS through my web browser's console");

---------------------------------------


_______________________________________________ASSIGNMENT 2______________________________________________

TASK 1

function printuname()
{
var username;
var form = document.getElementById("myform");
username=form.uname.value;
alert(username);
}

----------------------------------------


TASK 2


var  myName = "Ghulam Yasin";
var fullname = new String(myName);
alert(fullname);


------------------------------------------



TASK 3


var  message;
message="Hello World";
alert(message);


-------------------------------------------




TASK 4

function submitform()
{
    var form = document.getElementById("studentform");
    var name = form.st_name.value;
    var age = form.age.value;
    var course = form.course.value;
    alert("Name is " +name);
    alert(age + " years old");
    alert("Student of " + course);
}



---------------------------------------------




TASK 5


var str = String("PIZZA");
alert(str + "\n" + str.substring(0, 4)  + "\n" + str.substring(0, 3)  + "\n" 
                        + str.substring(0, 2)  + "\n" + str.substring(0, 1));


---------------------------------------------




TASK 6

var email;
email = "yasin.ahmed01@gmail.com";
alert("My email address is " +email);



---------------------------------------------




TASK 7


var book;
book = "A smarter way to learn JavaScript";
alert("I am trying to learn from the Book " +book);

---------------------------------------------




TASK 8


document.writeln("Yah! I can write HTML content through JavaScript");


---------------------------------------------




TASK 9



var design ="▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬"
alert(design);



---------------------------------------------


_______________________________________________ASSIGNMENT 3______________________________________________

TASK 1


var age;
age=20;
alert("I am " +age+ " years old");



---------------------------------------------




TASK 2

var visits = 1;
while (true) 
{
    alert("You have visited this site " +visits+ " times");
    visits++;
}



---------------------------------------------




TASK 3


var birthYear = 2000;
document.writeln("My birth year is " +birthYear + "<br>");
document.writeln("Datatype of my declared variable is " + typeof(birthYear));


---------------------------------------------




TASK 4



function submitform()
{
    var form = document.getElementById("myform");
    var visitor=form.name.value;
    var prd = form.product.value;
    var qty = form.qty.value;
    form.style.display = "none";
    document.writeln("<div style=\"font-size: 32px;\"><strong> "+ visitor + "</strong> ordered <strong> " + qty + " " + prd + " </strong> on XYZ Clothing Store </div>");
}




---------------------------------------------



_______________________________________________ASSIGNMENT 4______________________________________________


TASK 1


var x, y, z;
x=1; y=2; z=3;
document.writeln(x + "<br>" + y + "<br>" + z);


---------------------------------------------


TASK 2


Legal variables
var i, j, x, y, z;

x=1; y=2; z=3; i=4, j=5;


document.writeln("Legal variables are: <br> x = "+ x + "<br> y = " + y + "<br> z = " + z + 
"<br> i = " + i + "<br> j =" + j);



ILLEGAL VARIABLES
var %%;
var 8; 
var .;
var 0.;
var #;




---------------------------------------------


TASK 3


document.writeln("<strong> Rules for naming JS variables </strong> <br> <br> <br>");

document.writeln(" Variable names can only contain number, $, and _ sign. For example $my_1stVariable <br>");

document.writeln("Variables must begin with a letter, $ or _ sign . For example $name, _name or name <br>");

document.writeln("Variable names are case sensitive <br>");

document.writeln("Variable names should not be JS keyword");



---------------------------------------------



_______________________________________________ASSIGNMENT 5______________________________________________


TASK 1


var x = Number(prompt("Enter a number"));
var y = Number(prompt("Enter another number"));
var res = x+y;
document.writeln("Sum of " + x + " and " + y + " is " + res);

---------------------------------------------


TASK 2

var x = Number(prompt("Enter a number"));
var y = Number(prompt("Enter another number"));
var div = x/y;
var mul = x*y;
var add = x+y;
var sub = x-y;
var mod = x%y;

document.writeln("<br>Division of " + x + " and " + y + " is " + div);
document.writeln("<br>Multiplication of " + x + " and " + y + " is " + mul);
document.writeln("<br>Addition of " + x + " and " + y + " is " + add);
document.writeln("<br>Subtraction of " + x + " and " + y + " is " + sub);
document.writeln("<br>Modulus of " + x + " and " + y + " is " + mod);

---------------------------------------------


TASK 3

var x;
document.writeln("The value of variable after declaration is " +x);
x=10;
document.writeln("<br>The value of variable after initialization is " +x);
x++;
document.writeln("<br>The value of variable after increment is " +x);
x+=7
document.writeln("<br>The value of variable after addition of 7 is " +x);
x--;
document.writeln("<br>The value of variable after decrement is " +x);
x/=3;
document.writeln("<br>The remainder of variable after division by 3 is " +x);

---------------------------------------------


TASK 4

var movieTicket=600;
var qty =  Number(prompt("How many movie tickets you want?"));
var totalPrice = movieTicket*qty;
document.writeln("Total cost to buy " + qty + " movie tickets is " +totalPrice);

---------------------------------------------


TASK 5

var tableNum =  6;
for(var i=1; i<11; i++)
document.writeln(tableNum + " x " + i + " = " + tableNum*i + "<br>");

---------------------------------------------


TASK 6


var tempC = Number(prompt("Enter temperature in Celcius scale"));
var tempF = (tempC * 9/5)+32;
document.writeln(tempC + " oC is " + tempF + " oF <br>");
tempF = Number(prompt("Enter temperature in Fahrenheit"));
var tempC=(tempF-32)*5/9;
document.writeln(tempF + " oF is " + tempC + " oC <br>");


---------------------------------------------


TASK 7


var item1_qty=0,item2_qty=0, item3_qty=0, item4_qty=0, item5_qty=0, item6_qty=0, item7_qty=0;

var item1_price=350, item2_price=100, item3_price=80, item4_price=300, item5_price=200, 
    item6_price=200, item7_price=50;

var total=0;

var shippingCharge=100;

function item1()
{
    item1_qty++;
    document.getElementById("qty_item1").innerHTML=item1_qty;
    total+=item1_price;
    document.getElementById("totalprice").innerHTML=total;
}
function item2()
{
    item2_qty++;
    document.getElementById("qty_item2").innerHTML=item2_qty;
    total+=item2_price;
    document.getElementById("totalprice").innerHTML=total;
}
function item3()
{
    item3_qty++;
    document.getElementById("qty_item3").innerHTML=item3_qty;
    total+=item3_price;
    document.getElementById("totalprice").innerHTML=total;
}

function item4()
{
    item4_qty++;
    document.getElementById("qty_item4").innerHTML=item4_qty;
    total+=item4_price;
    document.getElementById("totalprice").innerHTML=total;
}

function item5()
{
    item5_qty++;
    document.getElementById("qty_item5").innerHTML=item5_qty;
    total+=item5_price;
    document.getElementById("totalprice").innerHTML=total;
}

function item6()
{
    item6_qty++;
    document.getElementById("qty_item6").innerHTML=item6_qty;
    total+=item6_price;
    document.getElementById("totalprice").innerHTML=total;
}
function item7()
{
    item7_qty++;
    document.getElementById("qty_item7").innerHTML=item7_qty;
    total+=item7_price;
    document.getElementById("totalprice").innerHTML=total;
}

function checkout()
{

    if(total>0)
    {
        var table = document.getElementById("item-table");
        table.style.display="none";
        total+=shippingCharge;

        if(item1_qty>0)
        {
            document.writeln("Price of item 1 is "+ item1_price +" <br>");
            document.writeln("Quantity of item 1 is " + item1_qty + "<br>");
        }
    
    
        if(item2_qty>0)
        {
            document.writeln("Price of item 2 is "+ item2_price +" <br>");
            document.writeln("Quantity of item 2 is " + item2_qty + "<br>");
        }
    
        if(item3_qty>0)
        {
            document.writeln("Price of item 3 is "+ item3_price +" <br>");
            document.writeln("Quantity of item 3 is " + item3_qty + "<br>");
        }
    
        if(item4_qty>0)
        {
            document.writeln("Price of item 4 is "+ item4_price +" <br>");
            document.writeln("Quantity of item 4 is " + item4_qty + "<br>");
        }
    
        if(item5_qty>0)
        {
            document.writeln("Price of item 5 is "+ item5_price +" <br>");
            document.writeln("Quantity of item 5 is " + item5_qty + "<br>");
        }
    
        if(item6_qty>0)
        {
            document.writeln("Price of item 6 is "+ item6_price +" <br>");
            document.writeln("Quantity of item 6 is " + item6_qty + "<br>");
        }
    
        if(item7_qty>0)
        {
            document.writeln("Price of item 7 is "+ item7_price +" <br>");
            document.writeln("Quantity of item 7 is " + item7_qty + "<br>");
        }
        
        document.writeln("<br> Shipping Charge is " + shippingCharge);
        document.writeln("<br> <br> The total bill is " + total);
        document.writeln("<br><button onclick=\"window.location.reload();\">Go Back</button>");
    
    }

    else
    alert("you haven't bought anything yet");

   
}


---------------------------------------------


TASK 8


var obtMarks= Number(prompt("Enter obtained marks"));
var totalMarks=Number(prompt("Enter total narks"));
var percentage = (obtMarks/totalMarks)*100;
document.writeln("<strong style=\"font-size: 32px; font-weight:bold\"> Mark Sheet </strong> <br> <br> <br>")

document.writeln("Total Marks: " +totalMarks);
document.writeln("<br>Obtained Marks: " +obtMarks);
document.writeln("<br>Percentage: " +percentage +"%");



---------------------------------------------


TASK 9


var usd=10, saudi_riyal=25;
var pak_cur=(usd*104.80)+(saudi_riyal*28);
document.writeln("Total currency in PKR is " +pak_cur);


---------------------------------------------


TASK 10

var x=10;
x=((x+5)*10)/2;
document.writeln("X = " +x);

---------------------------------------------


TASK 11

var birthYear = Number(prompt("Enter your birth year"));
var curYear = Number(prompt("Emter current year"));
var age = curYear-birthYear;

document.writeln("<strong style=\"font-size: 32px;\"> Age Calculator </strong>")
document.writeln("<br> <br> <br> Birth Year: " +birthYear);
document.writeln("<br>Current Year: " +curYear);
document.writeln("<br>Age: "+age);


---------------------------------------------


TASK 12

var radius = Number(prompt("Enter radius of circle"));
const pi = 3.142;
var circum =  2*pi*radius;
var area = pi*(Math.pow(radius, 2));
document.writeln("<strong style=\"font-size: 32px;\"> The Geometrizer </strong>")
document.writeln("<br> <br> <br> Radius: " +radius);
document.writeln("<br>Circumference: " +circum);
document.writeln("<br>Area: "+area);


---------------------------------------------


TASK 13

var snack = prompt("Enter you favorite snack");
var age = Number(prompt("Enter your current age"));
var age_limit = Number(prompt("Enter maximum age"));
var snack_per_day = Number(prompt("Enter snacks you eat per day"));

snack_req = ((age_limit-age)*365)*snack_per_day;


document.writeln("<strong style=\"font-size: 32px;\"> Life Supply Calculator </strong>")
document.writeln("<br> <br> <br> Your favorite snack: " +snack);
document.writeln("<br>Your Age: " +age);
document.writeln("<br>Age Limit: "+age_limit);
document.writeln("<br>snack per day: "+snack_per_day);
document.writeln("<br>You will need "+ snack_req +" to last you until the ripe old age of " +age_limit);

---------------------------------------------


_______________________________________________ASSIGNMENT 6-9______________________________________________



TASK 1

var a =10;

document.writeln("Result: <br>");
document.writeln("The value of a: " +a+ "<br>");

document.writeln("<br>----------------------------------------- <br><br>");

document.writeln("The value of ++a is: " + ++a);
document.writeln("<br>Now the value of a is: " +a + "<br><br><br>");


document.writeln("The value of a++ is: " + a++);
document.writeln("<br>Now the value of a is: " +a + "<br><br><br>");

document.writeln("The value of --a is: " + --a);
document.writeln("<br>Now the value of a is: " +a + "<br><br><br>");

document.writeln("The value of a-- is: " + a--);
document.writeln("<br>Now the value of a is: " +a + "<br><br><br>");

----------------------------------------------



TASK 2


var a=2, b=1;

document.writeln("<b>Explanation: </b> <br><br>");
document.writeln("The value of --a is: 1 <br><br>");


document.writeln("The value of --b is 0 <br><br>");
document.writeln("The value of \"--a - --b \"is: 1 as 1-0=1 <br><br>");


document.writeln("The value of ++b is: 1<br><br>");
document.writeln("<br>The value of \"--a - --b + ++b\" is 2 as 1-0+1=2 <br><br>");

document.writeln("The value of b-- is: 0 <br><br>");
document.writeln("<br>The value of \"--a - --b + ++b + b--\" is 3 as 1+0+1+1 because <b> b has post-drecrement operator </b> <br> it will be 0 after expression is evaluted");


document.writeln("<br><br>-------------<b> Result </b>---------------- <br><br>");

document.writeln("The result of \"--a - --b + ++b + b--\" is: "+ (--a - --b + ++b + b--));


----------------------------------------------



TASK 3

var username = prompt("Enter your name");
username=username.replace(username[0], username[0].toUpperCase());
document.writeln("<marquee style=\"color: yellow; background-color: blue;\"> Hello " + username + " Welcome to my website </marquee>");

----------------------------------------------



TASK 4

var tableNum =  Number(prompt("Enter Table Number"));
var limit = Number(prompt("Enter limit: "));


if(tableNum===0)
{
    tableNum=5;
}
if(limit===0)
{
    limit=10;
}

for(var i=1; i<=limit; i++)
document.writeln(tableNum + " x " + i + " = " + tableNum*i + "<br>");

----------------------------------------------



TASK 5

var subject1 = prompt("Enter subject 1: ");
var subject2 = prompt("Enter subject 2: ");
var subject3 = prompt("Enter subject 3: ");



var s1_obtm = Number(prompt("Enter subject 1  obtained marks"));
var s2_obtm = Number(prompt("Enter subject 2  obtained marks"));
var s3_obtm = Number(prompt("Enter subject 3  obtained marks"));

var total_marks=300, subject_total=100;
var obt_totalm=s1_obtm+s2_obtm+s3_obtm;


var per1 = (s1_obtm/subject_total)*100;
var per2 = (s2_obtm/subject_total)*100;
var per3 = (s3_obtm/subject_total)*100;
var obt_per = (obt_totalm/total_marks)*100;

document.getElementById("marktable").style.display="inline-block";


document.getElementById("subject1").innerHTML=subject1;
document.getElementById("subject2").innerHTML=subject2;
document.getElementById("subject3").innerHTML=subject3;

var st_cells = document.getElementsByClassName("subject_total");
for(var i = 0; i < st_cells.length; i++) {
    st_cells[i].innerHTML = subject_total;
}

document.getElementById("s1_obt").innerHTML=s1_obtm;
document.getElementById("s2_obt").innerHTML=s2_obtm;
document.getElementById("s3_obt").innerHTML=s3_obtm;

document.getElementById("s1_percnt").innerHTML=per1 + "%";
document.getElementById("s2_percnt").innerHTML=per2 + "%";
document.getElementById("s3_percnt").innerHTML=per3 + "%";

document.getElementById("totalmarks").innerHTML=total_marks;
document.getElementById("obt_total").innerHTML=obt_totalm;
document.getElementById("total_percnt").innerHTML=obt_per + "%";

----------------------------------------------

_______________________________________________ASSIGNMENT 9-11______________________________________________



TASK 1

var city = prompt("Enter city name");
if(city == "karachi" || city == "Karachi")
alert("Welcome to the city of lights " + city);
else
alert("Welcome to the " + city);

----------------------------------------------



TASK 2

var gender = prompt("Enter your gender");
if(gender == "male" || gender == "Male")
alert("Good Morning Sir");
else
alert("Good morning Ma'am");

----------------------------------------------



TASK 3

var signal = prompt("Enter signal color");
if(signal == "red" || signal == "Red")
alert("Must stop");
else if(signal == "yellow" || signal == "Yellow")
alert("Ready to move");
else if(signal == "green" || signal == "Green")
alert("Move now");
else
alert("Well that's not signal color");

----------------------------------------------



TASK 4

var fuel = Number(prompt("Enter remaining fuel"));
if(fuel<=0.25)
alert("Please refill the fuel in your car");
else
alert("You have enough fuel");

----------------------------------------------



TASK 5

var a = 4; if (++a === 5){ alert("given condition for variable a is true"); } 
 
var b = 82; if (b++ === 83){ alert("given condition for variable b is true"); } 
 
var c = 12; if (c++ === 13){ alert("condition 1 is true"); } if (c === 13){ alert("condition 2 is true"); } if (++c < 14){ alert("condition 3 is true"); } if(c === 14){ alert("condition 4 is true"); } 
 
var materialCost = 20000; var laborCost = 2000; 
var totalCost = materialCost + laborCost; 
if (totalCost === laborCost + materialCost){ alert("The cost equals"); } 
 
if (true){ alert("True"); } if (false){ alert("False"); } 
 

 
if("car" < "cat"){ alert("car is smaller than cat"); } 
 

----------------------------------------------



TASK 6

var totalMarks = Number(prompt("Enter total marks"));
var obtMarks = Number(prompt("Enter obtained marks"));
var grade, remarks;
var percentage = (obtMarks/totalMarks)*100;

if(percentage>=80)
{
    grade= "A-one";
    percentage=percentage+"%";
    remarks="Excellent";
}
else if (percentage>=70)
{
    grade= "A";
    percentage=percentage+"%";
    remarks="Good";
}

else if (percentage>=60)
{
    grade= "B";
    percentage=percentage+"%";
    remarks="You need to improve";
}

else if (percentage<60)
{
    grade= "Fail";
    percentage=percentage+"%";
    remarks="Sorry";
}

document.writeln("<strong> Mark Sheet </strong> <br> <br>");

document.writeln("Total Marks: " +totalMarks);
document.writeln("<br>Marks Obtined: "+obtMarks);
document.writeln("<br>Percentage: " +percentage);
document.writeln("<br>Grade: "+grade);
document.writeln("<br>Remarks: "+remarks);


----------------------------------------------



TASK 7

var secretnum= Math.floor(Math.random() * 10) + 1;
console.log(secretnum);
var guess=Number(prompt("Enter your guessed number"));

if(guess === secretnum)
document.writeln("Bingo! Correct answer");
else if(guess === (secretnum+1))
document.writeln("Close enough to the correct answer");
else
document.writeln("Sorry Try Again");


----------------------------------------------



TASK 8

var num = Number(prompt("Enter a number"));

if(num%3===0)
document.writeln("The Number "+num+" is divisible by 3");
else
document.writeln("The Number "+num+" is not divisible by 3");

----------------------------------------------



TASK 9

var num = Number(prompt("Enter a number"));

if(num%2===0)
document.writeln("The Number "+num+" is even");
else
document.writeln("The Number "+num+" is odd");

----------------------------------------------



TASK 10

var temp = Number(prompt("Enter temperature"));

if(temp>40)
document.writeln("It is too hot outside");
else if(temp>30)
document.writeln("The Weather today is Normal");
else if(temp>20)
document.writeln("Today’s Weather is cool");
else if(temp>10)
document.writeln("OMG! Today’s weather is so Cool");
else
document.writeln("OMG! Today’s weather is so Cool");

----------------------------------------------



TASK 11

var num1 = Number(prompt("Welcome to Calculator \nEnter a number"));
var num2 = Number(prompt("Enter number 2"));
var op = prompt("Enter Operation (+, -, x/*, /, %)");
var operation, res;

if(op == "+")
{
    res = num1+num2;
    operation = "Addition";
}
else if(op == "-")
{
    res=num1-num2;
    operation="Subtraction";
}
else if(op == "*" || op == "x")
{
    res=num1*num2;
    operation="Multiplication";
}

else if(op == "/")
{
    res=num1/num2;
    operation="Division";
}
else if(op=="%")
{
    res=num1%num2;
    operation="Modulus";
}
else
{
    operation="Select Corrector operation";
    res="Calculation was not performed"
}


document.writeln("Welcome to Calculator <br><br><br>");

document.writeln("Number 1: " +num1);
document.writeln("<br> Number 2: " +num2);
document.writeln("<br> Operation: " +operation);
document.writeln("<br> Result: " +res);


----------------------------------------------


_______________________________________________ASSIGNMENT 12-13______________________________________________



TASK 1

var ch = prompt("Enter a character");
ch=ch.charCodeAt(0);
console.log(ch);

if(ch>=65 && ch<=90)
document.writeln("Uppercase alphabet");

else if(ch>=97 && ch<=122)
document.writeln("Lowercase alphabet");

else if(ch>=48 && ch<=58)
document.writeln("Number");

else
document.writeln("Special Character");


----------------------------------------------



TASK 2

var num1 = Number(prompt("Enter a number"));
var num2 = Number(prompt("Enter another number"));


if(num1>num2)
document.writeln("Number 1: " + num1 + " is greater than Number 2: " +num2);

else if(num1<num2)
document.writeln("Number 2: " + num2 + " is greater than Number 1: " +num1);

else if(num1==num2)
document.writeln("Both numbers are equal");

else
document.writeln("Enter correct number");


----------------------------------------------



TASK 3

var num = Number(prompt("Enter a number"));



if(num>0)
document.writeln("Number is positive");

else if(num<0)
document.writeln("Number is negative");

else if(num===0)
document.writeln("Number is 0");

else
document.writeln("Enter correct number");


----------------------------------------------



TASK 4


var ch = (prompt("Enter a character"));



if(ch[0]==="a" || ch[0]==="e" || ch[0]==="i" || ch[0]==="o" || ch[0]==="u")
document.writeln("True (Vowel)");

else
document.writeln("False Consonant");

----------------------------------------------



TASK 5

var correctpass = "mypassword123";

var userpass=prompt("Enter your password");

if(userpass === correctpass)
document.writeln("Correct! The password you entered matches the original password");
else if(userpass==="")
alert("Please enter your password");
else
document.writeln("Incorrect password");


----------------------------------------------



TASK 6

var greeting; 
var hour = 13; 
if (hour < 18) 
greeting = "Good day"; 
else 
greeting = "Good evening";

alert(greeting);
document.writeln("Extra delimeters removed code fixed");
 

----------------------------------------------



TASK 7

var time = Number(prompt("Enter time is 24 hrs format"));

if(time>=0000 && time<=1200)
document.writeln("Good Morning");

else if(time>=1200 && time<=1700)
document.writeln("Good Afternoon");

else if(time>=1700 && time<=2100)
document.writeln("Good Evening");

else if(time>=2100 && time<=2359)
document.writeln("Good Night");



----------------------------------------------


_______________________________________________ASSIGNMENT 14-16______________________________________________



TASK 1

var students_name=[];

console.log("Typeof(students_name); = " + typeof(students_name));
console.log("students_name.length = " + students_name.length);

----------------------------------------------



TASK 2

var students_name =  new Array();

console.log("Typeof(students_name); = " + typeof(students_name));
console.log("students_name.length = " + students_name.length);

----------------------------------------------




TASK 3

var students_name = []
students_name[0] = "Ali";
students_name[1] = "Yasir";
students_name[2] = "Yasin";
students_name[3] = "Waqas";
students_name[4] = "Zubair";

document.writeln(students_name[0] + "<br>");
document.writeln(students_name[1] + "<br>");
document.writeln(students_name[2] + "<br>");
document.writeln(students_name[3] + "<br>");
document.writeln(students_name[4] + "<br>");

----------------------------------------------



TASK 4

var students_marks = []
students_marks[0] = 101;
students_marks[1] = 103;
students_marks[2] = 33;
students_marks[3] = 87;
students_marks[4] = 100;

document.writeln(students_marks[0] + "<br>");
document.writeln(students_marks[1] + "<br>");
document.writeln(students_marks[2] + "<br>");
document.writeln(students_marks[3] + "<br>");
document.writeln(students_marks[4] + "<br>");

----------------------------------------------



TASK 5

var bool_array = []
bool_array[0] = true;
bool_array[1] = true;
bool_array[2] = false;
bool_array[3] = true;
bool_array[4] = false;

document.writeln(bool_array[0] + "<br>");
document.writeln(bool_array[1] + "<br>");
document.writeln(bool_array[2] + "<br>");
document.writeln(bool_array[3] + "<br>");
document.writeln(bool_array[4] + "<br>");

----------------------------------------------



TASK 6

var mixed_array = []
mixed_array[0] = true;
mixed_array[1] = "Yasin";
mixed_array[2] = 1;
mixed_array[3] = 2;
mixed_array[4] = "Mixed Array";

document.writeln(mixed_array[0] + "<br>");
document.writeln(mixed_array[1] + "<br>");
document.writeln(mixed_array[2] + "<br>");
document.writeln(mixed_array[3] + "<br>");
document.writeln(mixed_array[4] + "<br>");



----------------------------------------------



TASK 7

var qualifications = new Array("SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD")


document.writeln("<b> Qualifications: </b> <br> <br>");

for(var i=0; i<qualifications.length; i++)
document.writeln((i+1) + ")" + qualifications[i] +" <br>");

----------------------------------------------



TASK 8

var studentNames=["Ali", "Qasim", "Zubair"];
var studentScore=[300, 200, 250];
var totalMarks=500;
var percentages = [(studentScore[0]/totalMarks)*100, (studentScore[1]/totalMarks)*100, (studentScore[2]/totalMarks)*100];

for(var i=0; i<3; i++)
document.writeln("Score of " + studentNames[i] + " is " + studentScore[i] + " and his percentage is " + percentages[i] + "%<br>");

----------------------------------------------



TASK 9

var colors=["Red", "Green", "Blue"];
displayarray();



function displayarray()
{
    colordiv = document.getElementById("color-div");
    for (var i=0; i<colors.length; i++)
        colordiv.innerHTML+=i + ")" + colors[i] + "<br>";
    colordiv.innerHTML+="<br><br><br>";
    
}

function Task_ABCDE()
{
    newColor = prompt("Enter new color");
    colors.unshift(newColor);
    displayarray();
    colors.unshift("Indigo");
    colors.unshift("Yellow");
    displayarray();
    colors.shift();
    displayarray();
    colors.pop();
    displayarray();
}

function Task_f()
{
    newColor = prompt("Enter new color");
    index = Number(prompt("Enter index"));
    colors.splice(index, 0, newColor);
    displayarray();
}

function Task_g()
{
    index = Number(prompt("Enter index to delete"));
    colornum = Number(prompt("Enter number of colors to delete"));
    colors.splice(index, colornum);
    displayarray();
}

----------------------------------------------



TASK 10

var marks=[320, 230, 480, 120];
console.log("Before sort");
console.log(marks);
marks.sort();
console.log("After sort");
console.log(marks);


----------------------------------------------



TASK 11

var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"]
console.log("Cities:");
console.log(cities);
var selectedCities = cities.slice(1, 4);
console.log("Selected Cities:");
console.log(selectedCities);


----------------------------------------------



TASK 12

var arr = ["This", "is", "my", "cat"]; 
var str =  arr.join(" ");
console.log(str);

----------------------------------------------



TASK 13

var devices = new Array();
devices.push("Keyboard");
devices.push("Monitor");
devices.push("Mouse");
devices.push("Printer");
devices.push("Speaker");

document.writeln(devices)

document.writeln("<br> <br> <br> Out <br>");
document.writeln(devices.shift());
document.writeln("<br> Out <br>");
document.writeln(devices.shift());
document.writeln("<br> Out <br>");
document.writeln(devices.shift());
document.writeln("<br> Out <br>");
document.writeln(devices.shift());

----------------------------------------------



TASK 14

var devices = new Array();
devices.push("Keyboard");
devices.push("Monitor");
devices.push("Mouse");
devices.push("Printer");
devices.push("Speaker");

document.writeln(devices)

document.writeln("<br> <br> <br> Out <br>");
document.writeln(devices.pop());
document.writeln("<br> Out <br>");
document.writeln(devices.pop());
document.writeln("<br> Out <br>");
document.writeln(devices.pop());
document.writeln("<br> Out <br>");
document.writeln(devices.pop());

----------------------------------------------



TASK 15

var manufacturer=["Apple", "Nokia", "Huawei", "Samsung",  "Motorola", "Sony", "Haier"];

document.writeln("<select>");

for(var i=0; i<manufacturer.length; i++)
    document.writeln("<option> " + manufacturer[i] + " </option>");

document.writeln("</select>");

----------------------------------------------


_______________________________________________ASSIGNMENT 17-20______________________________________________



TASK 1

var mult_arr=[
    [],
    [],
    [],
];
console.log(mult_arr);

----------------------------------------------



TASK 2

var mult_arr=[
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1],
];
for(var i=0; i<mult_arr.length; i++)
{
    for(var j=0; j<mult_arr[0].length; j++)
        document.write(mult_arr[i][j] + " ");
    document.write("<br>")
}

----------------------------------------------



TASK 3

for(var i=1; i<11; i++)
document.writeln(i + "<br>");

----------------------------------------------



TASK 4

var tableNum =  Number(prompt("Enter Table Number"));
var limit = Number(prompt("Enter length: "));
for(var i=1; i<=limit; i++)
document.writeln(tableNum + " x " + i + " = " + tableNum*i + "<br>");

----------------------------------------------



TASK 5

var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for(i=0; i<fruits.length; i++)
document.writeln(fruits[i] + "<br>");

document.writeln("<br><br><br>")


for(i=0; i<fruits.length; i++)
document.writeln("Element at index " + i + " is " + fruits[i] + "<br>");

----------------------------------------------



TASK 6

document.writeln("<strong> Counting: </strong> <br>");

for(var i=1; i<21; i++)
document.writeln(i + ", ");

document.writeln("<br><br><strong> Reverse Counting: </strong> <br>");

for(var i=20; i>0; i--)
document.writeln(i + ", ");

document.writeln("<br><br><strong> Even </strong> <br>");

for(var i=1; i<21; i++)
    if(i%2===0)
        document.writeln(i + ", ");


document.writeln("<br><br><strong> Odd </strong> <br>");

    for(var i=1; i<21; i++)
    {
        if(i%2===0)
            continue;
        else
            document.writeln(i + ", ");
    }

document.writeln("<br><br><strong> Series </strong> <br>");

    for(var i=1; i<21; i++)
        if(i%2===0)
            document.writeln(i + "k, ");

----------------------------------------------



TASK 7

var bakery = ["Cake", "Apple Pie", "Cookie", "Chips", "Patties"];
var item_found=false;
var item = prompt("Enter item you want");

for(var i=0; i<bakery.length; i++)
{
    if(bakery[i].toLowerCase()==item.toLowerCase())
    {
    document.writeln(item + " is <b> available </b> at index " +i);
    item_found=true;
    break;
    }
}
if(item_found==false)
document.writeln("We are sorry, We do not have " +item+ " in our bakery");

----------------------------------------------



TASK 8

var a = [24, 53, 78, 91, 12, 700, 44, 11, 300];
var temp=a[0];
for(var i=0; i<a.length; i++)
{
    for(var j=i+1; j<a.length; j++)
    {
        if(temp<a[j])
        {
            temp=a[j];
            break;
        }
    }
}

document.writeln("Array Items: <br>");
for(var i=0; i<a.length; i++)
document.writeln(a[i]+ ", ");

document.writeln("<br> <br> Largest Number: <br>");
document.writeln(temp);

----------------------------------------------



TASK 9

var a = [24, 53, 78, 91, 12, 559, 44, 11, 800];
var temp=a[0];
for(var i=0; i<a.length; i++)
{
    for(var j=i+1; j<a.length; j++)
    {
        if(temp<a[j])
            continue;
        else
        {
            temp=a[j];
            break;
        }
    }
}

document.writeln("Array Items: <br>");
for(var i=0; i<a.length; i++)
document.writeln(a[i]+ ", ");

document.writeln("<br> <br> Smallest Number: <br>");
document.writeln(temp);

----------------------------------------------



TASK 10

document.writeln("<b> Multiples of 5: </b> <br>")
for(var i=1; i<101; i++)
if(i%5===0)
document.writeln(i + ", ");


---------------------------------------------- 
*/