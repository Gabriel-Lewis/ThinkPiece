Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    get 'stories/search', to: 'stories#search'
    get 'users/search', to: 'users#search'
    resources :users, only: [:create, :show, :update]
    resource :session, only: [:create, :destroy]
    resources :stories, except: [:new, :edit]
    resources :follows, only: [:create, :destroy]
  end

  root 'static_pages#root'
end
