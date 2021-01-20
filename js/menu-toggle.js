let menuMobile = $('#menu-mobile');
menuMobile.hide();

$('#menu-toggle').click((e)=> {
    e.preventDefault();
    menuMobile.stop().toggle();
});