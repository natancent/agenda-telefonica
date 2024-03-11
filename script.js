let linhas = ``;
const form = document.querySelector('form');
const atividades = []; 

form.addEventListener('submit', function(e) {
    e.preventDefault();
    adicionaLinha();
});

function adicionaLinha() {
    const inputNomeContato = document.getElementById('name');
    const inputFoneContato = document.getElementById('phone');

    if (atividades.includes(inputNomeContato.value)) {
        alert(`O contato ${inputNomeContato.value} já existe`);
    } else {
        atividades.push(inputNomeContato.value);

        let linha = '<tr>';
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputFoneContato.value}</td>`;
        linha += '</tr>';

        linhas += linha;
        atualizaTabela();
    }

    inputNomeContato.value = '';
    inputFoneContato.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}