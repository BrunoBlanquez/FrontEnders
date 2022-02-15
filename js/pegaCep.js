let campoInputEndereco = $('.inputEnable')
let inputCep = $('#inputCEP')
let botao = $(".botaoBusca")
let endCep = $('#inputAddress')
let bairroCep = $('#inputbairro')
let cidadeCep = $('#inputCity')
let msgErro = $('.verificacaoCepMsg')


// Limita os valores no input de CEP
 $("#inputCEP").on('keyup', function() {
      $("#inputCEP").val(this.value.match(/[0-9]*/));
  });

// Executa a função que vai buscar o CEP ao preencher o campo
botao.on('click', function(event) {
  event.preventDefault();
  pegaCEP()
  campoInputEndereco.removeAttr('disabled')
  })

// Função que pega o CEP e busca os valores na API, preenchendo os campos o formulário
function pegaCEP() {
  let cepDigitado = inputCep.val();
    const cep = $.ajax({
    method: 'GET',
    url: `https://viacep.com.br/ws/${cepDigitado}/json/`,
    success: function() {
       // Em caso de sucesso, vai preencher os campos do formulário
      endCep.val(cep.responseJSON.logradouro)
      bairroCep.val(cep.responseJSON.bairro)
      cidadeCep.val(cep.responseJSON.localidade)

      // Classes que serão modificadas quando der sucesso
      msgErro.addClass('msgDesativada')
      inputCep.addClass('inputCEPSucesso')
      inputCep.removeClass('inputCEPErro')
    },
    // Em caso de falha, vai aprensentar a mensagem de erro na tela
    error: function(jqXHR) {
      // Função que vai modificar as classes quando der erro
      function modificaClasses() {
        msgErro.removeClass('msgDesativada')
        inputCep.removeClass('inputCEPSucesso')
        inputCep.addClass('inputCEPErro')
      }
       if (jqXHR.status === 0) {
            modificaClasses() 
        } else if (jqXHR.status == 404) {
            modificaClasses() 
        } else if (jqXHR.status == 500) {
            modificaClasses() 
        } else if (jqXHR.status == 400) {
            modificaClasses() 
        }
    }
  })
  
  
}

