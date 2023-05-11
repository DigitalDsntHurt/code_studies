# start at code studies root/2023
# traverse all directories
# look for index.html files
# whenever you find one open it in a new browser tab

root = '/Users/nick.smith/grapespace/skillsdev/code_studies/2023/'
target = 'index.html'
files = Dir.glob(File.join(root, '***', target))

files.each do |f| 
    system("open -a \"Arc\" #{f}")
end
