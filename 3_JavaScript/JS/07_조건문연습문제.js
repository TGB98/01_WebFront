let a = 5;
let b = 10;

function check1() {
  if(a > b) {
    alert('a가 큽니다')
  } else {
    alert('b가 큽니다')
  }
}

let n = 7;

function check2() {
  if(n / 2 == 0) {
    alert(`${n}은 짝수입니다`)
  } else {
    alert(`${n}은 홀수입니다`)
  }
}

let x = 15;
let y = 22;
let z = 9;

function check3() {
  if( x > y || z > y ) {
    alert("아닙니다");
  } else {
    alert("y가 제일 큽니다");
  }
}

const input1 = document.getElementById("input1");

function check4() {
  const value = input1.value;

  if( value == 'apple' ) {
    alert(`${value}는 apple입니다`);
  } else if( value == 'banana') {
    alert(`${value}는 banana입니다`);
  } else {
    alert(`${value}는 다른 문자열입니다`);
  }
}

const input2 = document.getElementById("score");

function check5() {
  const number = score.value;

  if ( number < 60 ) {
    alert("학점 F 입니다");
  } else if ( number >= 60 && number < 71 ) {
    alert("학점 D 입니다");
  } else if ( number >= 71 && number < 81) {
    alert("학점 C 입니다");
  } else if ( number >= 81 && number < 91) {
    alert("학점 B 입니다");
  } else {
    alert("학점 A입니다");
  }
}

const input3 = document.getElementById("numberAge");
const input4 = document.getElementById("numberHeight");

function check6() {
  const number1 = numberAge.value;
  const number2 = numberHeight.value;

  if (number1 < 0 || number1 > 100) {
    alert("다시 입력");
  } else if (number1 < 12) {
    alert("넌 좀 더 나이 먹고 와라");
  } else if (number2 < 140) {
    alert("넌 좀 더 키 좀 크고 와라");
  } else {
    alert("넌 탈 자격이 있다");
  }
}


const input5 = document.getElementById("inputMonth");
const input6 = document.getElementById("inputOndo");

function check10() {

  const month = Number(input5.value);
  
  let season; // 계절이 뭔지 결과값 담을 변수
  let temperature; // 몇도 인지 저장할 변수

  // 입력된 달에 따른 계절 판단
  if(month >= 3 && month <= 5) {
    season = "봄";
  } else if(month >= 6 && month <= 8) {
    season = "여름";

    temperature = Number(input6.value);
    if(temperature >= 30) {
      season = `${season} [온도 : ${temperature}도, 폭염.]`;
    }
  } else if(month >= 9 && month <= 11) {
    season = "가을";
  } else if(month == 12 || month == 1 || month == 2) {
    season = "겨울";

    temperature = Number(input6.value);
    if(temperature <= 0) {
      season = `${season} [온도 : ${temperature}도, 한파.]`;
    }

  } else {
    season = "잘못된 달을 입력하셨습니다";
  }

  alert(season);


}