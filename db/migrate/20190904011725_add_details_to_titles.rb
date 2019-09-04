class AddDetailsToTitles < ActiveRecord::Migration[5.2]
  def change
    add_reference :titles, :user, foreign_key: true
  end
end
