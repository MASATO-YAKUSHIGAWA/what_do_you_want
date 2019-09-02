class Like < ApplicationRecord
  belongs_to :user
  belongs_to :todo
  validates_uniqueness_of :todo_id, scope: :user_id #一人一つのいいね
end
