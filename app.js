document.addEventListener('DOMContentLoaded', () => {
  let colls = document.querySelectorAll(".collapsible__btn"); 

  colls.forEach((coll) => {
    let content = coll.nextElementSibling; // content = collapsible__wrapper
    let arrow = coll.querySelector('.collapsible__arrow');
    const elementHeight = content.clientHeight; // collapsible__wrapper height
    content.style.maxHeight = '0';
    coll.addEventListener('click', () => {
      content.classList.add('collapsible__wrapper--animated');
      coll.classList.toggle('active');
      arrow.classList.toggle('collapsible__arrow--animated');
      if (content.style.maxHeight === elementHeight + 'px') {
        content.style.maxHeight = '0px';
      } else {
        content.style.maxHeight = elementHeight + 'px';
      }
    });
  });
});