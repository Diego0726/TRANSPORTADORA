let nomeCliente = '';
let email = '';
let contato = 0;
let tonelada = 0;
let kmRodado = 0;
const valorDiesel = 6.69;
let modelosCarros = ['VUC', 'Toco', 'LS Tremidão', 'Volvo FH'];

//input de informações de cadastro pelo usuário
nomeCliente = prompt('Qual seu nome: ');
email = prompt('Seu email para contato: ');

while (true) {
  try {
    contato = parseInt(prompt('Telefone para contato: '));
    if (10000000000 <= contato && contato <= 99999999999) {
      // é um número de 11 dígitos
      break;
    }
    console.log('Número incorreto');
  } catch (error) {
    console.log('Não foi digitado um número');
  }
}

// Pedido de Entrega

tonelada = parseInt(prompt('Quantas toneladas serão transportadas: '));
kmRodado = parseInt(prompt('Qual a distância rodada: '));

// VUC= 6,2km/l; Toco=6,2 km/l; LS Tremidão= 4.01km/l; Volvo FH=1.41km/l;

let calc = 0;
let modeloCarro = '';

if (tonelada <= 6) {
  calc = (valorDiesel / 6.2) * kmRodado;
  modeloCarro = modelosCarros[0];
} else if (tonelada <= 16) {
  calc = (valorDiesel / 6.2) * kmRodado;
  modeloCarro = modelosCarros[1];
} else if (tonelada <= 49) {
  calc = (valorDiesel / 4.01) * kmRodado;
  modeloCarro = modelosCarros[2];
} else if (tonelada <= 74) {
  calc = (valorDiesel / 1.41) * kmRodado;
  modeloCarro = modelosCarros[3];
} else {
  console.log('Operação inválida');
}

// pra gerar um boleto precisaria do gasto de gasolina (calc); salario do funcionario (salario); valor do frete por tonelada;
// toFixed usado para deixar apenas 2 números após a vírgula

const toneladaVal = (121.90 * tonelada) * 0.153;
const bonusFuncionario = kmRodado / 10;
const boleto = (toneladaVal + bonusFuncionario + calc).toFixed(2);

console.log(`Muito obrigado Sr(a) ${nomeCliente} seu pedido foi concluído, o valor total deu R$${boleto} e será levado por um caminhão modelo ${modeloCarro}`);
