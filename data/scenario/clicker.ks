[hidemenubutton]
[cm]
[clearfix]
[freeimage layer="base"]
[stop_keyconfig]

[html]

<head>

;css読み込み
<link rel="stylesheet" href="./data/scenario/css/style.css">

;Scenario_Call.js呼び出し
<script src="./data/scenario/script/Scenario_Call.js"></script>

;Re_Class.js呼び出し
<script src="./data/scenario/script/Re_Class.js"></script>

;Re_Write.js呼び出し
<script src="./data/scenario/script/Re_Write.js"></script>

;Re_ID.js呼び出し
<script src="./data/scenario/script/Re_ID.js"></script>

</head>
[endhtml]

;画面生成
[html name=screen]


;画面左
<div class="left-box">

    ;アイテム所持数
    <div class="total-item">
    <p id="Total_Item"></p>
    </div>

    ;一秒あたりの生産量
    <div class="total-power">
    <p id="Total_Power"></p>
    </div>

    ;クリックすると、アイテムが増えるアイコン
    <div id="Click_Icon" class="click-icon" onclick="Icon_Click()">
    <img src="./data/fgimage/icon/Click.png" >
    </div> 

    ;キャラ画像
    <div id="Chara" class="chara">
    <img id="Chara_Image" src="./data/fgimage/icon/Chara1.png" >
    </div>

    ;クリックしたときの獲得量ポップアップ
    <div id="Pop_Up" class="click-popup"></div>

    ;ボーナスアイコン用
    <div class="bonus-box"></div>

</div>

;画面右のタブメニュー
<div class="right-box">
    <div class="tab-wrap">

        ;施設x1の購入タブ
        <input id="TAB02-01" type="radio" name="TAB02" class="tab-switch" checked="checked" /><label class="tab-label" for="TAB02-01">x1</label>
      
            <div class="tab-content">

                <div class="box-content">

                    <div class="buildings-icon">
                        <img src="./data/fgimage/icon/Buildings1.png" >
                    </div>

                    <div class="buildings-name">
                        <p id="Buildings_One">施設あいうえおかきく1</p>
                    </div>

                    <div class="buildings-gain">
                        <div>生産量</div>
                        <p id="Buildings_One_Total_Power"></p>
                    </div>

                    <div class="buildings-count">
                        <div>所持数</div>
                        <p id="Buildings_One_Count"></p>
                    </div>

                    <button id="Count_One_Button" class="count-btn" onclick="Buildings_Buy('One_One', Price_One_One);"></button>

                    <div class="buildings-price">
                        <div>値段</div>
                        <p id="Buildings_One_Next_Price_One"></p>
                    </div>

                </div>

                <div class="box-content">

                    <div class="buildings-icon">
                        <img src="./data/fgimage/icon/Buildings1.png" >
                    </div>

                    <div class="buildings-name">
                        <p id="Buildings_Two">施設あいうえおかきく2</p>
                    </div>

                    <div class="buildings-gain">
                        <div>生産量</div>
                        <p id="Buildings_Two_Total_Power"></p>
                    </div>

                    <div class="buildings-count">
                        <div>所持数</div>
                        <p id="Buildings_Two_Count"></p>
                    </div>

                    <button id="Count_Two_Button" class="count-btn" onclick="Buildings_Buy('Two_One', Price_Two_One);"></button>

                    <div class="buildings-price">
                        <div>値段</div>
                        <p id="Buildings_Two_Next_Price_One"></p>
                    </div>

                </div>

                <div class="box-content">

                    <div class="buildings-icon">
                        <img src="./data/fgimage/icon/Buildings1.png" >
                    </div>

                    <div class="buildings-name">
                        <p id="Buildings_Three">施設あいうえおかきく3</p>
                    </div>

                    <div class="buildings-gain">
                        <div>生産量</div>
                        <p id="Buildings_Three_Total_Power"></p>
                    </div>

                    <div class="buildings-count">
                        <div>所持数</div>
                        <p id="Buildings_Three_Count"></p>
                    </div>

                    <button id="Count_Three_Button" class="count-btn" onclick="Buildings_Buy('Three_One', Price_Three_One);"></button>

                    <div class="buildings-price">
                        <div>値段</div>
                        <p id="Buildings_Three_Next_Price_One"></p>
                    </div>

                </div>
            
                <div class="box-content">

                    <div class="buildings-icon">
                        <img src="./data/fgimage/icon/Buildings1.png" >
                    </div>

                    <div class="buildings-name">
                        <p id="Buildings_Four">施設あいうえおかきく4</p>
                    </div>

                    <div class="buildings-gain">
                        <div>生産量</div>
                        <p id="Buildings_Four_Total_Power"></p>
                    </div>

                    <div class="buildings-count">
                        <div>所持数</div>
                        <p id="Buildings_Four_Count"></p>
                    </div>

                    <button id="Count_Four_Button" class="count-btn" onclick="Buildings_Buy('Four_One', Price_Four_One);"></button>

                    <div class="buildings-price">
                        <div>値段</div>
                        <p id="Buildings_Four_Next_Price_One"></p>
                    </div>

                </div>

                <div class="box-content">

                    <div class="buildings-icon">
                        <img src="./data/fgimage/icon/Buildings1.png" >
                    </div>

                    <div class="buildings-name">
                        <p id="Buildings_Five">施設あいうえおかきく5</p>
                    </div>

                    <div class="buildings-gain">
                        <div>生産量</div>
                        <p id="Buildings_Five_Total_Power"></p>
                    </div>

                    <div class="buildings-count">
                        <div>所持数</div>
                        <p id="Buildings_Five_Count"></p>
                    </div>

                    <button id="Count_Five_Button" class="count-btn" onclick="Buildings_Buy('Five_One', Price_Five_One);"></button>

                    <div class="buildings-price">
                        <div>値段</div>
                        <p id="Buildings_Five_Next_Price_One"></p>
                    </div>

                </div>

                <div class="box-content">

                    <div class="buildings-icon">
                        <img src="./data/fgimage/icon/Buildings1.png" >
                    </div>

                    <div class="buildings-name">
                        <p id="Buildings_Six">施設あいうえおかきく6</p>
                    </div>

                    <div class="buildings-gain">
                        <div>生産量</div>
                        <p id="Buildings_Six_Total_Power"></p>
                    </div>

                    <div class="buildings-count">
                        <div>所持数</div>
                        <p id="Buildings_Six_Count"></p>
                    </div>

                    <button id="Count_Six_Button" class="count-btn" onclick="Buildings_Buy('Six_One', Price_Six_One);"></button>

                    <div class="buildings-price">
                        <div>値段</div>
                        <p id="Buildings_Six_Next_Price_One"></p>
                    </div>

                </div>

                <div class="box-content">

                    <div class="buildings-icon">
                        <img src="./data/fgimage/icon/Buildings1.png" >
                    </div>

                    <div class="buildings-name">
                        <p id="Buildings_Seven">施設あいうえおかきく7</p>
                    </div>

                    <div class="buildings-gain">
                        <div>生産量</div>
                        <p id="Buildings_Seven_Total_Power"></p>
                    </div>

                    <div class="buildings-count">
                        <div>所持数</div>
                        <p id="Buildings_Seven_Count"></p>
                    </div>

                    <button id="Count_Seven_Button" class="count-btn" onclick="Buildings_Buy('Seven_One', Price_Seven_One);"></button>

                    <div class="buildings-price">
                        <div>値段</div>
                        <p id="Buildings_Seven_Next_Price_One"></p>
                    </div>

                </div>
            
                <div class="box-content">

                    <div class="buildings-icon">
                        <img src="./data/fgimage/icon/Buildings1.png" >
                    </div>

                    <div class="buildings-name">
                        <p id="Buildings_Eight">施設あいうえおかきく8</p>
                    </div>

                    <div class="buildings-gain">
                        <div>生産量</div>
                        <p id="Buildings_Eight_Total_Power"></p>
                    </div>

                    <div class="buildings-count">
                        <div>所持数</div>
                        <p id="Buildings_Eight_Count"></p>
                    </div>

                    <button id="Count_Eight_Button" class="count-btn" onclick="Buildings_Buy('Eight_One', Price_Eight_One);"></button>

                    <div class="buildings-price">
                        <div>値段</div>
                        <p id="Buildings_Eight_Next_Price_One"></p>
                    </div>

                </div>

                <div class="box-content">

                    <div class="buildings-icon">
                        <img src="./data/fgimage/icon/Buildings1.png" >
                    </div>

                    <div class="buildings-name">
                        <p id="Buildings_Nine">施設あいうえおかきく9</p>
                    </div>

                    <div class="buildings-gain">
                        <div>生産量</div>
                        <p id="Buildings_Nine_Total_Power"></p>
                    </div>

                    <div class="buildings-count">
                        <div>所持数</div>
                        <p id="Buildings_Nine_Count"></p>
                    </div>

                    <button id="Count_Nine_Button" class="count-btn" onclick="Buildings_Buy('Nine_One', Price_Nine_One);"></button>

                    <div class="buildings-price">
                        <div>値段</div>
                        <p id="Buildings_Nine_Next_Price_One"></p>
                    </div>

                </div>

                <div class="box-content">

                    <div class="buildings-icon">
                        <img src="./data/fgimage/icon/Buildings1.png" >
                    </div>

                    <div class="buildings-name">
                        <p id="Buildings_Ten">施設あいうえおかきく10</p>
                    </div>

                    <div class="buildings-gain">
                        <div>生産量</div>
                        <p id="Buildings_Ten_Total_Power"></p>
                    </div>

                    <div class="buildings-count">
                        <div>所持数</div>
                        <p id="Buildings_Ten_Count"></p>
                    </div>

                    <button id="Count_Ten_Button" class="count-btn" onclick="Buildings_Buy('Ten_One', Price_Ten_One);"></button>

                    <div class="buildings-price">
                        <div>値段</div>
                        <p id="Buildings_Ten_Next_Price_One"></p>
                    </div>

                </div>

                <div class="box-content">

                    <div class="buildings-icon">
                        <img src="./data/fgimage/icon/Buildings1.png" >
                    </div>

                    <div class="buildings-name">
                        <p id="Buildings_Eleven">施設あいうえおかきく11</p>
                    </div>

                    <div class="buildings-gain">
                        <div>生産量</div>
                        <p id="Buildings_Eleven_Total_Power"></p>
                    </div>

                    <div class="buildings-count">
                        <div>所持数</div>
                        <p id="Buildings_Eleven_Count"></p>
                    </div>

                    <button id="Count_Eleven_Button" class="count-btn" onclick="Buildings_Buy('Eleven_One', Price_Eleven_One);"></button>

                    <div class="buildings-price">
                        <div>値段</div>
                        <p id="Buildings_Eleven_Next_Price_One"></p>
                    </div>

                </div> 

            </div>
        ;施設x10の購入タブ
        <input id="TAB02-02" type="radio" name="TAB02" class="tab-switch" /><label class="tab-label" for="TAB02-02">x10</label>

            <div class="tab-content">

                <div class="box-content">

                    <div class="buildings-icon">
                        <img src="./data/fgimage/icon/Buildings1.png" >
                    </div>

                    <div class="buildings-name">
                        <p id="Buildings_One">施設あいうえおかきく1</p>
                    </div>

                    <div class="buildings-gain">
                        <div>生産量</div>
                        <p id="Buildings_One_Total_Power"></p>
                    </div>

                    <div class="buildings-count">
                        <div>所持数</div>
                        <p id="Buildings_One_Count_Ten"></p>
                    </div>

                    <button id="Count_One_Button" class="count-btn" onclick="Buildings_Buy('One_Ten', Price_One_Ten);"></button>

                    <div class="buildings-price">
                        <div>値段</div>
                        <p id="Buildings_One_Next_Price_Ten"></p>
                    </div>

                </div>

                <div class="box-content">

                    <div class="buildings-icon">
                        <img src="./data/fgimage/icon/Buildings1.png" >
                    </div>

                    <div class="buildings-name">
                        <p id="Buildings_Two">施設あいうえおかきく2</p>
                    </div>

                    <div class="buildings-gain">
                        <div>生産量</div>
                        <p id="Buildings_Two_Total_Power"></p>
                    </div>

                    <div class="buildings-count">
                        <div>所持数</div>
                        <p id="Buildings_Two_Count_Ten"></p>
                    </div>

                    <button id="Count_Two_Button" class="count-btn" onclick="Buildings_Buy('Two_Ten', Price_Two_Ten);"></button>

                    <div class="buildings-price">
                        <div>値段</div>
                        <p id="Buildings_Two_Next_Price_Ten"></p>
                    </div>

                </div>

                <div class="box-content">

                    <div class="buildings-icon">
                        <img src="./data/fgimage/icon/Buildings1.png" >
                    </div>

                    <div class="buildings-name">
                        <p id="Buildings_Three">施設あいうえおかきく3</p>
                    </div>

                    <div class="buildings-gain">
                        <div>生産量</div>
                        <p id="Buildings_Three_Total_Power"></p>
                    </div>

                    <div class="buildings-count">
                        <div>所持数</div>
                        <p id="Buildings_Three_Count_Ten"></p>
                    </div>

                    <button id="Count_Three_Button" class="count-btn" onclick="Buildings_Buy('Three_Ten', Price_Three_Ten);"></button>

                    <div class="buildings-price">
                        <div>値段</div>
                        <p id="Buildings_Three_Next_Price_Ten"></p>
                    </div>

                </div>
            
                <div class="box-content">

                    <div class="buildings-icon">
                        <img src="./data/fgimage/icon/Buildings1.png" >
                    </div>

                    <div class="buildings-name">
                        <p id="Buildings_Four">施設あいうえおかきく4</p>
                    </div>

                    <div class="buildings-gain">
                        <div>生産量</div>
                        <p id="Buildings_Four_Total_Power"></p>
                    </div>

                    <div class="buildings-count">
                        <div>所持数</div>
                        <p id="Buildings_Four_Count_Ten"></p>
                    </div>

                    <button id="Count_Four_Button" class="count-btn" onclick="Buildings_Buy('Four_Ten', Price_Four_Ten);"></button>

                    <div class="buildings-price">
                        <div>値段</div>
                        <p id="Buildings_Four_Next_Price_Ten"></p>
                    </div>

                </div>

                <div class="box-content">

                    <div class="buildings-icon">
                        <img src="./data/fgimage/icon/Buildings1.png" >
                    </div>

                    <div class="buildings-name">
                        <p id="Buildings_Five">施設あいうえおかきく5</p>
                    </div>

                    <div class="buildings-gain">
                        <div>生産量</div>
                        <p id="Buildings_Five_Total_Power"></p>
                    </div>

                    <div class="buildings-count">
                        <div>所持数</div>
                        <p id="Buildings_Five_Count_Ten"></p>
                    </div>

                    <button id="Count_Five_Button" class="count-btn" onclick="Buildings_Buy('Five_Ten', Price_Five_Ten);"></button>

                    <div class="buildings-price">
                        <div>値段</div>
                        <p id="Buildings_Five_Next_Price_Ten"></p>
                    </div>

                </div>

                <div class="box-content">

                    <div class="buildings-icon">
                        <img src="./data/fgimage/icon/Buildings1.png" >
                    </div>

                    <div class="buildings-name">
                        <p id="Buildings_Six">施設あいうえおかきく6</p>
                    </div>

                    <div class="buildings-gain">
                        <div>生産量</div>
                        <p id="Buildings_Six_Total_Power"></p>
                    </div>

                    <div class="buildings-count">
                        <div>所持数</div>
                        <p id="Buildings_Six_Count_Ten"></p>
                    </div>

                    <button id="Count_Six_Button" class="count-btn" onclick="Buildings_Buy('Six_Ten', Price_Six_Ten);"></button>

                    <div class="buildings-price">
                        <div>値段</div>
                        <p id="Buildings_Six_Next_Price_Ten"></p>
                    </div>

                </div>

                <div class="box-content">

                    <div class="buildings-icon">
                        <img src="./data/fgimage/icon/Buildings1.png" >
                    </div>

                    <div class="buildings-name">
                        <p id="Buildings_Seven">施設あいうえおかきく7</p>
                    </div>

                    <div class="buildings-gain">
                        <div>生産量</div>
                        <p id="Buildings_Seven_Total_Power"></p>
                    </div>

                    <div class="buildings-count">
                        <div>所持数</div>
                        <p id="Buildings_Seven_Count_Ten"></p>
                    </div>

                    <button id="Count_Seven_Button" class="count-btn" onclick="Buildings_Buy('Seven_Ten', Price_Seven_Ten);"></button>

                    <div class="buildings-price">
                        <div>値段</div>
                        <p id="Buildings_Seven_Next_Price_Ten"></p>
                    </div>

                </div>
            
                <div class="box-content">

                    <div class="buildings-icon">
                        <img src="./data/fgimage/icon/Buildings1.png" >
                    </div>

                    <div class="buildings-name">
                        <p id="Buildings_Eight">施設あいうえおかきく8</p>
                    </div>

                    <div class="buildings-gain">
                        <div>生産量</div>
                        <p id="Buildings_Eight_Total_Power"></p>
                    </div>

                    <div class="buildings-count">
                        <div>所持数</div>
                        <p id="Buildings_Eight_Count_Ten"></p>
                    </div>

                    <button id="Count_Eight_Button" class="count-btn" onclick="Buildings_Buy('Eight_Ten', Price_Eight_Ten);"></button>

                    <div class="buildings-price">
                        <div>値段</div>
                        <p id="Buildings_Eight_Next_Price_Ten"></p>
                    </div>

                </div>

                <div class="box-content">

                    <div class="buildings-icon">
                        <img src="./data/fgimage/icon/Buildings1.png" >
                    </div>

                    <div class="buildings-name">
                        <p id="Buildings_Nine">施設あいうえおかきく9</p>
                    </div>

                    <div class="buildings-gain">
                        <div>生産量</div>
                        <p id="Buildings_Nine_Total_Power"></p>
                    </div>

                    <div class="buildings-count">
                        <div>所持数</div>
                        <p id="Buildings_Nine_Count_Ten"></p>
                    </div>

                    <button id="Count_Nine_Button" class="count-btn" onclick="Buildings_Buy('Nine_Ten', Price_Nine_Ten);"></button>

                    <div class="buildings-price">
                        <div>値段</div>
                        <p id="Buildings_Nine_Next_Price_Ten"></p>
                    </div>

                </div>

                <div class="box-content">

                    <div class="buildings-icon">
                        <img src="./data/fgimage/icon/Buildings1.png" >
                    </div>

                    <div class="buildings-name">
                        <p id="Buildings_Ten">施設あいうえおかきく10</p>
                    </div>

                    <div class="buildings-gain">
                        <div>生産量</div>
                        <p id="Buildings_Ten_Total_Power"></p>
                    </div>

                    <div class="buildings-count">
                        <div>所持数</div>
                        <p id="Buildings_Ten_Count_Ten"></p>
                    </div>

                    <button id="Count_Ten_Button" class="count-btn" onclick="Buildings_Buy('Ten_Ten', Price_Ten_Ten);"></button>

                    <div class="buildings-price">
                        <div>値段</div>
                        <p id="Buildings_Ten_Next_Price_Ten"></p>
                    </div>

                </div>

                <div class="box-content">

                    <div class="buildings-icon">
                        <img src="./data/fgimage/icon/Buildings1.png" >
                    </div>

                    <div class="buildings-name">
                        <p id="Buildings_Eleven">施設あいうえおかきく11</p>
                    </div>

                    <div class="buildings-gain">
                        <div>生産量</div>
                        <p id="Buildings_Eleven_Total_Power"></p>
                    </div>

                    <div class="buildings-count">
                        <div>所持数</div>
                        <p id="Buildings_Eleven_Count_Ten"></p>
                    </div>

                    <button id="Count_Eleven_Button" class="count-btn" onclick="Buildings_Buy('Eleven_Ten', Price_Eleven_Ten);"></button>

                    <div class="buildings-price">
                        <div>値段</div>
                        <p id="Buildings_Eleven_Next_Price_Ten"></p>
                    </div>

                </div>
          
            </div>
        ;施設x100の購入タブ
        <input id="TAB02-03" type="radio" name="TAB02" class="tab-switch" /><label class="tab-label" for="TAB02-03">x100</label>
 
            <div class="tab-content">

                <div class="box-content">

                    <div class="buildings-icon">
                        <img src="./data/fgimage/icon/Buildings1.png" >
                    </div>

                    <div class="buildings-name">
                        <p id="Buildings_One">施設あいうえおかきく1</p>
                    </div>

                    <div class="buildings-gain">
                        <div>生産量</div>
                        <p id="Buildings_One_Total_Power"></p>
                    </div>

                    <div class="buildings-count">
                        <div>所持数</div>
                        <p id="Buildings_One_Count_Hundred"></p>
                    </div>

                    <button id="Count_One_Button" class="count-btn" onclick="Buildings_Buy('One_Hundred', Price_One_Hundred);"></button>

                    <div class="buildings-price">
                        <div>値段</div>
                        <p id="Buildings_One_Next_Price_Hundred"></p>
                    </div>

                </div>

                <div class="box-content">

                    <div class="buildings-icon">
                        <img src="./data/fgimage/icon/Buildings1.png" >
                    </div>

                    <div class="buildings-name">
                        <p id="Buildings_Two">施設あいうえおかきく2</p>
                    </div>

                    <div class="buildings-gain">
                        <div>生産量</div>
                        <p id="Buildings_Two_Total_Power"></p>
                    </div>

                    <div class="buildings-count">
                        <div>所持数</div>
                        <p id="Buildings_Two_Count_Hundred"></p>
                    </div>

                    <button id="Count_Two_Button" class="count-btn" onclick="Buildings_Buy('Two_Hundred', Price_Two_Hundred);"></button>

                    <div class="buildings-price">
                        <div>値段</div>
                        <p id="Buildings_Two_Next_Price_Hundred"></p>
                    </div>

                </div>

                <div class="box-content">

                    <div class="buildings-icon">
                        <img src="./data/fgimage/icon/Buildings1.png" >
                    </div>

                    <div class="buildings-name">
                        <p id="Buildings_Three">施設あいうえおかきく3</p>
                    </div>

                    <div class="buildings-gain">
                        <div>生産量</div>
                        <p id="Buildings_Three_Total_Power"></p>
                    </div>

                    <div class="buildings-count">
                        <div>所持数</div>
                        <p id="Buildings_Three_Count_Hundred"></p>
                    </div>

                    <button id="Count_Three_Button" class="count-btn" onclick="Buildings_Buy('Three_Hundred', Price_Three_Hundred);"></button>

                    <div class="buildings-price">
                        <div>値段</div>
                        <p id="Buildings_Three_Next_Price_Hundred"></p>
                    </div>

                </div>
            
                <div class="box-content">

                    <div class="buildings-icon">
                        <img src="./data/fgimage/icon/Buildings1.png" >
                    </div>

                    <div class="buildings-name">
                        <p id="Buildings_Four">施設あいうえおかきく4</p>
                    </div>

                    <div class="buildings-gain">
                        <div>生産量</div>
                        <p id="Buildings_Four_Total_Power"></p>
                    </div>

                    <div class="buildings-count">
                        <div>所持数</div>
                        <p id="Buildings_Four_Count_Hundred"></p>
                    </div>

                    <button id="Count_Four_Button" class="count-btn" onclick="Buildings_Buy('Four_Hundred', Price_Four_Hundred);"></button>

                    <div class="buildings-price">
                        <div>値段</div>
                        <p id="Buildings_Four_Next_Price_Hundred"></p>
                    </div>

                </div>

                <div class="box-content">

                    <div class="buildings-icon">
                        <img src="./data/fgimage/icon/Buildings1.png" >
                    </div>

                    <div class="buildings-name">
                        <p id="Buildings_Five">施設あいうえおかきく5</p>
                    </div>

                    <div class="buildings-gain">
                        <div>生産量</div>
                        <p id="Buildings_Five_Total_Power"></p>
                    </div>

                    <div class="buildings-count">
                        <div>所持数</div>
                        <p id="Buildings_Five_Count_Hundred"></p>
                    </div>

                    <button id="Count_Five_Button" class="count-btn" onclick="Buildings_Buy('Five_Hundred', Price_Five_Hundred);"></button>

                    <div class="buildings-price">
                        <div>値段</div>
                        <p id="Buildings_Five_Next_Price_Hundred"></p>
                    </div>

                </div>

                <div class="box-content">

                    <div class="buildings-icon">
                        <img src="./data/fgimage/icon/Buildings1.png" >
                    </div>

                    <div class="buildings-name">
                        <p id="Buildings_Six">施設あいうえおかきく6</p>
                    </div>

                    <div class="buildings-gain">
                        <div>生産量</div>
                        <p id="Buildings_Six_Total_Power"></p>
                    </div>

                    <div class="buildings-count">
                        <div>所持数</div>
                        <p id="Buildings_Six_Count_Hundred"></p>
                    </div>

                    <button id="Count_Six_Button" class="count-btn" onclick="Buildings_Buy('Six_Hundred', Price_Six_Hundred);"></button>

                    <div class="buildings-price">
                        <div>値段</div>
                        <p id="Buildings_Six_Next_Price_Hundred"></p>
                    </div>

                </div>

                <div class="box-content">

                    <div class="buildings-icon">
                        <img src="./data/fgimage/icon/Buildings1.png" >
                    </div>

                    <div class="buildings-name">
                        <p id="Buildings_Seven">施設あいうえおかきく7</p>
                    </div>

                    <div class="buildings-gain">
                        <div>生産量</div>
                        <p id="Buildings_Seven_Total_Power"></p>
                    </div>

                    <div class="buildings-count">
                        <div>所持数</div>
                        <p id="Buildings_Seven_Count_Hundred"></p>
                    </div>

                    <button id="Count_Seven_Button" class="count-btn" onclick="Buildings_Buy('Seven_Hundred', Price_Seven_Hundred);"></button>

                    <div class="buildings-price">
                        <div>値段</div>
                        <p id="Buildings_Seven_Next_Price_Hundred"></p>
                    </div>

                </div>
            
                <div class="box-content">

                    <div class="buildings-icon">
                        <img src="./data/fgimage/icon/Buildings1.png" >
                    </div>

                    <div class="buildings-name">
                        <p id="Buildings_Eight">施設あいうえおかきく8</p>
                    </div>

                    <div class="buildings-gain">
                        <div>生産量</div>
                        <p id="Buildings_Eight_Total_Power"></p>
                    </div>

                    <div class="buildings-count">
                        <div>所持数</div>
                        <p id="Buildings_Eight_Count_Hundred"></p>
                    </div>

                    <button id="Count_Eight_Button" class="count-btn" onclick="Buildings_Buy('Eight_Hundred', Price_Eight_Hundred);"></button>

                    <div class="buildings-price">
                        <div>値段</div>
                        <p id="Buildings_Eight_Next_Price_Hundred"></p>
                    </div>

                </div>

                <div class="box-content">

                    <div class="buildings-icon">
                        <img src="./data/fgimage/icon/Buildings1.png" >
                    </div>

                    <div class="buildings-name">
                        <p id="Buildings_Nine">施設あいうえおかきく9</p>
                    </div>

                    <div class="buildings-gain">
                        <div>生産量</div>
                        <p id="Buildings_Nine_Total_Power"></p>
                    </div>

                    <div class="buildings-count">
                        <div>所持数</div>
                        <p id="Buildings_Nine_Count_Hundred"></p>
                    </div>

                    <button id="Count_Nine_Button" class="count-btn" onclick="Buildings_Buy('Nine_Hundred', Price_Nine_Hundred);"></button>

                    <div class="buildings-price">
                        <div>値段</div>
                        <p id="Buildings_Nine_Next_Price_Hundred"></p>
                    </div>

                </div>

                <div class="box-content">

                    <div class="buildings-icon">
                        <img src="./data/fgimage/icon/Buildings1.png" >
                    </div>

                    <div class="buildings-name">
                        <p id="Buildings_Ten">施設あいうえおかきく10</p>
                    </div>

                    <div class="buildings-gain">
                        <div>生産量</div>
                        <p id="Buildings_Ten_Total_Power"></p>
                    </div>

                    <div class="buildings-count">
                        <div>所持数</div>
                        <p id="Buildings_Ten_Count_Hundred"></p>
                    </div>

                    <button id="Count_Hundred_Button" class="count-btn" onclick="Buildings_Buy('Ten_Hundred', Price_Ten_Hundred);"></button>

                    <div class="buildings-price">
                        <div>値段</div>
                        <p id="Buildings_Ten_Next_Price_Hundred"></p>
                    </div>

                </div>

                <div class="box-content">

                    <div class="buildings-icon">
                        <img src="./data/fgimage/icon/Buildings1.png" >
                    </div>

                    <div class="buildings-name">
                        <p id="Buildings_Eleven">施設あいうえおかきく11</p>
                    </div>

                    <div class="buildings-gain">
                        <div>生産量</div>
                        <p id="Buildings_Eleven_Total_Power"></p>
                    </div>

                    <div class="buildings-count">
                        <div>所持数</div>
                        <p id="Buildings_Eleven_Count_Hundred"></p>
                    </div>

                    <button id="Count_Eleven_Button" class="count-btn" onclick="Buildings_Buy('Eleven_Hundred', Price_Eleven_Hundred);"></button>

                    <div class="buildings-price">
                        <div>値段</div>
                        <p id="Buildings_Eleven_Next_Price_Hundred"></p>
                    </div>

                </div>

            </div>
        ;スキルタブ
        <input id="TAB02-04" type="radio" name="TAB02" class="tab-switch" /><label class="tab-label" for="TAB02-04">スキル</label>

            <div class="tab-content">

                <div class="box-content-skill" id="Skill_One_Box">

                        <div class="skill-icon">
                            <img src="./data/fgimage/icon/Buildings1.png" >
                        </div>

                        <div class="skill-name">
                            <p id="Skill_One">スキルあいうえおかき1</p>
                        </div>

                        <button id="Skill_One_Button" class="skill-btn" onclick="Skill_One()">▶</button>

                        <div class="skill-gist">
                            <p>30秒間、施設1の生産量2倍</p>
                        </div>

                        <div class="skill-time">
                            <p id="Skill_One_Status"> </p>
                        </div>

                </div>

                <div class="box-content-skill" id="Skill_Two_Box">

                        <div class="skill-icon">
                            <img src="./data/fgimage/icon/Buildings1.png" >
                        </div>

                        <div class="skill-name">
                            <p id="Skill_Two">スキルあいうえおかき2</p>
                        </div>

                        <button id="Skill_Two_Button" class="skill-btn" onclick="Skill_Two()">▶</button>

                        <div class="skill-gist">
                            <p>1時間分の生産量取得</p>
                        </div>

                        <div class="skill-time">
                            <p id="Skill_Two_Status"> </p>
                        </div>
                        
                </div>

                <div class="box-content-skill" id="Skill_Three_Box">

                        <div class="skill-icon">
                            <img src="./data/fgimage/icon/Buildings1.png" >
                        </div>

                        <div class="skill-name">
                            <p id="Skill_Three">スキルあいうえおかき3</p>
                        </div>

                        <button id="Skill_Three_Button" class="skill-btn" onclick="Skill_Three()">▶</button>

                        <div class="skill-gist">
                            <p>30秒間、タップ増加量を5倍</p>
                        </div>

                        <div class="skill-time">
                            <p id="Skill_Three_Status"> </p>
                        </div>
                        
                </div>

                <div class="box-content-skill" id="Skill_Four_Box">

                        <div class="skill-icon">
                            <img src="./data/fgimage/icon/Buildings1.png" >
                        </div>

                        <div class="skill-name">
                            <p id="Skill_Four">スキルあいうえおかき4</p>
                        </div>

                        <button id="Skill_Four_Button" class="skill-btn" onclick="Skill_Four()">▶</button>

                        <div class="skill-gist">
                            <p>1分間、全ての生産量3倍</p>
                        </div>

                        <div class="skill-time">
                            <p id="Skill_Four_Status"> </p>
                        </div>
                        
                </div>

                <div class="box-content-skill" id="Skill_Five_Box">

                        <div class="skill-icon">
                            <img src="./data/fgimage/icon/Buildings1.png" >
                        </div>

                        <div class="skill-name">
                            <p id="Skill_Five">スキルあいうえおかき5</p>
                        </div>

                        <button id="Skill_Five_Button" class="skill-btn" onclick="Skill_Five()">▶</button>

                        <div class="skill-gist">
                            <p>30秒間、高速自動タップ</p>
                        </div>

                        <div class="skill-time">
                            <p id="Skill_Five_Status"> </p>
                        </div>
                        
                </div>

            </div>
        ;施設強化の購入タブ
        <input id="TAB02-05" type="radio" name="TAB02" class="tab-switch" /><label class="tab-label" for="TAB02-05">施設強化</label>

            <div class="tab-content">

                <div class="box-content-extra">

                    <div class="extra-icon">
                        <img src="./data/fgimage/icon/Buildings1.png" >
                    </div>

                    <div class="extra-name">
                        <p id="Extra_One">施設強化あいうえ1</p>
                    </div>

                    <div class="extra-gist">
                        <p id="Extra_One_Gist"></p>
                    </div>

                    <div class="extra-requirement">
                        <p id="Extra_One_Requirement"></p>
                    </div>

                    <button id="Extra_One_Button" class="extra-btn" onclick="Extra_Buy('One');"></button>

                    <div class="extra-price">
                        <p id="Extra_One_Next_Price"></p>
                    </div>

                </div>

                <div class="box-content-extra">

                    <div class="extra-icon">
                        <img src="./data/fgimage/icon/Buildings1.png" >
                    </div>

                    <div class="extra-name">
                        <p id="Extra_Two">施設強化あいうえ2</p>
                    </div>

                    <div class="extra-gist">
                        <p id="Extra_Two_Gist"></p>
                    </div>

                    <div class="extra-requirement">
                        <p id="Extra_Two_Requirement"></p>
                    </div>

                    <button id="Extra_Two_Button" class="extra-btn" onclick="Extra_Buy('Two');"></button>

                    <div class="extra-price">
                        <p id="Extra_Two_Next_Price"></p>
                    </div>

                </div>

            </div> 
        ;ストーリー閲覧タブ
        <input id="TAB02-06" type="radio" name="TAB02" class="tab-switch" /><label class="tab-label" for="TAB02-06">ストーリー</label>
 
            <div class="tab-content">

                <div class="box-content-story" id="Story_One_Box" >

                    <button id="Story_One_Button" class="story-btn" onclick="Scenario_Call('','scene1','');">▶</button>

                    <div class="story-name">
                        <p id="Story_One">ストーリー1</p>
                    </div>      

                </div>

                <div class="box-content-story" id="Story_Two_Box" >

                    <button id="Story_Two_Button" class="story-btn" onclick="Scenario_Call('','scene1','');">▶</button>

                    <div class="story-name">
                        <p id="Story_Two">ストーリー2</p>
                    </div>      

                </div>

                <div class="box-content-story" id="Story_Three_Box" >

                    <button id="Story_Three_Button" class="story-btn" onclick="Scenario_Call('','scene1','');">▶</button>

                    <div class="story-name">
                        <p id="Story_Three">ストーリー3</p>
                    </div>      

                </div>

                <div class="box-content-story" id="Story_Four_Box" >

                    <button id="Story_Four_Button" class="story-btn" onclick="Scenario_Call('','scene1','');">▶</button>

                    <div class="story-name">
                        <p id="Story_Four">ストーリー4</p>
                    </div>      

                </div>

                <div class="box-content-story" id="Story_Five_Box" >

                    <button id="Story_Five_Button" class="story-btn" onclick="Scenario_Call('','scene1','');">▶</button>

                    <div class="story-name">
                        <p id="Story_Five">ストーリー5</p>
                    </div>      

                </div>

            </div>

    </div>
</div>



[endhtml]


;スクリプト用
[html]

<script>
;ストーリー閲覧から復帰判定　ストーリーのksファイルの末尾でset
Story_Done = localStorage.getItem('Story');

;ストーリー閲覧から復帰時に読み込むjs
if ( Story_Done === '1') {

    let script1 = document.createElement('script');
    script1.src = './data/scenario/script/Variable_Load.js';
    let footer = document.getElementById('Script_Footer');
    footer.appendChild(script1);

    let script2 = document.createElement('script');
    script2.src = './data/scenario/script/Total_Power.js';
    footer.appendChild(script2);

    let script3 = document.createElement('script');
    script3.src = './data/scenario/script/Variable_Set.js';
    footer.appendChild(script3);

    let script4 = document.createElement('script');
    script4.src = './data/scenario/script/Next_Price_Set.js';
    footer.appendChild(script4);

    let script5 = document.createElement('script');
    script5.src = './data/scenario/script/Icon_Click.js';
    footer.appendChild(script5);

    let script6 = document.createElement('script');
    script6.src = './data/scenario/script/Buildings_Buy.js';
    footer.appendChild(script6);

    let script7 = document.createElement('script');
    script7.src = './data/scenario/script/Extra.js';
    footer.appendChild(script7);

    let script8 = document.createElement('script');
    script8.src = './data/scenario/script/Bonus.js';
    footer.appendChild(script8);

    localStorage.removeItem('Story');

    ;Seconds_Gainの多重防止
    let isRunning = false;

    function startInterval() {
        if (isRunning == false) {
            Timer_ID = setInterval(Seconds_Gain, 1000);
            isRunning = true;
            console.log(Runnig);
        }
    }

    function stopInterval() {
        if (isRunning == true) {
            clearInterval(Timer_ID);
            Timer_ID = null;
            isRunning = false;
        }
    }

    ;スキルが発動可能状態のをここに仮置き(Skill.jsを再度読み込ませないので)
    Re_Write('スキル' + '1' + ' 発動可能。', '', 'Skill_One_Status');
    Re_Write('スキル' + '2' + ' 発動可能。', '', 'Skill_Two_Status');
    Re_Write('スキル' + '3' + ' 発動可能。', '', 'Skill_Three_Status');
    Re_Write('スキル' + '4' + ' 発動可能。', '', 'Skill_Four_Status');
    Re_Write('スキル' + '5' + ' 発動可能。', '', 'Skill_Five_Status');


}

;起動時は全部読み込ませる
else{
let footer = document.getElementById('Script_Footer');

;上から順番に読み込ませる用関数
function loadScript(src) {
    return new Promise(function(resolve, reject) {
        let script = document.createElement('script');
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        footer.appendChild(script);
    });
}

loadScript('./data/scenario/script/Variable_Load.js')
    .then(function() {
        return loadScript('./data/scenario/script/Total_Power.js');
    })
    .then(function() {
        return loadScript('./data/scenario/script/Variable_Set.js');
    })
    .then(function() {
        return loadScript('./data/scenario/script/Next_Price_Set.js');
    })
    .then(function() {
        return loadScript('./data/scenario/script/Icon_Click.js');
    })
    .then(function() {
        return loadScript('./data/scenario/script/Buildings_Buy.js');
    })
    .then(function() {
        return loadScript('./data/scenario/script/Skill.js');
    })
    .then(function() {
        return loadScript('./data/scenario/script/Seconds_Gain.js');
    })
    .then(function() {
        return loadScript('./data/scenario/script/Auto_Save.js');
    })
    .then(function() {
        return loadScript('./data/scenario/script/Extra.js');
    })
    .then(function() {
    return loadScript('./data/scenario/script/Bonus.js');
    })
    .catch(function(error) {
        console.error('jsファイル読み込み失敗', error);
    });

}

</script>

;jsファイルを書き込む用のdiv
<div id="Script_Footer"></div>

[endhtml]

