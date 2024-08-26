// 문제01. 10부터 1까지 숫자 거꾸로 출력하기(for)
function fn1() {
  for(let num = 10; num > 0; num--) {
    console.log(num);
  }
}

// 문제02. 20부터 1까지 숫자 중 짝수만 출력하기(for)
function fn2() {
  for(let num = 1; num < 21; num++)
    if (num % 2 == 0) {
      console.log(num);
    }
}

// 문제03. 1부터 50까지의 숫자 중 5의 배수만 출력하기(while)
function fn3() {
  let num = 1;
  while(num <= 50) {
    num++;
    if(num % 5 == 0) {
      console.log(num);
    }
  }
}

// 문제04. 팩토리얼 계산 : 5의 팩토리얼을 구하라(for)
function fn4() {
  let total = 1;
  for(let num = 1; num <= 5; num++) {
    total *= num;
  }
  console.log(`5!(5 factorial) = 5 x 4 x 3 x 2 x 1 = ${total}`);
}

// 문제05. 2단 부터 9단까지의 구구단 출력(2중 for)
function fn5() {
  let sum;
  for (let y = 2; y <= 9; y++) {
    for(let x = 1; x <= 9; x++) {
      sum = x*y;
      console.log(`${y}x${x}=${sum}`);
    }
  }
}

// 문제06. 숫자 3, 6, 9 게임 - 1~30까지 출력하되 3,6,9가 포함된 숫자는 "짝"을 출력(for)
function fn6() {
  for(let num = 1; num <= 30; num++) {

    console.log(num);
  }
}


// 문제07. 2부터 20까지의 소수 찾기(for)
function fn7() {
  for(let num = 2; num <= 20; num++) {
    if () { // 9,15가 빠지기 // 조건식을 배수가 되는 애들을 빼고 2,3 넣기
      console.log(num);
    }
  }
}