const input = document.querySelector(".valor")
const currencySelect = document.querySelector(".currency-select")


const dolarToday = 5.2


function keypress(){
  const inputValue = document.querySelector(".valor").value

  const convertedValue = inputValue / dolarToday

  console.log(currencySelect)


  document.querySelector(".convertedValue").value = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(convertedValue)

}


input.addEventListener("input", keypress)