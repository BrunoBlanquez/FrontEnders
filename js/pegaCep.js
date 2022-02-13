let campoInputEndereco = $('.inputEnable')
let inputCep = $('#inputCEP')
let botao = $(".botaoBusca")
let endCep = $('#inputAddress')
let bairroCep = $('#inputbairro')
let cidadeCep = $('#inputCity')

botao.on('click', function(event) {
  event.preventDefault();
  pegaCEP()
  campoInputEndereco.removeAttr('disabled')
  })

function pegaCEP() {
  let cepDigitado = inputCep.val();
  const cep = $.ajax({
    method: 'GET',
    url: `https://viacep.com.br/ws/${cepDigitado}/json/`,
    success: function() {
      endCep.val(cep.responseJSON.logradouro)
      bairroCep.val(cep.responseJSON.bairro)
      cidadeCep.val(cep.responseJSON.localidade)
    }
  })
}

