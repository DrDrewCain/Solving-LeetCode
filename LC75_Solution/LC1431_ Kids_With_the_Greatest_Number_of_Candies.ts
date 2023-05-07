/**
 * This function finds the kids who will have the most candies after receiving all the extra candies.
 * @author Mark
 * @param candies - An array of numbers representing the number of candies each kid has.
 * @param extraCandies - The number of extra candies to give to each kid.
 * @returns - An array of booleans, where each boolean represents whether the corresponding kid will have the most candies after receiving all the extra candies.
 */
function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  // Find the maximum number of candies among all the kids.
  const maxCandies = Math.max(...candies);

  // Create a new array, where each element is true if the corresponding kid will have the maximum number of candies after receiving all the extra candies, and false otherwise.
  return candies.map((candy) => candy + extraCandies >= maxCandies);
}