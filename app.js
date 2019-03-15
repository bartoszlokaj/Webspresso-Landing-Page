let coll = document.querySelectorAll(".collapsible__btn");

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function(){
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.display === "block" && content.style.maxHeight) {
      content.style.display = "none";
      content.style.maxHeight = null;
    } else {
      content.style.display = "block";
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

