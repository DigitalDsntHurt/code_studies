
def no_block
  yield
end

# p no_block
#=> `no_block': no block given (yield) (LocalJumpError)
no_block{ puts 'onomatopea'}

def method_with_yield(string)
  yield string
end
p method_with_yield('ruby') { |s| s.upcase }