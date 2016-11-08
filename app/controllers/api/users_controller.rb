class Api::UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.create(user_params)
    if @user.save
      login(@user)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id].to_i)
    render 'api/users/show'
  end

  private
  def user_params
    params.require(:user).permit(:id, :username, :password, :email)
  end
end
