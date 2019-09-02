class TodosController < ApplicationController
  # before_action :move_to_index

  def show
    @user = User.find(current_user.id)
  end

  def index
  end

  private
  def move_to_index
    redirect_to controller: :users, action: :index unless user_signed_in?
  end

end

