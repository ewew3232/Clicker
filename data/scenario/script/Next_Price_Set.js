//次の値段計算用関数
//基本:(一つ前の施設価格）x 1.15　※小数点は四捨五入
function Total_Price(Item_Price,Item_Count,Buy_Count) {
    Next_Price = Math.round((Item_Price * Math.pow(1.15, Item_Count) * (Math.pow(1.15,Buy_Count) - 1) / 0.15));
    return Next_Price;
};

//各施設の次値段を設定、代入
function Next_Price_Set(){ 
Price_One_One = Total_Price(Buildings_One_Price,Buildings_One_Count,1);
Re_Write(Price_One_One,'円','Buildings_One_Next_Price_One');
Price_One_Ten = Total_Price(Buildings_One_Price,Buildings_One_Count,10);
Re_Write(Price_One_Ten,'円','Buildings_One_Next_Price_Ten');
Price_One_Hundred = Total_Price(Buildings_One_Price,Buildings_One_Count,100);
Re_Write(Price_One_Hundred ,'円','Buildings_One_Next_Price_Hundred');

Price_Two_One = Total_Price(Buildings_Two_Price,Buildings_Two_Count,1);
Re_Write(Price_Two_One,'円','Buildings_Two_Next_Price_One');
Price_Two_Ten = Total_Price(Buildings_Two_Price,Buildings_Two_Count,10);
Re_Write(Price_Two_Ten,'円','Buildings_Two_Next_Price_Ten');
Price_Two_Hundred = Total_Price(Buildings_Two_Price,Buildings_Two_Count,100);
Re_Write(Price_Two_Hundred,'円','Buildings_Two_Next_Price_Hundred');

Price_Three_One = Total_Price(Buildings_Three_Price,Buildings_Three_Count,1);
Re_Write(Price_Three_One,'円','Buildings_Three_Next_Price_One');
Price_Three_Ten = Total_Price(Buildings_Three_Price,Buildings_Three_Count,10);
Re_Write(Price_Three_Ten,'円','Buildings_Three_Next_Price_Ten');
Price_Three_Hundred = Total_Price(Buildings_Three_Price,Buildings_Three_Count,100);
Re_Write(Price_Three_Hundred,'円','Buildings_Three_Next_Price_Hundred');

Price_Four_One = Total_Price(Buildings_Four_Price,Buildings_Four_Count,1);
Re_Write(Price_Four_One,'円','Buildings_Four_Next_Price_One');
Price_Four_Ten = Total_Price(Buildings_Four_Price,Buildings_Four_Count,10);
Re_Write(Price_Four_Ten,'円','Buildings_Four_Next_Price_Ten');
Price_Four_Hundred = Total_Price(Buildings_Four_Price,Buildings_Four_Count,100);
Re_Write(Price_Four_Hundred,'円','Buildings_Four_Next_Price_Hundred');

Price_Five_One = Total_Price(Buildings_Five_Price,Buildings_Five_Count,1);
Re_Write(Price_Five_One,'円','Buildings_Five_Next_Price_One');
Price_Five_Ten = Total_Price(Buildings_Five_Price,Buildings_Five_Count,10);
Re_Write(Price_Five_Ten,'円','Buildings_Five_Next_Price_Ten');
Price_Five_Hundred = Total_Price(Buildings_Five_Price,Buildings_Five_Count,100);
Re_Write(Price_Five_Hundred,'円','Buildings_Five_Next_Price_Hundred');

Price_Six_One = Total_Price(Buildings_Six_Price,Buildings_Six_Count,1);
Re_Write(Price_Six_One,'円','Buildings_Six_Next_Price_One');
Price_Six_Ten = Total_Price(Buildings_Six_Price,Buildings_Six_Count,10);
Re_Write(Price_Six_Ten,'円','Buildings_Six_Next_Price_Ten');
Price_Six_Hundred = Total_Price(Buildings_Six_Price,Buildings_Six_Count,100);
Re_Write(Price_Six_Hundred,'円','Buildings_Six_Next_Price_Hundred');

Price_Seven_One = Total_Price(Buildings_Seven_Price,Buildings_Seven_Count,1);
Re_Write(Price_Seven_One,'円','Buildings_Seven_Next_Price_One');
Price_Seven_Ten = Total_Price(Buildings_Seven_Price,Buildings_Seven_Count,10);
Re_Write(Price_Seven_Ten,'円','Buildings_Seven_Next_Price_Ten');
Price_Seven_Hundred = Total_Price(Buildings_Seven_Price,Buildings_Seven_Count,100);
Re_Write(Price_Seven_Hundred,'円','Buildings_Seven_Next_Price_Hundred');

Price_Eight_One = Total_Price(Buildings_Eight_Price,Buildings_Eight_Count,1);
Re_Write(Price_Eight_One,'円','Buildings_Eight_Next_Price_One');
Price_Eight_Ten = Total_Price(Buildings_Eight_Price,Buildings_Eight_Count,10);
Re_Write(Price_Eight_Ten,'円','Buildings_Eight_Next_Price_Ten');
Price_Eight_Hundred = Total_Price(Buildings_Eight_Price,Buildings_Eight_Count,100);
Re_Write(Price_Eight_Hundred,'円','Buildings_Eight_Next_Price_Hundred');

Price_Nine_One = Total_Price(Buildings_Nine_Price,Buildings_Nine_Count,1);
Re_Write(Price_Nine_One,'円','Buildings_Nine_Next_Price_One');
Price_Nine_Ten = Total_Price(Buildings_Nine_Price,Buildings_Nine_Count,10);
Re_Write(Price_Nine_Ten,'円','Buildings_Nine_Next_Price_Ten');
Price_Nine_Hundred = Total_Price(Buildings_Nine_Price,Buildings_Nine_Count,100);
Re_Write(Price_Nine_Hundred,'円','Buildings_Nine_Next_Price_Hundred');

Price_Ten_One = Total_Price(Buildings_Ten_Price,Buildings_Ten_Count,1);
Re_Write(Price_Ten_One,'円','Buildings_Ten_Next_Price_One');
Price_Ten_Ten = Total_Price(Buildings_Ten_Price,Buildings_Ten_Count,10);
Re_Write(Price_Ten_Ten,'円','Buildings_Ten_Next_Price_Ten');
Price_Ten_Hundred = Total_Price(Buildings_Ten_Price,Buildings_Ten_Count,100);
Re_Write(Price_Ten_Hundred,'円','Buildings_Ten_Next_Price_Hundred');

Price_Eleven_One = Total_Price(Buildings_Eleven_Price,Buildings_Eleven_Count,1);
Re_Write(Price_Eleven_One,'円','Buildings_Eleven_Next_Price_One');
Price_Eleven_Ten = Total_Price(Buildings_Eleven_Price,Buildings_Eleven_Count,10);
Re_Write(Price_Eleven_Ten,'円','Buildings_Eleven_Next_Price_Ten');
Price_Eleven_Hundred = Total_Price(Buildings_Eleven_Price,Buildings_Eleven_Count,100);
Re_Write(Price_Eleven_Hundred,'円','Buildings_Eleven_Next_Price_Hundred');
};

Next_Price_Set();//起動時に実行