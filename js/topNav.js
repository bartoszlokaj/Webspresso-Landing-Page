

function myFunction() {
    let x = document.querySelector(".header__list");
    if (x.className === "header__list") {
      x.className += " responsive";
    } else {
      x.className = "header__list";
    }
  }