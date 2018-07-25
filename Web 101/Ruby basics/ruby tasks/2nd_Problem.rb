fibo = [1,2]
def makeFibo arr
   arr.push(arr.last + arr.last(2)[0])
end
def even? num
   result = false
   if (num % 2 == 0)
       result = true     
   end

   result
end
def sum (num,arr)
   result = 0
   even = [2]

   while(arr.last < num)
     makeFibo(arr)
     if(even?(arr.last) and arr.last < num)
        even.push(arr.last)
     end
   end
   even.each do |elem|
     result+=elem
   end

   result
end

puts sum(4000000,fibo)