class ApplicationController < ActionController::Base
  before_action :configure_permitted_parameters, if: :devise_controller?
  protect_from_forgery with: :null_session 
  # before_action :store_user_location!, if: :storable_location?
  # before_action :authenticate_user!


  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:name])
    devise_parameter_sanitizer.permit(:sign_up, keys: [:want])
    devise_parameter_sanitizer.permit(:sign_up, keys: [:avatar])
  end

  # private
  #   def storable_location?
  #     request.get? && is_navigational_format? && !devise_controller? && !request.xhr? 
  #   end

  #   def store_user_location!
  #     store_location_for(:user, request.fullpath)
  #   end

  #   def after_sign_in_path_for(resource_or_scope)
  #     stored_location_for(resource_or_scope) || super
  #   end
end
