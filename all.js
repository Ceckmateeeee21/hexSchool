
$(document).ready(function(){
  $('.p1').hide(); //開關，原本開就關，原本關就開
  $('.C-minus').hide()
 

      $('.C-plus').click(function(event){
    
            $('.p1').toggle();//滑出開關
            $('.C-plus').toggle();
            $('.C-minus').toggle();
            $('.faq-1').toggleClass('green');
            });

          $('.C-minus').click(function(event){
              $('.p1').toggle();//滑出開關
              $('.C-minus').toggle();
              $('.C-plus').toggle();
              $('.faq-1').removeClass('green');

             

           });
      $('.C-plus2').click(function(event){
              $('.p2').toggleClass('orange');
           });
      $('.C-plus3').click(function(event){
           $('.p3').toggleClass('orange');//開關css
          });
   });

   
   