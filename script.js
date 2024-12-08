// variaveis
const form = document.querySelector("form")
const input = document.querySelector("form input")
const ul = document.querySelector("main ul")
const li = document.querySelector("main ul li")
const btnCloseAlert = document.querySelector("footer button")

form.onsubmit = (event) => {
  event.preventDefault()
  
  const itemValue = input.value
  const hasNumberRgx = /\d+/g

  // função para criar um novo elemento no DOM
  function createNewList() {
    // criando os elementos
    const newItem = document.createElement("li")
  
    const divImgItem = document.createElement("div")
    divImgItem.className = "checkbox-image"
  
    const checkItem = document.createElement("input")
    checkItem.setAttribute("type", "checkbox")
    checkItem.id = "name-item"
  
    const labelItem = document.createElement("label")
  
    const imgDelete = document.createElement("img")
    imgDelete.src = ("assets/Frame.png")
  
    const btnDeleteItem = document.createElement("button")
    btnDeleteItem.id = "delete-item"
    btnDeleteItem.appendChild(imgDelete)

    // função para deletar a lista desejada
    btnDeleteItem.addEventListener("click", () =>{
      ul.removeChild(newItem)

      // funçao para mostrar o alerta de item deletado
      function closeAlert () {
        const footer = document.querySelector("footer")
        
        if (btnDeleteItem.addEventListener = true){
          footer.classList.remove("none")
        }
      }

      closeAlert()
    })
  
    labelItem.append(itemValue)
    newItem.append(divImgItem, checkItem, labelItem, btnDeleteItem)
    ul.append(newItem)
  }

  // verificando se a entrada dos dados possui números ou não possui nada
  if(hasNumberRgx.test(itemValue)) {
    alert("O texto contém números! Por favor, digite o item novamente.")

  } else if(itemValue == ""){
    alert("Item inválido! Digite o item corretamente")

  } else {
    createNewList()
    input.value = ""
  }
}

// fechar o alert de item deletado
btnCloseAlert.addEventListener("click", () => {
  const footer = document.querySelector("footer")
  footer.classList.add("none")
})





