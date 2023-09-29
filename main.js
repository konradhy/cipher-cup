import GameManager from "./gameManager.js";
import UIManager from "./uiManager.js";
import locations from "./locations.js"; // Make sure the locations are imported correctly

async function main() {
  const uiManager = new UIManager();
  const gameManager = new GameManager(uiManager, locations); // Pass locations here
  await gameManager.startGame();
}

main();
