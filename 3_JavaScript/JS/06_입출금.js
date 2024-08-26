function test() {
  // prompt() 사용 연습
  const password = prompt("비밀번호를 입력하세요");
  // 확인 -> 입력한 문자열 반환.
  // 취소 -> null 반환.

  if(password == null) { // 취소 버튼 누른것
    alert("취소");
  } else { // 확인 버튼 누른것
    if(password == '1234') {
      alert("비밀번호 일치");
    } else {
      alert("비밀번호 불일치");
    }
  }
}


//-------------------------------------------------------------


const amount = document.getElementById("amount"); // 금액 작성 input
const output = document.getElementById("output"); // 잔액 출력 span

let balance = 10000; // 잔액 기록 변수 ( 초기값 10000 )
const password = 1234; // 비밀번호 저장 변수

output.innerText = balance; // 초기 금액 설정

// 입금 기능
function deposit() {
  // 1. 입금 버튼 클릭 해당 함수 실행
  // 2. input에(금액을 작성한 input == amount) 입력된 금액 구하기
  // 3. 구한 금액을 잔액(balance)에 누적하기
  // 번외. 만약에 input에 금액을 작성 안하고 입금 버튼 누른 경우 -> 금액을 입력하시오 와 같은 alert 창 띄우기
  const money = Number(amount.value);
  
  balance = balance + money;
  output.innerText = balance;

  if (money <= 0) {
    alert("금액을 입력하세요");
  }

  // input에 기존에 작성된 값 제거하기
  amount.value = '';
}




// 출금 기능
function withdrawal() {
  // 1. 출금 버튼 클릭 해당 함수 실행
  // 2. input에 금액을 작성 안하고 출금버튼을 누른 경우 -> 금액을 입력하시오 와 같은 메시지 띄우기
  // 3. 비밀번호를 입력받기
  // 4. 취소 버튼 눌렀을 때 처리
  // 5. 확인 버튼 눌렀을 때 처리
  // 6. 비밀번호가 일치/불일치 처리
  // 7. 일치한다면?
  // -> 출금할 금액이 잔액보다 큰 경우 처리
  // -> 출금할 금액이 잔액보다 적거나 같은 경우 (출금 처리)
  // -> 잔액 balance에서 내가 작성한 금액 차감

  const pw = prompt("비밀번호를 입력하세요");
  const money = Number(amount.value);

  if(pw == null) {
    alert("출금을 취소했습니다");
  }
  else if(pw == '1234') {
    alert("비밀번호가 일치합니다");

    if (money > balance) {
      alert("출금하려는 돈이 잔액보다 많습니다");
    } else if(money <= balance) {
      balance = balance - money;
      output.innerText = balance;

      alert(`${money}원이 출금됐습니다. 남은 잔액은 ${balance}원 입니다.`);
    }
  }
  else if(password != pw) {
    alert("비밀번호가 불일치합니다");
  }
  amount.value = '';
}