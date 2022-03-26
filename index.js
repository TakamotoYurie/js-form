// jsでHTMLにアクセスするために記述。HTMLでidをformとした要素を取得し、定数formに格納する下で使う。
const form = document.getElementById("form");
// jsでHTMLにアクセスするために記述。HTMLでidをinputとした要素を取得し、定数inputに格納し、下で使う。
const input = document.getElementById("input");
// jsでHTMLにアクセスするために記述。
const ul = document.getElementById("ul");

// submitされた際に引数になっている関数・イベントが発火するようにする。
// 関数はeventを引数にすることができる。ここではsubmitのイベントということになる。
// formのsubmitというイベントに対し、関数であるjsのコードを実行するという内容。
form.addEventListener("submit", function (event) {
  // formでエンターを押すと画面がリロードされるため、リロードのイベントをなくす。
  event.preventDefault();
  // 呼び出し元を書いておいてから、中身（関数）を下に書いていくと、コードの目的がわかりやすくなる。
  add();
})

function add () {
  // documentに対し、liを引数とするcreateElementメソッドを呼び出すことで、liタグを作ることができる。
  const li = document.createElement("li");
  // li.innerTextにユーザーが入力した値を格納する。
  li.innerText = input.value;
  // liにデザインをつけるため、クラスをつける。
  li.classList.add("list-group-item");
  // ulの子要素にするためにappendChildメソッドを用いる。
  ul.appendChild(li);
  // 入力フォームを空にしておくと便利なので、最後に入力フォームを空にする。
  input.value = "";
}
