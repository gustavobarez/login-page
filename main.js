// Configura o acesso para a tela de login

function acessar() {
    let loginEmail = document.getElementById('loginEmail').value;
    let loginSenha = document.getElementById('loginSenha').value;

    // Implementa a estrutura que testa se todos os campos foram preenchidos
    
    if(!loginEmail || !loginSenha) {
        alert('Favor preencher os campos');
    } else {
        window.location.href = "cadastro.html";
    }
}

// cria variavel do tipo array
var dadosLista = [];

function salvarUser() {
    let nomeUser = document.getElementById('nomeUser').value;

    if(nomeUser) {
        dadosLista.push(nomeUser);
        document.getElementById('nomeUser').value = '';
    }
}
