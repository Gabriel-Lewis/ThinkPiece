class Api::FollowsController < ApplicationController
  def create
      @user = User.find(params[:followed_id].to_i)
      current_user.follow(@user)
  end

  def destroy
    @user = User.find(follow_params[:followed_id].to_i)
    current_user.unfollow(@user)
  end

end
