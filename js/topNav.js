

function myFunction() {
    var x = document.getElementById("myTopnav");
    console.log('cześć');
    if (x.className === "header__list") {
      x.className += " responsive";
    } else {
      x.className = "header__list";
    }
  }