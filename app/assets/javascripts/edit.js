$(document).on("turbolinks:load", function(){
  $(".todo_header__content__edit").on("click",function(){
    $('body').append('<div class="title_modal_bg"></div>');
    $('.title_modal_bg').fadeIn(); 

    // $("body").css({overflow:'hidden'}); //背景固定
      function modalResize(){
        var w = $(window).width();
        var h = $(window).height();
        var x = (w - $(".edit_modal").outerWidth(true)) / 2;
        var y = (h - $(".edit_modal").outerHeight(true)) / 2;
        $(".edit_modal").css({'left': x + 'px','top': "0" + 'px'});
      }
      modalResize(); //真ん中表示
    $(".edit_modal").fadeIn(); // modalをフェードインで表示
    $('.title_modal_bg, .form_btn, .edit_modal__header__back').off().click(function(){ // .modal_bgか.modal_closeをクリックしたらモーダルと背景をフェードアウトさせる
      $('.edit_modal').fadeOut();
      $('.title_modal_bg').fadeOut('slow',function(){
        $('.title_modal_bg').remove();
        $('html, body').removeClass('lock');
        $("body").css({overflow:''}); //背景戻す
      });
    });
  // ウィンドウがリサイズされたらモーダルの位置を再計算する
    $(window).on('resize', function(){
      modalResize();
    });
  })

  $(".edit-image").on("click", function(){
    var img_form = $(this).prevAll("input") //formのinputタグ取得
    var exit_img = $(this).prevAll("img") //imgタグ取得
    function readURL(input) {
      if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
          $(".user_avatar").css('maxWidth','200px');
          $(".user_avatar").css('maxHeight','200px');
          $(exit_img).attr('src', e.target.result);
        }
        reader.readAsDataURL(input.files[0]);
      }
    }
      $(img_form).change(function() {
        readURL(this);
      });
  })
})