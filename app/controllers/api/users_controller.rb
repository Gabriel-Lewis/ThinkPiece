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
    # @user = User.find(params[:id].to_i)
    # debugger
    @user = User.find_by_username(params[:id])
    render 'api/users/show'
  end

  def update
    @user = current_user

    if @user.update_attributes(user_params)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def search
    @users = User.where("name ILIKE ?", "%#{params[:search]}%")
    render 'api/users/index'
  end

  private
  def user_params
    params.require(:user).permit(:id, :name, :profile_image_url, :username, :password, :email, :bio)
  end
end
