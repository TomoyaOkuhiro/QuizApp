const question = "タマホームのCMで流れているDeep Purpleの曲は？";
const answers = ["Burn", "Smoke on the Water", "Highway Star", "Black Night"];
const correct = "Burn";

const $button = document.getElementsByTagName("button");
const buttonLength = $button.length;

// 問題文と選択肢を定義して、setupQuiz関数に入れる
const setupQuiz = () => {
  document.getElementById("js-question").textContent = question;

  let buttonIndex = 0;
  while (buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = answers[buttonIndex];
    buttonIndex++;
  }
};

//関数呼び出し
setupQuiz();

// ボタンをクリックした時のイベント発火
const clickHandler = (e) => {
  if (correct === e.target.textContent) {
    window.alert("正解");
  } else {
    window.alert("不正解");
  }
};

let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener("click", (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}
