$(document).on("turbolinks:load", function(){
  $('.todo_content__tab_wrap__todo_area > div').hide(); //todo_area以下のdiv要素取得し、非表示
 
    $('.todo_content__tab_wrap__tab_area a').click(function () { //hrefに設定したidを取得
        $('.todo_content__tab_wrap__todo_area > div').hide().filter(this.hash).fadeIn(); //hashにてtodo_areaのid取得し、表示
      console.log(this.hash)
        $('.todo_content__tab_wrap__tab_area a').removeClass('active');
        $(this).addClass('active');
        console.log(this)
        return false;
    })
    .filter(':eq(0)').click(); //初期設定は一番最初のタブ
})
