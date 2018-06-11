function send(){//
$.ajax({
type: "POST",
url: "write.php",//write.phpに送信
data: {date: $("#text").val()},//「id="text"」なテキストエリアのvalue値を取得し「date」として送信。
});
}

function onButtonClick1() {
  target = document.getElementById("output1");
  target.innerText = document.forms.chat.textBox1.value;
}

  //カウンタの初期値を設定
  var cnt = 0;
  var cnt2 = 0;

  //カウントアップする関数 countUp の定義
  function countUp(){
      //カウンタに 1 を加算
      cnt++;
      //カウンタの値を HTML 内の counter に表示
      document.getElementById("counter").innerHTML=cnt;

  }

  function countUp2(){
      //カウンタに 1 を加算
      cnt2++;
      //カウンタの値を HTML 内の counter に表示
      document.getElementById("counter2").innerHTML=cnt2;

  }

  //ページロード時に実行
  window.onload = function(){
      //カウンタの値を HTML 内の counter に表示
      document.getElementById("counter").innerHTML=cnt;
      //「p_btn」クリック時に関数 countUp を実行
      document.form1.p_btn.onclick=countUp;

        document.getElementById("counter2").innerHTML=cnt;
      //「m_btn」クリック時に関数 countDown を実行
      document.form1.m_btn.onclick=countUp2;
  };


$(function(){

  // リストを非表示
  $('#fadein_area ul li').hide();

  // 繰り返し処理
  $('#fadein_area ul li').each(function(i) {

    // 遅延させてフェードイン
    $(this).delay(700 * i).fadeIn(1500);

  });

});
