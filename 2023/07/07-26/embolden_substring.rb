# from https://github.com/Gusto/interview_questions/tree/main/technical_skills_assessments/embolden_substrings

# Given an input string and a list of substrings to bold, 
# return the same input string with HTML bold tags <b> and </b> around the substrings 
# which are found in the input string.

=begin
  design considerations
    - are the substrings case-sensitive? => i'd go with yes

=end

def embolden_substrings(input_string, substrings)
  # iterate over each substring. for each...
    # if the substring is present in input_string
      # identify substring_start_index 
      # identify substring_end_index 
      # insert <b> at substring_start_index - 1
      # insert </b> at substring_end_index + 1
end

=begin
  the above would work
  but
  how to handle multiple occurrences of a substring in input_string?

  additionally
  line 15 above relies on a ruby method that does something with some time complexity
  let's say we use ruby's .include?
    let's call the string on which .include? is called the base_string
    let's call the string passed in as .include's argument the substring
  .include? may work by using a two pointers pattern
    base_string_current_letter_index = 0
    base_string_pointer = 0
    sub_string_pointer = 0
    if base_string[base_string_current_letter_index] == substring[sub_string_pointer]
      base_string_pointer += 1
      sub_string_pointer += 1
      if base_string[pointer1] == substring[pointer2]
        recurse 
        add 1 to base_string_pointer
        add 1 to sub_string_pointer
      end
    end


    iterate over base_string letter by letter
    if the current letter matches the first letter in substring
      compare the next letter of base_string with the next letter of substring
      if these do not match start the process over again
      repeat until 
    end
  the time complexity here 
=end