const toggleMenu = document.querySelector('.main__header')
const pannel = document.querySelector('.section__pannel')
const close = document.querySelector('.close__button')
const close2 = document.querySelector('.close__button2')

toggleMenu.addEventListener('click', ()=> {
  pannel.classList.toggle('active');
})

close.addEventListener('click', ()=> {
  pannel.classList.toggle('active');
})

close2.addEventListener('click', ()=> {
  pannel.classList.toggle('active');
})