$(document).on("turbolinks:load", function(){

  $('.todo_content__tab_wrap__todo_area > div').hide(); //todo_area以下のdiv要素取得し、非表示
    $('.todo_content__tab_wrap__tab_area a').click(function () { //hrefに設定したidを取得
        $('.todo_content__tab_wrap__todo_area > div').hide().filter(this.hash).fadeIn(); //hashにてtodo_areaのid取得し、表示
        $('.todo_content__tab_wrap__tab_area a').removeClass('active');
        $(this).addClass('active');

          if($(".todo_content__tab_wrap__tab_area__tab_label").hasClass("active") === true){
            $(this).next(".delete_tab").addClass("active")
          }
          $(".todo_content__tab_wrap__tab_area__tab_label").on("click",function(){
            $(".delete_tab").removeClass("active");
            $(this).next(".delete_tab").addClass("active")
          })
        return false;
    })
    .filter(':eq(0)').click(); //初期設定は一番最初のタブ

  // プラスボタンの位置（初期）
  var tab = $(".todo_content__tab_wrap__tab_area").children("a").length //タブのaタグの数を取得
  console.log(tab)
  if(tab == 0){
    $(".add_tab").css("left","70"+ "px")
  }
  if(tab >= 1 && tab <= 4){
    var new_position = 70 + (tab * 160)
    $(".add_tab").css("left",new_position+ "px")
    $(".tab_balloon").css("display","none")
  }
  if(tab >= 5){
    $(".add_tab").css("display", "none")
    $(".tab_balloon").css("display","none")
  }

  // tab削除
  $(".todo_content__tab_wrap__tab_area").on("click", ".delete_tab", function(){
    var title_id = $(this).data("title-id")
    console.log(title_id)
    console.log($(`.add${title_id}`).find("div").data("todo-id"))

    $.ajax({
      type: 'DELETE',
      dataType: 'json',
      url: `/titles/${title_id}`,
      data: ({"id": title_id}), //idを渡す
    })
    .done(function(){
      console.log("成功")
      $(`[id="tab-${title_id}"]`).remove() //該当データをremove

      var tab = $(".todo_content__tab_wrap__tab_area").children("a").length //タブのaタグの数を取得
      console.log(tab)
      if(tab == 0){
        $(".add_tab").css("left","70"+ "px")
      }
      if(tab >= 1 && tab <= 4){
        var new_position = 70 + (tab * 160)
        $(".add_tab").css("display","inline-block")
        $(".add_tab").css("left",new_position+ "px")
        $(".tab_balloon").css("display","none")
        
      }
      if(tab >= 5){
        $(".add_tab").css("display", "none")
        $(".tab_balloon").css("display","none")
      }

    })
    .fail(function(){
      console.log("失敗")
    })
  })
})
