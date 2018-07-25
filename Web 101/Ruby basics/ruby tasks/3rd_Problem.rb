def isPrime? num
   if num == 2
    return true
   end
   i = num - 1
   while i > num
     if (num % i == 0)
        return false
     end
   i-=1
   end
   true
end
nums = []
def getFactors (num,arr)
   i= 2
   while i < num
     if(isPrime?(i))
         if(num.to_f / i == num / i)
            arr.push(i)
            return getFactors(num / i, arr)
         end
     end
     i+=1
   end
   arr.push(num)
end
puts getFactors(600851475143,nums)
puts nums
largestPrime = nums.last
puts largestPrime