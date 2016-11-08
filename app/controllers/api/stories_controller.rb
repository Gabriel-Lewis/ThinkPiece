class Api::StoriesController < ApplicationController
  def index
    @stories = Story.all
  end

  def show
    @story = Story.find(params[:id])
    @author = User.find(@story.user_id)
    render "api/stories/show"
  end

  def create
    @story = Story.new(story_params)
    @story.user_id = current_user.id
    if @story.save
      render :show
    else
      render json: @story.errors.full_messages, status: 422
    end
  end

  def update
    @story = current_user.stories.find(params[:id])
    if @story.update_attributes(story_params)
      render :show
    else
      render json: @story.errors.full_messages, status: 422
    end
  end

  def destroy
    @story = current_user.stories.find(params[:id])
    if @story.destroy
      render :show
    else
      render json: @story.errors.full_messages, status: 422
    end
  end

  private
  def story_params
    params.require(:story).permit(:title, :body, :user_id, :main_image_url)
  end
end
