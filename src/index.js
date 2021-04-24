import './style.css';

console.log('funguju!');

// V JavaScriptu vyberte ze stránky ikonku #nav-btn. Připojte k ní posluchač události click. Tento posluchač odebere nebo přidá třídu nav-closed na prvku nav. Klikáním na ikonku tak můžeme zobrazovat nebo skrývat navigaci.
// Připojte posluchač události také na všechny položky navigace. Zařiďte, aby se navigace při kliknutí na libovolnou její položku schovala. Zde se vám jistě bude hodit metoda querySelectorAll.
// Jakmile je váš kód funkční, proveďte commmit s hezky popisnou zprávou a pushněte do vzdáleného repozitáře.

const ikonaElm = document.querySelector('#nav-btn');

ikonaElm.addEventListener('click', () => {
  console.log('stisknuto navigace');
  const navElm = document.querySelector('nav');
  navElm.classList.toggle('nav-closed');
});

const polozkyNavElm = document.querySelectorAll('.navigation a');

polozkyNavElm.forEach((element) => {
  console.log('vypsat element', element);
  element.addEventListener('click', () => {
    console.log('stisknuto polozky');
    const navElm = document.querySelector('nav');
    navElm.classList.toggle('nav-closed');
  });
});

// // 4 Objednávání
// Zařiďte, aby fungovalo objednávání jednotlivých nápojů. Zatím na stránce vidíme pouze jeden, poději jich však bude mnohem více.

// document.querySelectorAll('.order-btn ').forEach((tlacitko) => {});

// Na tlačíko .order-btn pověste posluchač, který při kliknutí přidá na prvek .drink__cup třídu .drink__cup--selected. Zároveň změní nápis na tlačítku na Zrušit.
