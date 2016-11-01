class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :profile_image_url
      t.string :email, null: false

      t.timestamps
    end

    add_index :users, :username, :email, :session_token, unique: true
  end
end
