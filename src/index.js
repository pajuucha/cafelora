import './style.css';
import { Layer } from './Layer/index';

console.log('funguju!');

const ikonaElm = document.querySelector('#nav-btn');
const polozkyNavElm = document.querySelectorAll('.navigation a');

ikonaElm.addEventListener('click', () => {
  // console.log('stisknuto navigace');
  const navElm = document.querySelector('nav');
  navElm.classList.toggle('nav-closed');
});

polozkyNavElm.forEach((element) => {
  // console.log('vypsat element', element);
  element.addEventListener('click', () => {
    // console.log('stisknuto polozky');
    const navElm = document.querySelector('nav');
    navElm.classList.toggle('nav-closed');
  });
});

const orderBtnElm = document.querySelector('.order-btn');
const drinkSelectedElm = document.querySelector('.drink__cup');

// drinkSelectedElm.classList.toggle('drink__cup--selected');

let ordered = false;
orderBtnElm.addEventListener('click', (e) => {
  // console.log('drink selected');
  // console.log(drinkSelectedElm, e.target);

  if (ordered) {
    ordered = false;
    e.target.textContent = 'Objednat';
    drinkSelectedElm.classList.remove('drink__cup--selected');
  } else {
    ordered = true;
    e.target.textContent = 'Zrušit';
    drinkSelectedElm.classList.add('drink__cup--selected');
  }
});

// 5.
const drinkInfoElm = document.querySelector('.drink__info');
// [
//   { color: '#feeeca', label: 'mléčná pěna' },
//   { color: '#fed7b0', label: 'teplé mléko' },
//   { color: '#613916', label: 'espresso' },
// ]
//   .map(Layer)
//   .forEach((layer) => {
//     console.log(layer);
//     drinkInfoElm.innerHtml += Layer;
//   });

// 6. Seznam ingrediencí
// V tomto cvičení budeme chtít zařídit, abychom seznam ingrediencí dokázali zobrazit podle dat uložených v poli.
// Uvnitř hlavního index.js si vytvořte následujicí globální proměnnou.
// Použijte cyklus for nebo forEach, projděte seznam ingrediencí položku po položce a pomocí komponenty Layer je zobrazte každou ingredienci na stránce.
// Jakmile je váš kód funkční, udělejte commit s profesionálně napsanou zprávou a pushněte váš kód do vzdáleného repozitáře.

const layers = [
  {
    color: '#feeeca',
    label: 'mléčná pěna',
  },
  {
    color: '#fed7b0',
    label: 'teplé mléko',
  },
  {
    color: '#613916',
    label: 'espresso',
  },
];

layers.forEach((layer) => {
  console.log(layer);
  drinkInfoElm.innerHTML += Layer(layer);
});
