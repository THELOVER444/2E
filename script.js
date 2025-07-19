const text = "بحبك";
const loveText = document.getElementById("love-text");

let i = 0;

function typeLetter() {
  if (i < text.length) {
    loveText.innerHTML += text[i];
    i++;
    setTimeout(typeLetter, 500);
  }
}

function replay() {
  loveText.innerHTML = "";
  i = 0;
  typeLetter();
}

typeLetter();
