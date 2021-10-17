const quiz = [
  {
    question: "タマホームのCMで流れているDeep Purpleの曲は？",
    answers: ["Burn", "Smoke on the Water", "Highway Star", "Black Night"],
    correct: "Burn",
  },
  {
    question:
      "ギターの神様、ジミ・ヘンドリックス初めて公のステージに立った時に最初に演奏した曲は？",
    answers: ["Purple Haze", "Killing Floor", "Voodoo Child", "Queen"],
    correct: "Killing Floor",
  },
  {
    question:
      "Queenのギタリスト、ブライアン・メイがギター以外に精通していることは？",
    answers: ["登山", "天文学", "疫学", "テレビゲーム"],
    correct: "天文学",
  },
  {
    question:
      "Mr.Bigのギタリスト、ポールギルバートが別名義で活動していたことがあるが、その名前は？",
    answers: ["Guilty", " Over Sea", "Racer X", "Doubt"],
    correct: "Racer X",
  },
];
const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;
const $button = document.getElementsByTagName("button");
const buttonLength = $button.length;

// 問題文と選択肢を定義して、setupQuiz関数に入れる
const setupQuiz = () => {
  document.getElementById("js-question").textContent = quiz[quizIndex].question;

  let buttonIndex = 0;
  while (buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
};

//関数呼び出し
setupQuiz();

// ボタンをクリックした時のイベント発火
const clickHandler = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent) {
    window.alert("正解！");
    score++;
  } else {
    window.alert("不正解");
  }
  quizIndex++;

  if (quizIndex < quizLength) {
    setupQuiz();
  } else {
    window.alert("終了!");
    window.alert("あなたのスコアは" + score + "/" + quizLength + "点です！");
  }
};

let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener("click", (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}
