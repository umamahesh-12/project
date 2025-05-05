const DICE =document.getElementById('dice-btn');
function dicegame() {
    var randomDice=Math.floor((Math.random()*6)+1);
    var diceLocation="red/"+"dice-number-"+randomDice+".png";
    var img1 = document.queryselectorALL("img")[0];
    img1.setAttribute("src",diceLocation);

    var randomDice2=Math.floor((Math.random()*6)+1);
    var diceLocation2="red/"+"dice-number-"+randomDice2+".png";
    var img2 = document.queryselectorALL("img")[1];
    img2.setAttribute("src",diceLocation2);

if (randomDice > randomDice2){
    document.querySelector("h1").innerHTML="🏆 player 1 win!";
}
   else if (randomDice > randomDice2){
        document.querySelector("h1").innerHTML="🏆 player 2 win!";
}
else if (randomDice = randomDice2){
    document.querySelector("h1").innerHTML="🏆 Match draw!🏆";
}
else {
    document.querySelector("h1").innerHTML="something error..";
}
dice.innerHTML="play again!"
}