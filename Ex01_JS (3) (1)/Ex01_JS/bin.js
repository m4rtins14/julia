function mostrarMenu() {
    var menu = document.getElementById("nav-header");
    var icone = document.getElementById("icone");

    if (getComputedStyle(menu).display == 'none'){
        menu.style.display = "flex";
        icone.classList.remove("fa-bars");
        icone.classList.add("fa-times");
    } else {
        menu.style.display = "none";
        icone.classList.remove ("fa-times");
        icone.classList.add("fa-bars");
    }
}

$( ".menu-principal__item").toggle(function() {
    $(".menu-principal--fechado").show();
    $(".menu-principal--btn").show();
 }, function() {
    $(".menu-principal__btn").show();
 });

 jQuery(document).ready(function( $ ){
    var uls = $('#menu ul');
    uls.hide();
  
    $('#menu > li').click(function( e ){
      e.stopPropagation();
      uls.hide();
      $( this ).find('ul').show();
    });
    $('#menu ul').click(function( e ){
      e.stopPropagation();
    });
    $('body').click(function(){
      uls.hide();
    });
  });