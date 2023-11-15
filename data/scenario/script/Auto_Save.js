
//必要なデータをlocalStorageに保存
const Auto_Save = function () {

    //放置報酬用に現時点でのUnixtimeを保存
	Unixtime_Save = Math.floor( new Date().getTime() / 1000 );
    localStorage.setItem('Unixtime_Save', Unixtime_Save);

    //アイテム所持数
    localStorage.setItem('Total_Item', Total_Item);

    //施設所持数
    localStorage.setItem('Buildings_One_Count', Buildings_One_Count);
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
};

setInterval(Auto_Save,1000);//1秒ごとに保存

//放置報酬計算
var Unixtime_Load = Math.floor( new Date().getTime() / 1000 );
var Unixtime_Save = localStorage.getItem('Unixtime_Save');
var Idle_Seconds = Unixtime_Load - Unixtime_Save;//セーブ時とロード時のUnixtimeの差分を計算
var Idle_Gain = Total_Power * Idle_Seconds;//差分×1秒当たりの獲得量
console.log('放置報酬:'+ Idle_Gain);
Total_Item += Idle_Gain;