// 변수 선언 및 초기화

// document : HTML 문서 내에서
// get : 얻다 ElementById : HTML 요소인 ById - 아이디가 일치하는
const number1 = document.getElementById("input1");
// console.log(number1);

const number2 = document.getElementById("input2");
// console.log(number2);

const result = document.getElementById("calcResult");

// 두 수를 더해서 화면에 출력하는 함수
function plusFn() {
  // input요소.value : input 요소에 작성된 값 얻어오기.
  const value1 = number1.value;
  const value2 = number2.value;

  console.log("두 수의 합 :", value1 + value2);

  // -> input 요소에 작성된 값 무조건 문자열(String) 형태.
  // 더했을 때 문자열 이어쓰기가 되는 문제 발생.

  // [해결방법]
  // 문자열(string)을 숫자(number)로 변경하는 코드를 수행.
  // 숫자만 작성된 문자열 "123"을 진짜 숫자타입 123로 바꾸는 방법.
  // -> Number("123") --> 123

  console.log(Number(value1) + Number(value2));

  // 두 수의 합을 Id가 "calcResult"인 요소(result 변수)의 내부 글자(innerText)로 대입하기

  result.innerText = Number(value1) + Number(value2);
}

// 두 수를 빼기
const number3 = document.getElementById("input1");
const number4 = document.getElementById("input2");
const result2 = document.getElementById("calcResult");

function minusFn() {
  const value3 = number3.value;
  const value4 = number4.value;

  console.log(Number(value3) - Number(value4));

  result2.innerText = Number(value3) - Number(value4);
}

//두 수를 곱하기
const number5 = document.getElementById("input1");
const number6 = document.getElementById("input2");
const result3 = document.getElementById("calcResult");

function multiFn() {
  const value5 = number5.value;
  const value6 = number6.value;

  console.log(Number(value5) * Number(value6));

  result3.innerText = Number(value5) * Number(value6);
}

// 두 수를 나누기
const number7 = document.getElementById("input1");
const number8 = document.getElementById("input2");
const result4 = document.getElementById("calcResult");

function divFn() {
  const value7 = number7.value;
  const value8 = number8.value;

  console.log(Number(value7) / Number(value8));

  result4.innerText = Number(value7) / Number(value8);
}

// 두 수의 나머지 연산자
const number9 = document.getElementById("input1");
const number10 = document.getElementById("input2");
const result5 = document.getElementById("calcResult");

function moduloFn() {
const value9 = number9.value;
const value10 = number10.value;

console.log(Number(value9) % Number(value10));
result5.innerText = Number(value9) % Number(value10);
}

// 응용 3개의 수 합하기
const number11 = document.getElementById("num1");
const number12 = document.getElementById("num2");
const number13 = document.getElementById("num3");
const result6 = document.getElementById("total");

function plus3Fn() {
  const value11 = num1.value;
  const value12 = num2.value;
  const value13 = num3.value;

  console.log(Number(value11) + Number(value12) + Number(value13));
  result6.innerText = Number(value11) + Number(value12) + Number(value13);
  console.log(Number(value11) + Number(value12)+ Number(value13));
  // result6.innerText = Number(value11.value)
                    // + Number(value12.value)
                    // + Number(value13.value);
}


// 증가/감소 연산자 (++, --)

// 증가, 감소할 수를 저장할 변수 선언 및 0으로 초기화.
let count = 0;
// 주의. const로 선언하면 값을 증가/감소 시킬 수 없음.

// 필요한 요소 얻어오기.
// 문서 내에서 id가 "result2"인 요소를 얻어와서 resultx 변수에 대입.
const resultx = document.getElementById("result2");

// 1증가 함수
function increase() {
  // count 변수값 1 증가.
  count++; // 또는 ++count; -> count 값이 1 증가.

  // 증가한 count 값을 resultx 내부 글자로 대입
  resultx.innerText = count;
}

function decrease() {
  resultx.innerText = --count;
}

//전위,후위 연산 확인하기.
function check() {
      // 함수 밖, 안은 구분되는 공간.
      // 밖에 작성한 변수 count / { } 안에 작성한 변수 count
  let count = 100; // 위에 있는 let count와 다른 변수.
  
  // 컴퓨터한테 연산은 +-*/ 뿐만 아니라
  // 코드를 하나하나 실행하는 것들이 전부 연산.

  // 전위 연산(++count, --count) 확인
  // -> 다른 연산보다 먼저 수행.
  // -> count 값이 먼저 증가/감소 후 console에 출력.
  console.log(++count); // 101
  console.log(++count); // 102
  console.log(++count); // 103
  console.log(--count); // 102
  console.log(--count); // 101
  console.log(--count); // 100

  // 후위 연산(count++, count--) 확인
  // -> 다른 연산이 다 끝나고 마지막에 수행.
  count = 50;

  console.log(count++); // 50 출력한 후 51로 증가
  console.log(count); // 51

  console.log(count--); // 51 출력한 후 50으로 감소
  console.log(count); // 50

  let a = 10;
  let b = 5;
  let c = ++a * b--;

  // 최종적으로 a,b,c에 저장된 값은 얼마?
  // a == 10
  // b == 5
  // c == 10 * 4 = 44

  console.log(a); // 11
  console.log(b); // 4
  console.log(c); // 55
}

// const name = document.getElementById("userName");
// const age = document.getElementById("userAge");
// const gender = document.getElementById("userGender");

function printJSObject() {
  const userName = document.getElementById("userName");
  const userAge = document.getElementById("userAge");
  const userGender = document.getElementById("userGender");

  const userInfo = {
    "이름" : userName.value, "나이" : userAge.value, "성별" : userGender.value
  };

  console.log(userInfo);
  // const user = {userName : name.value, userAge : age.value, userGender : gender.value};
  // console.log(user.userName, user.userAge, user.userGender);
}



















