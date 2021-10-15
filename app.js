const question = "タマホームのCMで流れているDeep Purpleの曲は？";
const answers = ["Burn", "Smoke on the Water", "Highway Star", "Black Night"];
const correct = "Burn";

document.getElementById("js-question").textContent = question;

document.getElementsByTagName("button")[0].textContent = answers[0];
document.getElementsByTagName("button")[1].textContent = answers[1];
document.getElementsByTagName("button")[2].textContent = answers[2];
document.getElementsByTagName("button")[3].textContent = answers[3];

document.getElementsByTagName("button")[0].addEventListener("click", () => {
  if (correct === document.getElementsByTagName("button")[0].textContent) {
    window.alert("正解");
  } else {
    window.alert("不正解");
  }
});
