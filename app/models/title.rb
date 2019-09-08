class Title < ApplicationRecord
  has_many :todos, dependent: :destroy
  belongs_to :user
end
