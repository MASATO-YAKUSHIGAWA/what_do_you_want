Rails.application.routes.draw do
  devise_for :users
  root "todos#show"
  resources :todos
  resources :users
  resources :likes
  resources :titles
end

