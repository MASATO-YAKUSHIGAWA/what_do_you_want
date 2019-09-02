class CreateTodos < ActiveRecord::Migration[5.2]
  def change
    create_table :todos do |t|
      t.string :content
      t.integer :likes_count
      t.references :user, foreign_key: true
      t.references :title, foreign_key: true

      t.timestamps
    end
  end
end
