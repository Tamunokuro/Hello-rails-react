Rails.application.routes.draw do
  get 'root/index'
  # Defines the root path route ("/")
  root 'root#index'

  namespace :api do
    get 'random_greeting', to: 'greetings#random_greeting'
  end
end
