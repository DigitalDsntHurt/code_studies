require "date"

current_year = Date.today.year
current_date = Date.today.strftime("%m-%d")

Dir.mkdir("#{current_year}/#{current_date}")
