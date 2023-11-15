[_tb_system_call storage=system/_preview.ks ]

[mask time=10]
[mask_off time=10]
[tb_start_tyrano_code]
[if exp="sf.food == undefined"]
[eval exp="f.food = 0"]
[endif]

[if exp="sf.fps == undefined"]
[eval exp="f.fps = 0"]
[endif]
[_tb_end_tyrano_code]

[cm  ]
[bg  storage="room.jpg"  time="1000"  ]
[tb_show_message_window  ]
[iscript]
var date = new Date()
var unix = date.getTime() ;
var unixtime = Math.floor( unix / 1000 ) ;
alert(unixtime);
sf.unixtime = unixtime;
[endscript]

[tb_start_text mode=1 ]
#ガイド
[emb exp="sf.unixtime"][l][r][p]
[_tb_end_text]

[cm  ]
[iscript]
var date_back = new Date()
var unix_back = date_back.getTime() ;
var unixtime_back = Math.floor( unix_back / 1000 ) ;
alert(unixtime_back);
sf.unixtime_back = unixtime_back;
sf.back_click_second = sf.unixtime_back - sf.unixtime
[endscript]

[tb_start_text mode=1 ]
[emb exp="sf.back_click_second "][l][r][p]
[_tb_end_text]

[cm  ]
[iscript]
[html]
<div  onclick="click_icon()";>
    <a>⇩</a>
</div>
[endhtml]
[endscript]

[tb_start_text mode=1 ]
test[p]
[_tb_end_text]

[iscript]
[html]
<script>
    function click_icon() {
		sf.food = sf.food++;
    };
</script>
[endhtml]
[endscript]

[s  ]
