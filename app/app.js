var result;
var userName= "user";
var email = "email"
var input = prompt("input user name");
if(input ==="user" || input ==="email")
{
    document.write("Welcome </br>");
    var num = prompt("Plz input the percentage")
if(num > 100 || num<0){
result = "You have enter Wrong percentage "
    document.write(result);
}
if(num > 90 && num<=100) {
result = "A one "
    document.write(result);
}

else if(num >= 80 && num<=89){
result = "A"
   document.write(result);
}

else if(num >= 70 && num<=79){
result = "B"
    document.write(result);
}

else if(num >= 60 && num<=69){
result = "C"
   document.write(result);
}


else{
    result = "fail"

    document.write(result);
}
}
else{
    result = "Plz input user name or email"

    document.write(result);
}

document.write("Your grade is "+ result);


var name = prompt("Please inter your name")
alert("hi, " +name);
document.write("</br>");
var num =prompt("enter the number to print its multiplication table")
document.write(num+" x 1 = "+ num * 1);
document.write("</br>"+num+" x 2 = "+ 2*num);
document.write(" </br>"+num+" x"+ "3 = "+ num * 3);
document.write(" </br>"+num +" x 4 = " + num * 4);
document.write(" </br>"+num +" x 5 = " +num * 5);
document.write(" </br>"+num +" x 6 = " +num * 6);
document.write(" </br>"+num +" x 7 = " +num * 7);
document.write(" </br>"+num +" x 8 = " +num * 8);
document.write(" </br>"+num +" x 9 = " +num * 9);
document.write(" </br>"+num + " x 10 = " +num * 10);

document.write("</br>");



var city = prompt("please enter your city");
alert("Wel come to city of light");

var signal = prompt("Input the traffic signal")
if(signal == "red" || signal =="Red"){
    document.write(signal +" Vehicles must stop");
} else if(signal == "yellow" || signal == "Yellow" )
{
    document.write(signal + " vehicles shoud get ready to move")
} else if (signal == "blue" || signal =="Blue"){
document.write(signal + " Vehicles can move now")
}else {
    document.write("Wrong input");
}


var gender = prompt("Input Your gender")
if(gender =="male" || gender==="Male"){
    document.write("Good morning Sir");
}
else if(gender ==="female" || gender==="Female"){
    document.write("Good Morning Ma'am")
}else{
    document.write("wrong input")
}

var mAge = prompt("input maximum age");
var cAge = prompt("Input Current age")
if(mAge <= cAge){
    alert("You are welcome");
}
else {
    alert("You are not Welcome");
}

var fuel =prompt("input Fuel plz");
if(fuel== "0.25" || fuel==0.25 ){
    alert("please refill the fuel in your car")
}
else {
    alert("You have fuel");
}

var a=4;
if(++a===5){
    alert("Given condition for variable a is true");
}
var b =82;
if(b++===83){
    alert("Given condition for avriable b is true")
}
var c=12;
if(c++===13){
    alert("Condition one is true");
}
else if(c===13){
    alert("condtion 2 is true")
}
else if(++c <14){
    alert("Contion 3 is true")
}
if(c===14){
    alert("condition 4 is true")
}else {
    alert("c condition both are wrong")
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost +laborCost;
if(totalCost === laborCost+materialCost){
    alert("The Cost equals");
}
if(true){
    alert("True")
}
if(false){
    alert("false")
}
if("car"< "cat"){
    alert("Car is smaller that cat")
}

var subject1 = +prompt("Plz input your Subject1 no")
var subject2 = +prompt("Plz input your Subject2 no")
var subject3 = +prompt("Plz input your Subject3 no")
totalsubject = subject1 +subject2+subject3;
document.write("<h1> Marks Sheet </h1>")
document.write("Mark Obtained : " + totalsubject)
mark = (totalsubject/300) *100;

if(mark >= 80 && mark<= 100){
    document.write("</br>Percentage : " + mark + "%")
    document.write("</br>Grade : A-one" )
       document.write("</br> Remarks : Perfect")    
}
else if(mark >= 70 && mark<= 79){
    document.write("</br>Percentage : " + mark + "%")
    document.write("</br>Grade : A" )
       document.write("</br> Remarks : Good Work")
}
else if(mark >= 60 && mark<= 69){
    document.write("</br>Percentage : " + mark + "%")
    document.write("</br>Grade : B")
    document.write("</br> Remarks : You need to Improve")
}
else if( mark< 60){
    document.write("</br>Percentage : " + mark + "%")
    document.write("</br>Grade : Fail ")
    document.write("Remarks: You need Hard Work ")
}
else{
    document.write("</br>Wrong data");
}

var item1 = prompt("Input the name of item1");

var item2 = prompt("Input the name of item2");

var price1 = +prompt("Input the price of item1");

var price2 = +prompt("Input the price of item2");

var quanty1 = +prompt("Input the Quantity of item1");

var quanty2 = +prompt("Input the Quantity of item2");
var shipping = +prompt("Input the Shipping charges");

var price3 = price1 * quanty1;
var price4 = price2 * quanty2;
 var amount = price3 + price4;
 var toamount = amount +shipping;
 var pre = toamount/10;
 var final = toamount - pre;
document.write("<h1>Shopping Cart</h1>");
 document.write(" </br> Price of " +item1 + " is "+ price1)
 document.write("</br> Price of " +item2 + " is "+ price2)
 document.write("</br> Quantity of " +item1 + " is "+ quanty1)
 document.write("</br> quanty of " +item2 + " is "+ quanty2)
 document.write("</br> Shipping Charges " +item1 )

 document.write("</br> Total cost of your Order is "+ toamount +" PKR")
 document.write("</br> Discount price " + final + " PKR")

var seret =+prompt("input secret no");
if(seret === 5){
    alert("You Win the game");
}
else if(seret === 4 || seret===6){
    document.write("You are near to win");
 }
var nuum =+prompt("enter the no");
if(nuum%3 ==0){
    document.write("The no is divided by 3")
} else {
    document.write("it is not divided by three")
}
 
 
 var teamName1 =prompt("input the team1 name");
 var  teamScore =+prompt("input the team1 Score ");

 var teamName2 =prompt("input the team2 name");
 var  teamScore2 =+prompt( "</br>"+"input the team2 Score ");
 if(teamScore >teamScore2){
     alert(teamName1+" win the match")
 } else if(teamScore < teamScore2){
     alert(teamName2+ " win the match")
 } else if(teamScore === teamScore2){
     alert(teamName1 +" " +teamName2 + " tie and score is" + teamScore + " "+ teamScore2)
 }

var check = prompt("plz input any character either it is string or variable")
alert(typeof check)

var checkInput =+prompt("Plz input the no program will tell you it is even or odd")
if(checkInput%2 ==0){
    document.write("No is odd ")
}else
{
    document.write("No is even");
}

var temp =+prompt("Input the temperature")
if(temp>40){
    document.write("It is too hot outside")
}else if(temp>30){
    document.write("The weather today is normal")
}
else if(temp >20){
    document.write("Today's Weather is cool")
}
else if(temp>10){
    document.write("OMH! Today's weather is so Cool")
}else {
    document.write("Invalid Input")
}

var calNo =+prompt("Input the no")
var calNo2 =+prompt("Input the no2")
var sign = prompt("Input + for addtiont, - for subtrat , * for multi, / for divide, % for reminder")
if(sign === "+"){
    alert("The sum two no is "+ (calNo+calNo2) );
}
else if(sign === "-"){
    alert("The sub two no is "+ (calNo-calNo2) );
}
else if(sign === "/"){
    alert("The divide two no is "+ (calNo/calNo2) );
}
if(sign === "*"){
    alert("The multi two no is "+ (calNo*calNo2) );
}
if(sign === "%"){
    alert("The reminder two no is "+ (calNo%calNo2) );
}

var day = prompt("input the name of days")
if(day === "monday" || day == "mon" || day== "tuesday" || day == "tues" || day === "Wednesday" || day == "wed" || day== "thursday" || day == "thurs" || day == "Friday" || day=="friday" || day =="fri"){
    alert("It's a week day");
}
else if(day === "Saturday" || day == "sat" || day== "saturday" ){
    alert("It is week end ")
}
else if(day === "Sunday" || day == "sun" || day== "sunday" || day == "Sun"){
    alert("Yay! It's a holiday")
}
else{
    alert("Invalid Input")
}

var userScore = prompt("Input the Score")
if(userScore > 50){
    alert("Yor are pass")
}else{
    alert("Your are fail")
}

var numTake =+prompt("Input the no")
var numTake2 =+prompt("Input the no2")
if(numTake>numTake2){
    alert(numTake+ " Is greater than " + numTake2)
}
else if(numTake<numTake2){
    alert(numTake2+ " Is greater than " + numTake)
}
if(numTake == numTake2){
    alert(numTake+ " Is equal " + numTake2)
}

var int = prompt("Plz Input Language code for example en, ge, fr  ")
if(int =="en"){
    alert("Hello World in English")
}
else if(int == "ge"){
    alert("Hallo Welt in Germany")
}
else if(int == "fr"){
    alert("Banjour le monde in French")
}

var numb = prompt("Input the no posite or negative")
if(numb >=0){
    alert("Num is positive")
}else {
    alert("Num is negative")
}

var noun = prompt("Input the Noun")
var nume =+prompt("Input the no")
alert(nume +" " +noun)