$(function() {
 
  //テキストボックスに変更を加えたら発動
  $('input[type="text"]').change(function() {
 
    //入力したvalue値を変数に格納
    var val = $(this).val();
    console.log(val)
  })
  })