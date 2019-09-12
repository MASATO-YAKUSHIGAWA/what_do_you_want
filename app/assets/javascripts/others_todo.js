$(document).on("turbolinks:load", function(){
  $(".all_todos__content__personal__index__detail_btn").on("click", function(){
    var user_id = $(this).data("user-id")
    $('body').append('<div class="todo_modal_bg"></div>');
    $('.todo_modal_bg').fadeIn(); 

    $("body").css({overflow:'hidden'}); //背景固定
      function modalResize(){
        var w = $(window).width();
        var h = $(window).height();
        var x = (w - $(`#parsonal_todos${user_id}`).outerWidth(true)) / 2;
        var y = (h - $(`#parsonal_todos${user_id}`).outerHeight(true)) / 2;
        $(`#parsonal_todos${user_id}`).css({'left': x + 'px','top': "0" + 'px'});
      }
      modalResize(); //真ん中表示
    $(`#parsonal_todos${user_id}`).fadeIn(); // modalをフェードインで表示
    if($(`#parsonal_todos${user_id} a:first`).length !== 0){
    $(`#parsonal_todos${user_id} a:first`)[0].click();
    }
    $(`#parsonal_todos${user_id}`).css("animation",`modal 1.0s forwards`);
    $('.todo_back').off().click(function(){ // .modal_bgか.modal_closeをクリックしたらモーダルと背景をフェードアウトさせる
      $(`#parsonal_todos${user_id}`).fadeOut();
      $(`#parsonal_todos${user_id}`).css("animation",`modalClose 1.0s forwards`);
      $('.todo_modal_bg').fadeOut('slow',function(){
        $('.todo_modal_bg').remove();
        $('html, body').removeClass('lock');
        $("body").css({overflow:''}); //背景戻す
      });
    });
  // ウィンドウがリサイズされたらモーダルの位置を再計算する
    $(window).on('resize', function(){
      modalResize();
    });    
  })
})