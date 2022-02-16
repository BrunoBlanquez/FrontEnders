let inputEmail = $("#inputEmail4");
let botaoCadastro = $("#btnCadastro");

botaoCadastro.on('click', function(event){
  event.preventDefault();
  let inputEmailVal = inputEmail.val();
  console.log(inputEmailVal)
  if( inputEmailVal == "" || inputEmailVal.indexOf('@') == -1 || inputEmailVal.indexOf('.') == -1 ) {
        alert ('insira um email valido')
        return false;
      }
      return true;
})

