def satisfied (numbrs)
  numbrs.select { |x| (x*2 - (5 - x)).even? }
end

provided_array = [1,4,5,7,12, 19, 45, 101]

p satisfied(provided_array)