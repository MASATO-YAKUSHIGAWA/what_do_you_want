$(function() {
 
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
            </div>`
return html;
}

  //テキストボックスに変更を加えたら発動
  $('.todo_form').change('input[type="text"]', function() {
    $.ajax({
      url: "/todos", 
      type: 'POST',
      data: {"todo[content]":$('#todo_content').val()}, //入力された値の取得 {'name':&('#id').val()}
      dataType: 'json',
    })
    .done(function(data) {
      console.log("成功");
      $(".todo_form").val("")
      var html = buildHTML(data)
      $(".todo_content__tab_wrap__todo_area__todo_box__display").append(html)
     })
    .fail(function(data) {
      console.log("失敗");
    });  
  })

  $(document).on("click", ".todo_content__tab_wrap__todo_area__todo_box__display__one_todo_wrap__delete_btn",function(){
    var todo_id = $(this).data("todo-id")
    console.log(todo_id)
    let href = $(this).attr('href')
    $.ajax({
      type: 'DELETE',
      dataType: 'json',
      url: `/todos/${todo_id}`,
      data: ({"id": todo_id}),
    })
    .done(function(){
      console.log("成功")
      $(`[data-todo-id="${todo_id}"]`).remove()
    })
    .fail(function(){
      console.log("失敗")
    })
  })
})