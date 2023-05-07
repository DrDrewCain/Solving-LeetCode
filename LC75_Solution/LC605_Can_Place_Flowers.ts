
/**
* This function checks if it is possible to plant n flowers in the flowerbed without violating the no-adjacent-flowers rule.
* @author Mark
* @param flowerbed - The array of flowers.
* @param n - The number of flowers to plant.
* @returns - True if it is possible to plant n flowers, false otherwise.
*/
function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    // Create a variable to track the number of empty plots.
    let emptyPlots = 0;
  
    // Iterate over the flowerbed.
    for (let i = 0; i < flowerbed.length; i++) {
      // If the current plot is empty and it is not adjacent to a planted flower, plant a flower in the current plot and increment the number of empty plots.
      if (flowerbed[i] === 0 &&
          (i === 0 || flowerbed[i - 1] === 0) &&
          (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)) {
        flowerbed[i] = 1;
        emptyPlots++;
      }
  
      // If the number of empty plots is greater than or equal to n, return true.
      if (emptyPlots >= n) {
        return true;
      }
    }
  
    // If the number of empty plots is less than n, return false.
    return false;
  }