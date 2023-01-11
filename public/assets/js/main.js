$('.c-drawer-btns').on('click',function(){
    $('.c-drawer-btns').toggleClass('is-active');
    $('.c-drawer-btns span').toggleClass('is-active');
    $('.p-drawer-content').toggleClass('is-active');
    $('.u-drawer-background').toggleClass('is-active');
    $('body').toggleClass('scroll-lock');
});

$('.c-drawer-item a').on('click',function(){
$('.c-drawer-btns , .c-drawer-btns span').removeClass('is-active');
$('.p-drawer-content').removeClass('is-active');
$('.u-drawer-background').removeClass('is-active');
})