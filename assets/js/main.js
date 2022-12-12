const ul = document.querySelector('.navBar > ul')
const menuBtn = document.querySelector('.menu-btn > i')


menuBtn.addEventListener('click', () => {
  openMenu()
})

function openMenu() {
  // Verifica se o Ul tem a class Open
  if (ul.classList.contains('open')) {
    ul.classList.remove('open')

  } else {
    ul.classList.add('open')
  }
  
  console.log('Function active')

}

