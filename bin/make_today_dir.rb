require "date"

current_year = Date.today.year
current_date = Date.today.strftime("%m-%d")
code_studies_dir_name = Dir.pwd
today_dir_name = "#{code_studies_dir_name}/#{current_year}/#{current_date}"

Dir.mkdir(today_dir_name) unless Dir.exist?(today_dir_name)
