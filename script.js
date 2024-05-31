let contadorPedidos = 1;
var total = 0;

const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
    input.addEventListener('input', calcularTotal);
});


function calcularTotal() {
    const precoCafe = 2.00;
    const precoCafeLeite = 3.00;
    const precoPaoQueijo = 2.50;
    const precoBroa = 3.00;
    const precoSalgados = 6.00;
    const precoOutros = 5.50;
    const precoPastelFrito = 3.50;

    const quantidadeCafe = parseInt(document.getElementById('quantidadeCafe').value);
    const quantidadeCafeLeite = parseInt(document.getElementById('quantidadeCafeLeite').value);
    const quantidadePaoQueijo = parseInt(document.getElementById('quantidadePaoQueijo').value);
    const quantidadeBroa = parseInt(document.getElementById('quantidadeBroa').value);
    const quantidadeSalgados = parseInt(document.getElementById('quantidadeSalgados').value);
    const quantidadeOutros = parseInt(document.getElementById('quantidadeOutros').value);
    const quantidadePastelFrito = parseInt(document.getElementById('quantidadePastelFrito').value);

    const outros = document.getElementById('Outros').value;
    var partes = outros.split('+');
    var outros2 = 0;
    partes.forEach(function (parte) {
        outros2 += parseFloat(parte.trim());
    });

    const valorCliente = parseFloat(document.getElementById('valorCliente').value);

    total = quantidadeCafe * precoCafe +
            quantidadeCafeLeite * precoCafeLeite +
            quantidadePaoQueijo * precoPaoQueijo +
            quantidadeBroa * precoBroa +
            quantidadeSalgados * precoSalgados +
            quantidadeOutros * precoOutros +
            quantidadePastelFrito * precoPastelFrito + outros2;
    const troco = valorCliente - total;

    document.getElementById('resultado').innerText = `Total a pagar: R$ ${total.toFixed(2)}`;
    document.getElementById('troco').innerText = troco >= 0 ? `Troco: R$ ${troco.toFixed(2)}` : `Problema com o troco`;
}

function limparCampos() {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.value = '0';
    });
    document.getElementById('preco').value = null;
    document.getElementById('resultado').innerText = '';
    document.getElementById('troco').innerText = '';
    carregarPedidos();
}



function adicionarPedido() {
    const preco = document.getElementById('preco').value || total;
    console.log(preco)
    const pedidos = JSON.parse(localStorage.getItem('pedidos')) || [];
    pedidos.push({ id: contadorPedidos, preco: parseFloat(preco).toFixed(2), concluido: false });
    localStorage.setItem('pedidos', JSON.stringify(pedidos));

    contadorPedidos+=1;
    document.getElementById('preco').value = null;
    carregarPedidos();
    limparCampos();
}

function carregarPedidos() {
    const table = document.getElementById('tabelaPedidos').getElementsByTagName('tbody')[0];
    table.innerHTML = '';
    const pedidos = JSON.parse(localStorage.getItem('pedidos')) || [];
    pedidos.forEach(pedido => {
        if (!pedido.concluido){
        const newRow = table.insertRow();
        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        const cell3 = newRow.insertCell(2);

        cell1.textContent = pedido.id;
        cell2.textContent = `R$ ${pedido.preco}`;

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = pedido.concluido;
        checkbox.addEventListener('change', () => {
            pedido.concluido = checkbox.checked;
            localStorage.setItem('pedidos', JSON.stringify(pedidos));
        });

        cell3.appendChild(checkbox);

        }
    });
}

window.onload = () => {
    carregarPedidos();
    calcularTotal();
};

function Apagar(id){
    var indice = id.substring(id.lastIndexOf("_") + 1);
    localStorage.removeItem(indice);
    var botao = document.getElementById(id);
    if (botao) {
        var linha = botao.parentElement.parentElement;
        if (linha) {
            linha.remove();
        }
    }
}

function ApagarTudo(){
    var resposta = window.confirm("Você quer apagar TUDO?");
    if (resposta == true) {
        console.log("Apagado.");
        localStorage.clear();
        location.reload();
    } else {
        console.log("Cancelado.");
    }
}
