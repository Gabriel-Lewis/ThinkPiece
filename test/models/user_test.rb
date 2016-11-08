# == Schema Information
#
# Table name: users
#
#  id                :integer          not null, primary key
#  username          :string           not null
#  password_digest   :string           not null
#  session_token     :string           not null
#  profile_image_url :string           default("https://medium.com/img/default-avatar.png")
#  email             :string           not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  name              :string
#  bio               :string
#

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
