const input = document.getElementById('numberInput');

document.querySelector('#btn').addEventListener("click", ()=> {

  const number = input.value;

  setTimeout(function(){
    if(number % 2 == 0) {
      alert("짝수입니다");
    }
    else {
      alert("홀수입니다");
    }
  }, 3000);
});