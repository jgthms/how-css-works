jQuery(document).ready(function ($) {

  $(window).load(function() {

    $('[data-typer-targets]').typer();

    $.typer.options.highlightSpeed = 10;
    $.typer.options.typeSpeed = 50;

  });

});