const button = document.querySelectorAll(".buttonClick");

for (var i = 0; i < button.length; i++) {
  button[i].addEventListener("click", function () {
    alert("별도 기능 구현은 다음에...");
  });
}
