//定数定義
//施設の基本値段
Buildings_One_Price = 15;
Buildings_Two_Price = 100;
Buildings_Three_Price = 1100;
Buildings_Four_Price = 12000;
Buildings_Five_Price = 130000;
Buildings_Six_Price = 1400000;
Buildings_Seven_Price = 2000000;
Buildings_Eight_Price = 330000000;
Buildings_Nine_Price = 5100000000;
Buildings_Ten_Price = 75000000000;
Buildings_Eleven_Price = 100000000000;

//施設の基本生産量
Buildings_One_Power = 1;
Buildings_Two_Power = 10;
Buildings_Three_Power = 50;
Buildings_Four_Power = 100;
Buildings_Five_Power = 300;
Buildings_Six_Power = 1400;
Buildings_Seven_Power = 7800;
Buildings_Eight_Power = 44000;
Buildings_Nine_Power = 260000;
Buildings_Ten_Power = 1600000;
Buildings_Eleven_Power = 10000000;


//施設の初期総生産量
Buildings_One_Total_Power = 0;
Buildings_Two_Total_Power = 0;
Buildings_Three_Total_Power = 0;
Buildings_Four_Total_Power = 0;
Buildings_Five_Total_Power = 0;
Buildings_Six_Total_Power = 0;
Buildings_Seven_Total_Power = 0;
Buildings_Eight_Total_Power = 0;
Buildings_Nine_Total_Power = 0;
Buildings_Ten_Total_Power = 0;
Buildings_Eleven_Total_Power = 0;

//初期スキル係数
Buildings_One_Skill = 1;
Buildings_Two_Skill = 1;
Buildings_Three_Skill = 1;
Buildings_Four_Skill = 1;
Buildings_Five_Skill = 1;
Buildings_Six_Skill = 1;
Buildings_Seven_Skill = 1;
Buildings_Eight_Skill = 1;
Buildings_Nine_Skill = 1;
Buildings_Ten_Skill = 1;
Buildings_Eleven_Skill = 1;

//クリック生産量に関わる初期スキル係数
Click_Extra_Power = 1;

//総生産量に関わる初期スキル係数
Skill_Power = 1;

//強化施設の値段
One_Extra_Price_One = 10;
One_Extra_Price_Two = 100;
One_Extra_Price_Three = 1000;

Two_Extra_Price_One = 10;
Two_Extra_Price_Two = 100;
Two_Extra_Price_Three = 1000;

Three_Extra_Price_One = 10;
Three_Extra_Price_Two = 100;
Three_Extra_Price_Three = 1000;

Four_Extra_Price_One = 10;
Four_Extra_Price_Two = 100;
Four_Extra_Price_Three = 1000;

Five_Extra_Price_One = 10;
Five_Extra_Price_Two = 100;
Five_Extra_Price_Three = 1000;

Six_Extra_Price_One = 10;
Six_Extra_Price_Two = 100;
Six_Extra_Price_Three = 1000;

Seven_Extra_Price_One = 10;
Seven_Extra_Price_Two = 100;
Seven_Extra_Price_Three = 1000;

Eight_Extra_Price_One = 10;
Eight_Extra_Price_Two = 100;
Eight_Extra_Price_Three = 1000;

Nine_Extra_Price_One = 10;
Nine_Extra_Price_Two = 100;
Nine_Extra_Price_Three = 1000;

Ten_Extra_Price_One = 10;
Ten_Extra_Price_Two = 100;
Ten_Extra_Price_Three = 1000;

Eleven_Extra_Price_One = 10;
Eleven_Extra_Price_Two = 100;
Eleven_Extra_Price_Three = 1000;

//初回起動判定　null==初回　else==2回目以降
Start_Game = localStorage.getItem('Start_Game');

//ここから変数
//初回時は、アイテム所持数と施設所持数を0に定義し、localStorageに保存
//2回目以降は、localStorageから引っ張る
 if (Start_Game == null) {
    localStorage.setItem('Start_Game',1);//初回判定

    //アイテム所持数
    Total_Item = 0;
    localStorage.setItem('Total_Item',Total_Item);

    //施設所持数
    Buildings_One_Count = 0;
    Buildings_Two_Count = 0;
    Buildings_Three_Count = 0;
    Buildings_Four_Count = 0;
    Buildings_Five_Count = 0;
    Buildings_Six_Count = 0;
    Buildings_Seven_Count = 0;
    Buildings_Eight_Count = 0;
    Buildings_Nine_Count = 0;
    Buildings_Ten_Count = 0;
    Buildings_Eleven_Count = 0;
    
    localStorage.setItem('Buildings_One_Count',Buildings_One_Count);
    localStorage.setItem('Buildings_Two_Count',Buildings_Two_Count);
    localStorage.setItem('Buildings_Three_Count',Buildings_Three_Count);
    localStorage.setItem('Buildings_Four_Count',Buildings_Four_Count);
    localStorage.setItem('Buildings_Five_Count',Buildings_Five_Count);
    localStorage.setItem('Buildings_Six_Count',Buildings_Six_Count);
    localStorage.setItem('Buildings_Seven_Count',Buildings_Seven_Count);
    localStorage.setItem('Buildings_Eight_Count',Buildings_Eight_Count);
    localStorage.setItem('Buildings_Nine_Count',Buildings_Nine_Count);
    localStorage.setItem('Buildings_Ten_Count',Buildings_Ten_Count);
    localStorage.setItem('Buildings_Eleven_Count',Buildings_Eleven_Count);

    //特殊係数
    Buildings_One_Extra = 1;
    Buildings_Two_Extra = 1;
    Buildings_Three_Extra = 1;
    Buildings_Four_Extra = 1;
    Buildings_Five_Extra = 1;
    Buildings_Six_Extra = 1;
    Buildings_Seven_Extra = 1;
    Buildings_Eight_Extra = 1;
    Buildings_Nine_Extra = 1;
    Buildings_Ten_Extra = 1;
    Buildings_Eleven_Extra = 1;

    localStorage.setItem('Buildings_One_Extra',Buildings_One_Extra);
    localStorage.setItem('Buildings_Two_Extra',Buildings_Two_Extra);
    localStorage.setItem('Buildings_Three_Extra',Buildings_Three_Extra);
    localStorage.setItem('Buildings_Four_Extra',Buildings_Four_Extra);
    localStorage.setItem('Buildings_Five_Extra',Buildings_Five_Extra);
    localStorage.setItem('Buildings_Six_Extra',Buildings_Six_Extra);
    localStorage.setItem('Buildings_Seven_Extra',Buildings_Seven_Extra);
    localStorage.setItem('Buildings_Eight_Extra',Buildings_Eight_Extra);
    localStorage.setItem('Buildings_Nine_Extra',Buildings_Nine_Extra);
    localStorage.setItem('Buildings_Ten_Extra',Buildings_Ten_Extra);
    localStorage.setItem('Buildings_Eleven_Extra',Buildings_Eleven_Extra);

}
else{
    Total_Item = Number(localStorage.getItem('Total_Item'));

    Buildings_One_Count = Number(localStorage.getItem('Buildings_One_Count'));
    Buildings_Two_Count = Number(localStorage.getItem('Buildings_Two_Count'));
    Buildings_Three_Count = Number(localStorage.getItem('Buildings_Three_Count'));
    Buildings_Four_Count = Number(localStorage.getItem('Buildings_Four_Count'));
    Buildings_Five_Count = Number(localStorage.getItem('Buildings_Five_Count'));
    Buildings_Six_Count = Number(localStorage.getItem('Buildings_Six_Count'));
    Buildings_Seven_Count = Number(localStorage.getItem('Buildings_Seven_Count'));
    Buildings_Eight_Count = Number(localStorage.getItem('Buildings_Eight_Count'));
    Buildings_Nine_Count = Number(localStorage.getItem('Buildings_Nine_Count'));
    Buildings_Ten_Count = Number(localStorage.getItem('Buildings_Ten_Count'));
    Buildings_Eleven_Count = Number(localStorage.getItem('Buildings_Eleven_Count'));


    Buildings_One_Extra = Number(localStorage.getItem('Buildings_One_Extra'));
    Buildings_Two_Extra = Number(localStorage.getItem('Buildings_Two_Extra'));
    Buildings_Three_Extra = Number(localStorage.getItem('Buildings_Three_Extra'));
    Buildings_Four_Extra = Number(localStorage.getItem('Buildings_Four_Extra'));
    Buildings_Five_Extra = Number(localStorage.getItem('Buildings_Five_Extra'));
    Buildings_Six_Extra = Number(localStorage.getItem('Buildings_Six_Extra'));
    Buildings_Seven_Extra = Number(localStorage.getItem('Buildings_Seven_Extra'));
    Buildings_Eight_Extra = Number(localStorage.getItem('Buildings_Eight_Extra'));
    Buildings_Nine_Extra = Number(localStorage.getItem('Buildings_Nine_Extra'));
    Buildings_Ten_Extra = Number(localStorage.getItem('Buildings_Ten_Extra'));
    Buildings_Eleven_Extra = Number(localStorage.getItem('Buildings_Eleven_Extra'));

}


