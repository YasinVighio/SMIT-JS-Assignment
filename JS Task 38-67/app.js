/**
==============================================CHAPTER 38-42==============================================

********************TASK 1********************

var a = Number(prompt("Enter any nunber"));
var b = Number(prompt("Enter power"));
var a_pow=power(a,b);
alert(a + " power raise to "+b+ " = " +a_pow);
 function power(a, b)
 {
     for(var i=1; i<b; i++)
     {
        a*=b;
     }
    return a;
 }


********************TASK 2********************

var year =  Number(prompt("Enter any year"));
if(leap(year))
alert("Year " +year+ " is leap year");
else
alert("Not a leap year");


function leap(y)
{
    if(y%4==0)
    return true;
    else
    return false;
}


********************TASK 3********************


var side_a = Number(prompt("Enter side a of triangle")); 
var side_b = Number(prompt("Enter side b of triangle")); 
var side_c = Number(prompt("Enter side c of triangle")); 


var t_area = Number(area(side_a, side_b, side_c)).toFixed(3);

alert("Area of triangle is " +t_area);


function semiperimeter(a, b, c)
{
    var smp=(a+b+c)/2;
    return smp;
}

function area(a, b, c)
{
    var s=semiperimeter(a, b, c);
    var area = s*(s-a)*(s-b)*(s-c);
    return Math.sqrt(area);
}


********************TASK 4********************


 mainFunction();

 function mainFunction()
 {
     var marks_1=Number(prompt("Enter marks in english"));
     var marks_2=Number(prompt("Enter marks in mathematics"));
     var marks_3=Number(prompt("Enter marks in urdu"));

     var prcnt = percentage(marks_1,marks_2, marks_3);
     var avg = average(marks_1, marks_2, marks_3);

     alert("Average marks are " + avg + "\nPercentage is "+prcnt + "%");
 }

 function average(m1, m2, m3)
 {
     var avg = (m1+m2+m3)/3;
     return avg;
 }

 function percentage(m1, m2, m3)
 {
     var percentage = ((m1+m2+m3)/300)*100;
     return percentage;
 }


********************TASK 5********************


class string extends String 
{
    getIndexOf(x) 
    {
        var st_len=this.length;
        var index=-1;
        for(var i=0; i<st_len; i++)
        {
            if(this[i]==x)
            {
                index=i;
                break;
            }
        }  
        return index;
    }
}

var s1= new string(prompt("Enter any string"));
var ind= s1.getIndexOf(prompt("Enter any element to find in string"));
if(ind==-1)
{
    alert("Element not in string");
}
else
{
    alert("Element at index "+ind);
}


********************TASK 6********************


var string = prompt("Enter any string");
alert("String you entered "+string+"\nString with vowels removed "+removeVowels(string));
function removeVowels(str)
{
    var vowels = ["a", "e", "i", "o", "u"];
    var str_len = str.length;

    for(var i=0; i<str_len; i++)
    {
        for(var j=0; j<vowels.length; j++)
        {
            if(new String(str[i]).toLowerCase()==vowels[j])
            {
                str=str.slice(0, i) + str.slice(i+1, str_len+1);
                break;
            }
        }
    }
    return str;
}


********************TASK 7********************


var str=prompt("Enter any string: ");
var found=0;
var vowelPairs=[];
getSuccessions(str);
alert("String is "+ str+"\nThere are " +found+ " Vowel pairs in string\nSuch pairs are "+vowelPairs);


function getSuccessions(str)
{
for(var i=0; i<str.length; i++)
{
    if(checkVowel(str[i]))
    {
        if(checkVowel(str[i+1]))
        {
            vowelPairs.push(str.substring(i, i+2));
            found++;
            i++;
        }
    }
    else
    continue;
}
}

function checkVowel(letter)
{
    switch(letter)
    {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            return true;
        default:
            return false;
    }
}


********************TASK 8********************


var dist=Number(prompt("Enter distance (in km)"));
alert("Distance in meters " +toMeters(dist) + "\nDistance in Feet "+toFeet(dist) + "\nDistance in inch " +toInch(dist) + "\nTo centimeter "+toCm(dist));


function toMeters(dist)
{
    dist*=1000;
    return dist;
}
function toFeet(dist)
{
    dist*=3281;
    return dist;
}

function toInch(dist)
{
    dist*=39370;
    return dist;
}
function toCm(dist)
{
    dist*=100000;
    return dist;
}


********************TASK 9********************


 var overTime=parseInt(prompt("Enter overtime hours"));

 var overTimepay=overTime*12;

 alert("Overtime pay is "+overTimepay);



********************TASK 10*******************

var amount = Number(prompt("Enter withdraw amount"));
var hundred=parseInt(amount/100);
amount=amount%100;
var fifty=parseInt(amount/50);
amount=amount%50;
var ten=parseInt(amount/10);
 
alert("You will have " +hundred + " hundred notes " + fifty + " fifty notes " + ten + " ten notes");



==============================================CHAPTER 43-48==============================================

********************TASK 1********************

document.writeln("<div class='link'> <img src='linkimg1.jpeg' width='320 height='440'> </div>");
document.writeln("<div class='link'> <img src='linkimg2.png' width='320 height='440'> </div>");
document.writeln("<div class='link'> <img src='linkimg3.jpeg' width='320 height='440'> </div>");

function action()
{
    alert("Thank you for purchasing our product");
}

var links = document.getElementsByClassName("link");
for(var i=0; i<links.length; i++)
{
    links[i].style.display="inline";
    links[i].setAttribute('onclick', 'action()');
}


********************TASK 2********************


var students = ["John\xa0\xa0\xa0\xa01", "Jame\xa0\xa0\xa0\xa04",  "Mark\xa0\xa0\xa0\xa05", "Zuck\xa0\xa0\xa0\xa04", "Duke\xa0\xa0\xa0\xa010", "Nick\xa0\xa0\xa0\xa03", "Rick\xa0\xa0\xa0\xa02", "Andy\xa0\xa0\xa0\xa06", "Bens\xa0\xa0\xa0\xa010", "Evan\xa0\xa0\xa0\xa08"];
display();
function display()
{
document.writeln("Index Name Class");

for(var i = 0; i<students.length; i++)
{
    document.writeln(`<div>${i}\xa0\xa0\xa0\xa0${students[i]}\xa0\xa0\xa0\xa0<button onclick=del("${i}")>Delete</button></div><br> <br>`)   
}
}

function del(x)
{
    var temp=[];
    for(var i=0; i<students.length; i++)
    {
        if(i==x)
            continue;
        else
            temp.push(students[i]);
    }
    students=temp;
    document.body.innerHTML="";
    display();
}


********************TASK 3********************


document.writeln("<img src='linkimg1.jpeg' width='320 height='440' id='pic' onmouseover=f1() onmouseout=f2()>");
var pic = document.getElementById("pic");

function f1()
{
    pic.src='linkimg2.png';
}
function f2()
{
    pic.src='linkimg1.jpeg'
}


********************TASK 4********************


document.writeln("<div id='counter'>1</div>")
document.writeln("<button onclick='inc()'>Increase</button><button onclick='dec()'>Decrease</button>")
var counter=document.getElementById("counter");
var counterValue=Number(counter.innerHTML);

function inc()
{
    counterValue++;
    counter.innerHTML=counterValue;
}
function dec()
{
    counterValue--;
    counter.innerHTML=counterValue;
}



==============================================CHAPTER 49-52==============================================


********************TASK 1********************

document.writeln("<div id='main'></div>")

var main=document.getElementById("main");
var form = document.createElement("form");

var nameLabel = document.createElement("label");
nameLabel.innerHTML="Name:"
var nameInput = document.createElement("input");
nameInput.id="name";

var fathernameLabel = document.createElement("label");
fathernameLabel.innerHTML="Father Name:"
var fathernameInput = document.createElement("input");
fathernameInput.id="fathername";

var emailLabel = document.createElement("label");
emailLabel.innerHTML="Email:"
var emailInput = document.createElement("input");
emailInput.id="email";

var phoneLabel = document.createElement("label");
phoneLabel.innerHTML="Phone:"
var phoneInput = document.createElement("input");
phoneInput.id="phn";


var submitbt=document.createElement("input");
submitbt.type="button";
submitbt.value="Submit";
submitbt.setAttribute("onclick", "submitform()");


form.appendChild(nameLabel);
form.appendChild(nameInput);
form.innerHTML+="<br>";
form.appendChild(fathernameLabel);
form.appendChild(fathernameInput);
form.innerHTML+="<br>";
form.appendChild(emailLabel);
form.appendChild(emailInput);
form.innerHTML+="<br>";
form.appendChild(phoneLabel);
form.appendChild(phoneInput);
form.innerHTML+="<br>";
form.appendChild(submitbt);


main.appendChild(form);

var showValues=document.createElement("div");
showValues.setAttribute("id", "screen");
main.appendChild(showValues);

function submitform()
{
    var inputList=document.getElementsByTagName("input");
    var labelList=document.getElementsByTagName("label");
    var screen = document.getElementById("screen");

    for(var i=0; i<4; i++)
    {
        screen.innerHTML+=labelList[i].innerHTML + " " + inputList[i].value + "<br>";
    }
}


********************TASK 2********************


var para = document.createElement("p");
para.setAttribute("id", "content-para");
var content = document.createTextNode("Hello World This is Yasin ");
var readMore = document.createElement("a");
readMore.setAttribute("href", "javascript:void(0)");
readMore.setAttribute("onclick", "readmore()");
readMore.innerHTML="Read More";
para.appendChild(content);
para.appendChild(readMore);
document.getElementsByTagName("body")[0].appendChild(para);


function showless()
{
    
document.getElementById("content-para").innerHTML="";
var content = document.createTextNode("Hello World This is Yasin ");
var readMore = document.createElement("a");
readMore.setAttribute("href", "javascript:void(0)");
readMore.setAttribute("onclick", "readmore()");
readMore.innerHTML="Read More";
para.appendChild(content);
para.appendChild(readMore);
}

function readmore()
{
document.getElementById("content-para").innerHTML="";
var content = document.createTextNode("Hello World This is Yasin I am student of BSCS. I have 6 years experience in C Programming but to polish up my skills in web deisgning I have enrolled in Saylani Web Design Course. They are teaching enthusiastically and honestly. I am very Thankful to sir Muhammad Ali Mughal ");
var readLess = document.createElement("a");
readLess.setAttribute("href", "javascript:void(0)");
readLess.setAttribute("onclick", "showless()");
readLess.innerHTML="Show Less";
para.appendChild(content);
para.appendChild(readLess);
}


********************TASK 3********************

var students = ["John\xa0\xa0\xa0\xa01", "Jame\xa0\xa0\xa0\xa04",  "Mark\xa0\xa0\xa0\xa05", "Zuck\xa0\xa0\xa0\xa04", "Duke\xa0\xa0\xa0\xa010", "Nick\xa0\xa0\xa0\xa03", "Rick\xa0\xa0\xa0\xa02", "Andy\xa0\xa0\xa0\xa06", "Bens\xa0\xa0\xa0\xa010", "Evan\xa0\xa0\xa0\xa08"];
display();
function display()
{
document.writeln("Index Name Class");

for(var i = 0; i<students.length; i++)
{
    document.writeln(`<div>${i}\xa0\xa0\xa0\xa0${students[i]}\xa0\xa0\xa0\xa0<button onclick=del("${i}")>Delete</button></div><br> <br>`)   
}

document.writeln("<form> <label> Name </label> <input type='text' id='name'> <br> <label> Class </label> <input type='text' id='class'> <br> <input type='button' value='submit' onclick='submitform()'> </form>")

}

function del(x)
{
    var temp=[];
    for(var i=0; i<students.length; i++)
    {
        if(i==x)
            continue;
        else
            temp.push(students[i]);
    }
    students=temp;
    document.body.innerHTML="";
    display();
}


function submitform()
{
    var studentData = document.getElementById("name").value;
    studentData+="\xa0\xa0\xa0\xa0"+document.getElementById("class").value;
    students.push(studentData);
    document.body.innerHTML="";
    display();
}



==============================================CHAPTER 58-67==============================================

********************TASK 1********************


//i
var mainContent = document.getElementById("main-content");
var resultDiv=document.getElementById("result");

//ii
for(var i=0; i<mainContent.childNodes.length; i++)
{
    resultDiv.innerHTML+="Element: " + mainContent.childNodes[i] + "<br>";
}

resultDiv.innerHTML+="<br><br>";

//iii
var renderElements = document.getElementsByClassName("render");
for(var i=0; i<renderElements.length; i++)
{
    resultDiv.innerHTML+="Inner HTML of class render element " +(i+1)+ " " + renderElements[i].innerHTML + "<br>";
}

//iv and v
document.getElementById("first-name").value="Ghulam";
document.getElementById("last-name").value="Yasin";
document.getElementById("email").value="yasin.ahmed01@gmail.com";


********************TASK 2********************

var resultDiv=document.getElementById("result");

//i
var formContent = document.getElementById("form-content");
if(formContent.nodeType==1)
resultDiv.innerHTML+="Node type of form content is element node (p or div) <br>";
else if(formContent.nodeType==3)
resultDiv.innerHTML+="Node type of form content is text node <br>";

resultDiv.innerHTML+="<br><br>";

//ii
var lastName = document.getElementById("lastName");
resultDiv.innerHTML+="Node type of lastName is "+ lastName.nodeType+ " <br>";
resultDiv.innerHTML+="Child node of lastName is " + lastName.childNodes[0] + "<br>";

resultDiv.innerHTML+="<br><br>";

//iii
var updatedNode=document.createTextNode("Last Name: John");
lastName.replaceChild(updatedNode, lastName.childNodes[0]);


//iv
var firstChild = document.getElementById("form-content").firstChild;
var lastChild = document.getElementById("form-content").lastChild;
resultDiv.innerHTML+="First child of form-content is "+firstChild+"<br>";
resultDiv.innerHTML+="Last child of form-content is "+lastChild+"<br>";

resultDiv.innerHTML+="<br><br>";

//v
var nextSib = lastName.nextSibling;
var prevSib = lastName.previousSibling;
resultDiv.innerHTML+="Previous sibling of lastName "+prevSib+"<br>";
resultDiv.innerHTML+="Next sibling of lastName "+nextSib+"<br>";


//vi
var email = document.getElementById("email");
var emailNode=email.nodeType;
var emailParent=email.parentElement;
resultDiv.innerHTML+="<br><br>";
resultDiv.innerHTML+="Node type of email is "+emailNode+"<br>";
resultDiv.innerHTML+="Parent of Email is "+emailParent+"<br>";
*/


