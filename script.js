$(window).scroll(function(){
  let wScroll = Math.round($(this).scrollTop());
  
  $('.jumbotron h5').css({
   'transform': 'translate(0, '+ wScroll*2 +'%)'
  });
  $('.jumbotron img').css({
 'transform': 'translate(0, '+ wScroll/4 +'%)'
  });
  $('#about p').css({
  'transform': 'translate(0, -50px)'
  });
  
  $('#about h3').css({
  'transform': 'translate(0, -50px)'
  });
  console.log(wScroll)
  if (wScroll > 230){
  $('#about p').css({
  'transform': 'translate(0,0)'
  });
  $('#about h3').css({
  'transform': 'translate(0,0)'
  });
  
  }else if(wScroll < 50){
  $('#about p').css({
  'transform': 'translate(0,0)'
  });
  $('#about h3').css({
  'transform': 'translate(0,0)'
  });
  };
  
  let project = $(`#project`).offset().top-200 ;
 // console.log(project)
  if(wScroll > project) {
    $('#project .card').each(function(i){
      setTimeout(function(){
      $('#project .card').eq(i).addClass("cMuncul")
      }, 500 * (i+1));
    });
   
  }else if(wScroll < 200) {
  $('#project .card').removeClass("cMuncul")
  };
  
    
  
});

$(window).on('load', function(){
  $('.pKiri').addClass("muncul")
  $('.pKanan').addClass("muncul")
  $('#about h3').addClass("about")
  
});