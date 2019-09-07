Rails.application.routes.draw do
  root "todos#show"
  resources :todos
  resources :users
  resources :likes
  resources :titles

  get     'login',   to: 'log_ins#new'
  post    'login',   to: 'log_ins#create'
  delete  'logout',  to: 'log_ins#destroy'

end

