import enroladinhoMignonImg from './assets/pratos/enroladinho-mignon.jpeg';
import casal20Img from './assets/pratos/casal-20.jpeg';
import burguerPicanhaImg from './assets/pratos/burguer-picanha.jpeg';
import fishChipsImg from './assets/pratos/fish-chips.jpeg';
import risotoCamaraoTrufadoImg from './assets/pratos/risoto-camarao-trufado.jpeg';
import frangoFritoImg from './assets/pratos/frango-frito.jpg';

import brownieImg from './assets/sobremesas/brownie.jpeg';
import cocadaFornoImg from './assets/sobremesas/cocada-forno.jpeg';
import petitGateauImg from './assets/sobremesas/petit-gateau.jpeg';
import tortaHolandesaImg from './assets/sobremesas/torta-holandesa.jpg';

import aguaSemGasImg from './assets/bebidas/agua-sem-gas.jpeg';
import aguaComGasImg from './assets/bebidas/agua-com-gas.jpeg';
import cocaColaImg from './assets/bebidas/coca-cola.jpeg';
import guaranaImg from './assets/bebidas/guarana.jpeg';
import heinekenImg from './assets/bebidas/heineken.jpeg';
import sucoNaturalImg from './assets/bebidas/suco-natural.jfif';

 export const frangoFrito = {
  nome: 'Frango Frito',
  preco: 'R$ 46,90',
  imagem: frangoFritoImg,
  descricao: 'Deliciosos pedaços de frango macios e suculentos, empanados em uma crosta dourada e crocante.',
};

export const enroladinhoMignon = {
  nome: 'Enroladinho de Mignon',
  preco: 'R$ 64,90',
  imagem: enroladinhoMignonImg,
  descricao: 'Finíssimas fatias de filé mignon enroladas no parmesão',
};

const casal20 = {
  nome: 'Casal 20',
  preco: 'R$ 29,00',
  imagem: casal20Img,
  descricao: 'Casal perfeito pão de alho caseiro e linguiça toscana grill',
};
const burguerPicanha = {
  nome: 'Burguer de Picanha',
  preco: 'R$ 44,90',
  imagem: burguerPicanhaImg,
  descricao:
    'Burguer de Picanha Angus, Queijo Cheddar, Crisp de Cebola e Geléia de Bacon',
};
const fishChips = {
  nome: 'Fish and Chips',
  preco: 'R$ 79,90',
  imagem: fishChipsImg,
  descricao:
    'Iscas de Peixe Empanada na Farinha Panko e Flocos de Milho e Batata Frita Palito',
};
const risotoCamaraoTrufado = {
  nome: 'Risoto de Camarão Trufado',
  preco: 'R$ 72,90',
  imagem: risotoCamaraoTrufadoImg,
  descricao:
    'Arroz Arbóreo, camarões salteados no azeite trufado e crocantes de panko',
};

const brownie = {
  nome: 'Brownie',
  preco: 'R$ 32,90',
  imagem: brownieImg,
  descricao:
    'Delicioso brownie caseiro, sorvete de creme, calda quente de chocolate',
};

const tortaHolandesa = {
  nome: 'Torta Holandesa',
  preco: 'R$ 31,90',
  imagem: tortaHolandesaImg,
  descricao:
    'Uma fatia de torta holandesa: irresistível com sua base crocante, recheio cremoso e cobertura de ganache.',
};

const cocadaForno = {
  nome: 'Cocada de Forno',
  preco: 'R$ 32,90',
  imagem: cocadaFornoImg,
  descricao:
    'Cremosa cocada de coco torrado, doce de leite argentino e sorvete de creme',
};
const petitGateau = {
  nome: 'Petit Gateau',
  preco: 'R$ 34,90',
  imagem: petitGateauImg,
  descricao:
    'Bolo quente recheado com ganache de chocolate, leite condensado e castanha de caju',
};

const aguaSemGas = {
  nome: 'Água sem gás',
  preco: 'R$ 6,90',
  imagem: aguaSemGasImg,
  descricao: '310ml',
};

const sucoNatural = {
  nome: 'Sucos Naturais',
  preco: 'R$ 11,90',
  imagem: sucoNaturalImg,
  descricao: '400ml',
};

const aguaComGas = {
  nome: 'Água com gás',
  preco: 'R$ 7,90',
  imagem: aguaComGasImg,
  descricao: '310ml',
};
const cocaCola = {
  nome: 'Coca-Cola',
  preco: 'R$ 7,90',
  imagem: cocaColaImg,
  descricao: '290ml',
};
const guarana = {
  nome: 'Guaraná Antártica',
  preco: 'R$ 7,90',
  imagem: guaranaImg,
  descricao: '350ml',
};
const heineken = {
  nome: 'Heineken',
  preco: 'R$ 15,90',
  imagem: heinekenImg,
  descricao: '355ml',
};

export const pratosPrincipais = [
  burguerPicanha,
  enroladinhoMignon,
  casal20,
  fishChips,
  risotoCamaraoTrufado,
  frangoFrito
];

export const sobremesas = [brownie, cocadaForno, petitGateau, tortaHolandesa];

export const bebidas = [aguaSemGas, aguaComGas, cocaCola, guarana, heineken, sucoNatural];
