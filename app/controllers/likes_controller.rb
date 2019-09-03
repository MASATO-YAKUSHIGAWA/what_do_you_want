class LikesController < ApplicationController
  before_action :set_todo

  def create
    @like = Like.new(user_id: current_user.id, todo_id: params[:id])
    if @like.save
      @likes = Todo.find(params[:id]) #いいね数を取得
      respond_to do |format|
      format.json
      render json: @likes.likes_count
      end
    end
  end

  def destroy
    @like = Like.find_by(user_id: current_user.id, todo_id: params[:id])
    if @like.destroy
      @likes = Todo.find(params[:id]) #いいね数を取得
      respond_to do |format|
      format.json
      render json: @likes.likes_count
      end
    end
  end

  private
  def set_todo
    @todo = Todo.find(params[:id])
  end
end


