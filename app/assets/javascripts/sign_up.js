$(document).on("turbolinks:load", function(){
  $(".link__sign-up__signup_btn").on("click",function(){
    console.log(this)
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
      // $("#new_user").submit(function(){
      //   if ($("input[name='name']").val() == '' || $("input[name='email']").val() == '' || $("input[name='avatar']").val() == '' || $("input[name='password']").val() == '' || $("input[name='password_comfirmation']").val() == '' || $("input[name='want']").val() == '') {
      //     // var params = $("#new_user").serializeArray();
      //     // // var params = $("#new_user input[value]").serializeArray();
      //     // console.log(params)
      //     // for (var key in params) {
      //     //   // console.log(params[key].name + ":" + params[key].value);
      //     //   if((params[key].value).length == "0"){
      //     //     console.log()

      //     //   }
            
      //     // $.each(params, function(params[key], value) {
      //     //   console.log(params + ': ' + value)
      //     // })
      //   // }
      //     $("#required p").append("required").css("color","red")
      //     return false;
      //   } else {
      //     $("#new_user").submit();
      //   }
      // });

    $('.title_modal_bg').off().click(function(){ // .modal_bgか.modal_closeをクリックしたらモーダルと背景をフェードアウトさせる
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
    console.log(this)
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
    $('.title_modal_bg').off().click(function(){ // .modal_bgか.modal_closeをクリックしたらモーダルと背景をフェードアウトさせる
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
})


$("#new_user").submit(function(){
  console.log(this)
  if ($("input[name='name']").val() == '') {
    alert('入力してください');
    return false;
  } else {
    $("#new_user").submit();
  }
});
// var checkForm = function(){
//   if(document.signup.val() == ""){
//       alert("必須項目を入力して下さい。");
// return false;
//   }else{
// return true;
//   }
// }
