// FUNÇÃO DO CORAÇÃO DO GOSTEI
function toggleLike(button) {
  button.classList.toggle("clicked")
}

// FUNÇÃO ABRIR/FECHAR MODAL DE NOVO REDDIT

const buttonModal = document
  .getElementById("criarReddit")
  .addEventListener("click", function () {
    const modal = document.getElementById("modal")
    modal.classList.add("open")
  })

const buttonCloseModal = document
  .getElementById("cancelReddit")
  .addEventListener("click", function () {
    const modal = document.getElementById("modal")
    modal.classList.remove("open")
  })
