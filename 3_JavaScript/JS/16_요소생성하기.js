const createBox = document.querySelector('#createBox'); // button
const container = document.querySelector('.container'); // 감싸고 있는 div

// createBox 버튼 클릭 시 div.box 를 생성하여
// container에 마지막 자식으로 추가
createBox.addEventListener("click", ()=> {

  // 1. div 요소 생성
  const box = document.createElement("div");
  console.log(box); // 만들어졌지만 화면에는 보이지 않음.
  // 왜? : body 태그 외부에 생성되어있기 때문.

  // 2. 만들어진 div 요소에 "box" 클래스 추가
  box.classList.add("box"); // <div class="box"></div>

  console.log(container.classList);

  // 3. container의 마지막 자식으로 div 요소 추가
  container.append(box);
  
  // 4. input 요소 생성
  const input = document.createElement("input"); // <input>
  input.type = "text"; // <input type="text">

  // 5. 생성한 input을 box에 마지막 자식으로 추가하기
  box.append(input);
});

  /* 요소.classList : 요소의 클래스 목록
    -> 클래스 존재 여부 파악 가능, 추가, 제거 등 할 수 있음 

    * 요소.classList
    -> 요소 목록이 배열 형식으로 반환

    * 요소.classList.contains("클래스명")
    -> 클래스가 있으면 true, 없으면 false

    * 요소.classList.add("클래스명")
    -> 클래스 추가
  
    * 요소.classList.remove("클래스명")
    -> 클래스 제거
  */

// innerHTML 요소 얻어오기
const innerHTMLBox = document.querySelector("#innerHTMLBox");

innerHTMLBox.addEventListener("click", () => {
  container.innerHTML += "<div class='box'><input type = 'text'></div>"
});