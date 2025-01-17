let amigos = [];
let nomeDigitado = document.querySelector('input').value;
let mensagemResultado = document.getElementById('resultado');
let listaAmigos = document.getElementById('listaAmigos').innerHTML;

function adicionarAmigo() {
    nomeDigitado = document.querySelector('input').value;
    listaAmigos = document.getElementById('listaAmigos').innerHTML;
    
    if (nomeDigitado == '') {
        alert('O campo não pode estar vazio');
    } else {
        amigos.push(nomeDigitado);
        listaAmigos = listaAmigos + "<li>"+nomeDigitado+"</li>";
        document.getElementById('listaAmigos').innerHTML = listaAmigos;
    }
    limparCampo();
    return amigos
}

function sortearAmigo() {
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    mensagemResultado.innerHTML = `O amigo sorteado foi ${amigoSorteado}`;

    listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
}

function limparCampo() {
    nomeDigitado = document.querySelector('input');
    nomeDigitado.value = '';
}
