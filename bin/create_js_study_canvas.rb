system(
  "cp /Users/nick.smith/grapespace/skillsdev/code_studies/HTML_TEMPLATE.html index.html"
)
system("touch index.js")
system("echo 'const d3 = require(\"d3\");' > index.js")
system("yarn init -y")
system("yarn add d3")
system("yarn add esmify")
system("yarn add browser-resolve")
system("browserify index.js -p esmify > bundle.js")
system("open -a 'Arc' index.html")
