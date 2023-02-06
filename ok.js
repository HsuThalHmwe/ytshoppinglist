const inputTag = document.querySelector(".myInput");
const container = [];
const ulTag = document.querySelector(".ul");
const callback = () => {
  const inputData = inputTag.value;
  container.push(inputData);
  console.log(container);
  ulTag.innerHTML = "";
  for (let i = 0; i < container.length; i++) {
    const element = container[i];
    const liTag = document.createElement("li");
    liTag.textContent = element;
    ulTag.append(liTag);
  }
  inputTag.value = "";
};

inputTag.addEventListener("change", callback);
