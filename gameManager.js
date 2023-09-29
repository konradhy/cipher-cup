import UIManager from "./uiManager.js";
import locations from "./locations.js";
import figlet from "figlet";

class GameManager {
  constructor(uiManager, locations) {
    this.uiManager = uiManager;
    this.locations = locations;
    this.incorrectAnswers = 0; // Counter for incorrect answers
  }

  async startGame() {
    for (const location of this.locations) {
      await this.presentLocation(location);

      if (this.incorrectAnswers >= 3) {
        // Call the Failure Screen from UIManager
        UIManager.showFailureScreen();
        this.uiManager.displayMessage(
          "The world plunges into darkness.",
          "error"
        );
        return; // Terminate the game
      }
    }

    // If the player has less than 3 incorrect answers after going through all locations
    if (this.incorrectAnswers < 3) {
      // Call the Success Screen from UIManager
      UIManager.showSuccessScreen();
      this.uiManager.displayMessage("You have saved the world!", "success");
    }
  }

  async presentLocation(location) {
    // Display the location name using figlet
    console.log(figlet.textSync(location.name, { horizontalLayout: "full" }));
    this.uiManager.displayLocationIntro(location.narrative);

    const chosenAnswer = await this.uiManager.promptMultipleChoice(
      location.riddle,
      location.choices
    );

    if (chosenAnswer === location.answer) {
      this.uiManager.displayMessage(location.success, "success");
    } else {
      this.uiManager.displayMessage(location.failure, "error");
      this.incorrectAnswers++; // Increment the incorrectAnswers counter if the answer is wrong
    }
  }
}

export default GameManager;
