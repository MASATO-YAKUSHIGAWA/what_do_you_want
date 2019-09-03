class Like < ApplicationRecord
  belongs_to :user
  belongs_to :todo, counter_cache: :likes_count #いいね数のカウント
  validates_uniqueness_of :todo_id, scope: :user_id #一人一つのいいね
end
