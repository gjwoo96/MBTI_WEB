
//var가 아닌 const로 한건 상수로써 하나만 사용이 가능 중복 불가능

const main = document.querySelector("#main");
const qna = document.querySelector("#qna");

function addAnswer(answerTEXT ,qIdx){
  var a = document.querySelector(".answerBox");
  var answer = document.createElement("button");
  answer.classList.add("answerList");
  a.appendChild(answer);
  answer.innerHTML = answerTEXT;
  answer.addEventListener("click",function(){
    //querySelectorAll 해당하는 요소 전체를 가져옴
    var children = document.querySelectorAll(".answerList");
    for(let i = 0; i< children.length; i++){
      children[i].disabled = true;
      children[i].style.display= "none";
    }
    
    goNext(++qIdx);
  },false);
}
function goNext(qIdx){
  var q = document.querySelector(".qBox");
  q.innerHTML = qnaList[qIdx].q;
  for(let i in qnaList[qIdx].a){
    addAnswer(qnaList[qIdx].a[i].answer, qIdx);
  }
}

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
    let qIdx = 0;
    goNext(qIdx);
  }, 450);
}


