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
