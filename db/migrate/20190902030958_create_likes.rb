class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.integer :user_id
      t.integer :todo_id

      t.timestamps

      t.index :user_id
      t.index :todo_id
      t.index [:user_id, :todo_id], unique: true
    end
  end
end
