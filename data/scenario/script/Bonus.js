//画面左部に定期的にボーナスアイコンを発生させる
function Bonus_Icon() {

    // screenクラスがないとき（ストーリー閲覧時）は何もしない
    var screenElement = document.querySelector('.screen');
    if (!screenElement) {
      return;
    }

    // すでにボーナスアイコンが存在する場合は何もしない
    if (document.querySelector('.bonus-icon')) {
      return;
    }
  
    // ボーナスアイコン作成
    var Bonus_Icon = document.createElement('img');
    Bonus_Icon.className = 'bonus-icon';
    Bonus_Icon.src = './data/fgimage/icon/Bonus.png';
    Bonus_Icon.onclick = Bonus;

    //ボーナス獲得量のポップアップを格納する要素作成
    var Bonus_Popup = document.createElement('div');
    Bonus_Popup.id = 'Bonus-Popup';
  
    // ボーナスアイコンのサイズ
    var Icon_Size = 196;
  
    // ランダムな位置を計算（ボーナスボックス内）
    var x = Math.random() * (720 - Icon_Size) + 10;  // left: 10px; width: 720px;
    var y = Math.random() * (540 - Icon_Size) + 170;  // top: 170px; height: 540px;
  
    // ボーナスアイコンの位置を設定
    Bonus_Popup.style.position = 'absolute';
    Bonus_Popup.style.left = x + 'px';
    Bonus_Popup.style.top = y + 'px';
    Bonus_Popup.style.zIndex = '2';//クリックアイコンより手前に配置

    //ボーナスアイコンの大きさ
    Bonus_Icon.style.height = '196px';
    Bonus_Icon.style.width = '196px';
    Bonus_Icon.style.opacity = '0';
    Bonus_Icon.style.transition = 'opacity 2s';
  
    // ボーナスアイコンをページに追加
    document.querySelector('.screen').appendChild(Bonus_Popup);
    document.getElementById('Bonus-Popup').appendChild(Bonus_Icon);

    // ボーナスアイコンをゆっくり表示
    setTimeout(function() {
      Bonus_Icon.style.opacity = '1';
    }, 100);
}

// 5分ごとにボーナスアイコンを作成して表示
//setInterval(Bonus_Icon, 5 * 60 * 1000);

//テスト用に10秒間隔に
setInterval(Bonus_Icon, 10 * 1000);

//ボーナスの内容
var isBonusRunning = false;//実行判定

function Bonus() {
    // ボーナスアイコン要素を取得
    var Remove_Icon = document.querySelector('.bonus-icon');
    var Remove_Popup = document.getElementById('Bonus-Popup');

    // 実行中であれば何もしない
    if (isBonusRunning) {
        return;
    }

    isBonusRunning = true;//実行開始

    // ボーナス獲得
    var Bonus_Gain = Total_Power * 5 * 60; // 5分間の生産量　ここで取得量を調整する
    Total_Item += Bonus_Gain;
    Re_Write(Total_Item, '円', 'Total_Item');

    // ポップアップ要素生成
    var Popup_Element = document.createElement('div');
    Popup_Element.textContent = '+' + Bonus_Gain;  // 増加量を文字列に
    Popup_Element.classList.add('bonus-popup', 'fadein'); //css追加

    // ポップアップ要素をページに追加
    document.getElementById('Bonus-Popup').appendChild(Popup_Element);

    // ポップアップの位置をボーナスアイコンの上に設定
    Popup_Element.style.position = 'absolute';
    Popup_Element.style.left = 50 + 'px';
    Popup_Element.style.top = -20 + 'px';

    // 一定時間後にフェードアウトクラスを追加
    setTimeout(function() {
        Popup_Element.classList.remove('fadein');
        Popup_Element.classList.add('fadeout');
    }, 1000);  // フェードアウト開始時間

    // ボーナスアイコン要素が存在する場合は削除
    if (Remove_Popup) {
        // ボーナスアイコンをゆっくり非表示にする
        Remove_Icon.style.opacity = '0';
        // 非表示になったら要素を削除
        setTimeout(function() {
            document.querySelector('.screen').removeChild(Remove_Popup);
            isBonusRunning = false;//実行終了
        }, 1500);  // 削除までの時間
        
    }
}