import './style.css';

console.log('funguju!');

// 3
// V JavaScriptu vyberte ze stránky ikonku #nav-btn. Připojte k ní posluchač události click. Tento posluchač odebere nebo přidá třídu nav-closed na prvku nav. Klikáním na ikonku tak můžeme zobrazovat nebo skrývat navigaci.
// Připojte posluchač události také na všechny položky navigace. Zařiďte, aby se navigace při kliknutí na libovolnou její položku schovala. Zde se vám jistě bude hodit metoda querySelectorAll.
// Jakmile je váš kód funkční, proveďte commmit s hezky popisnou zprávou a pushněte do vzdáleného repozitáře.

const ikonaElm = document.querySelector('#nav-btn');
const polozkyNavElm = document.querySelectorAll('.navigation a');

ikonaElm.addEventListener('click', () => {
  console.log('stisknuto navigace');
  const navElm = document.querySelector('nav');
  navElm.classList.toggle('nav-closed');
});

polozkyNavElm.forEach((element) => {
  console.log('vypsat element', element);
  element.addEventListener('click', () => {
    console.log('stisknuto polozky');
    const navElm = document.querySelector('nav');
    navElm.classList.toggle('nav-closed');
  });
});

// 4. Objednávání
// 1. Zařiďte, aby fungovalo objednávání jednotlivých nápojů. Zatím na stránce vidíme pouze jeden, poději jich však bude mnohem více.
// Na tlačíko .order-btn pověste posluchač, který při kliknutí přidá na prvek .drink__cup třídu .drink__cup--selected. Zároveň změní nápis na tlačítku na Zrušit.

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

// 2. Při opětovném kliknutí na tlačítko chceme zařídit, aby se objednávka zrušila a nápis na tlačítku se vrátil zpět na Objednat. Tohoto můžete docílit například tak, že si vytvoříte globální proměnnou ordered, která bude obsahovat true nebo false podle toho, zde je nápoj objednaný či nikoliv.

// 3. Ve chvíli, kdy máte objednávání funkční commitněte váš kód se smysluplnou zprávnou a pushněte jej.
