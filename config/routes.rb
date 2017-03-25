Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    get 'stories/search', to: 'stories#search'
    get 'users/search', to: 'users#search'
    delete 'likes/remove', to: 'likes#remove'
    resources :users, only: [:create, :show, :update]
    resource :session, only: [:create, :destroy]
    resources :stories, except: [:new, :edit]
    resources :follows, only: [:create, :destroy]
    resources :likes, only: [:create]
  end

  root 'static_pages#root'
  get '*path', to: 'static_pages#root'

end
