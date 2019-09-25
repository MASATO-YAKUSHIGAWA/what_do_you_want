class LogInsController < ApplicationController
before_action :set_user, only:[:create]

  def new
  end

  def create
    if @user
      if @user.authenticate(params[:session][:password])
        log_in(@user)
        redirect_to :root
      end
    else
      flash[:notice] = "Error: passwords or email do not match."
      redirect_to users_path
    end
  end

  def destroy
    sign_out(current_user.id) 
    redirect_to users_path
  end

  private
    def set_user
      @user = User.find_by(email: params[:session][:email])
    rescue
      flash.now[:danger] = t('.flash.invalid_mail')
      redirect_to users_path
    end

end
