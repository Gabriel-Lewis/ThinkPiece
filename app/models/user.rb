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

class User < ApplicationRecord
  validates :username, :email, :password_digest, presence: true
  validates :username, :email, :session_token, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil: true}
  attr_reader :password

  has_many :stories

  has_many :relationships,
    foreign_key: :follower_id,
    class_name: :Follow,
    dependent:  :destroy

  has_many :passive_relationships,
    class_name:  :Follow,
    foreign_key: :followed_id,
    dependent:   :destroy

  has_many :following,
    through: :relationships,
    source: :followed

  has_many :followers,
    through: :passive_relationships,
    source: :follower

  after_initialize :ensure_session_token

  def follow(other_user)
    relationships.create(followed_id: other_user.id)
  end

  # Unfollows a user.
  def unfollow(other_user)
    following.find_by(followed_id: other_user.id).destroy
  end

  # Returns true if the current user is following the other user.
  def following?(other_user)
    following.include?(other_user)
  end

  def self.find_by_credentials(username, password)
    user = User.find_by_username(username)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

  def reset_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save
    self.session_token
  end

end
