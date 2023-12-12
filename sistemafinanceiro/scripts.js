let list = document.querySelectorAll(".navigation li");

function activeLink() {
  list.forEach((item) => {
    item.classList.remove("hovered");
  });
  this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));

// Menu Toggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = function () {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
};


//Filtragem
$(document).ready(function() {
  function aplicarFiltros() {
    var filtroMesEmissao = $("#filtroMesEmissao").val();
    var filtroMesCobranca = $("#filtroMesCobranca").val();
    var filtroMesPagamento = $("#filtroMesPagamento").val();
    var filtroStatus = $("#filtroStatus").val();

// Esconder todas as linhas
$("#tabelaNotas tbody tr").hide();

// Mostrar apenas as linhas que atendem aos critérios de filtro
$("#tabelaNotas tbody tr").filter(function() {
  var colunaMesEmissao = $(this).find("td:nth-child(3)").text().split('-')[1];
  var colunaMesCobranca = $(this).find("td:nth-child(4)").text().split('-')[1];
  var colunaMesPagamento = $(this).find("td:nth-child(5)").text().split('-')[1];
  var colunaStatus = $(this).find("td:nth-child(9)").text();

  return (filtroMesEmissao === "todos" || colunaMesEmissao === filtroMesEmissao) &&
         (filtroMesCobranca === "todos" || colunaMesCobranca === filtroMesCobranca) &&
         (filtroMesPagamento === "todos" || colunaMesPagamento === filtroMesPagamento) &&
         (filtroStatus === "todos" || colunaStatus === filtroStatus);
  }).show();
}

// Atualizar os filtros quando houver uma mudança em qualquer seletor
$("#filtroMesEmissao, #filtroMesCobranca, #filtroMesPagamento, #filtroStatus").change(function() {
    aplicarFiltros();
  });
});

//  Propriedade que informa a localização atual da URL do navegador e redireciona o navegador para uma nova página.
function dashboard(){
  window.location = "./dashboard.html";
}

document.addEventListener("DOMContentLoaded", function () {
// Dados de inadimplência mês a mês
const dadosInadimplencia = [
  { mes: "Janeiro", valor: 1000 },
  { mes: "Fevereiro", valor: 800 },
  { mes: "Março", valor: 1200 },
  // OBS: Adicionar mais linhas aqui 
];

// Dados de receita recebida mês a mês
const dadosReceita = [
  { mes: "Janeiro", valor: 2000 },
  { mes: "Fevereiro", valor: 1500 },
  { mes: "Março", valor: 1800 },
  // OBS: Adicionar mais linhas aqui 
];

// Preparar dados para os gráficos
const categorias = dadosInadimplencia.map(dado => dado.mes);
const valoresInadimplencia = dadosInadimplencia.map(dado => dado.valor);
const valoresReceita = dadosReceita.map(dado => dado.valor);

// Gráfico de inadimplência
const optionsInadimplencia = {
  chart: {
     type: 'bar'
  },
  series: [{
    name: 'Inadimplência',
    data: valoresInadimplencia
  }],
  xaxis: {
    categories: categorias
  },
  colors: ['#FF3333']
  };

// Gráfico de receita recebida
const optionsReceita = {
  chart: {
    type: 'bar'
  },
  series: [{
    name: 'Receita Recebida',
    data: valoresReceita
  }],
  xaxis: {
    categories: categorias
  },
  colors: ['#33FF6B']
};

// Renderizar os gráficos
const chartInadimplencia = new ApexCharts(document.querySelector("#grafico"), optionsInadimplencia);
chartInadimplencia.render();

const chartReceita = new ApexCharts(document.querySelector("#grafico2"), optionsReceita);
chartReceita.render();
});