$(document).ready(function(){
// console.log('działam')
$('.hamburger').click(function(){
$('.main-menu').toggleClass('open');
});

$('main-menu-item a').click(function(e){
e.prevenyDefault();

$('body').fadeOut(2000, function(){
    window.location.href = $(e.target).attr('href');
})
});

});