//特殊係数を増加させる施設

//条件を満たしていれば、施設を強化可能
function Extra_Buy(Extra_Name){

    if (Extra_Name === 'One') {
        if(Buildings_One_Extra == 3 && Buildings_One_Count >=20){

            if(Total_Item >= One_Extra_Price_Three){
                Total_Item -= One_Extra_Price_Three;
                Buildings_One_Extra = 5;
                Re_Write('コンプリート', '', 'Extra_One');
                Re_Write('施設1の生産量、常時5倍', '', 'Extra_One_Gist');
                Re_Write('条件:なし', '', 'Extra_One_Requirement');
                Re_Write('値段:なし', '', 'Extra_One_Next_Price');
            }
        }

        if(Buildings_One_Extra == 2 && Buildings_One_Count >=10){
            if(Total_Item >= One_Extra_Price_Two){
                Total_Item -= One_Extra_Price_Two;
                Buildings_One_Extra = 3;
                Re_Write('施設1の強化施設3', '', 'Extra_One');
                Re_Write('施設1の生産量を、常時5倍にする', '', 'Extra_One_Gist');
                Re_Write('条件:施設1の所持数20個以上', '', 'Extra_One_Requirement');
                Re_Write('値段:' + One_Extra_Price_Three, '円', 'Extra_One_Next_Price');
            }
        }
        if(Buildings_One_Extra == 1 && Buildings_One_Count >=3){
            if(Total_Item >= One_Extra_Price_One){
                Total_Item -= One_Extra_Price_One;
                Buildings_One_Extra = 2;
                Re_Write('施設1の強化施設2', '', 'Extra_One');
                Re_Write('施設1の生産量を、常時3倍にする', '', 'Extra_One_Gist');
                Re_Write('条件:施設1の所持数10個以上', '', 'Extra_One_Requirement');
                Re_Write('値段:' + One_Extra_Price_Two, '円', 'Extra_One_Next_Price');
            }
         }

         Buildings_Total_Power_Calculate();
         Re_Write(Buildings_One_Total_Power,'円/秒','Buildings_One_Total_Power');

    }

    if (Extra_Name === 'Two') {

        if(Buildings_Two_Extra == 3 && Buildings_Two_Count >=20){
            if(Total_Item >= Two_Extra_Price_Three){
                Total_Item -= Two_Extra_Price_Three;
                Buildings_Two_Extra = 5;
                Re_Write('コンプリート', '', 'Extra_Two');
                Re_Write('施設2の生産量、常時5倍', '', 'Extra_Two_Gist');
                Re_Write('条件:なし', '', 'Extra_Two_Requirement');
                Re_Write('値段:なし', '', 'Extra_Two_Next_Price');
            }
        }

        if(Buildings_Two_Extra == 2 && Buildings_Two_Count >=10){
            if(Total_Item >= Two_Extra_Price_Two){
                Total_Item -= Two_Extra_Price_Two;
                Buildings_Two_Extra = 3;
                Re_Write('施設2の強化施設3', '', 'Extra_Two');
                Re_Write('施設2の生産量を、常時5倍にする', '', 'Extra_Two_Gist');
                Re_Write('条件:施設2の所持数20個以上', '', 'Extra_Two_Requirement');
                Re_Write('値段:' + Two_Extra_Price_Three, '円', 'Extra_Two_Next_Price');
            }
        }
        if(Buildings_Two_Extra == 1 && Buildings_Two_Count >=3){
            if(Total_Item >= Two_Extra_Price_One){
                Total_Item -= Two_Extra_Price_One;
                Buildings_Two_Extra = 2;
                Re_Write('施設2の強化施設2', '', 'Extra_Two');
                Re_Write('施設2の生産量を、常時3倍にする', '', 'Extra_Two_Gist');
                Re_Write('条件:施設2の所持数10個以上', '', 'Extra_Two_Requirement');
                Re_Write('値段:' + Two_Extra_Price_Two, '円', 'Extra_Two_Next_Price');
            }
         }

         Buildings_Total_Power_Calculate();
         Re_Write(Buildings_Two_Total_Power,'円/秒','Buildings_Two_Total_Power');
    }

}


//ロード時に定義　施設特殊係数の値に応じて次の強化施設を定義
if(Buildings_One_Extra == 1){
    Re_Write('施設1の強化施設1', '', 'Extra_One');
    Re_Write('施設1の生産量を、常時2倍にする', '', 'Extra_One_Gist');
    Re_Write('条件:施設1の所持数3個以上', '', 'Extra_One_Requirement');
    Re_Write('値段:' + One_Extra_Price_One, '円', 'Extra_One_Next_Price');
}
if(Buildings_One_Extra == 2){
    Re_Write('施設1の強化施設2', '', 'Extra_One');
    Re_Write('施設1の生産量を、常時3倍にする', '', 'Extra_One_Gist');
    Re_Write('条件:施設1の所持数10個以上', '', 'Extra_One_Requirement');
    Re_Write('値段:' + One_Extra_Price_Two, '円', 'Extra_One_Next_Price');
}
if(Buildings_One_Extra == 3){
    Re_Write('施設1の強化施設3', '', 'Extra_One');
    Re_Write('施設1の生産量を、常時5倍にする', '', 'Extra_One_Gist');
    Re_Write('条件:施設1の所持数20個以上', '', 'Extra_One_Requirement');
    Re_Write('値段:' + One_Extra_Price_Three, '円', 'Extra_One_Next_Price');
}
if(Buildings_One_Extra == 5){
    Re_Write('コンプリート', '', 'Extra_One');
    Re_Write('施設1の生産量、常時5倍', '', 'Extra_One_Gist');
    Re_Write('条件:なし', '', 'Extra_One_Requirement');
    Re_Write('値段:なし', '', 'Extra_One_Next_Price');
}

if(Buildings_Two_Extra == 1){
    Re_Write('施設2の強化施設1', '', 'Extra_Two');
    Re_Write('施設2の生産量を、常時2倍にする', '', 'Extra_Two_Gist');
    Re_Write('条件:施設2の所持数3個以上', '', 'Extra_Two_Requirement');
    Re_Write('値段:' + Two_Extra_Price_One, '円', 'Extra_Two_Next_Price');
}
if(Buildings_Two_Extra == 2){
    Re_Write('施設2の強化施設2', '', 'Extra_Two');
    Re_Write('施設2の生産量を、常時3倍にする', '', 'Extra_Two_Gist');
    Re_Write('条件:施設2の所持数10個以上', '', 'Extra_Two_Requirement');
    Re_Write('値段:' + Two_Extra_Price_Two, '円', 'Extra_Two_Next_Price');
}
if(Buildings_Two_Extra == 3){
    Re_Write('施設2の強化施設3', '', 'Extra_Two');
    Re_Write('施設2の生産量を、常時5倍にする', '', 'Extra_Two_Gist');
    Re_Write('条件:施設2の所持数20個以上', '', 'Extra_Two_Requirement');
    Re_Write('値段:' + Two_Extra_Price_Three, '円', 'Extra_Two_Next_Price');
}
if(Buildings_Two_Extra == 5){
    Re_Write('コンプリート', '', 'Extra_Two');
    Re_Write('施設2の生産量、常時5倍', '', 'Extra_Two_Gist');
    Re_Write('条件:なし', '', 'Extra_Two_Requirement');
    Re_Write('値段:なし', '', 'Extra_Two_Next_Price');
}




//購入ボタンをスマホでも連続タップできるようにする
var elements = document.getElementsByClassName('extra-btn');//ページ上の全てのextra-btnを取得

Array.prototype.forEach.call(elements, function(element) {
  element.addEventListener('touchend', function(e) {
    e.target.click();//タップ終了時、clickイベントを明示的に発生
    e.preventDefault();//1回のタップで2回タップされる現象を抑制
  });
});