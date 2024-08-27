const createInput = document.querySelector('#add'); // 버튼
const container = document.querySelector('.container'); // 감싸고 잇는 div

createInput.addEventListener("click", ()=> {

  // 1. div 요소 생성하기
  const row = document.createElement("div"); // <div></div>

  // 2. 요소에 class 추가하기
  row.classList.add("row"); // <div class="row"></div>

  // 3. input 요소 생성
  const input = document.createElement("input"); // <input>

  input.type = "number"; // type 추가
  // input.setAttribute("type", "number"); // type 추가

  input.classList.add("input-number"); // 클래스 추가

  // 6. span 요소 생성
  const span = document.createElement("span"); // <span></span>

  // 7. span 태그에 클래스 "remove-row" 추가
  span.classList.add("remove-row"); // <span class="remove-row"></span>
  
  // 8. 내용으로 &times; 추가 (innerHTML 사용)
  span.innerHTML = "&times;"; // <span class="remove-row">&times;</span>


  //
  // 조립하기
  // div.row 요소에 자식으로 input 추가
  row.append(input, span);

  // 완성된 div.row 를 container의 마지막 자식 추가하기
  container.append(row);

  // ------------------------------------------------------------------------
  // 클릭된 x 버튼의 부모 요소(div.row)를 제거
  span.addEventListener("click", (e)=> {
    // 현재 이벤트가 발생한 요소(클릭된 x 버튼)의
    // 부모 요소를 선택
    const parent = e.target.parentElement; // == div.row

    // 부모 요소를 제거
    parent.remove();
  });

});

// 계산 버튼 클릭
const calcButton = document.querySelector('#calc');

calcButton.addEventListener("click", ()=> {

  // 1. 모든 클래스가 .input-number 요소 얻어오기
  const numbers = document.querySelectorAll('.input-number');

  // 2. for문으로 모든 요소 접근하여 작성된 값(value)을 얻고 숫자로 변경(Number())한 후 합계 저장 변수(sum)에 누적
  let sum = 0;
  for(let i = 0; i < numbers.length; i++) {
    sum += Number(numbers[i].value);
  }
  
  // 3. for문 끝나면 alert로 sum 값 출력
  alert("결과 :"+ sum);
});