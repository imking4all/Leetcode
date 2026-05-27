Brute Force:
class Solution {
    public int[] twoSum(int[] numbers, int target) {
        int i = 0;
        int j = numbers.length-1;
        while(i<j){
            int sum = numbers[i] + numbers[j];
            if(sum == target){
                return new int[]{i+1,j+1};
            }
            else if(sum > target){
                j--;
            }
            else{
                i++;
            }
        }
        return null;
    }
}

Optimal Solution:

class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<>();

        for(int i = 0; i < nums.length; i++){
            if(map.containsKey(target-nums[i])){
                return new int[]{map.get(target-nums[i]), i};
            }
            map.put(nums[i], i);
        }
        return null;
    }

}
