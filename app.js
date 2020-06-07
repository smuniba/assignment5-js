//Chapter 1
//Question 1
alert("Hello! Welcome to my Website");
//Question 2
alert("JavaScript Alert\n\nError! Please enter a valid password.");
//Question 3
alert("JavaScript Alert\n\nWelcome to JS Land...\nHappy Coding!");
//Question 4
alert("JavaScript Alert\n\nWelcome to JS Land...");
alert("JavaScript Alert\n\nHappy Coding!\n☐Prevent this page from creating additional dialogs.")
//Question 5
console.log("JavaScript Alert\n\nHello... I can run JS through my web browser's console")
//Chapter 2
//Question 1
var username;
//Question 2
var myName = "Syeda Muniba Faisal";
//Question 3
var message = "Hello World";
alert(message);
//Question 4
var name = "Jhone Doe";
var age = "15 years old";
var certification = "Certified Mobile Application Development";
alert(name);
alert(age);
alert(certification); 
//Question 5
var food = "PIZZA";
food1 = food.slice(0,5);
food2 = food.slice(0,4);
food3 = food.slice(0,3);
food4 = food.slice(0,2);
food5 = food.slice(0,1);
alert(food1+"\n"+food2+"\n"+food3+"\n"+food4+"\n"+food5);
//Another Solution
document.write("Chapter 2");
document.write("<br>Question 5<br>");
for(var i=food.length;i>0;i--)
{
    var food1 = food.slice(0,i);
    alert(food1);
    document.write(food1+"<br>");
}
//Question 6
var email = "muniba.faisal.qadri@gmail.com";
alert("My email address is "+email);
//Question 7
var book = "A smarter way to learn JavaScript.";
alert("I am trying to learn from the Book "+book);
//Question 8
document.write("<br>Chapter 5 Question 8<br>");
document.write("Yah! I can write HTML content through JavaScript"); 
//Question 9
document.write("<br>Chapter 5 Question 9<br>");
var str1 = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(str1);
document.write("<br>")
document.write(str1);
//Chapter 3
//Question 1
var age = 20;
alert("I am "+age+" years old.");
//Question 2
var times = 14;
alert("You have visited this site "+times+" times");
//Question 3
var birthYear = 2000;
document.write("<br>My birth year is "+birthYear+"<br>Data type of my declared variable is number.");
//Question 4
var name = prompt("Enter name:");
var title = prompt("Enter product title:");
var quantity = prompt("Enter number of products to be ordered:");
document.write("<br>"+name+" ordered "+quantity+" "+title+" on XYZ Clothing store.");
//Chapter 4
//Question 1
var name ;var fatherName;var age ;
//Question 2
// var name;var fatherName;var $age;var car_Name;var _house;
// var 123;var ?house;var alert;var 12_house;var !@##;
//Chapter 5
//Question 1
var num1 = +prompt("Enter first number: ");
var num2 = +prompt("Enter second number: ");
var result = num1 + num2;
document.write("<br>Sum of "+num1+" and "+num2+" is "+result);
//Question 2
var num1 = +prompt("Enter first number: ");
var num2 = +prompt("Enter second number: ");
var result1 = num1 - num2;
var result2 = num1 * num2;
var result3 = num1 / num2;
var result4 = num1 % num2;
document.write("<br>Subtraction of "+num1+" and "+num2+" is "+result1);
document.write("<br>Multiplication of "+num1+" and "+num2+" is "+result2);
document.write("<br>Division of "+num1+" and "+num2+" is "+result3);
document.write("<br>Modulus of "+num1+" and "+num2+" is "+result4);
//Question 3
var num1;
document.write("<br>Value after variable declaration is:"+num1);
num1 = 10;
document.write("<br>Initial Value: "+num1);
num1 = num1 + 1;
document.write("<br>Value after increment is: "+num1);
num1 = num1 + 7;
document.write("<br>Value after addition is: "+num1);
num1 = num1 - 1;
document.write("<br>Value after decrement is: "+num1);
num1 = num1 % 3;
document.write("<br>The remainder is: "+num1);
//Question 4
var price = 600;
var cost = price * 5;
document.write("<br>Total cost to buy 5 tickets to a movie is "+cost+"PKR");
//Question 6
var celsius = 25;
var result = (celsius*(9/5))+32;
var fahrenheit = 70;
var result1 = (fahrenheit-32)*(5/9);
document.write("<br>"+celsius+"oC"+"is "+result+"oF");
document.write("<br>"+fahrenheit+"oF"+"is "+result1+"oC");
//Question 10
var number = 10;
var result = ((number + 5) * 10)/2;
document.write("<br>The result is: "+result);
//Chapter 6-9
//Question 1
var a = 10;
document.write("<br>Result: ");
document.write("<br>The value of a is: "+a);
document.write("<br>.....................................");
++a;
document.write("<br>The value of ++a is: "+a);
document.write("<br>Now the value of a is: "+a);

document.write("<br>The value of a++ is: "+a);
a++;
document.write("<br>Now the value of a is: "+a);
--a;
document.write("<br>The value of --a is: "+a);
document.write("<br>Now the value of a is: "+a);

document.write("<br>The value of a-- is: "+a);
a--;
document.write("<br>Now the value of a is: "+a);
//Question 2
var a = 2;
var b = 1;
var result = --a - --b + ++b + b--;
document.write("<br>--a = 1");
document.write("<br>--a - --b = 1 - 0 = 1");
document.write("<br>--a - --b + ++b = 1 - 0 + 1 = 2");
document.write("<br>--a - --b + ++b + b-- = 1 - 0 + 1 + 1 = 3");
document.write("<br>a is 1");
document.write("<br>b is 2")
document.write("<br>result is "+result);
//Question 3
var name = prompt("Enter name: ");
alert("Hello! "+name+" Good Morning");
//Question 5
var number1 = +prompt("Enter number to print its table: ");
for(var i=1;i<=10;i++)
{
    if(number1 == "")
    {
        document.write("<br>");
        document.write("5x"+i+"="+5*i);
    }
else
{
    document.write("<br>");
    document.write(number1+"x"+i+"="+number1*i);
    document.write("<br>");
}
}
//Chapter 9-11
//Question 1
var city = prompt("Enter city name: ");
if(city === "Karachi")
{
    alert("Welcom to city of lights.");
}
//Question 2
var gender = prompt("Enter your gender: ");
if(gender === "male" || gender === "Male")
{
    alert("Good Morning Sir.");
}
else if(gender === "female" || gender === "Female")
{
    alert("Good Morning Ma’am.");
}
//Question 4
var fuel = +prompt("Enter remaining fuel in your car in litres: ");
if(fuel < 0.25)
{
    alert("Please refill the fuel in your car")
}
//Question 5
//a
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
//b no output
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
//c
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}//correct 
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}//correct
//d output
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
//e
if (true){
    alert("True");
    }//correct
    if (false){
    alert("False");
    }
//f
if("car" < "cat"){
    alert("car is smaller than cat");
    }
//Question 7
var secret = 5;
var secret1 = +prompt("Guess the secret number: ");
if(secret1 === 5)
{
    alert("Bingo! Correct Answer")
}
else if((secret1=secret1+1) === 5)
{
    alert("Close enough to the correct answer.");
}
//Question 8
var numb = +prompt("Enter number to check whether it's divisible by 3 or not: ");
if(numb%3 == 0)
{
    alert("The number is divisible by 3");
}
else
{
    alert("Number isn't divisible by 3");
}
//Question 9
var numb1 = +prompt("Enter number to know if it's even or odd: ");
if(numb1%2 == 0)
{
    alert("The number is even");
}
else
{
    alert("The number is odd");
}
//Question 10
var temp = +prompt("Enter temperature: ");
if(temp > 40)
{
    alert("It is hot outside.");
}
else if(temp > 30)
{
    alert("The Weather today is Normal.");
}
else if(temp > 20)
{
    alert("Today's Weather is Cool.");
}
else if(temp > 10)
{
    alert("OMG! Today's weather is so Cool.");
}
//Question 11
document.write("<br>");
var firstNumber = +prompt("Enter first number for calculation: ");
var secondNumber = +prompt("Enter second number for calculation: ");
var operator = prompt("Enter operator: ");
var result = "";
if(operator == "+")
{
    result = firstNumber + secondNumber;
    alert(firstNumber+operator+secondNumber+"="+result);
}
else if(operator == "-")
{
    result = firstNumber - secondNumber;
    alert(firstNumber+operator+secondNumber+"="+result);
}
else if(operator == "*")
{
    result = firstNumber * secondNumber;
    alert(firstNumber+operator+secondNumber+"="+result);
}
else if(operator == "/")
{
    result = firstNumber / secondNumber;
    alert(firstNumber+operator+secondNumber+"="+result);
}
else if(operator == "%")
{
    result = firstNumber % secondNumber;
    alert(firstNumber+operator+secondNumber+"="+result);
}
//Chapter 12-13
//Question 1
var str2 = prompt("Enter anything other than special character:");
if(str2 == "0" || str2 == "1" || str2 == "2" || str2 == "3" || str2 == "4" || str2 == "5" || str2 == "6" || str2 == "7" || str2 == "8" || str2 == "9")
{
    alert("It's a number");
}
else if(str2 >= "65" && str2 <= "90")
{
    alert("It's an uppercase letter");
}
else if(str2 >= "97" && str2 <= "122")
{
    alert("It's a lowercase letter");
}
//Question 2
var int1 = +prompt("Enter first integer: ");
var int2 = +prompt("Enter second integer: ");
if(int1 > int2)
{
    alert("Integer 1 is larger");
}
else if(int2 > int1)
{
    alert("Integer 2 is larger");
}
else if(int1 === int2)
{
    alert("Both are equal");
}
//Question 3
var numb1 = +prompt("Enter a number to know if it's positive,negative or zero")
if(numb1 > 0)
{
    alert("The number is positive")
}
else if(numb1 < 0)
{
    alert("The number is negative")
}
else
{
    alert("The number entered is zero")
}
//Question 4
var str3 = prompt("Enter a character: ");
if(str3=="a" || str3=="A" || str3=="e" || str3=="E" || str3=="i" || str3=="I" || str3=="o" || str3=="O" || str3=="u" || str3=="U")
{
    alert("True");
}
else
{
    alert("False");
}
//Question 5
var password = "abc123";
var pass = prompt("Enter your password: ");
if(pass == "")
{
    alert("Please enter your password");
}
else if(pass == password)
{
    alert("Correct! The password you entered matches the original password");
}
else
{
    alert("Incorrect password");
}
//Question 6
var greeting;
var hour = 13;
if (hour < 18) 
{
    greeting = "Good day";
    document.write(greeting);
}
else
{
    greeting = "Good evening";
    document.write(greeting);
}
//Question 7
var time = prompt("Enter time in 24 hours clock format e.g 1900 as 7pm");
if(time >= "0000" && time < "1200")
{
    alert("Good Morning");
}
else if(time >= "1200" && time < "1700")
{
    alert("Good Afternoon");
}
else if(time >= "1700" && time < "2100")
{
    alert("Good Evening");
}
else if(time >= "2100" && time <= "2359")
{
    alert("Good Night");
}
else
{
    alert("You didn't enter the time of corret clock format");
}
//Chapter 14-16
//Question 1
var arr1 = [];
//Question 2
var arr2 = {};
//Question 3
var str4 = ["car","bike","bicycle"];
//Question 4
var arr3 = [2,3,4,5];
//Question 5
var boolArray = [true,false];
//Question 6
var arr4 = ["car",1,"bike",true];
//Chapter 17-20
//Question 1
var multi = [
    ["Apple",2],
    ["Banana",4],
    ["Orange",6]
];
//Question 2
var multi = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];
document.write("<br>");
for(var i=0;i<multi.length;i++)
{
    for(var j=0;j<multi[i].length;j++)
    {
        document.write(multi[i][j]);
    }
    document.write("<br>");
}
//Question 3
document.write("Counting from 1-10");
document.write("<br>");
for(var i=1;i<11;i++)
{
    document.write(i);
    document.write("<br>");
}
//Question 4
document.write("<br>");
var tab = +prompt("Enter number to display its multiplication table: ");
document.write("Multiplication Table of: "+tab);
document.write("<br>");
var till = +prompt("Enter the length till when the table should be displayed: ");
document.write("Length: "+till);
document.write("<br>");
for(var i=1;i<=till;i++)
{
    document.write(tab+"x"+i+"="+tab*i);
    document.write("<br>");
}
//Question 5
var fruits = ["apple","banana","mango","orange","strawberry"];
document.write("<br>");
for(var i=0;i<fruits.length;i++)
{
    document.write(fruits[i]);
    document.write("<br>");
}
for(var i=0;i<fruits.length;i++)
{
    document.write("<br>");
    document.write("Element at index "+i+" is "+fruits[i]);
}
//Question 7
var items = ["cake","apple pie","cookie","chips","patties"];
var search = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
for(var i=0;i<items.length;i++)
{
    if(search==items[i])
    {
        alert(search+" is available at index "+i+" in our bakery.");
        break;
    }
    else
    {
    alert("We are sorry "+search+" isn't available in our bakery.");
    }
}
//Question 8
var arr5 = [24,53,78,91,12];
document.write("<br>");
document.write("Array items: "+arr5);
document.write("<br>");
for(var i=0;i<arr5.length;i++)
{
    if(arr5[i]>arr5[i+1])
    {
        document.write("The largest number is "+arr5[i]);
    }
}
//Question 9
var arr5 = [24,53,78,91,12];
document.write("<br>");
document.write("Array items: "+arr5);
document.write("<br>");
for(var i=arr5.length;i>0;i--)
{
    if(arr5[i]<arr5[i-1])
    {
        document.write("The smallest number is "+arr5[i]);
    }
}
//Question 10
document.write("<br>");
document.write("<br>");
document.write("Multiples of 5")
document.write("<br>");
for(var i=5;i<=100;i++)
{
    if(i%5 == 0)
    {
        document.write(i+",");
    }
}