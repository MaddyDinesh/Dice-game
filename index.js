
  var randomNumber1=Math.floor((Math.random() * 6 ))+1;
  var randomNumber2=Math.floor((Math.random()*6)) + 1;
   var randimg1="images/dice" + randomNumber1 + ".png";
   var randimg2="images/dice" + randomNumber2 + ".png";
   document.querySelector(".img6").setAttribute("src" , randimg1);
   document.querySelector(".img2").setAttribute("src" , randimg2);

   if(randomNumber1 > randomNumber2)
   {
     document.querySelector("h1").innerHTML = "⛳ Player 1 wins" ;
    }
   else if (randomNumber1 < randomNumber2){
      document.querySelector("h1").innerHTML="⛳ Player 2 wins";
    }
    else{
      document.querySelector("h1").innerHTML="🙄 draw";
    }
