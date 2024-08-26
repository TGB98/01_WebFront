// 결과는 console.log() 로 출력
// name이라는 매개변수를 받아 "Hello, [name]!"를 출력하는 함수 선언 및 정의 및 호출
function practice1(name) { // 함수 선언 - 매개변수 name
  console.log(`Hello, ${name}!`);
}
practice1("고길동"); // 함수 호출 - 전달 인자

//-------------------------------------------------------------------------------------

// 두 개의 숫자를 매개변수로 받아 그 합을 반환하는 함수를 선언 및 정의하고 호출하시오
function practice2(fn) {
  console.log(`${fn(50,49)}`); 
}
const sumFn = function(a, b) { // 두 개의 숫자를 매개변수로 받아 합을 반환하는 함수
  return a + b;
}
practice2(sumFn); // 전달 인자로 함수 전달

//-------------------------------------------------------------------------------------

// 두 개의 숫자를 매개변수로 받아 곱한 결과를 반환하는 화살표 함수를 작성
function practice3(fn) {
  console.log(`${fn(9,9)}`);
}
const sumFn2 = (num1,num2) => {
  return num1*num2;
}
practice3(sumFn2);

//--------------------------------------------------------------------------------------

// 두 개의 숫자를 매개변수로 받아, 첫 번째 숫자가 두 번째 숫자보다 크면 "첫 번째 숫자가 더 큽니다"를 출력하고, 
// 그렇지 않으면 "두 번째 숫자가 더 크거나 같습니다"를 출력하는 함수를 선언 및 정의하고 호출하시오

function practice4(fn) {
  (fn(10,10));
}
const Fn3 = (num3,num4) => {
  if(num3 > num4) {
    console.log(`첫번째 숫자인 ${num3}가 더 큽니다`);
  }
  else {
    console.log(`두번째 숫자가 더 크거나 같습니다`);
  }
}
practice4(Fn3);

//--------------------------------------------------------------------------------------

// 문자열을 매개변수로 받아 문자열의 길이를 출력하는 함수를 선언 및 정의하고 호출하시오

function practice5(fn) {
  console.log(fn.length);
}

practice5("Lemon");

//---------------------------------------------------------------------------------------

//문자열과 반복 횟수를 매개변수로 받아, 해당 문자열을 주어진 횟수만큼 반복하여 출력하는 함수를 선언 및 정의하고 호출하시오
function practice6(fn,times) {
  let time = '';
    for(let i = 0; i < times; i++) {
      time += fn;
    }
    console.log(time);
}
practice6("banbook", 3);

//----------------------------------------------------------------------------------------

// 숫자를 매개변수로 받아 그 숫자가 짝수인지 아닌지를 true 또는 false로 반환하는 함수를 선언 및 정의하고 호출하시오

function practice7(numb) {
  if(numb % 2 == 0) {
    console.log(true);
  }
  else {
    console.log(false);
  }
}
practice7(6);

//-----------------------------------------------------------------------------------------

// 세 개의 숫자를 매개변수로 받아 그 중 가장 큰 숫자를 반환하는 함수를 선언 및 정의하고 호출하시오

function practice8(a,b,c) {
  let max = a;
  if (max < b) {
    max = b;
  }
  if (max < c) {
    max = c;
  }
  return max;
}

console.log(practice8(40,80,120));


// ----------------------------------------------------------------------------------------------

// 배열을 매개변수로 받아 첫 번째 요소를 반환하는 화살표 함수를 선언 및 정의하고 호출하시오

const arr = (arr) => arr[0];
console.log(arr([30,60,90]));

// -------------------------------------------------------------------------------------------------

// 배열을 매개변수로 받아 배열의 모든 숫자의 합과 평균을 객체 형태로 반환하는 함수를 선언 및 정의하고 호출하시오

const numarr = (arr2) => {

  let plus = arr2.reduce((acc, curr) => acc + curr);

  let avg = plus / arr2.length;

  return { plus, avg};

}

console.log(numarr([50,100,150]));

// --------------------------------------------------------------------------------------------------

// 숫자 두 개와 연산을 수행하는 함수를 매개변수로 받아, 두 숫자에 해당 연산을 적용한 결과를 반환하는 함수를 선언 및 정의하고 호출하시오

function practice9(a,b,total) {
  return total(a,b);
}

function add(q, w) {
  return q + w;
}

console.log(practice9(30,60,add));

// ---------------------------------------------------------------------------------------------------

// 사람의 이름과 인사말을 출력하는 함수를 매개변수로 받아, 해당 이름과 인사말을 사용하여 인사를 출력하는 함수를 선언 및 정의하고 호출하시오

function Name(A) {
  return A;
}

function hello(B) {
  return B;
}

function To(A,B) {
  return A+B;
}

console.log(Name('길동'),hello('안녕!'));


function greet(name, callback) {
  callback(name);
}

function sayHello(name) {
  console.log(`안녕, ${name}`);
}

function sayGoodbye(name) {
  console.log(`잘가, ${name}`);
}

greet('스파이더맨', sayHello);
greet('아이언맨', sayGoodbye);