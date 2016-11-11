class Api::LikesController < ApplicationController
  def create
    id = params[:story_id].to_i
    like = Like.new(
      user_id: current_user.id,
      story_id: id
    )
    @story = Story.find(id)
    if like.save
      render 'api/stories/show'
    else
      @errors = like.errors.full_messages
    end
  end

  def remove
    id = params[:story_id].to_i
    like = Like.find_by( user_id: current_user.id, story_id: id )
    @story = Story.find(id)
    like.destroy
    render 'api/stories/show'
  end

end
