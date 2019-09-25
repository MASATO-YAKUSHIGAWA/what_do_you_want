class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session 
  before_action :current_user
  helper_method :user_signed_in?
  helper_method :current_user
  protect_from_forgery with: :exception

  # def current_user
  #   remember_token = User.encrypt(cookies[:user_remember_token])
  #   @current_user ||= User.find_by(remember_token: remember_token)
  # end

  # ## ログイン
  # def sign_in(user)
  #   remember_token = User.new_remember_token
  #   cookies.permanent[:user_remember_token] = remember_token
  #   pp user
  #   user.update!(remember_token: User.encrypt(remember_token))
  #   @current_user = user
  # end

  # ## ログアウト
  # def sign_out(user)
  #   remember_token = User.new_remember_token
  #   # cookies.delete(:user_remember_token)
  #   user = User.find(current_user.id)
  #   user.update!(remember_token: User.encrypt(remember_token))
  # end

  # def user_signed_in?
  #   @current_user.present?
  # end

  def log_in(user)
    session[:user_id] = user.id
  end
 
  # 現在ログインしているユーザーを返す (ユーザーがログイン中の場合のみ)
  def current_user
    @current_user ||= User.find_by(id: session[:user_id])
  end
 
 
  def user_signed_in?
    !current_user.nil?
    # ログイン中の状態＝セッションにユーザーが存在する＝current_userがnilでない状態。
  end
 
  def sign_out(user_id)
    session.delete(:user_id) #セッションからユーザーIDを削除
    @current_user = nil #現在のユーザーをnilに設定
  end


end
