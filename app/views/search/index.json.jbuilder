json.array! @users, :id, :name

@stories.each do |story|
  json.set! story.id do
    json.partial! 'api/stories/story', story: story
  end
end
