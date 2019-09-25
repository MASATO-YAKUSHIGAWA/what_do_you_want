class LogInsController < ApplicationController
before_action :set_user, only:[:create]

  def new
  end

  def create
    if @user
      if @user.authenticate(params[:session][:password])
        sign_in(@user)
        redirect_to :root
      end
    else
      flash[:notice] = "Error: passwords or email do not match."
      redirect_to users_path
    end
  end

  def destroy
     if sign_out(@user)
      redirect_to users_path
    else
      flash.now[:danger] = t('.flash.invalid_mail')
    end
  end

  private
    def set_user
      @user = User.find_by(email: params[:session][:email])
    rescue
      flash.now[:danger] = t('.flash.invalid_mail')
      redirect_to users_path
    end

    # 許可するパラメータ
    def session_params
      params.require(:session).permit(:password,:remember_token)
    end

end
