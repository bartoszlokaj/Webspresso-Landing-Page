document.addEventListener('DOMContentLoaded', () => {
  let colls = document.querySelectorAll(".collapsible__btn");

  colls.forEach((coll) => {
    let content = coll.nextElementSibling; // content = collapsible__wrapper
    const elementHeight = content.clientHeight; // collapsible__wrapper height
    content.style.maxHeight = '0';
    coll.addEventListener('click', () => {
      content.classList.add('collapsible__wrapper--animated');
      coll.classList.toggle('active');
      if (content.style.maxHeight === elementHeight + 'px') {
        content.style.maxHeight = '0px';
      } else {
        content.style.maxHeight = elementHeight + 'px';
      }
    });
  });
});