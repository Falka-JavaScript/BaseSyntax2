const currentYear = 2022;
const dollarToEuroCurrency = 0.896;

function SayHello(){
    let enteredName = prompt("Enter your name:","");
    alert("Hello "+enteredName+"!");
}

function calculateAge(){
    let enteredYear = prompt("Enter your birth year:","");
    if(enteredYear == null || enteredYear==undefined || enteredYear=="")
        alert("Try again!");
    else{
        let yourAge = currentYear-(+enteredYear);
        if(yourAge<0 || isNaN(yourAge))
            alert("Wrong input year!");
        else
            alert("Your age is "+yourAge);
    }
}

function SquarePerimetr(){
    let distance = prompt("Enter the side of the square","");
    distance = parseInt(distance);
    if(!isNaN(distance) && distance>=0)
        alert("Perimetr is " + distance*4);
    else
        alert("Wrong input!");
}

function calculateAreaOfCircle(){
    let radius = prompt("Enter circle radius: ","");
    radius = parseInt(radius);
    if(!isNaN(radius) && radius>=0)
        alert("Area is "+(3.14*(radius**2)));
    else
        alert("Wrong input!");
}

function calculateSpeed(){
    let distance = prompt("Enter distances beetwen cities: ","");
    let time = prompt("Enter time in hours that you want to spend on trip: ","");
    let speed = parseFloat(distance)/parseFloat(time);
    if(speed!=undefined && !isNaN(speed)&& speed!=null)
        alert("You need to move " + speed+"km/h to reach destination point in time");
    else
        alert("You entered wrong number!"); 
}

function convertDollarsToEuro(){
    let amount = parseFloat(prompt("Enter sum in dollars: ",""));
    if(amount!=undefined && !isNaN(amount)&& amount!=null)
        alert(amount+"$ is " + amount*dollarToEuroCurrency+" euro");
    else
        alert("You entered wrong number!");
}

function FileCapacity(){
    let size = parseFloat(prompt("Enter size in Gb: ",""));
    size = size*1024;//Converting to MB
    let fileSize=820;
    let count=0;
    while(size>=0){
        size -= fileSize;
        count++;
    }
    count--;
    if(!isNaN(count) && count>0)
        alert("You can put " + count+" files to the drive","");
        else
        alert("Wrong input!");
}

function HowManyCanYouBuy(){
    let money = parseInt(prompt("Enter how many money fo you have: ",""));
    let price = parseInt(prompt("Enter price of one chocolate: ",""));
    if(price!==0 && price!=null && price!=undefined && !isNaN(price)){
        alert("You can buy: "+parseInt(money/price)+" chocolates");
    }else{
        alert("Wrong input!");
    }
}

function BackwardNumber(){
    let number = prompt("Enter number: ","");
    let firstDigit = number[0];
    let secoundDigit = number[1];
    let thirdDigit = number[2];
    alert("Backward number is: "+thirdDigit.toString()+secoundDigit.toString()+firstDigit.toString());
}

function OddCheck(){
    let number = parseInt(prompt("Enter number: ",""));
    if((number&1)==0)
        alert("Number is even")
    else
        alert("Number is odd");
}