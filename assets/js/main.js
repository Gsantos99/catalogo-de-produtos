// Menu responsivo
const ul = document.querySelector('.navBar > ul')
const menuBtn = document.querySelector('.menu-btn > i')

menuBtn.addEventListener('click', () => {
  openMenu()
})

function openMenu() {
  ul.classList.toggle('open')
}



// Adição de produto via form

// Selecionar botão

const btnCadastrar = document.querySelector('#btn-cadastrar')

// Adicionar listener no button de cadastro (click pq terá ter submit)
// btnCadastrar.addEventListener('click', () => {
//   adcProduto()
// })

function adcProduto() {
  const nomeProduto = document.querySelector('#nome-produto').value
  const descricaoProduto = document.querySelector('#descricao-produto').value
  const precoProduto = document.querySelector('#preco-produto').value
  const imgProduto = document.querySelector('#img-produto').value
  const descontoProduto = document.querySelector('#desconto-produto').value

  
}
