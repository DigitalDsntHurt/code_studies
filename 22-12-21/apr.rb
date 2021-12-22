# Questions
# 1 - how much will i pay in total at the end of the loan agreement for each loan?
# 2 - how much will i pay per month in total for each loan?

carvana_loan = {
  principal: 31002.39,
  months: 72,
  apr: 0.0487,
  fixed_monthly_payment: 498
}

first_republic_loan = {
  principal: 60000,
  months: 84,
  apr: 0.0225
}

#### #### #### ####
#### APR formula from https://www.investopedia.com/terms/a/apr.asp

fees = 0
principal = carvana_loan[:principal]
days_in_loan_term = carvana_loan[:months] * 12 * 365
interest = (((carvana_loan[:apr] / 365) * days_in_loan_term) * principal) / 100
# puts interest
# p (principal + interest) / 72

$total_monthly_payment = (principal + interest) / 72
$principal_balance = principal
$monthly_interest = carvana_loan[:apr] * principal

def calculate_monthly_principal
  $total_monthly_payment - $monthly_interest
end


72.times do |month_num|
  p month_num + 1
  puts "monthly principal payment : #{calculate_monthly_principal}"
  principal - calculate_monthly_principal
  # puts "principal balance: #{principal_balance}"
  puts "===="
end

#### #### #### ####
#### WORK
# calculate total interest paid ovver life of loan
## interest applied @ start of month or @ end of month
# cp = carvana_loan[:principal]
# 72.times do |n|
#   puts "payment month number #{n}"
#   puts cp
#   # principal payment this month

#   # interest this month

#   cp -
# end

# determine fees

#


#### SDS approach


#### #### #### ####
#### First Republic Loan
# total paid :
# montly payment :

#### Carvana Loan
# total paid :
# montly payment :

