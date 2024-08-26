/* 매개변수(Parameter), 전달인자(Argument) */

const input1 = document.querySelector("#input1");

const btn1 = document.querySelector("#btn1");

// 함수 선언 - 목적 : 2개의 값을 전달받아 출력하는 함수
function print1(num, str) { // 함수 선언
  // 함수 기능 작성(함수 정의)
  console.log(`${num}은 ${str}입니다`);
}

// #btn1 클릭하면 #input1의 값을 읽어와 print1() 함수 호출
btn1.addEventListener("click", function() {
  const value = input1.value;
  if(value.length == 0) {
    console.log("값을 입력해주세요");
    return; // 함수 종료와 동시에 호출한 곳으로 돌아감
  }
  
  let result; // 결과를 저장할 변수 선언

  if(Number(value) == 0) result = "0";
  else if(Number(value) > 0) result = "양수";
  else result = "음수";

  // 함수 호출(값 전달)
  // !중요 - 전달되는 값의 순서가 중요함
  print1(value, result); // 콘솔 출력 : 12은 양수입니다
  // print1(result, value); // 콘솔 출력 : 양수은 12입니다

});
//-------------------------------------------------------------------------

// 매개 변수로 배열 전달하기

function arrayTest(arr) {

  // 전달 받은 배열의 모든 요소 출력하기
  for(let i = 0; i < arr.length; i++) {

    // arr[i]에 있는 값이 "멜론"과 일치하면
    // 해당 요소의 값을 "딸기"로 재대입해라
    if(arr[i] == "멜론") arr[i] = "딸기";

    console.log(`${i}번째 인덱스 값 :`, arr[i]);
  }
}


// #btn2a 클릭 되었을 때, arrayTest() 함수 호출
document.querySelector("#btn2a").addEventListener("click", function() {

  const arr1 = [10,20,30];
  const arr2 = ["사과","바나나","멜론"];

  arrayTest(arr1);
  arrayTest(arr2); // arr2 배열의 주소를 참조함 ( 배열의 인덱스 값이 직접 들어가는게 아님 )

  console.log("arr2[2] : ", arr2[2]); // 콘솔 출력 : 딸기

  // 왜?
  // -> arrayTest(arr2) 호출 시
  // arr2 배열을 통째로 복사해서 전달하는게 아니라
  // arr2에 저장된 주소만 보내서 함수를 실행.

  // arrayTest() 함수에서 arr2와 같은 배열을 참조해서 수정
  // -> 함수 실행 후에 돌아와서도
  // 참조하고 있던 배열의 2번 인덱스 값이 변화되어 있음.
  // 배열, 객체 -> 값이 여러 개 가지고 있는 자료형.

  // 참조란?
  /*
    - 객체 지향 언어에서 배열,객체 등 값을 여러 개 가지고 있는 자료형인데
    - 변수는 값을 1개만 저장할 수 있기 때문에
    
    object를 메모리 다른 곳에 저장하고
    저장된 곳의 주소를 변수에 저장해서
    필요할 때 마다 해당 주소를 찾아가 원하는 값을 얻어오거나 수정할 수 있게 하는 것

    == 주소를 찾아가는 것을 "참조" 라고 한다.
  */
});


// 매개 변수로 요소 전달
function btn2bFn(el) {
  // 매개 변수 el (element) : 이벤트가 발생한 요소
  el.style.backgroundColor = "yellow";
}


// 매개 변수로 함수 전달

function print2(fn) {
  // console.log(fn);
  console.log(`a+b = ${fn(3,4)}`);
}

document.querySelector("#btn2c").addEventListener("click", function() {

  // 함수도 변수에 저장 가능. 변수명 == 함수명
  const sumFn = function(a, b) {
    return a + b; // 함수 종료 동시에 a+b를 가지고 호출한 곳으로 되돌아감 
  }

  // 전달 인자로 함수를 전달
  print2(sumFn);

});
//----------------------------------------------------------------------------

// 전달 받은 2개의 값을 곱해서 리턴(반환)
function returnTest(num1, num2) {
  return num1*num2; // 해당 함수 종료와 동시에 return 옆 작성된 값을 갖고 호출한 쪽으로 돌아감
}

function sumFn(arr) {
  let sum = 0;
  for(let i = 0; i <arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// return 확인하기
document.querySelector("#btn3a").addEventListener("click", function() {

  const numbers = []; // 빈 배열 생성

  // 배열.push(값) : 배열의 마지막 요소로 값을 추가
  numbers.push(30);
  numbers.push(50);
  numbers.push(4);
  numbers.push(returnTest(2,5)); // 함수를 호출해서 되돌려받는 값(return 값;)을 push

  console.log(numbers);


  console.log("합계 :", sumFn(numbers)); // 94;
});


//------------------------------------------------------------------------------------

// 클래스가 arrow인 요소 모두 얻어와 배열로 저장
const arrowList = document.querySelectorAll(".arrow");

// 화살표 함수 기본 형태 버튼 -> 매개 변수가 없는 경우 : () 생략 불가
arrowList[0].addEventListener("click", () => {

  alert("화살표 함수 기본 형태 연습");
});

// 매개 변수가 1개인 경우 : () 생략 가능.
arrowList[1].addEventListener("click", e => {

  e.target.style.backgroundColor = "pink";
});

function twoNumberPlus( otherFn ) {

  const input1 = Number(prompt("첫번째 값"));
  const input2 = Number(prompt("두번째 값"));

  alert(otherFn(input1, input2));


}

// return 한 줄만 작성된 경우
arrowList[2].addEventListener("click", () => {

  twoNumberPlus( (a, b) => a + b ); // return 한 줄만 있는 경우 : {} , return 생략 가능
});


// return 한 줄만 있는데 object를 반환하는 경우 -> return과 {} 생략 불가능
function printObject(otherFn) {
   // otherFn -> (name, age) => {
   // return {"name": name, "age": age}
  console.log(otherFn("고길동", "35")); // {"name" : "고길동", "age" : "35" }
}

arrowList[3].addEventListener("click", () => {

  printObject((name, age) => {
    return {"name": name, "age": age}
    // JS 객체 { K:V, K:V, ... }

  });

});

// --------------------------------------------------------------------------------

// 즉시 실행 함수
( () => {
  console.log("즉시 실행 함수");
} )()


console.log("git Test 학원에서 저장");

console.log("git Test 집에서 저장");

console.log("git Test 학원에서 저장2");

console.log("git Test 집에서 저장");