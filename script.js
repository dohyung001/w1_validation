//HTML태그 가져오기
const nameInput = document.querySelector('.name');
const emailInput = document.querySelector('.email');
const ageInput = document.querySelector('.age');
const pwInput = document.querySelector('.pw');
const pwrcInput = document.querySelector('.pw-rc');
const btn = document.querySelector('.btn');
const errorArray = document.querySelectorAll('.validation_error');
const corArray = document.querySelectorAll('.validation_cor');
const clear = document.querySelector('.clear_wrapper');
const clear_btn = document.querySelector('.clear_btn');
//비밀번호 확인
const regex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]+$/;




//버튼 이벤트리스너 추가
btn.addEventListener('click', val_func);
clear_btn.addEventListener('click', close_func);


//가입하기버튼 함수 선언
function val_func() {
  let name = nameInput.value;
  let email = emailInput.value;
  let age = ageInput.value;
  const pw = pwInput.value;
  const pwrc = pwrcInput.value;

  let count = new Array(5); //클리어 확인

  //이름
  if (name) {
    corArray[0].style.display = "flex"
    errorArray[0].style.display = "none"
    count[0] = 1;
  }
  else {
    errorArray[0].style.display = "flex"
    corArray[0].style.display = "none"
    count[0] = 0;
  }

  //이메일
  if (email.includes('@')) {
    corArray[1].style.display = "flex"
    errorArray[1].style.display = "none"
    count[1] = 1;
  }
  else {
    errorArray[1].style.display = "flex"
    corArray[1].style.display = "none"
    count[1] = 0;
  }

  //나이
  if (!parseInt(age)) {
    errorArray[2].textContent = "나이를 입력해주세요!"
    errorArray[2].style.display = "flex"
    corArray[2].style.display = "none"
    count[2] = 0;
  }
  else if (parseInt(age) < 0) {
    errorArray[2].textContent = "나이는 음수가 될 수 없습니다!"
    errorArray[2].style.display = "flex"
    corArray[2].style.display = "none"
    count[2] = 0;
  }
  else if (parseInt(age) % 1 !== 0) {
    errorArray[2].textContent = "나이는 소수가 될 수 없습니다!"
    errorArray[2].style.display = "flex"
    corArray[2].style.display = "none"
    count[2] = 0;
  }
  else if (parseInt(age) < 19) {
    errorArray[2].textContent = "미성년자는 가입할 수 없습니다!"
    errorArray[2].style.display = "flex"
    corArray[2].style.display = "none"
    count[2] = 0;
  }
  else {
    errorArray[2].style.display = "none"
    corArray[2].style.display = "flex"
    count[2] = 1;
  }

  //비밀번호
  if (pw.length < 4) {
    errorArray[3].textContent = "비밀번호는 최소 4자리 이상이어야 합니다."
    errorArray[3].style.display = "flex"
    corArray[3].style.display = "none"
    count[3] = 0;
  }
  else if (pw.length > 12) {
    errorArray[3].textContent = "비밀번호는 최대 12자리까지 가능합니다."
    errorArray[3].style.display = "flex"
    corArray[3].style.display = "none"
    count[3] = 0;
  }
  else if (!regex.test(pw)) {
    errorArray[3].textContent = "영어,숫자,특수문자를 모두 조합해서 비밀번호를 작성해야 합니다."
    errorArray[3].style.display = "flex"
    corArray[3].style.display = "none"
    count[3] = 0;
  }

  else {
    errorArray[3].style.display = "none"
    corArray[3].style.display = "flex"
    count[3] = 1;
  }

  // 비밀번호 확인
  if (pw === pwrc && pwrc) {
    errorArray[4].style.display = "none"
    corArray[4].style.display = "flex"
    count[4] = 1;
  }
  else {
    errorArray[4].style.display = "flex"
    corArray[4].style.display = "none"
    count[4] = 0;
  }
  let result = count.reduce((pre, cur) => pre + cur, 0);
  console.log(result);
  if (result === 5) {
    clear.style.display = "flex"
  }

}

//닫기버튼 함수 선언
function close_func() {
  clear.style.display = "none"
}




