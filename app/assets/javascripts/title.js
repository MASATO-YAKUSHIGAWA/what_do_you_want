$(function() {
  //タイトルのモーダル表示
  $(document).on("click", ".add_tab", function(){
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

function build_tab_HTML (title){ //タブの追加html
var tab_html =  `<a class="todo_content__tab_wrap__tab_area__tab_label active" href="#tab-${title.id}" id="tab-${title.id}">
                ${title.name}
                </a>
                <div class="delete_tab" data-title-id="${title.id}" id="tab-${title.id}">
                <p>×</p>
                </div>
                `
return tab_html;
}
function build_todo_HTML (title){ //todoの追加html
var todo_html = `<div class="todo_content__tab_wrap__todo_area__todo_box" id="tab-${title.id}" style="display: block;">
                  <div class="add${title.id} todo_content__tab_wrap__todo_area__todo_box__display">
                  </div>
                  <div class="todo_content__tab_wrap__todo_area__todo_box__create_todo" data-title-id="${title.id}">
                    <form action="/todos" accept-charset="UTF-8" method="post">
                    <input name="utf8" type="hidden" value="✓">
                    <input type="hidden" name="authenticity_token" value="0Vl5uSedtmoIibMCygI0P4UPdp1AWrSYUh2HZ2pdApzqhvpPtorKiMPbQn2EedBbzMPTriMfi0miVo3pmqkmcA==">
                    <input class="todo_form" id="todo_content${title.id}" type="text" name="todo[content]">
                    <input type="submit" name="commit" value="完了" class="todo_create_btn" id="todo_create_btn_${title.id}" style="display:none" data-disable-with="完了">            </form>
                  </div>
                </div>
                `
return todo_html;
}

// タブ（タイトル）追加の記述
  $(document).on("click", ".done-btn",function(e){
    e.preventDefault();
    if($(this).parents(".title_modal__select").prev(".title_modal__box").find("input").val() == ""){
      $(".title_modal__box__content").css("color","red")
      return false;
    }
    if($(this).parents(".title_modal__select").prev(".title_modal__box").find("input").val() !== ""){
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
      $('.todo_content__tab_wrap__tab_area a').removeClass('active');
      var tab_html = build_tab_HTML(data)
      var todo_html = build_todo_HTML(data)
      $(`.todo_content__tab_wrap__tab_area`).append(tab_html) //タブの追加
      $(`.todo_content__tab_wrap__todo_area`).append(todo_html) //タブの追加

      var tab = $(".todo_content__tab_wrap__tab_area").children("a").length //タブのaタグの数を取得
      console.log(tab)
      if(tab >= 1 && tab <= 4){
        var new_position = 70 + (tab * 160)
        $(".add_tab").css("left",new_position+ "px")
        $(".tab_balloon").css("display","none")
      }
      if(tab >= 5){
        $(".add_tab").css("display", "none")
        $(".tab_balloon").css("display","none")
      }
      $('.todo_content__tab_wrap__todo_area > div').hide(); //todo_area以下のdiv要素取得し、非表示
      $('.todo_content__tab_wrap__tab_area a:last').click(function () { //一番最後に追加したhrefを取得
        $('.todo_content__tab_wrap__todo_area > div').hide().filter(this.hash).fadeIn(); //hashにてtodo_areaのid取得し、表示
        $('.todo_content__tab_wrap__tab_area a').removeClass('active');
        $(this).addClass('active');
        $(".delete_tab").removeClass("active");
        $(this).next(".delete_tab").addClass("active")
        return false;
      })
      .filter(':eq(0)').click(); //初期設定は一番最初のタブ

      $(".title_modal__box__content").css("color","")
    })
    .fail(function(){
      console.log("失敗")
    })
  }
  })
})
