jQuery(document).ready(function ($) {

  $('.content h3').each(function() {
    var $el = $(this);
    var id = $el.attr('id');
    if (id) {
      $el.prepend(
        $('<a />')
        .attr('href', '#' + id)
        .html('#')
      );
      return;
    }
  });

  $(window).load(function() {

    $('[data-typer-targets]').typer();

    $.typer.options.highlightSpeed = 10;
    $.typer.options.typeSpeed = 50;

  });

});