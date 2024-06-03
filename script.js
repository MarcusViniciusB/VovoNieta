let contadorPedidos = 1;
var total = 0;
var pedidosList = [];
var itens = 0

if(document.getElementById("Ver").checked){
    carregarPedidos();
}

const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
    input.addEventListener('input', calcularTotal);
});

console.log('SisMarcus 1.18');

function AdicionaLista(ordem)
{
    pedidosList.push(ordem);
    itens += 1;
}

function removeLista(ordem){
    var index = pedidosList.indexOf(ordem);
    if (index !== -1) {
        itens -= 1;
        pedidosList.splice(index, 1);
        console.log("Item removido:", ordem);
    } else {
        console.log("Item não encontrado na lista:", ordem);
    }
}


function Quantidade(acao)
{
    var partes = acao.split('_');
    var val = 0;
    if (partes[0] == "mais")
    {
        switch(parseInt(partes[1])){
            case 1:
                 val = parseInt(document.getElementById('quantidadeCafe').value);
                val += 1;
                document.getElementById('quantidadeCafe').value = val;
                AdicionaLista('cafe')
                break;
            case 2:
                 val = parseInt(document.getElementById('quantidadeCafeLeite').value);
                val += 1;
                document.getElementById('quantidadeCafeLeite').value = val;
                AdicionaLista('cafe c/ leite')
                break;
            case 3:
                 val = parseInt(document.getElementById('quantidadePaoQueijo').value);
                val += 1;
                document.getElementById('quantidadePaoQueijo').value = val;
                AdicionaLista('pao de queijo')
                break;
            case 4:
                 val = parseInt(document.getElementById('quantidadeBroa').value);
                val += 1;
                document.getElementById('quantidadeBroa').value = val;  
                AdicionaLista('broa')
                break;
            case 5:
                 val = parseInt(document.getElementById('quantidadeCoxinha').value);
                val += 1;
                document.getElementById('quantidadeCoxinha').value = val;
                AdicionaLista('coxinha')
                break;
            case 6:
                 val = parseInt(document.getElementById('quantidadeEmpada').value);
                val += 1;
                document.getElementById('quantidadeEmpada').value = val;
                AdicionaLista('empada')
                break;
            case 7:
                 val = parseInt(document.getElementById('quantidadePastelFrito').value);
                val += 1;
                document.getElementById('quantidadePastelFrito').value = val;
                AdicionaLista('pastel frito')
                break;
            case 8:
                 val = parseInt(document.getElementById('quantidadePastel').value);
                val += 1;
                document.getElementById('quantidadePastel').value = val;
                AdicionaLista('pastel')
                break;
            case 9:
                 val = parseInt(document.getElementById('quantidadeBolinho').value);
                val += 1;
                document.getElementById('quantidadeBolinho').value = val;
                AdicionaLista('bolinho')
                break;
            case 10:
                 val = parseInt(document.getElementById('quantidadeQuibe').value);
                val += 1;
                document.getElementById('quantidadeQuibe').value = val;
                AdicionaLista('quibe')
                break;
            case 11:
                 val = parseInt(document.getElementById('quantidadeHamburguer').value);
                val += 1;
                document.getElementById('quantidadeHamburguer').value = val;
                AdicionaLista('hamburguer')
                break;
            case 12:
                 val = parseInt(document.getElementById('quantidadeTortinha').value);
                val += 1;
                document.getElementById('quantidadeTortinha').value = val;
                AdicionaLista('tortinha')
                break;
        }
    }else if (partes[0] == "menos")
    {
        switch(parseInt(partes[1]))
        {
            case 1:
                 val = parseInt(document.getElementById('quantidadeCafe').value);
                if(val > 0){ val -= 1;}
                document.getElementById('quantidadeCafe').value = val;
                removeLista('cafe')
                break;
            case 2:
                 val = parseInt(document.getElementById('quantidadeCafeLeite').value);
                if(val > 0){ val -= 1;}
                document.getElementById('quantidadeCafeLeite').value = val;
                removeLista('cafe c/ leite')
                break;
            case 3:
                 val = parseInt(document.getElementById('quantidadePaoQueijo').value);
                if(val > 0){ val -= 1;}
                document.getElementById('quantidadePaoQueijo').value = val;
                removeLista('pao de queijo')
                break;
            case 4:
                 val = parseInt(document.getElementById('quantidadeBroa').value);
                if(val > 0){ val -= 1;}
                document.getElementById('quantidadeBroa').value = val;  
                removeLista('broa')
                break;
            case 5:
                 val = parseInt(document.getElementById('quantidadeCoxinha').value);
                if(val > 0){ val -= 1;}
                document.getElementById('quantidadeCoxinha').value = val;
                removeLista('coxinha')
                break;
            case 6:
                 val = parseInt(document.getElementById('quantidadeEmpada').value);
                if(val > 0){ val -= 1;}
                document.getElementById('quantidadeEmpada').value = val;
                removeLista('empada')
                break;
            case 7:
                 val = parseInt(document.getElementById('quantidadePastelFrito').value);
                if(val > 0){ val -= 1;}
                document.getElementById('quantidadePastelFrito').value = val;
                removeLista('pastel frito')
                break;
            case 8:
                 val = parseInt(document.getElementById('quantidadePastel').value);
                if(val > 0){ val -= 1;}
                document.getElementById('quantidadePastel').value = val;
                removeLista('pastel')
                break;
            case 9:
                 val = parseInt(document.getElementById('quantidadeBolinho').value);
                if(val > 0){ val -= 1;}
                document.getElementById('quantidadeBolinho').value = val;
                removeLista('bolinho')
                break;
            case 10:
                 val = parseInt(document.getElementById('quantidadeQuibe').value);
                if(val > 0){ val -= 1;}
                document.getElementById('quantidadeQuibe').value = val;
                removeLista('quibe')
                break;
            case 11:
                 val = parseInt(document.getElementById('quantidadeHamburguer').value);
                if(val > 0){ val -= 1;}
                document.getElementById('quantidadeHamburguer').value = val;
                removeLista('hamburguer')
                break;
            case 12:
                 val = parseInt(document.getElementById('quantidadeTortinha').value);
                if(val > 0){ val -= 1;}
                document.getElementById('quantidadeTortinha').value = val;
                removeLista('tortinha')
                break;
        }
    }
    calcularTotal();
}

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
    const quantidadeCoxinha = parseInt(document.getElementById('quantidadeCoxinha').value);
    const quantidadeTortinha = parseInt(document.getElementById('quantidadeTortinha').value);
    const quantidadeEmpada = parseInt(document.getElementById('quantidadeEmpada').value);
    const quantidadePastelFrito = parseInt(document.getElementById('quantidadePastelFrito').value);
    const quantidadePastel = parseInt(document.getElementById('quantidadePastel').value);
    const quantidadeBolinho = parseInt(document.getElementById('quantidadeBolinho').value);
    const quantidadeQuibe = parseInt(document.getElementById('quantidadeQuibe').value);
    const quantidadeHamburguer = parseInt(document.getElementById('quantidadeHamburguer').value);

    const outros = document.getElementById('Outros').value;
    const partes = outros.split('+');
    
    var outros2 = 0;
    partes.forEach(function (parte) {
        outros2 += parseFloat(parte.trim());
    });

    const valorCliente = parseFloat(document.getElementById('valorCliente').value);

    total = quantidadeCafe        * precoCafe        +
            quantidadeCoxinha     * precoSalgados    +
            quantidadeQuibe       * precoSalgados    +
            quantidadeHamburguer  * precoSalgados    +
            quantidadeTortinha    * precoSalgados    +
            quantidadeCafeLeite   * precoCafeLeite   +
            quantidadePaoQueijo   * precoPaoQueijo   +
            quantidadeBroa        * precoBroa        +
            quantidadeEmpada      * precoOutros      +
            quantidadePastel      * precoOutros      +
            quantidadeBolinho     * precoOutros      +
            quantidadePastelFrito * precoPastelFrito +
            outros2;

    const troco = valorCliente - total;

    document.getElementById('resultado').innerText = `Total a pagar: R$ ${total.toFixed(2)}`;
    document.getElementById('troco').innerText = troco >= 0 ? `Troco: R$ ${troco.toFixed(2)}` : `Problema com o troco`;
    document.getElementById('Pedidos').value = pedidosList;

}

function limparCampos() {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.value = '0';
    });
    document.getElementById('preco').value = null;
    document.getElementById('resultado').innerText = "Total a pagar: R$ 0.00";
    document.getElementById('troco').innerText = 'Troco: R$ 0.00';
    pedidosList = [];
    document.getElementById('Pedidos').value = null;
    document.getElementById('Cliente').value = null;
    itens = 0;
    carregarPedidos();
}

function adicionarPedido() {
    const outros = document.getElementById('Outros').value || 0;
    const val = outros.split('+');
    var partes = 0;

    const itensAMais = document.getElementById('Pedidos').value;
    const partes2 =  itensAMais.split(',');

    console.log('Tamanho de partes2:', partes2.length, ' ----- partes 1: ', partes.length, '----- itens: ', itens );
    if (val[0] != 0){
        partes = val.length
    }

    if(total > 0 && partes + itens == partes2.length )
    {
        const preco = document.getElementById('preco').value || total;
        const Infopedido = document.getElementById('Pedidos').value || "";
        const cliente = document.getElementById('Cliente').value || "";
        const pedidos = JSON.parse(localStorage.getItem('pedidos')) || [];

        pedidos.push({ id: contadorPedidos, preco: parseFloat(preco).toFixed(2), concluido: false , Info: Infopedido, Cliente: cliente});
        localStorage.setItem('pedidos', JSON.stringify(pedidos));

        contadorPedidos +=1 ;
        document.getElementById('preco').value = null;

        carregarPedidos();
        limparCampos();
    }else{
        window.alert("Esta sem preço!");
    }
}

function carregarPedidos() {
    const table = document.getElementById('tabelaPedidos').getElementsByTagName('tbody')[0];
    table.innerHTML = '';
    const pedidos = JSON.parse(localStorage.getItem('pedidos')) || [];
    var ver = document.getElementById("Ver");
    pedidos.forEach(pedido => {
        
        if (!ver.checked)
        {
            if (!pedido.concluido){
                const newRow = table.insertRow();
                const cell1 = newRow.insertCell(0);
                const cell2 = newRow.insertCell(1);
                const cell3 = newRow.insertCell(2);
                const cell4 = newRow.insertCell(3);
                const cell5 = newRow.insertCell(4);
                cell1.textContent = pedido.id;
                cell2.textContent = `R$ ${pedido.preco}`;
                cell4.textContent = pedido.Info;
                cell4.className = 'test';
                cell5.textContent = pedido.Cliente;

                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.checked = pedido.concluido;
                checkbox.addEventListener('change', () => {
                    pedido.concluido = checkbox.checked;
                    localStorage.setItem('pedidos', JSON.stringify(pedidos));
                });

                cell3.appendChild(checkbox);

            }
        }else{
                const newRow = table.insertRow();
                const cell1 = newRow.insertCell(0);
                const cell2 = newRow.insertCell(1);
                const cell3 = newRow.insertCell(2);
                const cell4 = newRow.insertCell(3);
                const cell5 = newRow.insertCell(4);

                cell1.textContent = pedido.id;
                cell2.textContent = `R$ ${pedido.preco}`;
                cell4.textContent = pedido.Info;
                cell4.className = 'test';
                cell5.textContent = pedido.Cliente;

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
