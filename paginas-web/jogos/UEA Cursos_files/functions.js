/*
 *  Funções para validação.
 */

/**
 * Verifica se a string 'str' é nula.
 *
 * @param string str: string a ser verificada.
 * @return boolean
 */
function isBlank(str)
{
    if ((str != null) && (str != ''))
    {
        for (var i = 0; i < str.length; i++)
        {
            var c = str.charAt(i);

            if ((c != ' ') && (c != '\n') && (c != '\t')) {
                return false;
            }
        }
    }

    return true;
}

/**
 * Verifica se a string 'str' é um número inteiro 
 * não-negativo sem sinal, ou seja, apenas dígitos.
 *
 * @param string str: dígito a ser verificado.
 * @return boolean
 */
function isDigit(str)
{
    var pattern = /^\d+$/;
    var result = str.match(pattern);

    return ((result != null) ? true : false);
}

/**
 * Verifica se a string 'str' é um número real 
 * em ponto flutuante (decimal). Permite o uso de 
 * sinal, separadores de milhar e casas decimais.
 *
 * @param string str: número real a ser verificado.
 * @return boolean
 */
function isDecimal(str)
{
    var pattern = /^[+-]?((\d+|\d{1,3}(\.\d{3})+)(\,\d*)?|\,\d+)$/;
    var result = str.match(pattern);

    return ((result != null) ? true : false);
}

/**
 * Verifica se a string 'str' é um valor monetário.
 * Permite o uso de separadores de milhar e casas decimais.
 *
 * @param string str: valor monetário a ser verificado.
 * @return boolean
 */
function isMoney(str)
{
    var pattern = /^\d{1,3}(\.\d{3})*\,\d{2}$/;
    var result = str.match(pattern);

    return ((result != null) ? true : false);
}

/**
 * Verifica se a string 'str' é um endereço de e-mail válido.
 *
 * @param string str: e-mail a ser verificado.
 * @return boolean
 */
function isEmail(str)
{
    var pattern = /^[\w-]+(\.[\w-]+)*@(([A-Za-z\d][A-Za-z\d-]{0,61}[A-Za-z\d]\.)+[A-Za-z]{2,6}|\[\d{1,3}(\.\d{1,3}){3}\])$/;
    var result = str.match(pattern);

    return ((result != null) ? true : false);
}

/**
 * Verifica se a string 'str' é um número de telefone válido. 
 * Segue máscara definida pela função 'compPhone' - (NNN) NNNN-NNNN.
 * O DDD é opcional e o traço separador são opcionais.
 *
 * @param string str: número de telefone a ser verificado.
 * @return boolean
 */
function isPhone(str)
{
    var pattern = /^(\(\d{3}\)\s)?\d{4}(\-)?\d{4}$/;
    var result = str.match(pattern);

    return ((result != null) ? true : false);
}

/**
 * Verifica se a string 'str' é um número de telefone válido. 
 * Segue máscara definida pela função 'compPhone' - (NNN) NNNN-NNNN.
 * O DDD é opcional e o traço separador são opcionais.
 *
 * @param string str: número de telefone a ser verificado.
 * @return boolean
 */
function isCelular(str)
{
    var pattern = /^(\(\d{3}\)\s)?\d{5}(\-)?\d{4}$/;
    var result = str.match(pattern);

    return ((result != null) ? true : false);
}

/**
 * Verifica se a string 'str' é um CEP válido.
 * Segue máscara definida pela função 'compCEP' - NNNNN-NNN
 *
 * @param string str: CEP a ser verificado.
 * @return boolean
 */
function isCEP(str)
{
    var pattern = /^\d{5}(\-)?\d{3}$/;
    var result = str.match(pattern);

    return ((result != null) ? true : false);
}

/**
 * Verifica se a string 'str' é uma data/hora válida.
 *
 * @param string str: data/hora a ser verificada.
 * @param string mask: máscara a ser adotada.
 * @return boolean
 * ---------------------------------------------------
 * mask:
 * 1. DATE -> DD/MM/YYYY
 * 2. DATETIME -> DD/MM/YYYY HH24:MI
 * 3. DATETIMESEC -> DD/MM/YYYY HH24:MI:SS
 * 4. TIME -> HH24:MI
 * 5. TIMESEC -> HH24:MI:SS
 */
function isDate(str, mask)
{
    switch (mask)
    {
        case 'DATE':
            var pattern = /^((0?[1-9]|[12]\d)\/(0?[1-9]|1[0-2])|30\/(0?[13-9]|1[0-2])|31\/(0?[13578]|1[02]))\/(19|20)?\d{2}$/;
            break;

        case 'DATETIME':
            var pattern = /^((0?[1-9]|[12]\d)\/(0?[1-9]|1[0-2])|30\/(0?[13-9]|1[0-2])|31\/(0?[13578]|1[02]))\/(19|20)?\d{2}\s([0-1]\d|2[0-3]):[0-5]\d$/;
            break;

        case 'DATETIMESEC':
            var pattern = /^((0?[1-9]|[12]\d)\/(0?[1-9]|1[0-2])|30\/(0?[13-9]|1[0-2])|31\/(0?[13578]|1[02]))\/(19|20)?\d{2}\s([0-1]\d|2[0-3]):[0-5]\d:[0-5]\d$/;
            break;

        case 'TIME':
            var pattern = /^([0-1]\d|2[0-3]):[0-5]\d$/;
            break;

        case 'TIMESEC':
            var pattern = /^([0-1]\d|2[0-3]):[0-5]\d:[0-5]\d$/;
            break;
    }

    var result = str.match(pattern);

    return ((result != null) ? true : false);
}

/**
 * Verifica se a string 'str' é um CPF válido.
 *
 * @param string str: CPF a ser verificado.
 * @return boolean
 */
function isCPF(str)
{
    if (str)
    {
        var posicao = 10, soma = 0, dv, dvInform, cpf;
        var digito = new Array(10);

        cpf = String(str).replace(/\D/g, ''); // Remove da string 'str' todos os caracteres especiais

        if (isBlank(cpf)) {
            return false;
        } // Entrada não numérica.

        dvInform = cpf.substr(9, 2);

        for (var i = 0; i <= 8; i++)
        {
            digito[i] = cpf.charAt(i);

            soma += digito[i] * posicao;

            posicao--;
        }

        digito[9] = soma % 11;
        digito[9] = (digito[9] < 2) ? 0 : (11 - digito[9]);

        posicao = 11;
        soma = 0;

        for (i = 0; i <= 9; i++)
        {
            soma += digito[i] * posicao;
            posicao--;
        }

        digito[10] = soma % 11;
        digito[10] = (digito[10] < 2) ? 0 : (11 - digito[10]);

        dv = digito[9] * 10 + digito[10];

        return ((dv != dvInform) ? false : true);
    }

    return false;
}

/**
 * Verifica se a string 'str' é um CNPJ válido.
 *
 * @param string str: CNPJ a ser verificado.
 * @return boolean
 */
function isCNPJ(str)
{
    cnpj = str.replace(/[^\d]+/g,'');
 
    if(cnpj == '') return false;
     
    if (cnpj.length != 14)
        return false;
 
    // Elimina CNPJs invalidos conhecidos
    if (cnpj == "00000000000000" || 
        cnpj == "11111111111111" || 
        cnpj == "22222222222222" || 
        cnpj == "33333333333333" || 
        cnpj == "44444444444444" || 
        cnpj == "55555555555555" || 
        cnpj == "66666666666666" || 
        cnpj == "77777777777777" || 
        cnpj == "88888888888888" || 
        cnpj == "99999999999999")
        return false;
         
    // Valida DVs
    tamanho = cnpj.length - 2
    numeros = cnpj.substring(0,tamanho);
    digitos = cnpj.substring(tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2)
            pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(0))
        return false;
         
    tamanho = tamanho + 1;
    numeros = cnpj.substring(0,tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2)
            pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(1))
          return false;
           
    return true;
}





/*
 *  Funções para correções de charset
 */

function utf8_encode(argString) {
  //  discuss at: http://phpjs.org/functions/utf8_encode/
  // original by: Webtoolkit.info (http://www.webtoolkit.info/)
  // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // improved by: sowberry
  // improved by: Jack
  // improved by: Yves Sucaet
  // improved by: kirilloid
  // bugfixed by: Onno Marsman
  // bugfixed by: Onno Marsman
  // bugfixed by: Ulrich
  // bugfixed by: Rafal Kukawski
  // bugfixed by: kirilloid
  //   example 1: utf8_encode('Kevin van Zonneveld');
  //   returns 1: 'Kevin van Zonneveld'

  if (argString === null || typeof argString === 'undefined') {
    return '';
  }

  var string = (argString + ''); // .replace(/\r\n/g, "\n").replace(/\r/g, "\n");
  var utftext = '',
    start, end, stringl = 0;

  start = end = 0;
  stringl = string.length;
  for (var n = 0; n < stringl; n++) {
    var c1 = string.charCodeAt(n);
    var enc = null;

    if (c1 < 128) {
      end++;
    } else if (c1 > 127 && c1 < 2048) {
      enc = String.fromCharCode(
        (c1 >> 6) | 192, (c1 & 63) | 128
      );
    } else if ((c1 & 0xF800) != 0xD800) {
      enc = String.fromCharCode(
        (c1 >> 12) | 224, ((c1 >> 6) & 63) | 128, (c1 & 63) | 128
      );
    } else { // surrogate pairs
      if ((c1 & 0xFC00) != 0xD800) {
        throw new RangeError('Unmatched trail surrogate at ' + n);
      }
      var c2 = string.charCodeAt(++n);
      if ((c2 & 0xFC00) != 0xDC00) {
        throw new RangeError('Unmatched lead surrogate at ' + (n - 1));
      }
      c1 = ((c1 & 0x3FF) << 10) + (c2 & 0x3FF) + 0x10000;
      enc = String.fromCharCode(
        (c1 >> 18) | 240, ((c1 >> 12) & 63) | 128, ((c1 >> 6) & 63) | 128, (c1 & 63) | 128
      );
    }
    if (enc !== null) {
      if (end > start) {
        utftext += string.slice(start, end);
      }
      utftext += enc;
      start = end = n + 1;
    }
  }

  if (end > start) {
    utftext += string.slice(start, stringl);
  }

  return utftext;
}

function utf8_decode(str_data) {
  //  discuss at: http://phpjs.org/functions/utf8_decode/
  // original by: Webtoolkit.info (http://www.webtoolkit.info/)
  //    input by: Aman Gupta
  //    input by: Brett Zamir (http://brett-zamir.me)
  // improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // improved by: Norman "zEh" Fuchs
  // bugfixed by: hitwork
  // bugfixed by: Onno Marsman
  // bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // bugfixed by: kirilloid
  //   example 1: utf8_decode('Kevin van Zonneveld');
  //   returns 1: 'Kevin van Zonneveld'

  var tmp_arr = [],
    i = 0,
    ac = 0,
    c1 = 0,
    c2 = 0,
    c3 = 0,
    c4 = 0;

  str_data += '';

  while (i < str_data.length) {
    c1 = str_data.charCodeAt(i);
    if (c1 <= 191) {
      tmp_arr[ac++] = String.fromCharCode(c1);
      i++;
    } else if (c1 <= 223) {
      c2 = str_data.charCodeAt(i + 1);
      tmp_arr[ac++] = String.fromCharCode(((c1 & 31) << 6) | (c2 & 63));
      i += 2;
    } else if (c1 <= 239) {
      // http://en.wikipedia.org/wiki/UTF-8#Codepage_layout
      c2 = str_data.charCodeAt(i + 1);
      c3 = str_data.charCodeAt(i + 2);
      tmp_arr[ac++] = String.fromCharCode(((c1 & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
      i += 3;
    } else {
      c2 = str_data.charCodeAt(i + 1);
      c3 = str_data.charCodeAt(i + 2);
      c4 = str_data.charCodeAt(i + 3);
      c1 = ((c1 & 7) << 18) | ((c2 & 63) << 12) | ((c3 & 63) << 6) | (c4 & 63);
      c1 -= 0x10000;
      tmp_arr[ac++] = String.fromCharCode(0xD800 | ((c1 >> 10) & 0x3FF));
      tmp_arr[ac++] = String.fromCharCode(0xDC00 | (c1 & 0x3FF));
      i += 4;
    }
  }

  return tmp_arr.join('');
}





/*
 *  Funções utilizadas para correções quando
 *  se utiliza o formValidation com o Steps e
 *  o Bootstrap Multiselect
 */

function adjustByHeight() {
    var $body = $('body'),
            $iframe = $body.data('iframe.fv');
    if ($iframe) {
        // Adjust the height of iframe when hiding the picker
        $iframe.height($body.height());
    }
}

function adjustByScrollHeight() {
    var $body = $('body'),
            $iframe = $body.data('iframe.fv');
    if ($iframe) {
        // Adjust the height of iframe when showing the picker
        $iframe.height($body.get(0).scrollHeight);
    }
}