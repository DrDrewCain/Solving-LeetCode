/**
 * This function calculates the values in Pascal's triangle.
 * @author Mark
 * @param n The number of rows in the triangle.
 * @returns An array of arrays, where each inner array contains the values in a row of the triangle.
 */
function generate(n: number): number[][] {
    // Initialize an array to store the triangle.
    const triangle = new Array(n);
  
    // Loop over the rows of the triangle.
    for (let i = 0; i < n; i++) {
      // Initialize an array to store the values in the current row.
      triangle[i] = new Array(i + 1);
  
      // Loop over the columns of the current row.
      for (let j = 0; j <= i; j++) {
        // If the current column is 0 or the current row, then the value is 1.
        if (j === 0 || j === i) {
          triangle[i][j] = 1;
        } else {
          // Otherwise, the value is the sum of the values in the previous row.
          triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
        }
      }
    }
  
    // Return the triangle.
    return triangle;
  }