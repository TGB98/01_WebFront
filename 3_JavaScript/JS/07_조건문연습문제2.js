function test3() {
  let x = 15;
  let y = 22;
  let z = 9;

  // 최대값을 저장해둘 변수 (max)
  let max = x; // x값을 일단 가장 큰값으로 저장해둠. // max == 15

  if ( y > max ) { //현재 max(x)와 y값을 비교 y가 더 크면 max에 y값 덮어쓰기
    max = y;
  }

  if ( z > max ) {
    max = z;
  }

  // 최종적으로 가장 큰 값이 max에 저장되어 있음.
  console.log("가장 큰 숫자는" + max + "입니다");
}

function test4() {

  const str = document.getElementById("str").value;

  if(str.length == 0) {
    console.log("미입력");
  } else if( str == "apple") {
    console.log("사과입니다");
  } else if( str == "banana") {
    console.log("바나나입니다");
  } else {
    console.log("다른 과일입니다");
  }
}

function test5() {

  const score = Number(document.getElementById("score").value);

  let grade; // 학점 저장할 변수

  // 점수에 따른 학점 부여
  if (score > 90) {
    grade = 'A';
  } else if ( score > 80) {
    grade = 'B';
  } else if ( score > 70) {
    grade = 'C';
  } else if ( score > 60) {
    grade = 'D';
  } else {
    grade = 'F';
  }
  console.log(grade);
}

function test6() {
  const age = Number(document.getElementById("age").value);
  const height = Number(document.getElementById("height").value);

  let result; // 결과 저장용 변수

  // 나이와 키에 대한 조건 검사
  if( age < 0 || age > 100 ) {
    result = "잘못 입력하셨습니다";
  } else if( age < 12 ) {
    result = "적정 연령이 아닙니다";
  } else if( height < 140.0) {
    result = "적정 키가 아닙니다";
  } else {
    result = "탑승 가능합니다";
  }

  console.log(result);
}

