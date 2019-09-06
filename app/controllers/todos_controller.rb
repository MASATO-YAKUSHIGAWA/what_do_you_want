class TodosController < ApplicationController
  # before_action :move_to_index

  def show #top page
    @user = User.find(current_user.id)
    @todo = Todo.new #todo新規作成
    @todos = Todo.where(user_id: current_user.id)

    @title = Title.new #タイトル新規作成
    @user_title = Title.where(user_id: current_user.id)
  end

  def index #一覧
    @user = User.find(current_user.id)
    @users = User.all
    @likes = Todo.all
  end

  def create
    @todo = Todo.new(todo_params)
    if @todo.save
      respond_to do |format|
      format.json
      end
    end
  end

  def destroy
    @todo = Todo.find(params[:id])
    if @todo.destroy
      respond_to do |format|
      format.json
      end
    end
  end

  def update
    @todo = Todo.find(params[:id])
    if @todo.update(todo_params)
      respond_to do |format|
      format.json
      end
    end
  end

  private
  def move_to_index
    redirect_to controller: :users, action: :index unless user_signed_in?
  end

  def todo_params
    params.require(:todo).permit(:content, :title_id).merge(user_id: current_user.id)
  end

end

