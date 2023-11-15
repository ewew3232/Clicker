// 施設を購入する関数
function Buildings_Buy(Buildings_Name, Price) {
    // アイテム所持数が価格より多い場合、施設を購入
    //　(Buildings_Name,Prce) == (施設名,購入個数)
    if (Total_Item >= Price) {
        Total_Item -= Price;
        if (Buildings_Name === 'One_One') {
            Buildings_One_Count += 1;
        } else if (Buildings_Name === 'One_Ten')  {
            Buildings_One_Count += 10;
        } else if (Buildings_Name === 'One_Hundred') {
            Buildings_One_Count += 100;
        } else if (Buildings_Name === 'Two_One')  {
            Buildings_Two_Count += 1;
        } else if (Buildings_Name === 'Two_Ten') {
            Buildings_Two_Count += 10;
        } else if (Buildings_Name === 'Two_Hundred') {
            Buildings_Two_Count += 100;
        } else if (Buildings_Name === 'Three_One')  {
            Buildings_Three_Count += 1;
        } else if (Buildings_Name === 'Three_Ten') {
            Buildings_Three_Count += 10;
        } else if (Buildings_Name === 'Three_Hundred') {
            Buildings_Three_Count += 100;
        } else if (Buildings_Name === 'Four_One')  {
            Buildings_Four_Count += 1;
        } else if (Buildings_Name === 'Four_Ten') {
            Buildings_Four_Count += 10;
        } else if (Buildings_Name === 'Four_Hundred') {
            Buildings_Four_Count += 100;
        } else if (Buildings_Name === 'Five_One')  {
            Buildings_Five_Count += 1;
        } else if (Buildings_Name === 'Five_Ten') {
            Buildings_Five_Count += 10;
        } else if (Buildings_Name === 'Five_Hundred') {
            Buildings_Five_Count += 100;
        } else if (Buildings_Name === 'Six_One')  {
            Buildings_Six_Count += 1;
        } else if (Buildings_Name === 'Six_Ten') {
            Buildings_Six_Count += 10;
        } else if (Buildings_Name === 'Six_Hundred') {
            Buildings_Six_Count += 100;
        } else if (Buildings_Name === 'Seven_One')  {
            Buildings_Seven_Count += 1;
        } else if (Buildings_Name === 'Seven_Ten') {
            Buildings_Seven_Count += 10;
        } else if (Buildings_Name === 'Seven_Hundred') {
            Buildings_Seven_Count += 100;
        } else if (Buildings_Name === 'Eight_One')  {
            Buildings_Eight_Count += 1;
        } else if (Buildings_Name === 'Eight_Ten') {
            Buildings_Eight_Count += 10;
        } else if (Buildings_Name === 'Eight_Hundred') {
            Buildings_Eight_Count += 100;
        } else if (Buildings_Name === 'Nine_One')  {
            Buildings_Nine_Count += 1;
        } else if (Buildings_Name === 'Nine_Ten') {
            Buildings_Nine_Count += 10;
        } else if (Buildings_Name === 'Nine_Hundred') {
            Buildings_Nine_Count += 100;
        } else if (Buildings_Name === 'Ten_One')  {
            Buildings_Ten_Count += 1;
        } else if (Buildings_Name === 'Ten_Ten') {
            Buildings_Ten_Count += 10;
        } else if (Buildings_Name === 'Ten_Hundred') {
            Buildings_Ten_Count += 100;
        } else if (Buildings_Name === 'Eleven_One')  {
            Buildings_Eleven_Count += 1;
        } else if (Buildings_Name === 'Eleven_Ten') {
            Buildings_Eleven_Count += 10;
        } else if (Buildings_Name === 'Eleven_Hundred') {
            Buildings_Eleven_Count += 100;
        }

        Buildings_Total_Power_Calculate();//施設毎の生産量再計算
        Next_Price_Set();//次の値段を再代入
        Variabe_Set();//各種変数を再代入
    } 
    else{
    }
}

//購入ボタンをスマホでも連続タップできるようにする
var elements = document.getElementsByClassName('count-btn');// ページ上の全てのcount-btnを取得

Array.prototype.forEach.call(elements, function(element) {
  element.addEventListener('touchend', function(e) {
    e.target.click();//タップ終了時、clickイベントを明示的に発生
    e.preventDefault();//1回のタップで2回タップされる現象を抑制
  });
});
