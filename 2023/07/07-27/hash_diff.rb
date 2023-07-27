# from https://github.com/Gusto/interview_questions/tree/main/technical_skills_assessments/hash_diff

=begin

At Gusto we like writing tests to verify that our code works as expected. 
Suppose we expect the result of some calculation to be a specific key-valued structure, such as:

expected = {
  id: 9876,
  first_name: 'Tony',
  last_name: 'Soprano',
  account: {
    bank_name: 'Bank Of America',
    account_number: 12345
  }
}

But the actual result of the calculation was:

actual = {
  id: 20,
  first_name: 'Tony',
  account: {
    account_number: 12345,
    balance: 500
  }
}

We would like to be able to compare the two structures in our tests, 
and know what were the specific differences between them. 
Write a helper, which is given two inputs (actual and expected), 
and outputs a list of all the diffs between them, using the following github-esque format:

[
  [ '-', 'id',                  9876              ],
  [ '-', 'last_name',           'Soprano'         ],
  [ '-', 'account.bank_name',   'Bank Of America' ],
  [ '+', 'id',                  20                ],
  [ '+', 'account.balance',     500               ]
]

=end

# getDiffSummary function

  # accepts actual : obj
  # accepts expected : obj
  # let's throw an error if we get anything besides an object for either input

  # returns an array of arrays
  # each inner array has 3 elements
    # first element always a string - either '+' or '-'
    # second element always a string
    # thrid element could be anything
  
  # HOW WE COMPARE the two inputs and how these comparisons map to our output diff array
    # a key in EXPECTED can not exist on ACTUAL
      # [ '-', 'name_of_key', 'value of key' ]
    # a key in EXPECTED can exist on ACTUAL with a different value
      # [ '-', 'name_of_key', 'value of key in EXPECTED' ]
      # [ '+', 'name_of_key', 'value of key in ACTUAL' ]
    # a key in EXPECTED can exist on ACTUAL with the same value
      # add nothing to diff array 
    # a key can exist on ACTUAL without existing on EXPECTED
      # [ '+', 'name_of_key', 'valye of key' ]

  # outstand question
    # how will we order each entry in the diff array
    # given that we want the format to be
      # all the '-'
      # then
      # all the '+'
    # potential solution: add entries to separate arrays as we go through
    # and then append the actual array entries to the expected array entries before return

  # ALGORITHM
    # iterate over each key in expected. for each key
      # does the key exist in actual?
        # if no
          # add an entry [ '-', 'name_of_key', 'value of key' ]
        # if yes
          # if values do not match
            # add an entry [ '-', 'name_of_key', 'value of key in expected' ]
            # add an entry [ '+', 'name_of_key', 'value of key in actual' ]
        
    # => PROBLEM
      # we've handled all the keys in expected
      # but we have not handled keys in actual that do not exist in expected
      # approaches
        # 1 - we could repeat the process, iterating over the keys in actual, 
        # only looking for those that do not exist on expected
        # this takes the time complexity from O(n) to O(2n)
        # # not sure this time complexity analysis is correct
        # 
        # 2 - we could delete all handled k/v pairs from both expected and actual
        # then when we finish iterating over the keys in expected, we'd be left
        # with an " actual " object that contains keys that do not exist on " expected " exclusively
        # the time complexity of this approach is better
        # but is there danger in deleting data?
        # it's quite a non-funcitonal, procedural approach
    
    # = PROBLEM
      # need to be able to handle nested objects recursively 