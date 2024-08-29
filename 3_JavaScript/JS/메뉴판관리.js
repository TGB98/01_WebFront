// const input = document.querySelector('#resNameInput');
const span = document.querySelector('#resName');

document.querySelector('#resName').addEventListener("click", ()=> {

    const input = document.getElementById('resNameInput');
    input.classList.toggle('res-name-hidden');

    input.addEventListener("blur", ()=> {
      return span.innerHTML = input.value;
    });
});

