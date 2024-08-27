// const input = document.querySelector('#resNameInput');
const span = document.querySelector('#resName');
document.querySelector('#resName').addEventListener("click", ()=> {

  const input = document.querySelector('#resNameInput');
    span.append(input);
    span.innerHTML = input.value;
});

