const inputVal = document.querySelector(".range");
const price = document.querySelector(".price");

inputVal.addEventListener("change", () => {
  price.innerHTML = "$" + inputVal.value;
});
