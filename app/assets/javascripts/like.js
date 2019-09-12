$(function() {

  // いいねを押す
  $(document).on("click", ".fa-heart-o",function(){
    var like = $(this) //ハートのクラス取得
    var todo_id = $(this).data("todo-id")
    $.ajax({
      type: 'POST',
      dataType: 'json',
      url: `/likes`,
      data: ({"id": todo_id}), //idを渡す
    })
    .done(function(data){
      $(like).removeClass('fa-heart-o').addClass('fa-heart');
      $(data)
      var next = $(like).next().html(`${data}`)
    })
    .fail(function(){
    })
  })

// いいねを削除
  $(document).on("click", ".fa-heart",function(){
    var like = $(this) //ハートのクラス取得
    var todo_id = $(this).data("todo-id")
    $.ajax({
      type: 'DELETE',
      dataType: 'json',
      url: `/likes/${todo_id}`,
      data: ({"id": todo_id}), //idを渡す
    })
    .done(function(data){
      $(like).removeClass('fa-heart').addClass('fa-heart-o');
      var next = $(like).next().html(`${data}`)
    })
    .fail(function(){
    })
  })
})
