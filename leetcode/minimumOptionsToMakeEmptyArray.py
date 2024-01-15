from ast import List
from collections import Counter
import math


class Solution:
    def minOperations(self, nums: List[int]) -> int:
       list_of_numbers = Counter(nums)
       res = 0
       for n, c in list_of_numbers.items():
           if c == 1:
               return -1
           res += math.ceil(c / 3)
       return res
    

print(Solution().minOperations([1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3]))