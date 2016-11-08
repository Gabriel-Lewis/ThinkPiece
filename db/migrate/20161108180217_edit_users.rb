class EditUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :name, :string

    change_column_default :users, :profile_image_url, 'https://medium.com/img/default-avatar.png'
  end
end
