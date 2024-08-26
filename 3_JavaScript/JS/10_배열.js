// 배열 선언 및 기초 사용법
function check1() {
    // 배열 선언 방법 확인
    const arr1 = new Array(); // 0칸 짜리 비어있는 배열 생성
    const arr2 = new Array(3); // 3칸 짜리 값이 비어있는 배열 생성
    const arr3 = []; // 0칸 짜리 배열 생성
    const arr4 = ["사과","바나나","딸기"];

    console.log(arr1);
    console.log(arr2);
    console.log(arr3);
    console.log(arr4);

    // 배열명.length : 배열의 길이(배열에 있는 칸 수 또는 저장된 데이터 수)
    console.log(arr1.length);
    console.log(arr2.length);
    console.log(arr3.length);
    console.log(arr4.length);

    // 배열의 index
    /* 
    - 배열의 각 칸을 구분하는 번호
    - 첫번째 칸은 0부터 시작
    - 중간에 번호를 생략할 수 없다(index 번호는 연속적으로 생김)
    - 마지막 index 번호 == 배열 길이 -1
    */

    // 배열명[index] -> 배열의 해당 index에 존재하는 데이터 반환
    console.log(arr4[0]);
    console.log(arr4[1]);
    console.log(arr4[2]);

    // 배열명[index] = 값; -> 해당 index에 지정된 값 대입
    arr2[0] = 100;
    arr2[1] = "배고파";
    arr2[2] = true;

    console.log("arr2 :", arr2);
    // JS 배열의 특징 : index 별로 자료형을 다르게 넣을 수 있다.

    arr1[0] = "가";
    arr1[1] = "나";
    arr1[2] = "다";

    console.log(arr1);
}

// 배열과 for문 01
function check2() {
    // for문을 이용해서 배열 요소 초기화 하기
    // 초기화 : 변수/배열 요소에 처음으로 값을 대입하는 것

    // for 이용 X
    const arr1 = [];

    arr1[0] = 0;
    arr1[1] = 10;
    arr1[2] = 20;
    arr1[3] = 30;

    console.log(arr1);

    // for 이용 O
   const arr2 = [];
   
   for(let i = 0; i <= 3; i++) {
    arr2[i] = i * 10;
   }

   console.log(arr2);
}

// 배열과 for문 02
function check3() {
    // 배열에 저장된 값을 하나씩 순서대로 출력하기
    // -> for문을 이용해 배열의 모든 요소 접근하기

    const arr = [10, 20, 50, 100, 500, 1000];

    // arr.length = 6   -> i < arr.length
    // arr의 마지막 index 번호 == 5 -> i <= arr.length -1
    for(let i = 0; i < arr.length; i++) {
        console.log(`arr[${i}] == ${arr[i]}`);
    }
}

// 배열과 for문 03
function check4() {

    // for문을 이용해 배열을 순서대로 초기화 한 후
    // 다른 for문을 이용해 배열 요소를 하나씩 모두 출력
    const arr = new Array(5);

    // 1. 배열을 순서대로 초기화
    for(let i = 0; i < arr.length; i++) {
        arr[i] = Number(prompt(`${i}번째 숫자 입력`)); // prompt 창에 입력한 숫자가 0번부터 차례대로 4번까지 들어감
    }

    // 만들어진 arr 확인하기
    console.log(arr);

    // 2. 배열 요소를 하나씩 모두 출력 + 요소 별 합계 구하기

    let sum = 0; // 합계 저장 변수

    for(let i = 0; i < arr.length; i++) {
        console.log(`arr[${i}]: ${arr[i]}`);
        sum += arr[i]; // 값 누적
        console.log("sum =", sum);
    }
}


// 메뉴 뽑기
function selectMenu() {
    // 결과 출력할 span
    const menuResult = document.getElementById("menuResult");

    // 점심 메뉴로 초기화 된 배열 만들기
    const menu = ["돈가스", "파스타", "순대국", "마라탕", "닭갈비", "초밥", "삼겹살", "치킨", "햄버거", "피자", "백반"];

    // menu 배열 index 범위 내 난수 생성
    const randomNumber = Math.floor(Math.random() * menu.length);

    // 난수 번째 index 요소 값을 화면에 출력
    menuResult.innerText = menu[randomNumber];
}


// 2차원 배열
function check5() {
    
    const arr = [ [1,2,3,4],
                  [5,6,7,8], 
                  [9,10,11,12] ];

    // 배열명[행][열] [y][x]
    console.log(arr[1][3]); // 8
    console.log(arr[2][2]); // 11

    const arr1 = [100, 200, 300, 400];
    const arr2 = [900, 800, 700, 600];

    arr[3] = arr1;
    arr[4] = arr2;

    console.log(arr);
    console.log(arr[4][3]); // 600
}


// 2중 for를 이용한 2차원 배열
// -  2부터 2씩 증가하는 수를 5행 5열 배열의 모든 요소에 차례대로 대입하고 출력하기

function check6() {
    let count = 2;

    const arr = [];

    for(let y = 0; y < 5; y++) { // 행 제어
        arr[y] = [];

        for(let x = 0; x < 5; x++) { // 열 제어
            arr[y][x] = count; // y행 x열에 count를 대입
            count += 2;
        }

    }

    console.log(arr);
}



