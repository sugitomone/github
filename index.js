window.onload = function () {

  const list = {
    "daikichi":46,
    "kichi":20,
    "chuukichi":15,
    "syoukichi":10,
    "suekichi":5,
    "kyou":3,
    "daikyou":1,
  };

  var timer;
  // START・STOPボタンクリックのイベント
  document.getElementById("button").onclick = function () {
    // START
    if (this.textContent == "START") {
      // ボタンのテキストを"STOP"に変更
      this.textContent = "STOP";

      // ルーレットタイマーを設定
      timer = setInterval(function () {
        var random = Math.floor(Math.random() * Object.keys(list).length);
        document.getElementById("img").src = "img/" + Object.keys(list)[random] + ".png";
      }, 10);
    // STOP
    } else {
      // ボタンのテキストを"START"に変更
      this.textContent = "START";

      var rate = 0;
      var random = Math.floor(Math.random() * 100);
      for(var data in list){
        rate += list[data];
        if(random <= rate){
          document.getElementById("img").src = "img/" + data + ".png";

          // ルーレットタイマーを停止
          clearInterval(timer);
          return;
        }
      }
    }
  };
};
