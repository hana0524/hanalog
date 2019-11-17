'use strict';
function memo() {
  var ret = confirm("トップページに移動します。");
  if (ret == true) {
    window.location.href = "top.html";
  }
}

'use strict';
function login() {
  var id = document.getElementById('loginid').value;
  var password = document.getElementById('loginpass').value;
  if (id != 'hana' || password != 'hana'){
    confirm('IDかパスワードが違います。');
  }else{
    var loginok = confirm('ログインします。');
    if (loginok){
      window.location.assign('adminpage.html');
    }
    else{
      window.location.href = 'login.html';
    }
    /*window.location.href = "adminpage.html";*/
    
    }
}

function thankspage() {
  window.location = "thanks.html";
}

function loc() {
        window.location = "top.html";
    }
            //タイマーをセット
    function tm(){
        tm = setTimeout("loc()",3000);
    }









//以下未完成
document.getElementById('file-sample').addEventListener('change', function (e) {
    // 1枚だけ表示する
    var file = e.target.files[0];

    // ファイルのブラウザ上でのURLを取得する
    var blobUrl = window.URL.createObjectURL(file);

    // img要素に表示
    var img = document.getElementById('file-preview');
    img.src = blobUrl;
});

function imagepost(){
  document.getElementById('file-sample').addEventListener('change', function (e) {
    // 1枚だけ表示する
    var file = e.target.files[0];

    // ファイルのブラウザ上でのURLを取得する
    var blobUrl = window.URL.createObjectURL(file);

    // img要素に表示
    var img = document.getElementById('file-preview');
    img.src = blobUrl;
});
}

