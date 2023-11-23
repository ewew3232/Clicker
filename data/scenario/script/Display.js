
//ゲームの進行状況に合わせて、html要素を表示、非表示させる関数
function Display(ID, Condition) {

    var element = document.getElementById(ID);

    for(var i = 0; i < elements.length; i++){
        if(element) {
            if(Condition) {
                element.style.display = '';
            } else {
                element.style.display = 'none';
            }
        }
    }
}

//一定時間ごとにチェック
setInterval(function() {

    Display('Buildings_Two_Box', Buildings_One_Count > 0);
    Display('Buildings_Three_Box', Buildings_Two_Count > 0);
    Display('Buildings_Four_Box', Buildings_Three_Count > 0);
    Display('Buildings_Five_Box', Buildings_Four_Count > 0);
    Display('Buildings_Six_Box', Buildings_Five_Count > 0);
    Display('Buildings_Seven_Box', Buildings_Six_Count > 0);
    Display('Buildings_Eight_Box', Buildings_Seven_Count > 0);
    Display('Buildings_Nine_Box', Buildings_Eight_Count > 0);
    Display('Buildings_Ten_Box', Buildings_Nine_Count > 0);
    Display('Buildings_Eleven_Box', Buildings_Ten_Count > 0);

    Display('Buildings_Two_Box_Ten', Buildings_One_Count > 0);
    Display('Buildings_Three_Box_Ten', Buildings_Two_Count > 0);
    Display('Buildings_Four_Box_Ten', Buildings_Three_Count > 0);
    Display('Buildings_Five_Box_Ten', Buildings_Four_Count > 0);
    Display('Buildings_Six_Box_Ten', Buildings_Five_Count > 0);
    Display('Buildings_Seven_Box_Ten', Buildings_Six_Count > 0);
    Display('Buildings_Eight_Box_Ten', Buildings_Seven_Count > 0);
    Display('Buildings_Nine_Box_Ten', Buildings_Eight_Count > 0);
    Display('Buildings_Ten_Box_Ten', Buildings_Nine_Count > 0);
    Display('Buildings_Eleven_Box_Ten', Buildings_Ten_Count > 0);

    Display('Buildings_Two_Box_Hundred', Buildings_One_Count > 0);
    Display('Buildings_Three_Box_Hundred', Buildings_Two_Count > 0);
    Display('Buildings_Four_Box_Hundred', Buildings_Three_Count > 0);
    Display('Buildings_Five_Box_Hundred', Buildings_Four_Count > 0);
    Display('Buildings_Six_Box_Hundred', Buildings_Five_Count > 0);
    Display('Buildings_Seven_Box_Hundred', Buildings_Six_Count > 0);
    Display('Buildings_Eight_Box_Hundred', Buildings_Seven_Count > 0);
    Display('Buildings_Nine_Box_Hundred', Buildings_Eight_Count > 0);
    Display('Buildings_Ten_Box_Hundred', Buildings_Nine_Count > 0);
    Display('Buildings_Eleven_Box_Hundred', Buildings_Ten_Count > 0);

}, 500);//500ms秒ごとに判定

//起動時に反映

Display('Buildings_Two_Box', Buildings_One_Count > 0);
Display('Buildings_Three_Box', Buildings_Two_Count > 0);
Display('Buildings_Four_Box', Buildings_Three_Count > 0);
Display('Buildings_Five_Box', Buildings_Four_Count > 0);
Display('Buildings_Six_Box', Buildings_Five_Count > 0);
Display('Buildings_Seven_Box', Buildings_Six_Count > 0);
Display('Buildings_Eight_Box', Buildings_Seven_Count > 0);
Display('Buildings_Nine_Box', Buildings_Eight_Count > 0);
Display('Buildings_Ten_Box', Buildings_Nine_Count > 0);
Display('Buildings_Eleven_Box', Buildings_Ten_Count > 0);

Display('Buildings_Two_Box_Ten', Buildings_One_Count > 0);
Display('Buildings_Three_Box_Ten', Buildings_Two_Count > 0);
Display('Buildings_Four_Box_Ten', Buildings_Three_Count > 0);
Display('Buildings_Five_Box_Ten', Buildings_Four_Count > 0);
Display('Buildings_Six_Box_Ten', Buildings_Five_Count > 0);
Display('Buildings_Seven_Box_Ten', Buildings_Six_Count > 0);
Display('Buildings_Eight_Box_Ten', Buildings_Seven_Count > 0);
Display('Buildings_Nine_Box_Ten', Buildings_Eight_Count > 0);
Display('Buildings_Ten_Box_Ten', Buildings_Nine_Count > 0);
Display('Buildings_Eleven_Box_Ten', Buildings_Ten_Count > 0);

Display('Buildings_Two_Box_Hundred', Buildings_One_Count > 0);
Display('Buildings_Three_Box_Hundred', Buildings_Two_Count > 0);
Display('Buildings_Four_Box_Hundred', Buildings_Three_Count > 0);
Display('Buildings_Five_Box_Hundred', Buildings_Four_Count > 0);
Display('Buildings_Six_Box_Hundred', Buildings_Five_Count > 0);
Display('Buildings_Seven_Box_Hundred', Buildings_Six_Count > 0);
Display('Buildings_Eight_Box_Hundred', Buildings_Seven_Count > 0);
Display('Buildings_Nine_Box_Hundred', Buildings_Eight_Count > 0);
Display('Buildings_Ten_Box_Hundred', Buildings_Nine_Count > 0);
Display('Buildings_Eleven_Box_Hundred', Buildings_Ten_Count > 0);


