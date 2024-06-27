const input = document.querySelector(".valor")
const dolarToday = 5.2


function keypress(){
  const inputValue = document.querySelector(".valor").value

  const convertedValue = inputValue / dolarToday


  document.querySelector(".convertedValue").value = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(convertedValue)

}


input.addEventListener("input", keypress)