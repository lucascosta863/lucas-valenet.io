
function copiarTexto() { 
    /* Selecionamos por ID o nosso input */
    var textoCopiado = document.getElementById("texto-usuario");
  
    /* Deixamos o texto selecionado (em azul) */
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999); /* Para mobile */
  
    /* Copia o texto que está selecionado */
    document.execCommand("copy");
  
    alert("Texto copiado: " + textoCopiado.value);
  }
  /* <![CDATA[ */
  
  $('.card-deck .card').css({
      'display': 'table'
    });
    
    $('.card-description > .card-text').ellipsis({
      lines: 3,
      ellipClass: 'ellip'
    });
    
    $('.card-title').each(function() {
      var link = $(this).text();
      link = link.replace(/\s+/g, '');
      $(this).parent().find('.cardLink').append('<a name="' + link + '"></a>');
    });
    
    var tooltips = $('.trigger > .type').qtip({
      content: {
        text: 'Loading...'
      },
      overwrite: false,
      position: {
        viewport: true,
        my: 'top left',
        at: 'bottom left',
        adjust: {
          y: 8,
          x: 6
        }
      },
      style: {
        tip: {
          mimic: 'center',
          height: 10,
          width: 20,
          offset: 20
        }
      },
      show: {
        solo: true
      },
      hide: {
        fixed: true,
        delay: 50
      }
    });
    
    var api = tooltips.qtip('api');
    
    function tips(type) {
      $('.' + type + ' .trigger .type').qtip('option', 'content.text', $('.definition.' + type + '').html());
      $('.' + type + ' .trigger .type').qtip('option', 'style.classes', 'qtips shadows qtip-rounded ' + type + 'Tip');
    }
    
    tips('attribute');
    tips('metric');
    
    $('.cardLink').click(function() {
      $(this).qtip({
        content: {
          text: '<p>The URL for this attribute or metric is below. Copy and paste to share.</p><input type="text" value="' + window.location.href + '#' + $(this).find('a').attr('name') + '">',
          title: 'Copy Link',
          button: true
        },
        show: {
          ready: true,
          modal: true
        },
        position: {
          my: 'center',
          at: 'center',
          target: $(window)
        },
        hide: {
          event: 'click'
        },
        style: {
          classes: 'linkTips shadows qtip-rounded'
        }
      });
    });
    
    $('.trigger').click(function() {
      $(this).parent().find('.collapse').slideToggle();
      $(this).toggleClass('droppedDown');
      $(this).parent().find('.ellip > span').toggleClass('ellip-line');
    });
    
    $('.ddFilter input').click(function() {
    
      if ($("input:checkbox:checked").length > 0) {
    
        $('.ddFilter input').each(function() {
          var currBox = $(this).val();
          if ($(this).prop('checked')) {
    
            $('div.' + currBox).slideDown();
          } else {
            $('div.' + currBox).slideUp();
          }
        });
      } else {
    
        $('.filterCategory').slideDown();
      }
    });
    
    /* ]]> */