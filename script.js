const divTag = document.querySelector(".container");
const shoppingContainerTag = document.querySelector(".shoppingContainer");
const inputTag = document.getElementsByClassName("form-control")[0]; //notice htmlcollection
// const orderlistTag = document.getElementsByClassName("orderlist")[0];
// const orderlistTag = document.querySelector(".orderlist"); //notic
let productId = 1;
inputTag.addEventListener("change", (event) => {
  const inputValue = event.target.value;
  const productContainer = document.createElement("div");
  productContainer.classList.add("productContainer");
  const parentDiv = document.createElement("div");
  parentDiv.addEventListener("click", () => {
    const classExist = parentDiv.classList.contains("parchase");
    if (classExist) {
      parentDiv.classList.remove("parchase");
    } else {
      parentDiv.classList.add("parchase");
    }
  });
  const spanTag = document.createElement("span");
  const trashIcon = document.createElement("i");
  trashIcon.classList.add("fa-solid", "fa-trash");
  trashIcon.addEventListener("click", (event) => {
    productContainer.remove();
  });
  spanTag.id = productId;
  parentDiv.append(spanTag);
  parentDiv.classList.add("spanClass");
  productContainer.append(parentDiv, trashIcon);
  shoppingContainerTag.append(productContainer);
  const product = productId.toString() + ". " + inputValue;
  spanTag.append(product);
  inputTag.value = "";
  productId += 1;
});
