class Todo < ApplicationRecord

  belongs_to :user
  belongs_to :title,optional: true
  has_many :likes
  has_many :liked_users, through: :likes, source: :userend

end
