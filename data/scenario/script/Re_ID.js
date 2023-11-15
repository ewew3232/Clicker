function Re_ID(Before_ID, After_ID){
    // 指定されたIDを持つ要素を取得
    var element = document.getElementById(Before_ID);
    // 要素が存在する場合、IDを変更
    if (element !== null) {
        element.id = After_ID;
    }
};