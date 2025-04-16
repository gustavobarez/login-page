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
        criaLista();
        console.log('salvarUser if')
        document.getElementById('nomeUser').value = '';
    } else {
        alert('Favor informar um nome para cadastro');
    }
}   

// funcao para preencher a lista de cadastro
function criaLista() {
    let tabela = "<tr><td>Nome</td><th>Actions</th></tr>";
    for (let i = 0;i <= (dadosLista.length -1);i++) {
        tabela += "<tr><td>" + dadosLista[i] + "</td><button class='btn btn-warning'>Editar</button><button class='btn btn-danger'>Excluir</button><td>Actions</td></tr>";
        document.getElementById('tabela').innerHTML = tabela;
        console.log('chegou');
    }
}

