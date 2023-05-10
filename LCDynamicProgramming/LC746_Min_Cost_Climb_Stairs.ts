/**
 * This function returns the minimum cost to climb a staircase.
 *
 * The cost of each step is given in the array `cost`.
 * @author Mark
 * @param cost The array of costs.
 * @returns The minimum cost to climb the staircase.
 */
function minCostClimbingStairs(cost: number[]): number {
    // Initialize the minimum costs to reach the top from each step.
    // `minCost0` is the minimum cost to reach the top from step 0.
    // `minCost1` is the minimum cost to reach the top from step 1.
    let minCost0 = cost[0];
    let minCost1 = cost[1];
  
    // Iterate over the remaining steps.
    for (let i = 2; i < cost.length; i++) {
      // Calculate the minimum cost to reach the current step from each of the previous steps.
      // `minCost` is the minimum cost to reach the current step.
      let minCost = Math.min(minCost0 + cost[i], minCost1 + cost[i]);
  
      // Update the minimum costs to reach the current step.
      minCost0 = minCost1;
      minCost1 = minCost;
    }
  
    // Return the minimum cost to reach the top.
    return Math.min(minCost0, minCost1);
  }
  

  function playGame() {
    const playerName = prompt("What is your name?");
  
    if (!playerName) {
      alert("Please enter a valid name.");
      return;
    }
  
    const promptResult = prompt("Is God stronger than Satan and his minions? (yes or no)");
    const isGodStronger = promptResult !== null && promptResult.toLowerCase() === "yes";
    
  
    const playerGuessString = prompt("Guess a number between 1 and 100.");
    if (!playerGuessString) {
        alert("Please enter a valid number between 1 and 100.");
        return;
      }
    const playerGuess = parseInt(playerGuessString);

    if (isNaN(playerGuess) || playerGuess < 1 || playerGuess > 100) {
      alert("Please enter a valid number between 1 and 100.");
      return;
    }
  
    const randomNumber = Math.floor(Math.random() * 100) + 1;
  
    const isCorrectGuess = parseInt(playerGuessString) === randomNumber;
  
    const isGodCorrect = isGodStronger === isGodActuallyStronger();
  
    const didPlayerWin = isCorrectGuess && isGodCorrect;
  
    const resultMessage = didPlayerWin ? `Congratulations ${playerName}! You have defeated Satan and his minions.` : `Sorry ${playerName}, you have lost.`;
  
    alert(resultMessage);
  }
  
  function isGodActuallyStronger() {
    const god = "god";
    const satanMinions = ["demon", "devil", "fallen angel"];
    const satanStrength = satanMinions.length * 666;
    const godStrength = god.length * 777;
  
    return godStrength > satanStrength;
  }
  