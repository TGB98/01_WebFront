const tag = document.getElementById('tagName'); // 태그 요소 얻어오기
const input = document.getElementById('tagInnerText'); // input 요소 얻어오기
const color = document.getElementById('colorName'); // 폰트 색상 input

document.querySelector('#btn').addEventListener("click", ()=>{

// const tag = document.getElementById('tagName'); // 태그 요소 얻어오기
// const input = document.getElementById('tagInnerText'); // input 요소 얻어오기
// const color = document.getElementById('colorName'); // 폰트 색상 input

  const tagName = tag.value;
  const text = input.value;
  const fontColor = color.value;

  const box = document.querySelector('#result');
  box.innerText = `${text}`;
  box.style.color = fontColor;
  
});