/*
■基本構造
1:クリック時にスキルの内容を即座に反映させる(setIntervalは、即座に発動しないため)
2:スキルが発動したら、スキルボタンを無効化する
3:発動が終わり次第、スキルで変更した変数を元に戻し、クールダウンタイムを設ける
4:クールダウンタイムが終わり次第、スキルボタンを有効化し、1に戻る

■懸念箇所の処理
1:スキル実行中 or クールダウン中にユーザーがページをリロードする
⇒クールダウンタイムがリセットされ、即座にスキルが発動できてしまうので、不正防止のためにlocalStorageにフラグを設定
　スキル発動時に、localStorage.setItem('Skill_One_Cooldown_Flag', '1');
　クールダウン終了時に、localStorage.setItem('Skill_One_Cooldown_Flag', '0');
　ただし、クールダウンタイム以上に、ゲームをしていなかった場合は発動させたいので、クールダウンタイムから放置時間分減らす
　Skill_One_Cooldown_Time -= Idle_Seconds;

2:スキル実行中に、ユーザーが別のシナリオファイルを呼び出す
⇒ティラノは、ベースのhtml.indexにksファイルから生成したhtml要素を挿入、削除している（？）
　つまり、別のksファイルに飛ぶと、html要素が消えるが、変数などは保持される
　問題点として、別のksファイルを読み込み、再度clicker.ksに戻ってくると、スクリプトなどが2重に読み込まれてしまう現象が起こる
　結論として、スキル実行中に別のシナリオファイルに飛び、スキル発動時間中にclicker.ksに戻ってくると、2回スキルが実行されてしまう
　なので、Skill_One_Cooldownという変数を用意する
  ボタンクリック時に、Skill_One_Cooldownをfalseに設定、スキルを発動させ、すぐにSkill_One_Cooldownをtrueに戻す
  その後、Skill_One_Cooldownをtrueだが、if (Skill_One_Time > 0)、つまりスキル発動時間が残っている場合は、スキルを発動させるようにすれば、別のシナリオから戻ってきた場合も、スキルは重複しない
*/

//放置時間を計算
var Unixtime_Load = Math.floor( new Date().getTime() / 1000 );
var Unixtime_Save = localStorage.getItem('Unixtime_Save');
var Idle_Seconds = Unixtime_Load - Unixtime_Save;//セーブ時とロード時のUnixtimeの差分を計算

// スキル1 30秒間、施設1の生産量2倍
Re_Write('スキル' + '1' + ' 発動可能。', '', 'Skill_One_Status');

function Skill_One() {
    Skill_One_Cooldown = false;
    Skill_One_Time = 30; // スキルの効果時間
    Skill_One_Cooldown_Time = 180;//クールダウン
    localStorage.setItem('Skill_One_Cooldown_Flag', '1');//不正防止フラグオン

    if (!Skill_One_Cooldown) {
        document.getElementById('Skill_One_Button').disabled = true; // ボタンを無効化

        Buildings_One_Skill = 2; // パワーを上げる

        Buildings_Total_Power_Calculate();
        Re_Write(Buildings_One_Total_Power, '円/秒', 'Buildings_One_Total_Power');
        Re_Write(Total_Power, '円/秒', 'Total_Power');

        Skill_One_Cooldown = true;
        Re_Write('スキル' + '1' + 'が発動中です。残り時間：', Skill_One_Time + '秒', 'Skill_One_Status'); // スキルが発動したときにすぐに更新

        let Skill_Interval = setInterval(() => {
            Skill_One_Time--;
            if (Skill_One_Time > 0) {

                Buildings_One_Skill = 2;
                var element = document.getElementById('Skill_One_Button');
                if (element !== null) {
                    document.getElementById('Skill_One_Button').disabled = true;// ボタンを無効化
                }
                Buildings_Total_Power_Calculate();

                Re_Write('スキル' + '1' + 'が発動中です。残り時間：', Skill_One_Time + '秒', 'Skill_One_Status');
            } else if (Skill_One_Cooldown_Time > 0) {

                Buildings_One_Skill = 1; // 効果が切れたらパワーを元に戻す

                var element = document.getElementById('Skill_One_Button');
                if (element !== null) {
                    document.getElementById('Skill_One_Button').disabled = true;
                }

                Buildings_Total_Power_Calculate();
                Re_Write(Buildings_One_Total_Power, '円/秒', 'Buildings_One_Total_Power');

                Re_Write('スキル' + '1' + 'はクールダウン中です。残り時間：', Skill_One_Cooldown_Time + '秒', 'Skill_One_Status');
                Skill_One_Cooldown_Time--;
            } else {
                clearInterval(Skill_Interval);
                Skill_One_Cooldown = false;
                document.getElementById('Skill_One_Button').disabled = false; // ボタンを再度有効化
                Re_Write('スキル' + '1' + 'のクールタイムが終了しました。再度使用できます。', '', 'Skill_One_Status');
                localStorage.setItem('Skill_One_Cooldown_Flag', '0');
            }
        }, 1000); // 1秒ごとにスキルの状態を更新
    } else {
        if (Skill_One_Time > 0) {

            Buildings_Total_Power_Calculate();
            Buildings_One_Skill = 2; // シナリオから戻ってきたときに、反映する用
            Re_Write(Buildings_One_Total_Power, '円/秒', 'Buildings_One_Total_Power');
            Re_Write(Total_Power, '円/秒', 'Total_Power');

            Re_Write('スキル' + '1' + 'が発動中です。残り時間：', Skill_One_Time + '秒', 'Skill_One_Status');
        } else {
            Re_Write('スキル' + '1' + 'はクールダウン中です。', '', 'Skill_One_Status');
        }
    }
}


// スキルクールタイム中にリロードすると、クールダウンタイムリセット（不正防止）
if (localStorage.getItem('Skill_One_Cooldown_Flag') == '1') {
    Skill_One_Cooldown = false;
    Skill_One_Time = 0; // スキルの効果時間
    Skill_One_Cooldown_Time = 180;
    Skill_One_Cooldown_Time -= Idle_Seconds;//ページから離れていた時間分減らす

    document.getElementById('Skill_One_Button').disabled = true; // ボタンを無効化

    Re_Write('スキル' + '1' + 'はクールダウン中です。残り時間：', Skill_One_Cooldown_Time + '秒', 'Skill_One_Status');

    let Cooldown_Interval = setInterval(() => {
        Skill_One_Time--;
        if (Skill_One_Cooldown_Time > 0) {
            Re_Write('スキル' + '1' + 'はクールダウン中です。残り時間：', Skill_One_Cooldown_Time + '秒', 'Skill_One_Status');

            var element = document.getElementById('Skill_One_Button');
            if (element !== null) {
                document.getElementById('Skill_One_Button').disabled = true;
            }

            Skill_One_Cooldown_Time--;
        } else {
            clearInterval(Cooldown_Interval);
            Skill_One_Cooldown = false;
            document.getElementById('Skill_One_Button').disabled = false; // ボタンを再度有効化
            Re_Write('スキル' + '1' + 'のクールタイムが終了しました。再度使用できます。', '', 'Skill_One_Status');
            localStorage.setItem('Skill_One_Cooldown_Flag', '0');
        }
    }, 1000); // 1秒ごとにスキルの状態を更新
}


// スキル2 1時間分の生産量を取得
Re_Write('スキル' + '2' + ' 発動可能。', '', 'Skill_Two_Status');

function Skill_Two() {
    Skill_Two_Cooldown = false;
    Skill_Two_Time = 0; // スキルの効果時間
    Skill_Two_Cooldown_Time = 180;//クールダウンタイム
    localStorage.setItem('Skill_Two_Cooldown_Flag', '1');

    if (!Skill_Two_Cooldown) {
        document.getElementById('Skill_Two_Button').disabled = true; // ボタンを無効化
        Hour_Gain = Total_Power * 60 * 60;//1時間分の生産量
        Total_Item += Hour_Gain; // 取得
        Re_Write(Total_Item,'円','Total_Item');

        //ポップアップ要素生成
        var Popup_Element = document.createElement('div');
        Popup_Element.textContent = '+' + Hour_Gain;  // 増加量を表示
        Popup_Element.classList.add('click-popup', 'fadein');//cssでクリックアイコンの上部に出現させる

        // ポップアップの位置
        Popup_Element.style.left = '-420' + 'px';
        Popup_Element.style.top = '330' + 'px';

        // ポップアップ要素をページに追加
        document.getElementById('Pop_Up').appendChild(Popup_Element);

        // 一定時間後にフェードアウトクラスを追加
        setTimeout(function() {
            Popup_Element.classList.remove('fadein');
            Popup_Element.classList.add('fadeout');
        }, 1000);  // フェードアウト開始時間

        // フェードアウト後にポップアップ要素を削除
        setTimeout(function() {
        document.getElementById('Pop_Up').removeChild(Popup_Element);
        }, 1500);  // 削除までの時間

        Skill_Two_Cooldown = true;
        Re_Write('','スキル' + '2' + 'はクールダウン中です。残り時間：' + Skill_Two_Cooldown_Time + '秒','Skill_Two_Status'); // スキルが発動したときにすぐに更新

        let Skill_Interval = setInterval(() => {
            if (Skill_Two_Cooldown_Time > 0) {

                var element = document.getElementById('Skill_Two_Button');
                if (element !== null) {
                    document.getElementById('Skill_Two_Button').disabled = true;// ボタンを無効化
                }
                Re_Write('' ,'スキル' + '2' + 'はクールダウン中です。残り時間：' + Skill_Two_Cooldown_Time + '秒','Skill_Two_Status');
                Skill_Two_Cooldown_Time--;
            } else {
                clearInterval(Skill_Interval);
                Skill_Two_Cooldown = false;
                document.getElementById('Skill_Two_Button').disabled = false; // ボタンを再度有効化
                Re_Write('スキル' + '2' + 'のクールタイムが終了しました。再度使用できます。', '', 'Skill_Two_Status');
                localStorage.setItem('Skill_Two_Cooldown_Flag', '0');
            }
        }, 1000); // 1秒ごとにスキルの状態を更新
    } 
}

// スキルクールタイム中にリロードすると、クールダウンタイムリセット（不正防止）
if (localStorage.getItem('Skill_Two_Cooldown_Flag') == '1') {
    Skill_Two_Cooldown = false;
    Skill_Two_Time = 0; // スキルの効果時間
    Skill_Two_Cooldown_Time = 180;
    Skill_Two_Cooldown_Time -= Idle_Seconds;//ページから離れていた時間分減らす

    document.getElementById('Skill_Two_Button').disabled = true; // ボタンを無効化

    Re_Write('スキル' + '2' + 'はクールダウン中です。残り時間：', Skill_Two_Cooldown_Time + '秒', 'Skill_Two_Status');

    let Cooldown_Interval = setInterval(() => {
        Skill_Two_Time--;
        if (Skill_Two_Cooldown_Time > 0) {
            Re_Write('スキル' + '2' + 'はクールダウン中です。残り時間：', Skill_Two_Cooldown_Time + '秒', 'Skill_Two_Status');

            var element = document.getElementById('Skill_Two_Button');
            if (element !== null) {
                document.getElementById('Skill_Two_Button').disabled = true;
            }

            Skill_Two_Cooldown_Time--;
        } else {
            clearInterval(Cooldown_Interval);
            Skill_Two_Cooldown = false;
            document.getElementById('Skill_Two_Button').disabled = false; // ボタンを再度有効化
            Re_Write('スキル' + '2' + 'のクールタイムが終了しました。再度使用できます。', '', 'Skill_Two_Status');
            localStorage.setItem('Skill_Two_Cooldown_Flag', '0');
        }
    }, 1000); // 1秒ごとにスキルの状態を更新
}

// スキル3 1分間タップ増加量を5倍
Re_Write('スキル' + '3' + ' 発動可能。', '', 'Skill_Three_Status');

function Skill_Three() {
    Skill_Three_Cooldown = false;
    Skill_Three_Time = 30; // スキルの効果時間
    Skill_Three_Cooldown_Time = 180;// クールダウンタイム
    localStorage.setItem('Skill_Three_Cooldown_Flag', '1');

    if (!Skill_Three_Cooldown) {
        document.getElementById('Skill_Three_Button').disabled = true; // ボタンを無効化

        Click_Extra_Power = 5; // パワーを上げる

        Skill_Three_Cooldown = true;
        Re_Write('スキル' + '3' + 'が発動中です。残り時間：', Skill_Three_Time + '秒', 'Skill_Three_Status'); // スキルが発動したときにすぐに更新

        let Skill_Interval = setInterval(() => {
            Skill_Three_Time--;
            if (Skill_Three_Time > 0) {

                Click_Extra_Power = 5; // シナリオから戻ってきたときに、反映する用
                var element = document.getElementById('Skill_Three_Button');
                if (element !== null) {
                    document.getElementById('Skill_Three_Button').disabled = true;
                }

                Re_Write('スキル' + '3' + 'が発動中です。残り時間：', Skill_Three_Time + '秒', 'Skill_Three_Status');
            } else if (Skill_Three_Cooldown_Time > 0) {

                Click_Extra_Power = 1; // 効果が切れたらパワーを元に戻す

                var element = document.getElementById('Skill_Three_Button');
                if (element !== null) {
                    document.getElementById('Skill_Three_Button').disabled = true;
                }


                Re_Write('スキル' + '3' + 'はクールダウン中です。残り時間：', Skill_Three_Cooldown_Time + '秒', 'Skill_Three_Status');
                Skill_Three_Cooldown_Time--;
            } else {
                clearInterval(Skill_Interval);
                Skill_Three_Cooldown = false;
                document.getElementById('Skill_Three_Button').disabled = false; // ボタンを再度有効化
                Re_Write('スキル' + '3' + 'のクールタイムが終了しました。再度使用できます。', '', 'Skill_Three_Status');
                localStorage.setItem('Skill_Three_Cooldown_Flag', '0');
            }
        }, 1000); // 1秒ごとにスキルの状態を更新
    } else {
        if (Skill_Three_Time > 0) {

            Buildings_Total_Power_Calculate();
            Click_Extra_Power = 5; // シナリオから戻ってきたときに、反映する用

            Re_Write('スキル' + '3' + 'が発動中です。残り時間：', Skill_Three_Time + '秒', 'Skill_Three_Status');
        } else {
            Re_Write('スキル' + '3' + 'はクールダウン中です。', '', 'Skill_Three_Status');
        }
    }
}

// スキルクールタイム中にリロードすると、クールダウンタイムリセット（不正防止）
if (localStorage.getItem('Skill_Three_Cooldown_Flag') == '1') {
    Skill_Three_Cooldown = false;
    Skill_Three_Time = 0; // スキルの効果時間
    Skill_Three_Cooldown_Time = 180;//クールダウンタイム
    Skill_Three_Cooldown_Time -= Idle_Seconds;//ページから離れていた時間分減らす

    document.getElementById('Skill_Three_Button').disabled = true; // ボタンを無効化

    Re_Write('スキル' + '3' + 'はクールダウン中です。残り時間：', Skill_Three_Cooldown_Time + '秒', 'Skill_Three_Status');// スキルが発動したときにすぐに更新

    let Cooldown_Interval = setInterval(() => {
        Skill_Three_Time--;
        if (Skill_Three_Cooldown_Time > 0) {
            Re_Write('スキル' + '3' + 'はクールダウン中です。残り時間：', Skill_Three_Cooldown_Time + '秒', 'Skill_Three_Status');

            var element = document.getElementById('Skill_Three_Button');
            if (element !== null) {
                document.getElementById('Skill_Three_Button').disabled = true;// ボタンを無効化
            }

            Skill_Three_Cooldown_Time--;
        } else {
            clearInterval(Cooldown_Interval);
            Skill_Three_Cooldown = false;
            document.getElementById('Skill_Three_Button').disabled = false; // ボタンを再度有効化
            Re_Write('スキル' + '3' + 'のクールタイムが終了しました。再度使用できます。', '', 'Skill_Three_Status');
            localStorage.setItem('Skill_Three_Cooldown_Flag', '0');
        }
    }, 1000); // 1秒ごとにスキルの状態を更新
}

// スキル4 1分間、全ての生産量3倍
Re_Write('スキル' + '4' + ' 発動可能。', '', 'Skill_Four_Status');

function Skill_Four() {
    Skill_Four_Cooldown = false;
    Skill_Four_Time = 30; // スキルの効果時間
    Skill_Four_Cooldown_Time = 180;
    localStorage.setItem('Skill_Four_Cooldown_Flag', '1');

    if (!Skill_Four_Cooldown) {
        document.getElementById('Skill_Four_Button').disabled = true; // ボタンを無効化

        Skill_Power = 3; // パワーを上げる

        Buildings_Total_Power_Calculate();
        Re_Write(Total_Power, '円/秒', 'Total_Power');

        Skill_Four_Cooldown = true;
        Re_Write('スキル' + '4' + 'が発動中です。残り時間：', Skill_Four_Time + '秒', 'Skill_Four_Status'); // スキルが発動したときに直ちにステータスメッセージを更新

        let Skill_Interval = setInterval(() => {
            Skill_Four_Time--;
            if (Skill_Four_Time > 0) {

                Skill_Power = 3; // シナリオから戻ってきたときに、反映する用
                var element = document.getElementById('Skill_Four_Button');
                if (element !== null) {
                    document.getElementById('Skill_Four_Button').disabled = true;
                }
                Buildings_Total_Power_Calculate();

                Re_Write('スキル' + '4' + 'が発動中です。残り時間：', Skill_Four_Time + '秒', 'Skill_Four_Status');
            } else if (Skill_Four_Cooldown_Time > 0) {

                Skill_Power = 1; // 効果が切れたらパワーを元に戻す

                var element = document.getElementById('Skill_Four_Button');
                if (element !== null) {
                    document.getElementById('Skill_Four_Button').disabled = true;
                }

                Buildings_Total_Power_Calculate();

                Re_Write('スキル' + '4' + 'はクールダウン中です。残り時間：', Skill_Four_Cooldown_Time + '秒', 'Skill_Four_Status');
                Skill_Four_Cooldown_Time--;
            } else {
                clearInterval(Skill_Interval);
                Skill_Four_Cooldown = false;
                document.getElementById('Skill_Four_Button').disabled = false; // ボタンを再度有効化
                Re_Write('スキル' + '4' + 'のクールタイムが終了しました。再度使用できます。', '', 'Skill_Four_Status');
                localStorage.setItem('Skill_Four_Cooldown_Flag', '0');
            }
        }, 1000); // 1秒ごとにスキルの状態を更新
    } else {
        if (Skill_Four_Time > 0) {

            Buildings_Total_Power_Calculate();
            Skill_Power = 3; // シナリオから戻ってきたときに、反映する用
            Re_Write(Total_Power, '円/秒', 'Total_Power');

            Re_Write('スキル' + '4' + 'が発動中です。残り時間：', Skill_Four_Time + '秒', 'Skill_Four_Status');
        } else {
            Re_Write('スキル' + '4' + 'はクールダウン中です。', '', 'Skill_Four_Status');
        }
    }
}

// スキルクールタイム中にリロードすると、クールダウンタイムリセット（不正防止）
if (localStorage.getItem('Skill_Four_Cooldown_Flag') == '1') {
    Skill_Four_Cooldown = false;
    Skill_Four_Time = 0; // スキルの効果時間
    Skill_Four_Cooldown_Time = 180;//クールダウンタイム
    Skill_Four_Cooldown_Time -= Idle_Seconds;//ページから離れていた時間分減らす

    document.getElementById('Skill_Four_Button').disabled = true; // ボタンを無効化

    Re_Write('スキル' + '4' + 'はクールダウン中です。残り時間：', Skill_Four_Cooldown_Time + '秒', 'Skill_Four_Status');// スキルが発動したときにすぐに更新

    let Cooldown_Interval = setInterval(() => {
        Skill_Four_Time--;
        if (Skill_Four_Cooldown_Time > 0) {
            Re_Write('スキル' + '4' + 'はクールダウン中です。残り時間：', Skill_Four_Cooldown_Time + '秒', 'Skill_Four_Status');

            var element = document.getElementById('Skill_Four_Button');
            if (element !== null) {
                document.getElementById('Skill_Four_Button').disabled = true;
            }

            Skill_Four_Cooldown_Time--;
        } else {
            clearInterval(Cooldown_Interval);
            Skill_Four_Cooldown = false;
            document.getElementById('Skill_Four_Button').disabled = false; // ボタンを再度有効化
            Re_Write('スキル' + '4' + 'のクールタイムが終了しました。再度使用できます。', '', 'Skill_Four_Status');
            localStorage.setItem('Skill_Four_Cooldown_Flag', '0');
        }
    }, 1000); // 1秒ごとにスキルの状態を更新
}



// スキル5 30秒間、高速自動クリック
Re_Write('スキル' + '5' + ' 発動可能。', '', 'Skill_Five_Status');

function Skill_Five() {
    Skill_Five_Cooldown = false;
    Skill_Five_Time = 30; // スキルの効果時間
    Skill_Five_Cooldown_Time = 180;//クールダウンタイム
    localStorage.setItem('Skill_Five_Cooldown_Flag', '1');

    if (!Skill_Five_Cooldown) {
        document.getElementById('Skill_Five_Button').disabled = true; // ボタンを無効化

        
        let Super_Click = setInterval(Icon_Click, 100);

        Skill_Five_Cooldown = true;
        Re_Write('スキル' + '5' + 'が発動中です。残り時間：', Skill_Five_Time + '秒', 'Skill_Five_Status'); // スキルが発動したときにすぐに更新

        let Skill_Interval = setInterval(() => {
            Skill_Five_Time--;
            if (Skill_Five_Time > 0) {

                var element = document.getElementById('Skill_Five_Button');
                if (element !== null) {
                    document.getElementById('Skill_Five_Button').disabled = true;// ボタンを無効化
                }

                Re_Write('スキル' + '5' + 'が発動中です。残り時間：', Skill_Five_Time + '秒', 'Skill_Five_Status');
            } else if (Skill_Five_Cooldown_Time > 0) {

                clearInterval(Super_Click);// 効果が切れたら連打停止

                var element = document.getElementById('Skill_Five_Button');
                if (element !== null) {
                    document.getElementById('Skill_Five_Button').disabled = true;// ボタンを無効化
                }

                Re_Write('スキル' + '5' + 'はクールダウン中です。残り時間：', Skill_Five_Cooldown_Time + '秒', 'Skill_Five_Status');
                Skill_Five_Cooldown_Time--;
            } else {
                clearInterval(Skill_Interval);
                Skill_Five_Cooldown = false;
                document.getElementById('Skill_Five_Button').disabled = false; // ボタンを再度有効化
                Re_Write('スキル' + '5' + 'のクールタイムが終了しました。再度使用できます。', '', 'Skill_Five_Status');
                localStorage.setItem('Skill_Five_Cooldown_Flag', '0');
            }
        }, 1000); // 1秒ごとにスキルの状態を更新
    } else {
        if (Skill_Five_Time > 0) {

            Buildings_Total_Power_Calculate();

            Re_Write('スキル' + '5' + 'が発動中です。残り時間：', Skill_Five_Time + '秒', 'Skill_Five_Status');
        } else {
            Re_Write('スキル' + '5' + 'はクールダウン中です。', '', 'Skill_Five_Status');
        }
    }
}


// スキルクールタイム中にリロードすると、クールダウンタイムリセット（不正防止）
if (localStorage.getItem('Skill_Five_Cooldown_Flag') == '1') {
    Skill_Five_Cooldown = false;
    Skill_Five_Time = 0; // スキルの効果時間
    Skill_Five_Cooldown_Time = 180;//クールダウンタイム
    Skill_Five_Cooldown_Time -= Idle_Seconds;//ページから離れていた時間分減らす

    document.getElementById('Skill_Five_Button').disabled = true; // ボタンを無効化

    Re_Write('スキル' + '5' + 'はクールダウン中です。残り時間：', Skill_Five_Cooldown_Time + '秒', 'Skill_Five_Status');// スキルが発動したときにすぐに更新

    let Cooldown_Interval = setInterval(() => {
        Skill_Five_Time--;
        if (Skill_Five_Cooldown_Time > 0) {
            Re_Write('スキル' + '5' + 'はクールダウン中です。残り時間：', Skill_Five_Cooldown_Time + '秒', 'Skill_Five_Status');

            var element = document.getElementById('Skill_Five_Button');
            if (element !== null) {
                document.getElementById('Skill_Five_Button').disabled = true;// ボタンを無効化
            }

            Skill_Five_Cooldown_Time--;
        } else {
            clearInterval(Cooldown_Interval);
            Skill_Five_Cooldown = false;
            document.getElementById('Skill_Five_Button').disabled = false; // ボタンを再度有効化
            Re_Write('スキル' + '5' + 'のクールタイムが終了しました。再度使用できます。', '', 'Skill_Five_Status');
            localStorage.setItem('Skill_Five_Cooldown_Flag', '0');
        }
    }, 1000); // 1秒ごとにスキルの状態を更新
}


//購入ボタンをスマホでも連続タップできるようにする
var elements = document.getElementsByClassName('skill-btn');//ページ上の全てのskill-btnを取得

Array.prototype.forEach.call(elements, function(element) {
  element.addEventListener('touchend', function(e) {
    e.target.click();//タップ終了時、clickイベントを明示的に発生
    e.preventDefault();//1回のタップで2回タップされる現象を抑制
  });
});