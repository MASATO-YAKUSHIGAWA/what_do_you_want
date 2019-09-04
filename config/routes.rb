Rails.application.routes.draw do
  root "todos#show"
  devise_for :users
  resources :todos
  resources :users
  resources :likes
  resources :titles
end

