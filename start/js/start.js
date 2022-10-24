
//var가 아닌 const로 한건 상수로써 하나만 사용이 가능 중복 불가능

const main = document.querySelector("#main");
const qna = document.querySelector("#qna");

function begin(){
  main.style.webkitAnimaition = "fadeOut 1s";
  main.style.animation = "fadeOut 1s";
  setTimeout(() => {

    qna.style.webkitAnimaition = "fadeIn 1s";
    qna.style.animation = "fadeIn 1s";
    setTimeout(() => {
      main.style.display = "none";
      qna.style.display="block";
    },450)
  }, 450);
}
