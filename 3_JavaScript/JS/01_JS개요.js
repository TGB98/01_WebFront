//.js 파일 내부 = <script></script> 태그의 내부임.

console.log("HTML 파일과 연결 됨.");

function externalFn() {
  alert("외부 파일에 작성된 externalFn() 함수가 호출 됨.");
}

//------------------------
//JS 맛보기
// 버튼 클릭 시 body 태그의 글자색, 배경색 변경.
// 01. body 태그 선택.
const body = document.querySelector("body");

// 실행되면 다크모드로 바꾸는 함수(기능)
function darkMode() {
  body.style.color = "white"; //글자색 흰색 변경.
  body.style.backgroundColor = "black"; //배경색 검은색 변경.
}

// 실행되면 라이트 모드로 바꾸는 함수(기능)
function lightMode() {
  body.style.color = "black"; //글자색 검은색 변경.
  body.style.backgroundColor = "white"; //배경색 흰색 변경.
}
