$(document).on("turbolinks:load", function(){
 
function buildHTML (todo){
var content = todo.content
var html =  `<div class="todo_content__tab_wrap__todo_area__todo_box__display__one_todo_wrap"
              data-todo-id="${todo.id}">
              <div class="todo_content__tab_wrap__todo_area__todo_box__display__one_todo_wrap__content">
              ${content}
              </div>
              <div class="todo_content__tab_wrap__todo_area__todo_box__display__one_todo_wrap__delete_btn"
              data-todo-id="${todo.id}">
              削除
              </div>
              <div class="todo_content__tab_wrap__todo_area__todo_box__display__one_todo_wrap__like">
                <i class="fa fa-heart-o" data-todo-id="${todo.id}">
                </i>
                <div class="likes_count">
                ${todo.likes_count}
                </div>
              </div>
              </div>`
return html;
}

function build_edit_HTML (todo){
  var content = todo.content
  var edit_html =`${content}`
  return edit_html;
}

  //テキストボックスに変更を加えたら発動
  // $(document).on("click", ".todo_content__tab_wrap__todo_area__todo_box__create_todo",function(){
  //   var title_id = $(this).data("title-id")
  //   var form = $(this).children().children(`#todo_content${title_id}`)
  //   console.log(form)
    $(document).on("change",'input[type="text"]', function() {
      var parent = $(this).parent().parent()
      var title_id = $(parent).data("title-id")
      $.ajax({
        url: "/todos", 
        type: 'POST',
        data: {"todo[content]":$(`#todo_content${title_id}`).val(), "todo[title_id]":title_id}, //入力された値の取得 {'name':&('#id').val()}
        dataType: 'json',
      })
      .done(function(data) { //jbuilderからデータを受信
        console.log(data)
        console.log("成功");
        $(`.todo_form`).val("") //text_areaを空白へ
        var html = buildHTML(data)
        $(`.add${title_id}`).append(html)
      })
      .fail(function(data) {
        console.log("失敗");
      });  
    })
  // })

  // 削除機能
  $(document).on("click", ".todo_content__tab_wrap__todo_area__todo_box__display__one_todo_wrap__delete_btn",function(){
    var todo_id = $(this).data("todo-id")
    console.log(todo_id)
    let href = $(this).attr('href')
    $.ajax({
      type: 'DELETE',
      dataType: 'json',
      url: `/todos/${todo_id}`,
      data: ({"id": todo_id}), //idを渡す
    })
    .done(function(){
      console.log("成功")
      $(`[data-todo-id="${todo_id}"]`).remove() //該当カスタムデータをremove
    })
    .fail(function(){
      console.log("失敗")
    })
  })

  // 編集機能
  $(".todo_content__tab_wrap__todo_area__todo_box__display__one_todo_wrap__content").on("dblclick", function(){ //pタグをダブルクリックすれば発火
    console.log(this)
    var content = $(this)
    var input = $("<input>").attr("type","text").val($(this).text());
    $(this).html(input);  //pタグをinput要素へ変換
    console.log(this)

    $(this).on("change",'input[type="text"]', function() { //inputに変更が加われば発火
      console.log($(this).val())
      var parent = $(this).parent().parent()
      var todo_id = $(parent).data("todo-id")
      var title_id = $(parent).data("title-id")
      console.log(todo_id)
      $.ajax({
        url: `/todos/${todo_id}`, 
        type: 'patch',
        data: {"todo[content]":$(this).val()}, //入力された値の取得 {'name':&('#id').val()}
        dataType: 'json',
      })
      .done(function(data){
        console.log("成功")
        console.log(data)
        var edit_html = build_edit_HTML(data)
        $(content).html(edit_html)

      })
      .fail(function(){
        console.log("失敗")
      })
    })
  })
})