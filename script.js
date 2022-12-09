//Variables:

dots = document.querySelectorAll(".control-dots i");
cards = document.querySelectorAll(".slider-card");

tabs = document.querySelectorAll(".tab-headers button");
tabParagraphs = document.querySelectorAll(".tab-content p");


//Display next card:

const nextCard = () => {
  let i;
  for (i = 0; i < dots.length; i++) {
    if (dots[i].classList.contains("dot-active")) {
      break;
    }
  }

  let nextIndex = (i + 1) % 3;
  dots[nextIndex].classList.add("dot-active");
  cards[nextIndex].classList.add("card-active");

  dots[i].classList.remove("dot-active");
  cards[i].classList.remove("card-active");
};

//Display previous card:

const prevCard = () => {
  let i;
  for (i = 0; i < dots.length; i++) {
    if (dots[i].classList.contains("dot-active")) {
      break;
    }
  }

  let prevIndex = (i + 2) % 3;
  dots[prevIndex].classList.add("dot-active");
  cards[prevIndex].classList.add("card-active");

  dots[i].classList.remove("dot-active");
  cards[i].classList.remove("card-active");
};

//Manipulate cards using dots:

const activateCard = (event) => {
  id = event.target.id[4];

  for (let i = 0; i < cards.length; i++) {
    dots[i].classList.remove("dot-active");
    cards[i].classList.remove("card-active");
  }

  dots[id].classList.add("dot-active");
  cards[id].classList.add("card-active");
};

for (let i = 0; i < dots.length; i++) {
  dots[i].addEventListener("click", activateCard);
}

//Manipulate tabs using buttons:

const activateTab = (event) => {
  id = event.target.id[8];

  for (let i = 0; i < tabParagraphs.length; i++) {
    tabParagraphs[i].classList.remove("active-tab");
  }

  tabParagraphs[id].classList.add("active-tab");
};

for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", activateTab);
}



