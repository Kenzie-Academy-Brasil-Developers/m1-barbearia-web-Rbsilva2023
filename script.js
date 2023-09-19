const barbearia = {
    cortes: [
        { id: 1, tipo: "Militar", valor: 20 },
        { id: 2, tipo: "Samurai", valor: 35 },
        { id: 3, tipo: "Pompadour", valor: 20 },
        { id: 4, tipo: "Moicano", valor: 10 },
        { id: 5, tipo: "Razor part", valor: 5 },
    ],
  
    barbas: [
        { id: 1, tipo: "Capitão Jack", valor: 20 },
        { id: 2, tipo: "Van Dyke", valor: 20 },
        { id: 3, tipo: "Barba Média", valor: 20 },
        { id: 4, tipo: "Barba Baixa", valor: 20 },
        { id: 5, tipo: "Barba Zero", valor: 15 },
    ],
    estaAberto: true,
};
  
  
function buscaCortePorId(id) {

    for (let contador = 0; contador < barbearia.cortes.length; contador++){
        if(barbearia.cortes[contador].id === id){
            return barbearia.cortes[contador];
        }
    }
    return "Corte não encontrado."

}



function buscaBarbaPorId(id) {
    for(let contador = 0; contador < barbearia.barbas.length; contador++){
        if(barbearia.barbas[contador].id === id){
            return barbearia.barbas[contador];
        }
       
    } 
    return "barba não encontrada"
}

function verificaStatusBarbearia(estaAberto) {
    if (barbearia.estaAberto === true) {
        return "Estamos abertos";
    } else {
    return "Estamos fechados"; 
    }
}

function retornaTodosCortes(cortes) {
    return barbearia.cortes
}

function retornaTodasBarbas(barba) {
    return barbearia.barbas
}

function criaPedido(nomeCliente, corteId, barbaId) {
    let corte = buscaCortePorId(corteId);
    let barba = buscaBarbaPorId(barbaId);
  
  let order = {
      nome: nomeCliente,
      pedidoCorte: corte.tipo,
      pedidoCortePreco: corte.valor,
      pedidoBarba: barba.tipo,
      pedidoBarbaPreco: barba.valor
    };
  return order;
}


function atualizarServico(lista, id, valor, tipo) {
    for (let i = 0; i < lista.length; i++){
        if (lista[i].id === id){
            lista[i].tipo = tipo;
            lista[i].valor = valor;
        }
    }
   return lista;
}
function calculaTotal(pedido) {
        let total = pedido.pedidoCortePreco + pedido.pedidoBarbaPreco
        return total 
}
