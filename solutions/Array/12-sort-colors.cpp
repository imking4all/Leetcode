class Solution {
public:
    void sortColors(vector<int>& nums) {
        int zp = 0;
        int tp = nums.size()-1;
        int i = 0;

        while (i <= tp){

            if(nums[i] == 0){
                swap(nums[i], nums[zp]);
                zp++;
                i++;
            }
            else if(nums[i] == 2){
                swap(nums[i], nums[tp]);
                tp--;
            }
            else{
                i++;
            }

        }
        
    }
};