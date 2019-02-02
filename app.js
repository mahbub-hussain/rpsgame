$(document).ready(function(){
   $("#starterpage").show()
   $("#game-wrap").hide()
   
   $("#letsplay").click(function(){
      $("#starterpage ,.player-content").hide()
     $("#game-wrap ,.stay-content").show();
    
     $(".ranc").html("<img src='img/com.png'>")
    
     //reset everything;
     reset()
  })

     $(".exit").click(function(){
     $("#game-wrap").hide();
     $("#starterpage").show()
  })




$("button").click(function(){
   $(".stay-content").hide()
   $(".player-content").show()
   let arr = ["rock.png","paper.png","scisso.png"];
   let arrrm = arr[Math.floor(Math.random()*arr.length)];
   
   $(".ranc").html("<img class='rancimg' src ="+arrrm+">");
   
               
              let hum = $(this).attr("id").length
              let com = $(".ranc img").attr("src").length
             //just compare the attr length where 
             //rock.png = 8; paper.png =9; scisso.png = 10;
              if(hum === com){
              $(".demo").html("its a tie")
              }
              else if(hum === 9 && com === 8 || hum === 8 && com === 10 || hum === 10 && com === 9)
              {
                  if(hum === 9 && com === 8){
                  $(".demo").html("Paper Wraps Rock")
                  } 
                  if(hum === 8 && com === 10){
                  $(".demo").html("Rock Smashes Seissor")
                  }
                  if(hum === 10 && com === 9){
                     $(".demo").html("Seissor Cuts Paper")
                  }
                  humcount++
                  $(".humcount").html(humcount)
            }
            else{                  
                  if(hum === 8 && com === 9){
                  $(".demo").html("Paper Wraps Rock")
                  } 
                  if(hum === 10 && com === 8){
                  $(".demo").html("Rock Smashes Seissor")
                  }
                  if(hum === 9 && com === 10){
                     $(".demo").html("Seissor Cuts Paper")
                  }
                  comcount++
                  $(".comcount").html(comcount)
            }
               
           
             if(hum===8){
                $(".rock").css("visibility","visible")
                $(".paper , .scissors").css("visibility","hidden")
             }else if(hum===9){
                $(".paper").css("visibility","visible")
                $(".rock , .scissors").css("visibility","hidden")
             } else{
                $(".scissors").css("visibility","visible")
                $(".paper , .rock").css("visibility","hidden")
             }
        
           
   
   })
   $(".reset").click(function(){
  reset()
   })   
    function reset(){
      humcount = 0;
      comcount= 0;
      $(".comcount").html(comcount)
      $(".humcount").html(humcount)
      }
let humcount=0;
let comcount=0;

   })
   

   
  
