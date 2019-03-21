function myFunction() {
    let x = document.querySelector(".header__list");
    if (x.className === "header__list") {
      x.classList.toggle('responsive');
    //   x.classList.toggle('responsive--animated');
    } else {
        x.className = "header__list";
    }
  }