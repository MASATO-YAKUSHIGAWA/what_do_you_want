class UsersController < ApplicationController
  before_action :move_to_top, only:[:index]

  def index
    @user = User.new
  end

  ## 新規登録
  def create
    @user = User.new(user_params)
    if @user.save
      redirect_to :root
    else
      render :new
    end
  end

  ## 退会
  def destroy
    @user.destroy
    redirect_to users_url
  end

  def update
    @user = User.find(params[:id])
    if @user.update(user_params)
      redirect_to :root
    end
  end

  private
    def set_user
      @user = User.find(params[:id])
    end

    def user_params
      params.require(:user).permit(:email, :name, :want, :avatar, :password,:password_confirmation, :remember_token,:password_digest, :self_introduction).merge(remember_token: User.encrypt(cookies[:user_remember_token]))
    end

    def move_to_top
      redirect_to controller: :todos, action: :show if user_signed_in?
    end

end

