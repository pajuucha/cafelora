import './style.css';
import { Layer } from './Layer/index.js';

console.log('funguju!');

// 3
// V JavaScriptu vyberte ze stránky ikonku #nav-btn. Připojte k ní posluchač události click. Tento posluchač odebere nebo přidá třídu nav-closed na prvku nav. Klikáním na ikonku tak můžeme zobrazovat nebo skrývat navigaci.
// Připojte posluchač události také na všechny položky navigace. Zařiďte, aby se navigace při kliknutí na libovolnou její položku schovala. Zde se vám jistě bude hodit metoda querySelectorAll.
// Jakmile je váš kód funkční, proveďte commmit s hezky popisnou zprávou a pushněte do vzdáleného repozitáře.

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

// 4. Objednávání
// Zařiďte, aby fungovalo objednávání jednotlivých nápojů. Zatím na stránce vidíme pouze jeden, poději jich však bude mnohem více.
// 1. Na tlačíko .order-btn pověste posluchač, který při kliknutí přidá na prvek .drink__cup třídu .drink__cup--selected. Zároveň změní nápis na tlačítku na Zrušit.
// 2. Při opětovném kliknutí na tlačítko chceme zařídit, aby se objednávka zrušila a nápis na tlačítku se vrátil zpět na Objednat. Tohoto můžete docílit například tak, že si vytvoříte globální proměnnou ordered, která bude obsahovat true nebo false podle toho, zde je nápoj objednaný či nikoliv.
// 3. Ve chvíli, kdy máte objednávání funkční commitněte váš kód se smysluplnou zprávnou a pushněte jej.

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

// 5 Ingredience jako komponenty
// Každý nápoj bude obsahovat seznam ingrediencí. Na stránce vidíme příklad pro cappuccino. Budeme chtít, aby ingredience byla komponenta.
// Vytvořte komponentu Layer, která očekává props v následujícím tvaru.
// {
//   color: '#feeeca',
//   label: 'mléčná pěna',
// }
// Komponenta nechť vrací řetězec obsahující výsledné HTML.
// Použijte vaši komponentu a pomocí vlastnosti innerHTML zapojte do stránky tři ingredience pro cappuccino. Stránka by měla pro uživatele vypadat stejně jako na začátku.
// Ve vašem projektu vytvořte pro vaši komponentu separátní složku s názvem Layer. Tato složka bude v souboru index.js obsahovat JavaScript kód vaší komponenty. Kompnentu správně exportujte a správně ji importujte v hlavním index.js celého projektu. Vyzkoušejte, že váš projekt funguje.
// Do složky Layer vložte také soubor style.css a přesuňte do něj CSS styly, které se přímo týkají této komponenty. Nezapomeňte váš CSS soubor správně importovat aby jej Webpack zahrnul do výsledného sestavení.
// Jakmile váš projekt funguje, commitněte váš kód s výborně napsanou commit zprávou a pushněte do vzdáleného repozitáře.

const drinkInfoElm = document.querySelector('drink__info');
// [
//   { color: '#feeeca', label: 'mléčná pěna' },
//   { color: '#fed7b0', label: 'teplé mléko' },
//   { color: '#613916', label: 'espresso' },
// ]
//   .map(Layer)
//   .forEach((layer) => {
//     drinkInfoElm.innerHtml += Layer;
//   });

// 6. Seznam ingrediencí
// V tomto cvičení budeme chtít zařídit, abychom seznam ingrediencí dokázali zobrazit podle dat uložených v poli.
// Uvnitř hlavního index.js si vytvořte následujicí globální proměnnou

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

// Použijte cyklus for nebo forEach, projděte seznam ingrediencí položku po položce a pomocí komponenty Layer je zobrazte každou ingredienci na stránce.
// Jakmile je váš kód funkční, udělejte commit s profesionálně napsanou zprávou a pushněte váš kód do vzdáleného repozitáře.

layers.forEach((layer) => {
  console.log(layer);
  drinkInfoElm.innerHTML += Layer(layer);
});
