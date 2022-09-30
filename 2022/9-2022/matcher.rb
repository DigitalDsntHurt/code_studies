givers = [
  'guy',
  'carola',
  'justin',
  'britta',
  'hannah',
  'steve',
  'sue',
  'anna',
  'nick'
]

receivers = [
  'guy',
  'carola',
  'justin',
  'britta',
  'hannah',
  'steve',
  'sue',
  'anna',
  'nick'
]

while givers.length > 0
  # puts
  # p givers
  # p receivers

  giver_i = rand(0...givers.length)
  giver = givers[giver_i]
  receiver_i = rand(0...receivers.length)
  receiver = receivers[receiver_i]
  until giver != receiver
    receiver_i = rand(0...receivers.length)
    receiver = receivers[receiver_i]
  end

  puts "#{giver} gives to #{receiver}"
  givers.delete_at(giver_i)
  receivers.delete_at(receiver_i)
end
