// 1st random number
var randomNumber1 = Math.random();
randomNumber1=randomNumber1*6;
randomNumber1=Math.floor(randomNumber1)+1;
// 2nd random number
var randomNumber2 = Math.random();
randomNumber2=randomNumber2*6;
randomNumber2=Math.floor(randomNumber2)+1;
//assigning images
var image1="images/dice"+randomNumber1+".png";
var image2="images/dice"+randomNumber2+".png";

//changing image
document.querySelector(".dice .img1").setAttribute("src",image1);
document.querySelector(".dice .img2").setAttribute("src",image2);

//Displaying the winner
if(randomNumber1==randomNumber2)
{
  document.querySelector("h1").innerHTML ="DRAW";
}

else if (randomNumber1>randomNumber2)
 {
  document.querySelector("h1").innerHTML ="Player 1 is the winner!!";
}

else if(randomNumber1<randomNumber2)
{
  document.querySelector("h1").innerHTML ="Player 2 is the winner!!";
}

else
{
document.querySelector("h1").innerHTML ="Please REFRESH th screen";  
}
