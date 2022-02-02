$(document).ready(function(){
  $('.header__burger').click(function(event){
    $('.header__burger, .menu__burger').toggleClass('active');
    $('body').toggleClass('lock')
    
  })
})

$(document).ready(function(){
  $('.header__list').click(function(event) {
    $('.header__burger, .menu__burger').removeClass('active');
    $('body').removeClass('lock');
  })
})