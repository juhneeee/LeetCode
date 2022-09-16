# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer[]}
def two_sum(nums, target)
    hash = {}
    nums.each_with_index do |num, i|
        if hash[num]
            return [hash[num], i]
        else
            hash[target-num] = i
        end
    end
end