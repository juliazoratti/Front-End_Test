function email() {
    var campoEmailUsuario = document.querySelector('#email')
    var EmailUsuario = campoEmailUsuario. value
    var campoErro = document.querySelector('#erro');
    var campoAcerto = document.querySelector('#acerto');
    
    EmailUsuario.endsWith('@gmail.com')
    if (EmailUsuario.endsWith('@gmail.com')){
      document.getElementById("acerto").style.display = 'block';
      campoErro.style.display = 'none';
     
  } else {
    document.getElementById("erro").style.display = 'block';
    campoAcerto.style.display = 'none';
    
  }
}
  