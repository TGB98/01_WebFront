let numbers = [1,2,3,4,5];
const ul = document.getElementById('ulTag');

for(let i = 0; i < numbers.length; i++) {
  numbers[i] = numbers[i]*2;
  ul.innerHTML += `<li>${numbers[i]}</li>`
}
