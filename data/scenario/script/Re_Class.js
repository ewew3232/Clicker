function Re_Class(Targert_Class_ID,New_Class){
    // 指定されたIDを持つ要素を取得
    var element = document.getElementById(Targert_Class_ID);
    // 要素が存在する場合、クラスを追加
    if (element !== null) {
        element.className = New_Class;
    }
};