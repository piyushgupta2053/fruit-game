 
var playing = false;
var score;
var trialsleft;
var step;
var action;
var fruits = ['apple', 'guava', 'greenapple', 'mango', 'orange'];
   
        //no
         //move fruit 1 step down
         //repeat step
$(function(){
  // click start reset
  $("#startreset").click(function(){
     //if we playing                 
         if(playing == true){
     //reload page
          location.reload();
  }  
         else{
          playing = true;
          score=0;   
          $("#scorevalue").html(score);
     //show trials left 
          $("#trialsleft").show();   
          trialsleft = 3;
             addhearts();
             
             $("#gameOver").hide();
      //change start button to reset button
          $("#startreset").html("Reset Game");
      //create random fruit
           startaction();  
              }
                         });
    $("#fruit1").mouseover(function(){
       score++;
        $("#scorevalue").html(score);
     //   document.getElementById("slicesound").play();
    $("#slicesound")[0].play();
        clearInterval(action);
        $("#fruit1").hide("explode", 500);
        setTimeout(startaction, 500);
    });
    
    
    
function addhearts(){
    $("#trialsleft").empty();
 for(i = 0; i < trialsleft; i++){
          $("#trialsleft").append('<img src="image/heart.png" class="life">');
         }   
}
function startaction(){
      $("#fruit1").show();
      choosefruit();
      $("#fruit1").css({'left' : Math.round(550*Math.random()) , 'top': -50});
    
   //generate random step
    step = 1+Math.round(5*Math.random());
    action = setInterval(function(){
       $("#fruit1").css('top', $("#fruit1").position().top + step);
        //move fruit by 1 step
       //check fruit is too low
        if($("#fruit1").position().top > $("#fruitcontainer").height()){
      //ant trials left
          if(trialsleft > 1){
            $("#fruit1").show();
      choosefruit();
      $("#fruit1").css({'left' : Math.round(550*Math.random()) , 'top': -50});
   //generate random step
    step = 1+Math.round(5*Math.random());
       //reduce trial by 1
              trialsleft--;
              addhearts();     
          } else{
           //game over
             playing = false;
    
              $("#startreset").html("Start Game");
              $("#gameOver").show();
             $("#gameOver").html('<p>Game Over!</p><p> your score is '+ score + '</p> ');
              $("#trialsleft").hide();
              stopAction();
          } 
}
            
    },10);
    
}
// generate a random fruit
function choosefruit(){
    $("#fruit1").attr('src' , 'image/' + fruits[Math.round(4*Math.random())] + '.png');
}
function stopAction(){
clearInterval(action);
    $("#fruit1").hide();

}
});