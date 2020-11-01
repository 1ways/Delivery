const cartButton = document.querySelector("#cartButton");
const modal = document.querySelector('.modal');
const close = document.querySelector('.close');

cartButton.addEventListener('click', toggleModal);

close.addEventListener('click', toggleModal);

function toggleModal(){
  modal.classList.toggle('is-modal-open');
}