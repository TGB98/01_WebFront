const inputName = document.getElementById('name'); // input 요소 얻어오기
const div = document.getElementById('welcomeMessage'); // div 요소 얻어오기
function generateWelcomeMessage() { // 버튼 클릭 시

  const value = inputName.value; // input 밸류 얻어오기
  div.innerText = `${value}님, 환영합니다`;
  
}
