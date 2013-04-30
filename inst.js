function inst(){

	// 「OK」時の処理開始 ＋ 確認ダイアログの表示
	if(window.confirm('会員登録が完了いたしました。当店限定のお得なクーポンをGETできるアプリをインストールしますか？')==true){
		 window.location.href = "http://dl.dropbox.com/u/109242285/formsample/ScannerDemo.ipa";

	}
	else{
		window.alert('アプリはインストールせず、会員登録のみ行いました。'); // 警告ダイアログを表示
	}
}