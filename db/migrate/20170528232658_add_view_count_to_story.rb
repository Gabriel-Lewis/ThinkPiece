class AddViewCountToStory < ActiveRecord::Migration[5.0]
  def change
    add_column :stories, :view_count, :integer, :default => 0
  end
end
