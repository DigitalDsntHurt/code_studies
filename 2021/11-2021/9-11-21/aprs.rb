# Questions
# 1 - how much will i pay in total at the end of the day for each loan?
# 2 - how much will i pay per month in total for each loan?

# APR formula
# ((((fees_and_interest_paid_over_life_of_loan / loan_amount) / number_of_days_in_loan_term) * 365) * 100)

loan1 = {
  total: 31002.39,
  months: 72,
  apr: 0.0487
}

loan2 = {
  total: 60000,
  months: 84,
  apr: 0.0225
}

# calculate monthly payment

# crude1
# monthly_share = loan1[:total] / loan1[:months]
# # p monthly_share
# monthly_total = monthly_share + (monthly_share * loan1[:apr])
# p monthly_total

# crude 2
# monthly_share = loan1[:total] / loan1[:months]
# monthly_interest = monthly_share * loan1[:apr] # = monthly_share * 12 * loan1[:apr] / 12
# # p monthly_interest
# monthly_total = monthly_share + monthly_interest
# p monthly_total

# APR formula application 1
fees_and_interest_paid_over_life_of_loan = loan1[:total] * loan1[:apr]
p ((((fees_and_interest_paid_over_life_of_loan / loan1[:total]) / loan1[:months]*30) * 365) * 100)