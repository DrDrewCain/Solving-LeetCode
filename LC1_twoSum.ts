// Take some function (TwoSums) that takes in some number array and a target (non-array) set the property as a number array. 

// Initialize i as 0 then iterate for i < the array's length, and iterative through i as i increases. 
// Initialize second array (j) as i + 1 (we want it greater than i), then iterate that for i < array length of (i) then increment j. 
// Check value of num array at index i and add to num array at j check if the values equal to target, if it is then return i and j otherwise return an empty array. 

function twoSum(num: number[], target: number): number[] {
    for(let i = 0; i < num.length; i++) {
        for (let j = i + 1; j < num.length; j++) {
            if(num[i] + num[j] === target) {
                return [i,j]
            }
        }
    }
    return []
}