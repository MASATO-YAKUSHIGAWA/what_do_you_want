$(function() {
  //タイトルのモーダル表示
  $(document).on("click", ".todo_content__tab_wrap__add_tab", function(){
    $('body').append('<div class="title_modal_bg"></div>');
    $('.title_modal_bg').fadeIn(); 

    $("body").css({overflow:'hidden'}); //背景固定
      function modalResize(){
        var w = $(window).width();
        var h = $(window).height();
        var x = (w - $(".title_modal").outerWidth(true)) / 2;
        var y = (h - $(".title_modal").outerHeight(true)) / 2;
        $(".title_modal").css({'left': x + 'px','top': "50" + 'px'});
      }
      modalResize(); //真ん中表示
    $(".title_modal").fadeIn(); // modalをフェードインで表示
    $('.title_modal__select--cancel, .title_modal__select--done').off().click(function(){ // .modal_bgか.modal_closeをクリックしたらモーダルと背景をフェードアウトさせる
      $('.title_modal').fadeOut();
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

  function buildHTML (title){
var html =  `<div class="todo_content__tab_wrap__tab_area">
              <div class="todo_content__tab_wrap__tab_area__tab_label">
              ${title.name}
              </div>
            </div>

            <div class="todo_content__tab_wrap__todo_area">
              <div class="todo_content__tab_wrap__todo_area__todo_box">
                <div class="add${title.id} todo_content__tab_wrap__todo_area__todo_box__display">
                </div>
              </div>
              <div class="todo_content__tab_wrap__todo_area__todo_box__create_todo" data-title-id="${title.id}">
                <form action="/todos" accept-charset="UTF-8" method="post">
                  <input name="utf8" type="hidden" value="✓">
                  <input type="hidden" name="authenticity_token" value="aa1ee6pgLkxZfZvJFdc17hOqq6Y9H7mY10hsSskLSctSct2NO3dSrpIvarZbrNGKWmYOlV5ahkknA2bEOf9tJw==">
                  <input class="todo_form" id="todo_content${title.id}" type="text" name="todo[content]">
                </form>
              </div>
            </div>
            `
return html;
}

  $(document).on("click", ".done-btn",function(e){
    e.preventDefault();
    $.ajax({
      type: 'POST',
      dataType: 'json',
      data: {"title[title]":$(`#title_title`).val()},
      url: `/titles`,
    })
  .done(function(data){
    console.log(data)
    console.log("成功")
    $(`#title_title`).val("")
    var html = buildHTML(data)
    $(`.todo_content__tab_wrap`).append(html)
  })
  .fail(function(){
    console.log("失敗")
  })
})
})
