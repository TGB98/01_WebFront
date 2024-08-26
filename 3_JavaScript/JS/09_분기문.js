//break 확인
function check1() {
  // 1부터 10까지 1씩 증가하다가 5가 되면 멈춤

  for(let i = 1; i <= 10; i++) {
    console.log(i);

    if(i == 5) break;
  }
}

function check2() {
  // 무한 반복하는 while 문 멈추기
  let i = 1;

  // i가 10 초과 시 멈춤
  while(true) {
  console.log(i++);    
  
  if(i > 10) break;
  }
}

// continue 확인
function check3() {
  // 1부터 20까지 1씩 증가하며 출력
  // 단, 3의 배수는 건너뛰기
  for(let i = 1; i <= 20; i++) {
    
    // 3의 배수인 경우
    if(i % 3 == 0) continue;

    // 3의 배수인 경우 아래 코드를 실행하지 않음.
    console.log(i);
  }
}

function check4() {
  // 1부터 30까지 1씩 증가하며 출력
  // 단, 홀수 또는 10의 배수는 건너뛰기
  for(let i = 1; i <= 30; i++) {

    // 홀수인 경우 || 10의 배수인 경우
    if(i % 2 == 1 || i % 10 == 0) continue;

    console.log(i);
  }
}

// break와 continue 둘 다 적용
/* 0~9까지 5번 반복하여 출력
    단,  
  - 각 줄에서 4의 배수는 건너뛰기
  - 3번째 줄 출력 후 멈추기


  최종적으로 아래처럼 출력되어야 함
 
  01235679
  01235679
  01235679
*/

function check5() {

  for(let y = 1; y <= 5; y++) {
    let str = "";

    for(let x = 0; x <= 9; x++) {
      if(x != 0 && x % 4 == 0) continue;

      str += x;
    }

    console.log(str);

    if(y == 3) break;
  }
}


// up & down 게임
function startGame() {
  let start; // prompt 입력한 값 저장할 변수 선언
  let count = 0; // 시도한 횟수
  const number = Math.floor(Math.random() *200) +1; // 난수 발생
  
  while(start !== number) { // 지정된 난수 입력할 때까지 무한 반복
    start = prompt("숫자를 입력");
    num = ++count;
    if(start == number) {
      alert(`정답:${number}, 시도 횟수:${num}회`); break;
    } else if (start > number){
      alert(`입력한 수:${start}, down, 시도 횟수:${num}회`); continue;
    } else if (start < number){
      alert(`입력한 수:${start}, up, 시도 횟수:${num}회`); continue;
    }
  }

}












