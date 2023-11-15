//別のksファイルを呼び出す
//パス,ksファイルの名前,ksファイルのラベル名前
function Scenario_Call(Path,Scenario,Label){
    Scenario_Name = Path + Scenario + '.ks';
    TYRANO.kag.ftag.startTag('call',{ storage:Scenario_Name },{target:Label});
}
