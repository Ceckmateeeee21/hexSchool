
$(document).ready(function(){
    $('h1').click(function(event){
    //$('p').toggle()(); //開關，原本開就關，原本關就開
       //$('p').toggle();//滑出開關
       
       //$('.p2').slideToggle(5000);//滑出開關
       //$('p').slideDown(3000).slideUp(3000);//鍊式效果，在舊的動作後加上點就可以連接新動作
        //$('.p1').addClass('orange');//.class的p1加入js 的css 
        $('.p1').toggleClass('orange');//開關
       });
   });
   