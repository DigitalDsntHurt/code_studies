carvana_loan = {
  principal: 31002.39,
  months: 72,
  apr: 0.0487,
  fixed_monthly_payment: 498
}

#### APR formula from https://www.investopedia.com/terms/a/apr.asp
fees = 0
principal = carvana_loan[:principal]
days_in_loan_term = carvana_loan[:months] / 12 * 365

# FORMULA
# apr = ((((fees + interest) / principal) / days_in_loan_term) * 365)

# carvana_loan[:apr] = ((((fees + interest) / principal) / days_in_loan_term) * 365)
# (carvana_loan[:apr] / 365) = (((fees + interest) / principal) / days_in_loan_term)
# ((carvana_loan[:apr] / 365) * days_in_loan_term) = ((fees + interest) / principal)
# (((carvana_loan[:apr] / 365) * days_in_loan_term) * principal) = fees + interest
# (((carvana_loan[:apr] / 365) * days_in_loan_term) * principal) - fees = interest
interest = (((carvana_loan[:apr] / 365) * days_in_loan_term) * principal)
# p interest

def calculate_days_left_in_loan(months_left)
  return months_left / 12.0 * 365
end

def calculate_interest(apr, days_left_in_loan, principal_left_in_loan)
  return (((apr / 365) * days_left_in_loan) * principal_left_in_loan)
end

p calculate_interest(
  carvana_loan[:apr],
  calculate_days_left_in_loan(71),
  carvana_loan[:principal]
)

# p calculate_days_left_in_loan(72)
# p calculate_days_left_in_loan(71)
# p calculate_days_left_in_loan(70)

# $outstanding_principal_balance = carvana_loan[:principal]
# $months_left_in_loan = carvana_loan[:months]
# # $next_month_principal_payment = carvana_loan[:principal] / carvana_loan[:months]
# $next_month_interest_payment = calculate_interest(
#   carvana_loan[:apr],
#   calculate_days_left_in_loan($months_left_in_loan),
#   $outstanding_principal_balance
# )
# $next_month_principal_payment = carvana_loan[:fixed_monthly_payment] - $next_month_interest_payment

# puts "month number, principal, interest, total calculated payment this month"
# 72.times {
#   # print this month's num
#   # print this month's principal payment
#   # print this month's interest payment
#   puts "#{$months_left_in_loan}, #{$next_month_principal_payment}, #{$next_month_interest_payment}, #{$next_month_principal_payment + $next_month_interest_payment}"

#   # update principal balance
#   $outstanding_principal_balance -= $next_month_principal_payment
#   # update months left in loan
#   $months_left_in_loan -= 1
#   # calculate next month's interest payment
#   $next_month_interest_payment = calculate_interest(
#     carvana_loan[:apr],
#     calculate_days_left_in_loan($months_left_in_loan),
#     $outstanding_principal_balance
#   )
#   # calculate next month's principal payment
#   $next_month_principal_payment = carvana_loan[:fixed_monthly_payment] - $next_month_interest_payment
# }