// if - 양수인지 검사

const input1 = document.getElementById("input1"); //input

function check1() {
  //버튼이 클릭되었을 때 수행할 내용.

  const value = Number(input1.value); // 입력받은 값
  // 문자열 -> Number() 숫자형태로 형 변환.

  if(value > 0) { //value가 0보다 커서 true 인 경우.

    alert("양수입니다.");
  }

  if(value <= 0) {

    alert("양수가 아닙니다.");
  }
}

//if-else 홀짝 판별하기
function check2() {
  // 난수 발생 : Math.random()
  // 범위 : 0 <= Math.random() < 1
  // Math.floor() : 소수점을 내림하여 정수로 만듦.
  // ex) Math.floor(50.5) -> 50

  // 0 ~ 100 사이 난수
  const randomNumber = Math.floor(Math.random() * 101);

  if(randomNumber % 2 == 1) {
    alert(`${randomNumber}은 홀수입니다`);
  } else {
    alert(`${randomNumber}은 짝수입니다`);
  }
}

function check3() {
  const randomNumber = Math.floor(Math.random() * 7) -3;

  let message = randomNumber + "은/는 "

  if(randomNumber == 0) { // 0인 경우
    message += "0입니다"; // 복합 대입 연산자 활용
  } else if(randomNumber > 0) { // 0을 제외한 양수인 경우
    message += "양수입니다";
  } else { // 0과 양수인 경우를 제외한 음수인 경우
    message += "음수입니다";
  }
  alert(message);
}


// 나이 입력받아 어린이, 청소년, 성인 구분하기

const input2 = document.getElementById("inputAge");

function check4() {
  const value = Number(input2.value);

  console.log(input2.value.length);
  // 입력된 나이의 길이가 0인 경우 == 미입력(입력 안한 경우)
  
  let message = value + "은/는 "

  if(input2.value.length == 0) {
    message += "값을 입력해주세요"
  } else if(value < 0 || value > 150) {
    message += "잘못 입력하셨습니다"
  } else if(value >= 0 && value < 14) {
    message += "어린이 입니다"
  } else if(value >= 14 && value < 20) {
    message += "청소년 입니다"
  } else {
    message += "성인 입니다"
  }
  alert(message);

}

// function check4() {
//   const inputAge = Number(input2.value);

//   if(input2.value.length == 0) {
//     alert("값을 입력해주세요");
//   } else { // 입력한 경우 -> 이때 어린이, 청소년, 성인 검사

//     // 중첩 if문
//     if ( age < 0 || age > 150) {
//       // 0~150사이가 아닌 경우
//       alert("잘못 입력하셨습니다");
//     } else if(age >= 0 && age <= 13) {
//       // 어린이 0세 이상 13세 이하
//       alert("어린이");
//     } else if(age <= 19) {
//       // 청소년 14세 이상 19세 이하
//       alert("청소년");
//     } else {
//       alert("성인");
//     }

//   }
// }


const number1 = document.getElementById("number1"); // input1
const number2 = document.getElementById("number2"); // input2
const calcResult = document.getElementById("calcResult"); // span

/*function calc(op) {
 // 매개 변수(Parameter) : 함수 호출 시 전달받은 값을 저장하는 변수
 // ex) calc('+') -> '+' 값이 op 변수에 저장됨.

  console.log(op);

  const v1 = Number(number1.value);
  const v2 = Number(number2.value);

  // switch(식) 에서
  // "식"은 다양한 값이 나타날 수 있는 변수 또는 계산식

  let result; // 계산 결과 저장 변수 선언
  // break; switch 문을 멈춤.
  // -> case 끝에 break;를 작성하지 않으면 멈추지 않고 다음 case로 넘어감.
 / switch(op) {
    case '+' : result = v1 + v2; break;
    case '-' : result = v1 - v2; break;
    case '*' : result = v1 * v2; break;
    case '/' : result = v1 / v2; break;
    case '%' : result = v1 % v2; break;
    
    // 맞는 case가 없을 경우 적용할 기본값.(else)
    default : result = "잘못된 연산자"; break;
    // default가 꼭 있어야하는건 아니고 default 문의 아래에 아무런 코드도 없기 때문에
    // break;를 생략 가능하다.
  }

  calcResult.innerText = result;

}*/

// if문 버전

function calc(op) {
  const v1 = Number(number1.value);
  const v2 = Number(number2.value);

  let result;

  if(op == '+') {
    result = v1 + v2;
  } else if(op == '-') {
    result = v1 - v2;
  } else if(op == '*') {
    result = v1 * v2;
  } else if(op == '/') {
    result = v1 / v2;
  } else if(op == '%') {
    result = v1 % v2;
  } else {
    result = "잘못된 연산자"
  }

  calcResult.innerText = result;
}