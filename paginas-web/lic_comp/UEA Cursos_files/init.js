$(document).ready(function() {

    /**
     * Ajax setup global.
     */
    $.ajaxSetup({
        cache: false,
        timeout: 60000,
        dataType : 'json',
        type: 'POST',
        error: function( xhr, status, error ) {
            PNotify.removeAll();

            new PNotify({
                title: 'Ajax Error (' + error + ')',
                text: 'Não foi possível conectar ao servidor. Tente novamente mais tarde.',
                type: 'error'
            });
        }
    })


    /**
     * Ajax loader & ajaxSuccess event default.
     */
    $(document)
            .bind('ajaxStart', function() {
                $('#loadingIndicator').show();
            })
            .bind('ajaxStop', function() {
                $('#loadingIndicator').hide();
            })
            .ajaxSuccess(function( event, xhr, settings ) {
                if ( xhr.responseJSON.result === 'error' ) {
                    if ( xhr.responseJSON.PNotify ) {
                        PNotify.removeAll();

                        new PNotify({
                            title: xhr.responseJSON.PNotify.title,
                            text: xhr.responseJSON.PNotify.message,
                            type: xhr.responseJSON.PNotify.type
                        });
                    }
                }
            });


	/**
	 * Back top Top
	 */
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });

    $('#back-to-top').click(function () {
        $('#back-to-top').tooltip('hide');
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    $('#back-to-top').tooltip('show');


    /*
     *  Setando o botão de limpar o formulário.
     */
    if ($('#btn-reset').length) {
        $('#btn-reset').click(function ( ) {
            $formId = $(this).closest('form');

            $formId
                .formValidation('resetForm', true)
                .find(':text:enabled:not([readonly])').val('').end()
                .find('select:enabled:not([readonly])').val('').end()
                .find(':radio:enabled:not([readonly])' ).prop( 'checked', false ).end()
                .find(':checkbox:enabled:not([readonly])' ).prop( 'checked', false );
        });
    }


    /*
     *  Setando as máscaras.
     */
    $('.time').mask('00:00', {placeholder: 'HH:SS'});
    $('.time_sec').mask('00:00:00', {placeholder: 'HH:MM:SS'});

    $('.date_br').mask('00/00/0000', {placeholder: 'DD/MM/AAAA'});
    $('.date_time').mask('00/00/0000 00:00', {placeholder: 'DD/MM/AAAA HH:MM'});
    $('.date_time_sec').mask('00/00/0000 00:00:00', {placeholder: 'DD/MM/AAAA HH:MM:SS'});
    $('.date_myear_br').mask('00/0000', {placeholder: 'MM/AAAA'});

    $('.real').mask("#.##0,00", {reverse: true});
    $('.digit').mask('0#');

    $('.celular').mask('00000-0000');
    $('.celular_com_ddd').mask('(00) 00000-0000');
    $('.fone').mask('0000-0000');
    $('.fone_com_ddd').mask('(00) 0000-0000');

    $('.letra').mask('S@');

    $('.cep').mask('00000-000', {placeholder: 'NNNNN-NNN'});
    $('.cpf').mask('000.000.000-00', {placeholder: 'Digite seu CPF'}, {reverse: true});
    $('.cnpj').mask('00.000.000/0000-00', {placeholder: 'Digite seu CNPJ'}, {reverse: true});
});