# dictionary of english phrases to german
english_to_german = {
  "hello" => "hallo",
  "i miss you, uncle" => "ich vermisse dich, onkel",
  "maybe i'll figure it all out someday" => "vielleicht werde ich es eines tages herausfinden",
}

# ruby method accepts a string and returns that string where all dashes and spaces are replaced with underscores
def clean_string(str)
  str.gsub(/[-\s]/, "_")
end


# method accepts a date and returns the date of the monday of that week
require 'date'
def get_monday(date)
  date - date.wday + 1
end

# p get_monday(Date.today)

# what does ruby's date.wday method do?
# ruby's date.wday method returns the day of the week as an integer, where sunday is 0 and saturday is 6

# re-write the get_monday method in javascript
# const getMonday = (date) => { 
#   date.setDate(date.getDate() - date.getDay() + 1)
# }

# method accepts a date and a desired age in years 
# method returns an array of all the weeks between the date and the date when the person will reach the desired age
def generate_life_weeks(date, age)
  weeks = []
  age_in_days = age * 365
  age_in_days.times do |i|
    weeks << get_monday(date + i)
  end
  weeks
end

birth_date = Date.new(1990, 4, 8)
# p birth_date
# p generate_life_weeks(birth_date, 90)

## second try

# method accepts a date and a desired age in years
# method calculates a death date by adding desired age to the date
# method returns an array of arrays, where each subarray is a week of the person's life
def generate_life_weeks(date, age)
  death_date = date + age * 365
  weeks = []
  while date < death_date
    weeks << get_monday(date)
    date += 7
  end
  weeks
end

payload = generate_life_weeks(birth_date, 90)
p payload.length
puts
p payload.first
puts
p payload.sample
puts
p payload.last
