
[cm]
[bg  storage="room.jpg"  time="1000"  ]
[tb_show_message_window  ]
[tb_start_text mode=1 ]
#ガイド
こんにちは[p]
これは新しいプロジェクトです[p]
ドラッグ＆ドロップして要素を追加してください[p]
[_tb_end_text]

[iscript]

;clicker.ksに戻る前にフラグを立てる
localStorage.setItem('Story',1);

[endscript]

[jump storage="clicker.ks"]
