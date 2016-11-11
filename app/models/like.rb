class Like < ApplicationRecord
  validates :user_id, uniqueness: {scope: :story_id}

  belongs_to :user
  belongs_to :story

end
