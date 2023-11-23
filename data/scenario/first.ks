

;メニューボタン非表示
[hidemenubutton]


;ゲームに必要なライブラリ読み込み
[call storage="system/tyrano.ks"]
[call storage="system/builder.ks"]
[call storage="system/chara_define.ks"]

;live2D対応


[layopt layer=2 visible=true]
[layopt layer="message0" visible=false]
[call storage="system/message_window.ks"]

;プラグインの設定
[call storage="system/plugin.ks"]
[call storage="system/plugin_third.ks"]

;タイトルの設定
;[title name="now loading"]

;メッセージウィンドウの設定
[position width=920 height=211 top=501 left=180]
[position page=fore margint=45 marginl=10 marginr=20 marginb=10 vertical=false opacity="180" radius="0" color="0x000000" ]
[free name="chara_name_area" layer="message0"]
[ptext name="chara_name_area" layer="message0" color=0xFFFFFF size=26 x=190 y=511 bold="bold" edge="" shadow=""]

;タイトル画面表示
[jump storage="clicker.ks"]

;--------------------------

[s]




