class TitlesController < ApplicationController

  def create
    @title = Title.new(title_params)
    if @title.save
      respond_to do |format|
      format.json
      end
    end
  end

  def destroy
    @title = Title.find(params[:id])
    if @title.destroy
      respond_to do |format|
      format.json
      end
    end
  end

  private
  def title_params
    params.require(:title).permit(:title).merge(user_id: current_user.id)
  end

end
