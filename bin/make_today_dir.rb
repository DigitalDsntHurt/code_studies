require "date"

code_studies_dir_name = Dir.pwd

current_year = Date.today.year
current_month = Date.today.strftime("%m")
current_date = Date.today.strftime("%m-%d")

this_month_directory_name = "#{code_studies_dir_name}/#{current_year}/#{current_month}"
Dir.mkdir(this_month_directory_name) if !Dir.exist?(this_month_directory_name)

today_directory_name = "#{this_month_directory_name}/#{current_date}"
Dir.mkdir(today_directory_name) unless Dir.exist?(today_directory_name)
