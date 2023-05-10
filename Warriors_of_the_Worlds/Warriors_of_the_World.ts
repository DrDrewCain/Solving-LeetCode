/**
 * Here are the instructions on how to play the game:
 * @author Mark
 * YOU MAY NOT COPY THIS GAME WITHOUT EXPLICIT AUTHORIZATION FROM THE AUTHOR.
 * 
 * 1. Enter your userName.
 * 
 * 2. Choose your character. You can either be Warrior or Wizard. The game will keep prompting you until you enter a valid character.
 * 
 * 3. Answer the question "Is Warrior stronger than Wizard and his minions?" with either "yes" or "no".
 * 
 * 4. Guess a number between 1 and 100. The computer will generate a random number between 1 and 100.
 * 
 * 5. If your guess is equal to the random number and you answered the question correctly, you win! Otherwise, you lose.
 * 
 * I hope you enjoy the game!
 */
enum PlayerType {
    Warrior = "Warrior",
    Wizard = "Wizard",
    Patrick = "Patrick",
    Spongebob = "Spongebob",
  }
  
  interface Player {
    type: PlayerType;
    userName: string;
    health: number;
    strength: {
      might: number;
      intelligence: number;
      magic: number;
      charisma: number;
      luck: number;
      badDogAttitude: number;
    };
    likeness?: boolean;
  }
  
  function generatePlayer(type: PlayerType, userName: string): Player {
    const health = 100;
    const strength = {
      might: Math.floor(Math.random() * 10) + 1,
      intelligence: Math.floor(Math.random() * 10) + 1,
      magic: Math.floor(Math.random() * 10) + 1,
      charisma: Math.floor(Math.random() * 10) + 1,
      luck: Math.floor(Math.random() * 10) + 1,
      badDogAttitude: Math.floor(Math.random() * 10) + 1,
    };
    const likeness = Math.random() > 0.5; // Random boolean value
    return { type, userName, health, strength, likeness};
}
  
  function playGame(): void {
    const Warrior = generatePlayer(PlayerType.Warrior, "Warrior");
    const satan = generatePlayer(PlayerType.Wizard, "Wizard");
    const lucifer = generatePlayer(PlayerType.Patrick, "Patrick");
    const other = generatePlayer(PlayerType.Spongebob, "Spongebob");
  
    let players: Player[] = [];
  
    const player1 = prompt("Player 1, choose your character: Warrior, Wizard, Patrick, or Spongebob")?.toLowerCase() ?? null;
    if (!player1 || (player1 !== PlayerType.Warrior && player1 !== PlayerType.Wizard && player1 !== PlayerType.Patrick && player1 !== PlayerType.Spongebob)) {
      alert("Please choose a valid character.");
      return;
    }
    const player1Type = player1 as PlayerType;
    players.push(generatePlayer(player1Type, "Player 1"));
  
    const player2 = prompt("Player 2, choose your character: Warrior, Wizard, Patrick, or Spongebob")?.toLowerCase() ?? null;
    if (!player2 || (player2 !== PlayerType.Warrior && player2 !== PlayerType.Wizard && player2 !== PlayerType.Patrick && player2 !== PlayerType.Spongebob)) {
      alert("Please choose a valid character.");
      return;
    }
    const player2Type = player2 as PlayerType;
    players.push(generatePlayer(player2Type, "Player 2"));
  
    let currentPlayerIndex = 0;
    while (true) {
      const currentPlayer = players[currentPlayerIndex];
      const currentOpponent = players[currentPlayerIndex === 0 ? 1 : 0];
  
      const damage = prompt(`${currentPlayer.userName}, choose a number between 1 and 10 to attack ${currentOpponent.userName}:`);
      if (!damage) {
        alert("Please choose a valid number between 1 and 10.");
        continue;
      }
  
      let damageValue = parseInt(damage);
  
      if (isNaN(damageValue) || damageValue < 1 || damageValue > 10) {
        alert("Please choose a valid number between 1 and 10.");
        continue;
      }

      if (currentPlayer.likeness) {
        damageValue += 5;
        alert("Bonus damage added!");
      }
    
  
      currentOpponent.health -= damageValue;
      if (currentOpponent.health <= 0) {
        alert(`${currentPlayer.userName} wins!`);
        const newPlayer = prompt(`${currentOpponent.userName}, please choose a new character: Warrior, Wizard, Patrick, or Spongebob`)?.toLowerCase() ?? null;
        if (!newPlayer || (newPlayer !== PlayerType.Warrior && newPlayer !== PlayerType.Wizard && newPlayer !== PlayerType.Patrick && newPlayer !== PlayerType.Spongebob)) {
            alert("Please choose a valid character.");
            return;
          }
    
          const newPlayerType = newPlayer as PlayerType;
          const newPlayerCharacter = generatePlayer(newPlayerType, currentOpponent.userName);
          players[currentPlayerIndex === 0 ? 1 : 0] = newPlayerCharacter;
          currentPlayerIndex = currentPlayerIndex === 0 ? 1 : 0;
    
          const continueGame = confirm("Do you want to continue playing?");
          if (!continueGame) {
            break;
          }
        }
    
        currentPlayerIndex = currentPlayerIndex === 0 ? 1 : 0;
      }
    
      let maxHealth = 0;
      let winner: Player | null = null;
    
      for (const player of players) {
        if (player.health > maxHealth) {
          maxHealth = player.health;
          winner = player;
        }
      }
    
      if (winner) {
        alert(`The winner is ${winner.userName} with ${maxHealth} health remaining!`);
      } else {
        alert("No winner!");
      }
    }
    
    // Start the game
    playGame();
    