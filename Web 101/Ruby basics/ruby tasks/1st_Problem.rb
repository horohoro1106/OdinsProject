def sum num
    result = 0
    num-=1
    while (num > 0)
      if(num % 3 == 0)
          result+=num
          elsif(num % 5==0)
          result+=num
      end
        num-=1
    end
    
    result
end
puts sum(1000)
