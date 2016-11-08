class CreateStories < ActiveRecord::Migration[5.0]
  def change
    create_table :stories do |t|
      t.string :title, null: false
      t.text :body
      t.integer :user_id
      t.string :main_image_url

      t.timestamps
    end
    add_index :stories, :user_id
  end
end
