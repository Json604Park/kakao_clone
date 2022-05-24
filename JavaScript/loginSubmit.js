const password = document.querySelector("#userPW"); // ID로 받는 경우
const submitBtn = document.querySelector(".loginBtn"); // Class로 받는 경우

//이벤트 리스너 등록 + 함수 구현
password.addEventListener("input", (event) => {
  if (password.minLength <= password.value.length) {
    submitBtn.classList.add("loginBtnActive");
  } else {
    submitBtn.classList.remove("loginBtnActive");
  }
});
