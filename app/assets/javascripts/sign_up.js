// $(document).on("turbolinks:load", function(){
//   $(".link__sign-up__signup_btn").on("click",function(){
//     console.log(this)
//     $('body').append('<div class="title_modal_bg"></div>');
//     $('.title_modal_bg').fadeIn(); 

//     $("body").css({overflow:'hidden'}); //背景固定
//       function modalResize(){
//         var w = $(window).width();
//         var h = $(window).height();
//         var x = (w - $(".sign_up_modal").outerWidth(true)) / 2;
//         var y = (h - $(".sign_up_modal").outerHeight(true)) / 2;
//         $(".sign_up_modal").css({'left': x + 'px','top': "50" + 'px'});
//       }
//       modalResize(); //真ん中表示
//     $(".sign_up_modal").fadeIn(); // modalをフェードインで表示
//     $('.title_modal__select--cancel, .title_modal__select--done').off().click(function(){ // .modal_bgか.modal_closeをクリックしたらモーダルと背景をフェードアウトさせる
//       $('.sign_up_modal').fadeOut();
//       $('.title_modal_bg').fadeOut('slow',function(){
//         $('.title_modal_bg').remove();
//         $('html, body').removeClass('lock');
//         $("body").css({overflow:''}); //背景戻す
//       });
//     });
//   // ウィンドウがリサイズされたらモーダルの位置を再計算する
//     $(window).on('resize', function(){
//       modalResize();
//     });
//   })
// })