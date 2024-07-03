const input = document.querySelector(".valor")
const currencySelect = document.querySelector("#currency-select")
const currencySelectTo = document.querySelector(".currency-selectTo")
const currencySelectFrom = document.querySelector(".currency-selectFrom")
const alert = document.querySelector("#alert")


// Bandeiras //
const flagUp = document.querySelector(".flag1")
const flagDown = document.querySelector(".flag2")

// Valor Moedas em relacao ao real //
const dolarToday = 5.2
const euroToday = 6.2
const btcToday = 0.0000028

// Valor moedas em relacao ao euro //
const dolarTodayEu = 1.07140
const realTodayEu = 5.98
const btcTodayEu = 0.000017

// Valor moedas em relacao ao dolar //
const realTodayUs = 5.58
const btcTodayUs = 0.000016
const euroTodayUs = 0.93

// Valor moedas em relacao ao BTC //
const realTodayBtc = 351750.66
const dolarTodayBtc = 62930
const euroTodayBtc = 58678.61


// Mudar bandeiras //
function changeFlag() {
  
  let flagUp = document.getElementById(imgUp)
  let flagDown = document.getElementById(imgDown)

  // Bandeira de cima //
  if (currencySelectFrom.value == "euro") { // Se o estiver selecionado o euro, a imagem de cima ira mudar //
    imgUp.src = 'https://img.freepik.com/fotos-premium/bandeira-de-portugal_406939-4567.jpg'
  }

  if (currencySelectFrom.value == "dolar") {
    imgUp.src = './img/us-flag.png'
  }

  if (currencySelectFrom.value == "real") {
    imgUp.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/2000px-Flag_of_Brazil.svg.png'
  }

  if (currencySelectFrom.value == "bitcoin") {
    imgUp.src = './img/Btc.png'
  }


  // Bandeira de baixo //
  if (currencySelectTo.value == "euro") { // Se o estiver selecionado o euro, a imagem de baixo ira mudar //
    imgDown.src = 'https://img.freepik.com/fotos-premium/bandeira-de-portugal_406939-4567.jpg'
  }

  if (currencySelectTo.value == "dolar") {
    imgDown.src = './img/us-flag.png'
  }

  if (currencySelectTo.value == "real") {
    imgDown.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/2000px-Flag_of_Brazil.svg.png'
  }

  if (currencySelectTo.value == "bitcoin") {
    imgDown.src = './img/Btc.png'
  }

  keypress()
}



// Conversão //
function keypress() {
  const inputValue = document.querySelector(".valor").value
  
    // Trocar placeholder //
    if (currencySelectFrom.value == "euro") {
      input.placeholder = '€ 10.000'
    }
  
    if (currencySelectFrom.value == "real") {
      input.placeholder = 'R$ 10.000'
    }
  
    if (currencySelectFrom.value == "dolar") {
      input.placeholder = 'U$ 10.000'
    }
  
    if (currencySelectFrom.value == "bitcoin") {
      input.placeholder = 'BTC 10.000'
    }  

  // Euro //
  if (currencySelectFrom.value == "euro" && currencySelectTo.value == "euro") { // Se o select estiver selecionado o valor de dolar, execute aqui! //
    document.querySelector(".convertedValue").value = new Intl.NumberFormat("pt-PT", {
      style: "currency",
      currency: "EUR"
    }).format(inputValue)
  } else if (currencySelectFrom.value == "euro" && currencySelectTo.value == "dolar") {
    document.querySelector(".convertedValue").value = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(inputValue * dolarTodayEu)
  } else if (currencySelectFrom.value == "euro" && currencySelectTo.value == "real") {
    document.querySelector(".convertedValue").value = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
    }).format(inputValue * realTodayEu)
  } else if (currencySelectFrom.value == "euro" && currencySelectTo.value == "bitcoin") {
    document.querySelector(".convertedValue").value = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "BTC",
      maximumFractionDigits: 8
    }).format(inputValue * btcTodayEu)
  } 

  // Dolar //
  if (currencySelectFrom.value == "dolar" && currencySelectTo.value == "dolar") { // Se o select estiver selecionado o valor de dolar, execute aqui! //
    document.querySelector(".convertedValue").value = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(inputValue)
  } else if (currencySelectFrom.value == "dolar" && currencySelectTo.value == "euro") {
    document.querySelector(".convertedValue").value = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR"
    }).format(inputValue * euroTodayUs)
  } else if (currencySelectFrom.value == "dolar" && currencySelectTo.value == "real") {
    document.querySelector(".convertedValue").value = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
    }).format(inputValue * realTodayUs)
  } else if (currencySelectFrom.value == "dolar" && currencySelectTo.value == "bitcoin") {
    document.querySelector(".convertedValue").value = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "BTC",
      maximumFractionDigits: 8
    }).format(inputValue * btcTodayUs)
  } 

  // BitCoin //
  if (currencySelectFrom.value == "bitcoin" && currencySelectTo.value == "bitcoin") { // Se o select estiver selecionado o valor de dolar, execute aqui! //
    document.querySelector(".convertedValue").value = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "BTC",
      maximumFractionDigits: 8
    }).format(inputValue)
  } else if (currencySelectFrom.value == "bitcoin" && currencySelectTo.value == "euro") {
    document.querySelector(".convertedValue").value = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR"
    }).format(inputValue * euroTodayBtc)
  } else if (currencySelectFrom.value == "bitcoin" && currencySelectTo.value == "real") {
    document.querySelector(".convertedValue").value = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL"
    }).format(inputValue * realTodayBtc)
  } else if (currencySelectFrom.value == "bitcoin" && currencySelectTo.value == "dolar") {
    document.querySelector(".convertedValue").value = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(inputValue * dolarTodayBtc)
  } 

// Real //
if (currencySelectFrom.value == "real" && currencySelectTo.value == "real") { // Se o select estiver selecionado o valor de dolar, execute aqui! //
  document.querySelector(".convertedValue").value = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(inputValue)
} else if (currencySelectFrom.value == "real" && currencySelectTo.value == "euro") {
  document.querySelector(".convertedValue").value = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR"
  }).format(inputValue / euroToday)
} else if (currencySelectFrom.value == "real" && currencySelectTo.value == "bitcoin") {
  document.querySelector(".convertedValue").value = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "BTC",
    maximumFractionDigits: 8
  }).format(inputValue * btcToday)
} else if (currencySelectFrom.value == "real" && currencySelectTo.value == "dolar") {
  document.querySelector(".convertedValue").value = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(inputValue / dolarToday)
}

 if (currencySelectTo.value == "empty") {
  alert.style.display = 'block'
  alert.style.opacity = '1'
} else { ;
  alert.style.display = "none"
  alert.style.opacity = '0'
}

}

currencySelectTo.addEventListener("change", changeFlag)
currencySelectFrom.addEventListener("change", changeFlag)

input.addEventListener("input", keypress)