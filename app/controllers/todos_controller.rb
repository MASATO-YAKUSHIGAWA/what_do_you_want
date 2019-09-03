class TodosController < ApplicationController
  # before_action :move_to_index

  def show #top page
    @user = User.find(current_user.id)
    @todo = Todo.new
    @todos = Todo.all
  end

  def index #一覧
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

  private
  def move_to_index
    redirect_to controller: :users, action: :index unless user_signed_in?
  end

  def todo_params
    params.require(:todo).permit(:content).merge(user_id: current_user.id )
  end

end

