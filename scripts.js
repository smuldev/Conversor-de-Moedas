const input = document.querySelector(".valor")
const currencySelect = document.querySelector("#currency-select")
const currencySelectTo = document.querySelector(".currency-selectTo")
const currencySelectFrom = document.querySelector(".currency-selectFrom")

// Bandeiras //
const flagUp = document.querySelector(".flag1")
const flagDown = document.querySelector(".flag2")

// Valor Moedas //
const dolarToday = 5.2
const euroToday = 6.2
const realToday = 0.18


// Mudar bandeiras //
function changeFlag() {
  
  let flagUp = document.getElementById(imgUp)
  let flagDown = document.getElementById(imgDown)

  // Bandeira de cima //
  if (currencySelectFrom.value == "euro") { // Se o estiver selecionado o euro, a imagem de cima ira mudar //
    imgUp.src = 'https://img.freepik.com/fotos-premium/bandeira-de-portugal_406939-4567.jpg'
  }

  if (currencySelectFrom.value == "dolar") {
    imgUp.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/US_flag_49_stars.svg/800px-US_flag_49_stars.svg.png'
  }

  if (currencySelectFrom.value == "real") {
    imgUp.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/2000px-Flag_of_Brazil.svg.png'
  }


  // Bandeira de baixo //
  if (currencySelectTo.value == "euro") { // Se o estiver selecionado o euro, a imagem de baixo ira mudar //
    imgDown.src = 'https://img.freepik.com/fotos-premium/bandeira-de-portugal_406939-4567.jpg'
  }

  if (currencySelectTo.value == "dolar") {
    imgDown.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/US_flag_49_stars.svg/800px-US_flag_49_stars.svg.png'
  }

  if (currencySelectTo.value == "real") {
    imgDown.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/2000px-Flag_of_Brazil.svg.png'
  }

  keypress()
}



// Conversão //
function keypress() {
  const inputValue = document.querySelector(".valor").value

  if (currencySelect.value == "dolar") { // Se o select estiver selecionado o valor de dolar, execute aqui! //
    document.querySelector(".convertedValue").value = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(inputValue / dolarToday)
  }

  if (currencySelect.value == "euro") { // Se o select estiver selecionado o valor de euro, execute aqui! //
    document.querySelector(".convertedValue").value = new Intl.NumberFormat("pt-PT", {
      style: "currency",
      currency: "EUR"
    }).format(inputValue / euroToday)
  }

  if (currencySelect.value == "empty") {
    alert("Selecione as moedas!")
  }

}

currencySelectTo.addEventListener("change", changeFlag)
currencySelectFrom.addEventListener("change", changeFlag)

input.addEventListener("input", keypress)