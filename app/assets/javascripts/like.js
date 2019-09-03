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
      console.log("成功")
      $(like).removeClass('fa-heart-o').addClass('fa-heart');
      console.log(data)
      $(data)
      var next = $(like).next().html(`${data}`)
      console.log(next)

    })
    .fail(function(){
      console.log("失敗")
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
      console.log("成功")
      $(like).removeClass('fa-heart').addClass('fa-heart-o');
      var next = $(like).next().html(`${data}`)
    })
    .fail(function(){
      console.log("失敗")
    })
  })
})
