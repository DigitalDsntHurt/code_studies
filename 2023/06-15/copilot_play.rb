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

p get_monday(Date.today)

# what does ruby's date.wday method do?
# ruby's date.wday method returns the day of the week as an integer, where sunday is 0 and saturday is 6

# re-write the get_monday method in javascript
# const getMonday = (date) => { 
#   date.setDate(date.getDate() - date.getDay() + 1)
# }