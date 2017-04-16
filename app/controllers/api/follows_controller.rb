class Api::FollowsController < ApplicationController

  def create
      @user = User.find(params[:id])
      current_user.follow(@user)
      render 'api/users/follow'
  end

  def destroy
    @user = User.find(params[:id])
    current_user.unfollow(@user)
    render "api/users/follow"
  end

end
