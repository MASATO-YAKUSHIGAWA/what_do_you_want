class User < ApplicationRecord
  has_many :todos, dependent: :destroy
  has_many :likes, dependent: :destroy
  has_many :liked_posts, through: :likes, source: :postend
  has_many :titles

  has_one_attached :avatar, dependent: :destroy

  has_secure_password validations: true
  validates :email, presence: true, uniqueness: true
 
  def self.new_remember_token
    SecureRandom.urlsafe_base64
  end

  def self.encrypt(token)
    Digest::SHA256.hexdigest(token.to_s)
  end

end
