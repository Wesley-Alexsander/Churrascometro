/*--------------------- Regra de Negocio ---------------------*/
/*
  # Consumo Adulto:
    1. Carne - 400 gr por pessoa + de 6horas - 650gr
    2. Cerveja - 1200 ml por Pessoa + de 6hrs - 2000 ml
    3. Refrigerantes - 1000 ml por Pessoa + 6 hrs 1500ml
  
  # Consumo Criança:
    1. Consomem a metade do que uma pessoa adulta.
    2. Carne - 200 gr por pessoa + de 6 horas - 325gr
    3. Refrigerantes - 500 ml por Pessoa + 6 hrs 750ml
*/

const inputAdultos = document.getElementById('adultos')
const inputCrianças = document.getElementById('crianças')
const inputDuracao = document.getElementById('duracao')
const resultado = document.getElementById('resultado')

function calcular() {
  console.log('calculado')

  let adultos = inputAdultos.value
  let crianças = inputCrianças.value
  let duracao = inputDuracao.value

  let quantidadeTotalCarne =
    carnePorPessoa(duracao) * adultos + (carnePorPessoa(duracao) / 2) * crianças
  let quantidadeTotalCerveja = cervejaPorPessoa(duracao) * adultos
  let quantidadeTotalRefri =
    refriPorPessoa(duracao) * adultos + (carnePorPessoa(duracao) / 2) * crianças

  resultado.innerHTML = `<p><img src="./img/meat.png"> ${Math.ceil(
    quantidadeTotalCarne / 1000
  )}Kg de Carne.</p>`
  resultado.innerHTML += `<p><img src="./img/cerveja.png"> ${Math.ceil(
    quantidadeTotalCerveja / 355
  )} latinhas de Breja</p>`
  resultado.innerHTML += `<p><img src="./img/refrigerantes.png"> ${Math.ceil(
    quantidadeTotalRefri / 2000
  )} litros de Refri</p>`

  resultado.style.fontWeight = 'bold'
}

function carnePorPessoa(duracao) {
  if (duracao >= 6) {
    return 650
  } else {
    return 400
  }
}

function cervejaPorPessoa(duracao) {
  if (duracao >= 6) {
    return 2000
  } else {
    return 1200
  }
}

function refriPorPessoa(duracao) {
  if (duracao >= 6) {
    return 1500
  } else {
    return 1000
  }
}
