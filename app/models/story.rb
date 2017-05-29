# == Schema Information
#
# Table name: stories
#
#  id             :integer          not null, primary key
#  title          :string           not null
#  body           :text
#  user_id        :integer
#  main_image_url :string
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class Story < ApplicationRecord
  validates :title, :user_id, presence: true
  belongs_to :user

  has_many :likes

  has_many :liked_users,
    through: :likes,
    source: :user

  def author
    user_id
  end
end
