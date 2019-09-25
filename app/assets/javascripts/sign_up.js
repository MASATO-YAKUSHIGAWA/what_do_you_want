$(document).on("turbolinks:load", function(){
  $(".link__sign-up__signup_btn").on("click",function(){
    $('body').append('<div class="title_modal_bg"></div>');
    $('.title_modal_bg').fadeIn(); 

    // $("body").css({overflow:'hidden'}); //背景固定
      function modalResize(){
        var w = $(window).width();
        var h = $(window).height();
        var x = (w - $(".sign_up_modal").outerWidth(true)) / 2;
        var y = (h - $(".sign_up_modal").outerHeight(true)) / 2;
        $(".sign_up_modal").css({'left': x + 'px','top': "0" + 'px'});
      }
      modalResize(); //真ん中表示
    $(".sign_up_modal").fadeIn(); // modalをフェードインで表示

      $(".first-image").on("click", function(){ //アバター表示
        if($(".selected_avatar").length !== 0){
          $(".selected_avatar").remove()    
        }
        $(".first_user_avatar").append("<img class='selected_avatar' src=''/>")
        var img_form = $(this).prevAll("input") //formのinputタグ取得
        function readURL(input) {
        if (input.files && input.files[0]) {
          var reader = new FileReader();
          reader.onload = function (e) {
            $(".selected_avatar").css('maxWidth','200px');
            $(".selected_avatar").css('maxHeight','200px');
            $(".selected_avatar").attr('src', e.target.result);
          }
          reader.readAsDataURL(input.files[0]);
        }
      }
        $(img_form).change(function() {
          readURL(this);
        });
      })
      $('#new_user').parsley(); //バリデーション
    $('.sign_up_modal__back').off().click(function(){ // .modal_bgか.modal_closeをクリックしたらモーダルと背景をフェードアウトさせる
      $('.sign_up_modal').fadeOut();
      $('.title_modal_bg').fadeOut('slow',function(){
        $('.title_modal_bg').remove();
        $('html, body').removeClass('lock');
        // $("body").css({overflow:''}); //背景戻す
      });
    });
  // ウィンドウがリサイズされたらモーダルの位置を再計算する
    $(window).on('resize', function(){
      modalResize();
    });
  })


  //ログインモーダルの表示
  $(".link__log-in__login_btn").on("click",function(){
    $('body').append('<div class="title_modal_bg"></div>');
    $('.title_modal_bg').fadeIn(); 

    // $("body").css({overflow:'hidden'}); //背景固定
      function modalResize(){
        var w = $(window).width();
        var h = $(window).height();
        var x = (w - $(".log_in_modal").outerWidth(true)) / 2;
        var y = (h - $(".log_in_modal").outerHeight(true)) / 2;
        $(".log_in_modal").css({'left': x + 'px','top': "0" + 'px'});
      }
      modalResize(); //真ん中表示
    $(".log_in_modal").fadeIn(); // modalをフェードインで表示
    $('#log_in_user').parsley(); //バリデーション
    $('.log_in_modal__back').off().click(function(){ // .modal_bgか.modal_closeをクリックしたらモーダルと背景をフェードアウトさせる
      $('.log_in_modal').fadeOut();
      $('.title_modal_bg').fadeOut('slow',function(){
        $('.title_modal_bg').remove();
        $('html, body').removeClass('lock');
        // $("body").css({overflow:''}); //背景戻す
      });
    });
  // ウィンドウがリサイズされたらモーダルの位置を再計算する
    $(window).on('resize', function(){
      modalResize();
    });
  })


  var controller = new ScrollMagic.Controller(); //scrollMagic宣言

  var expansion = new ScrollMagic.Scene({
    triggerElement: "#trigger0"
    })
    
    .addTo(controller)
    .setPin(".link")

  var tween1 = TweenMax.to("#trigger1", 0.5, { //title
    opacity:1,
    x: "-50px",
  })
  var expansion = new ScrollMagic.Scene({
    triggerElement: "#trigger1"
    })
    .setTween(tween1)
    
    .addTo(controller)

  var tween2 = TweenMax.to("#trigger2", 0.5, { //説明
    opacity:1,
    x: "50px",
    })
  var expansion = new ScrollMagic.Scene({
  triggerElement: "#trigger2",
    })
    .setTween(tween2)
    
    .addTo(controller)
    // .setPin(".link")

  var tween3 = TweenMax.to("#trigger3", 0.5, { //画像
    opacity:1,
    x: "-50px",
    })
  var expansion = new ScrollMagic.Scene({
  triggerElement: "#trigger3"
    })
    .setTween(tween3)
    
    .addTo(controller)

  var tween4 = TweenMax.to("#trigger4", 0.5, { //実際の画面説明
    opacity:1,
    x: "50px"
    })
  var expansion = new ScrollMagic.Scene({
  triggerElement: "#trigger4"
    })
    .setTween(tween4)
    
    .addTo(controller)

  var tween5 = TweenMax.to(["#trigger1","#trigger3"], 0.5, { //フェードアウト
    opacity:0,
    x: "50px"
    })
  var expansion = new ScrollMagic.Scene({
  triggerElement: "#trigger4",
    })
    .setTween(tween5)
    
    .addTo(controller)

  var tween6 = TweenMax.to("#trigger2", 0.5, { //フェードアウト
    opacity:0,
    x: "-50px"
    })
  var expansion = new ScrollMagic.Scene({
  triggerElement: "#trigger4"
    })
    .setTween(tween6)
    
    .addTo(controller)

  var tween7 = TweenMax.to("#trigger5", 0.5, { //フェードアウト
    opacity:1,
    x: "-50px"
    })
  var expansion = new ScrollMagic.Scene({
  triggerElement: "#trigger4"
    })
    .setTween(tween7)
    
    .addTo(controller)
})
