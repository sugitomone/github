window.onload = function () {

  const list = {
    "daikichi":55,
    "kichi":16,
    "chuukichi":13,
    "syoukichi":8,
    "suekichi":5,
    "kyou":2,
    "daikyou":1,
  };

  var timer;
  // START・STOPボタンクリック
  document.getElementById("button").onclick = function () {
    // START
    if (this.textContent == "START") {
      // STOP に変更
      this.textContent = "STOP";
      // タイマーを設定
      timer = setInterval(function () {
        var random = Math.floor(Math.random() * Object.keys(list).length);
        document.getElementById("img").src = "img/" + Object.keys(list)[random] + ".png";
      }, 10);
      
    // STOP
    } else {
      // START に変更
      this.textContent = "START";

      var rate = 0;
      var random = Math.floor(Math.random() * 100);
      for(var data in list){
        rate += list[data];
        if(random <= rate){
          document.getElementById("img").src = "img/" + data + ".png";

          // タイマーを停止
          clearInterval(timer);
          return;
        }
      }
    }
  };
};
