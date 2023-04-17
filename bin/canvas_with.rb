system(
  "cp /Users/nick.smith/grapespace/skillsdev/code_studies/HTML_TEMPLATE.html index.html"
)

system("yarn init -y")
system("yarn add esmify")
system("yarn add browser-resolve")
ARGV.each { |module_name| system("yarn add #{module_name}") }

system("touch index.js")
ARGV.each do |module_name|
  system(
    "echo 'const #{module_name} = require(\"#{module_name}\");' >> index.js"
  )
end
system("echo '\n' >> index.js")
ARGV.each do |module_name|
  system("echo 'console.log(#{module_name})' >> index.js")
end

system("browserify index.js -p esmify > bundle.js")
system("open -a 'Arc' index.html")
