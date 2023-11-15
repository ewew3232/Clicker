
//施設の生産量計算式　基本生産量 * 個数 * 特殊係数 *スキル係数
function Buildings_Total_Power(Power,Count,Extra,Skill){
    Buildings_Power = Power * Count * Extra * Skill;
    return Buildings_Power;
};

//各施設の生産量　
function Buildings_Total_Power_Calculate(){
Buildings_One_Total_Power = Buildings_Total_Power(Buildings_One_Power,Buildings_One_Count,Buildings_One_Extra,Buildings_One_Skill);
Buildings_Two_Total_Power = Buildings_Total_Power(Buildings_Two_Power,Buildings_Two_Count,Buildings_Two_Extra,Buildings_Two_Skill);
Buildings_Three_Total_Power = Buildings_Total_Power(Buildings_Three_Power,Buildings_Three_Count,Buildings_Three_Extra,Buildings_Three_Skill);
Buildings_Four_Total_Power = Buildings_Total_Power(Buildings_Four_Power,Buildings_Four_Count,Buildings_Four_Extra,Buildings_Four_Skill);
Buildings_Five_Total_Power = Buildings_Total_Power(Buildings_Five_Power,Buildings_Five_Count,Buildings_Five_Extra,Buildings_Five_Skill);
Buildings_Six_Total_Power = Buildings_Total_Power(Buildings_Six_Power,Buildings_Six_Count,Buildings_Six_Extra,Buildings_Six_Skill);
Buildings_Seven_Total_Power = Buildings_Total_Power(Buildings_Seven_Power,Buildings_Seven_Count,Buildings_Seven_Extra,Buildings_Seven_Skill);
Buildings_Eight_Total_Power = Buildings_Total_Power(Buildings_Eight_Power,Buildings_Eight_Count,Buildings_Eight_Extra,Buildings_Eight_Skill);
Buildings_Nine_Total_Power = Buildings_Total_Power(Buildings_Nine_Power,Buildings_Nine_Count,Buildings_Nine_Extra,Buildings_Nine_Skill);
Buildings_Ten_Total_Power = Buildings_Total_Power(Buildings_Ten_Power,Buildings_Ten_Count,Buildings_Ten_Extra,Buildings_Ten_Skill);
Buildings_Eleven_Total_Power =Buildings_Total_Power(Buildings_Eleven_Power,Buildings_Eleven_Count,Buildings_Eleven_Extra,Buildings_Eleven_Skill);

//全ての施設の生産量合計（1秒当たりの増加量）
Total_Power = Number(Buildings_One_Total_Power + Buildings_Two_Total_Power + Buildings_Three_Total_Power + Buildings_Four_Total_Power + Buildings_Five_Total_Power + Buildings_Six_Total_Power + Buildings_Seven_Total_Power + Buildings_Eight_Total_Power + Buildings_Nine_Total_Power + Buildings_Ten_Total_Power + Buildings_Eleven_Total_Power) * Number(Skill_Power);
};

Buildings_Total_Power_Calculate()//起動時に実行