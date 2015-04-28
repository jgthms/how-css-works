jQuery(document).ready(function ($) {

  function R(s) {
    return R13(R5(s));
  }

  function R5(s) {
    var b = [], c, i = s.length, a = '0'.charCodeAt(), z = a + 10;
    while (i--) { 
      c = s.charCodeAt(i);
      if (c >= a && c < z) { b[i] = String.fromCharCode(((c - a + 5) % (10)) + a); }
      else { b[i] = s.charAt(i); }
    }
    return b.join('');
  }

  function R13(s) {
    var b = [], c, i = s.length, a = 'a'.charCodeAt(), z = a + 26, A = 'A'.charCodeAt(), Z = A + 26;
    while (i--) {
      c = s.charCodeAt(i);
      if (c >= a && c < z) { b[i] = String.fromCharCode(((c - a + 13) % (26)) + a); }
      else if (c >= A && c < Z) { b[i] = String.fromCharCode(((c - A + 13) % (26)) + A); }
      else { b[i] = s.charAt(i); }
    }
    return b.join('');
  }
  
  var $c = $('#c');
  var t = 'znvygb:'
  var m = 'ookqrfvta@tznvy.pbz';
  $c.attr('href', R(t+m));

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