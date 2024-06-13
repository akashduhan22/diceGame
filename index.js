var randomNumber1 =Math.floor(Math.random()*6+1);//creates a random number from 1-6
var randomDiceImage="dice"+randomNumber1+".png";//creates the random image from dice1.png-dice6.png 
var imageRandom="/images/"+randomDiceImage;//creates the source of random image from /images/dice1.png to /images/dice6.png
var image1=document.querySelectorAll("img")[0];//selects the first image tag
image1.setAttribute("src",imageRandom);//changes the first image tags source

var randomNumber2 =Math.floor(Math.random()*6+1);
var randomDiceImage="dice"+randomNumber2+".png";
var imageRandom="/images/"+randomDiceImage;
var image2=document.querySelectorAll("img")[1];//selects the second image tag
image2.setAttribute("src",imageRandom);//changes the second image tag source 

if(randomNumber1>randomNumber2){
    document.querySelector("h1").textContent="🚩Player 1 Wins";
}
else if(randomNumber1<randomNumber2) {
    document.querySelector("h1").textContent="🚩Player 2 Wins";
}
else{
document.querySelector("h1").innerHTML="Match Ties🚩";
}