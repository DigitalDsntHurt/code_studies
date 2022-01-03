=begin
  I : string, number
  O : string
  E :
  - alpha numeric characters in input string
  - punctuation marks in input string
  - empty input string
  - zero number input
  - negative number input
  C :

  pseudocode

  ENCRYPTION
  ~Input string
  ~Input n
  create a new empty string
  split the input string into two chunks on the nth char
  iterate over each char in the second chunk
    add char to new empty string
  iterate over each char in the first chunk
    add char to new empty string

  DECRYPTION

=end

# def rotation_encryption(string, n)
#   encrypted_string = ""

#   chunk1 = string[0..n]
#   chunk2 = string[n+1..-1]

#   chunk2.each_char{|char| encrypted_string += char }
#   chunk1.each_char{|char| encrypted_string += char }

#   encrypted_string
# end

def rotation_encryption(string, n)
  if n == 0
    return string
  end

  if n < 0
    encrypted_string = []
    new_front_idx = string.length + n
    # p new_front_idx
    string.each_char.with_index { |char, idx|
      if idx + new_front_idx < string.length
        encrypted_string[idx + new_front_idx] = char
        # p idx + new_front_idx
        # p encrypted_string
      else
        encrypted_string[idx + 1 - new_front_idx] = char
        # p idx + 1 - new_front_idx
        # p encrypted_string
      end
    }
    return encrypted_string.join(',')
  end

  encrypted_string = []
  new_front_idx = string.length - n
  string.each_char.with_index { |char, idx|
    if idx + n <= string.length - 1
      encrypted_string[idx + n] = char
    else
      encrypted_string[idx - new_front_idx] = char
    end
  }

  return encrypted_string.join(',')
end

p rotation_encryption("romulus", 3) #=> lusromu
p rotation_encryption("dante", -2) #=> nteda
