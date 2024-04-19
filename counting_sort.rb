numbers = [2, 5, 3, 0, 2, 3, 0, 3]
count_array = [0, 2, 3, 4, 7, 7]

 puts  numbers.map {|i| i.to_i + (count_array.index(i)).to_i}


