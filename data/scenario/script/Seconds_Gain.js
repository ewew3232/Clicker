//1秒ごとにアイテムを増加
const Seconds_Gain = function () {

    //各施設の生産量を計算
    Buildings_One_Total_Power = Buildings_Total_Power(Buildings_One_Power,Buildings_One_Count,Buildings_One_Extra,Buildings_One_Skill);
    Buildings_Two_Total_Power = Buildings_Total_Power(Buildings_Two_Power,Buildings_Two_Count,Buildings_Two_Extra,Buildings_Two_Skill);
    Buildings_ThreeTotal_Power = Buildings_Total_Power(Buildings_Three_Power,Buildings_Three_Count,Buildings_Three_Extra,Buildings_Three_Skill);
    Buildings_Four_Total_Power = Buildings_Total_Power(Buildings_Four_Power,Buildings_Four_Count,Buildings_Four_Extra,Buildings_Four_Skill);
    Buildings_Five_Total_Power = Buildings_Total_Power(Buildings_Five_Power,Buildings_Five_Count,Buildings_Five_Extra,Buildings_Five_Skill);
    Buildings_Six_Total_Power = Buildings_Total_Power(Buildings_Six_Power,Buildings_Six_Count,Buildings_Six_Extra,Buildings_Six_Skill);
    Buildings_Seven_Total_Power = Buildings_Total_Power(Buildings_Seven_Power,Buildings_Seven_Count,Buildings_Seven_Extra,Buildings_Seven_Skill);
    Buildings_Eight_Total_Power = Buildings_Total_Power(Buildings_Eight_Power,Buildings_Eight_Count,Buildings_Eight_Extra,Buildings_Eight_Skill);
    Buildings_Nine_Total_Power = Buildings_Total_Power(Buildings_Nine_Power,Buildings_Nine_Count,Buildings_Nine_Extra,Buildings_Nine_Skill);
    Buildings_Ten_Total_Power = Buildings_Total_Power(Buildings_Ten_Power,Buildings_Ten_Count,Buildings_Ten_Extra,Buildings_Ten_Skill);
    Buildings_Eleven_Total_Power =Buildings_Total_Power(Buildings_Eleven_Power,Buildings_Eleven_Count,Buildings_Eleven_Extra,Buildings_Eleven_Skill);
    
    //総生産量を計算　（各施設の合計）*（スキルでの増加係数）
    var Total_Power = (Buildings_One_Total_Power + Buildings_Two_Total_Power + Buildings_ThreeTotal_Power + Buildings_Four_Total_Power + Buildings_Five_Total_Power + Buildings_Six_Total_Power + Buildings_Seven_Total_Power + Buildings_Eight_Total_Power + Buildings_Nine_Total_Power + Buildings_Ten_Total_Power + Buildings_Eleven_Total_Power) * Skill_Power;
    Total_Item = Number(Total_Item);
    Total_Item += Total_Power;

    //変数をhtmlに代入
    Buildings_Total_Power_Calculate()
    Re_Write(Total_Item,'円','Total_Item');
    Re_Write(Total_Power,'円/秒','Total_Power');


};

Timer_ID = setInterval(Seconds_Gain, 1000);//1秒ごとに実行



