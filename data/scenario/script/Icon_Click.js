//アイコンをクリックするとアイテム増加
function Icon_Click(){
  
    Click_Power = 1 + Math.round((Total_Power / 10));//クリックしたときの生産量は、総生産量の10分の1（小数点四捨五入）
    Click_Power *= Click_Extra_Power;//クリック増加量を増やすスキル用
    Total_Item = Number(Total_Item);
    Total_Item += Click_Power;
    Re_Write(Total_Item,'円','Total_Item');
    
    //クリック時にキャラ画像差し替え
    var charaImage = document.getElementById('Chara_Image');
    if (charaImage) {
        charaImage.src = "./data/fgimage/icon/Chara2.png";

        //画像戻す
        setTimeout(function() {
            charaImage.src = "./data/fgimage/icon/Chara1.png";
        }, 200);  // 変更時間の調整はここで行う
    }

    //ポップアップ要素生成
    var Popup_Element = document.createElement('div');
    Popup_Element.textContent = '+' + Click_Power; 
    Popup_Element.classList.add('click-popup', 'fadein');//cssでクリックアイコンの上部に出現させる

    // ポップアップの位置を少しだけランダムに表示 
    var x = (Math.random() - 0.5) * 20 - 410;
    var y = (Math.random() - 0.5) * 20 + 330;
    Popup_Element.style.left = x + 'px';
    Popup_Element.style.top = y + 'px';

    // ポップアップ要素をページに追加
    var Pop_Up = document.getElementById('Pop_Up');
    if (Pop_Up) {
        Pop_Up.appendChild(Popup_Element);

        // 一定時間後にフェードアウトクラスを追加
        setTimeout(function() {
            Popup_Element.classList.remove('fadein');
            Popup_Element.classList.add('fadeout');
        }, 300);  // フェードアウト開始時間

        // フェードアウト後にポップアップ要素を削除
        setTimeout(function() {
        Pop_Up.removeChild(Popup_Element);
        }, 1000);  // 削除までの時間
    }

}


//長押しでオートクリック機能
var Auto_Click = Auto_Click || null;//ストーリーから戻ってきたときは、重複させない

// PCとスマートフォンの両方に適応させる
document.getElementById('Click_Icon').addEventListener('mousedown', startInterval);
document.getElementById('Click_Icon').addEventListener('touchstart', startInterval);

document.addEventListener('mouseup', endInterval);
document.addEventListener('touchend', endInterval);

//長押し中は連続タップ開始
function startInterval(e) {
  Auto_Click = setInterval(Icon_Click, 300);//実行間隔
  if(e.type === 'touchstart') {
    e.preventDefault();  //スマホ特有の動作を防止
  }
}

// 長押しが解除されたら、タイマーをクリア
function endInterval() {
  clearInterval(Auto_Click);
}

//スマホ特有の動作を防止
document.getElementById('Click_Icon').addEventListener('touchmove', function(e) {
  e.preventDefault();
});

//スマホでも連続タップできるようにする
document.getElementById('Click_Icon').addEventListener('touchend', function(e) {
  e.target.click();
});


//アイコンを押したとき縮小、離した時元に戻す
var element = document.getElementById("Click_Icon");

element.addEventListener("mousedown", function() {
  this.style.transform = "scale(0.9)";
});

element.addEventListener("mouseup", function() {
  this.style.transform = "scale(1)";
});

element.addEventListener("touchstart", function() {
  this.style.transform = "scale(0.9)";
});

element.addEventListener("touchend", function() {
  this.style.transform = "scale(1)";
});