$(window).on('mousemove', function(e){
  var xcor =e.pageX; //pointer x position
  var ycor =e.pageY; //pointer y position
  
   $('.pointer').css({
     top: ycor,     //setting position x
     left: xcor		//setting position y
    
   })
})