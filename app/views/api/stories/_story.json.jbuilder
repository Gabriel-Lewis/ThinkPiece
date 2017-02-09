json.extract! story, :id, :title, :body, :user_id, :main_image_url, :user

json.liked_users story.liked_users.map { |user| user.id }
json.likeCount story.likes.count

if current_user
  json.liked story.liked_users.map { |user| user.id }.include?(current_user.id)
end
