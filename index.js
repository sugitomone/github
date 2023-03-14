window.onload = function () {

  const list = {
    "daikichi":10,
    "kichi":15,
    "chuukichi":20,
    "syoukichi":25,
    "suekichi":15,
    "kyou":10,
    "daikyou":5,
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
