# RiddleQuest Game 🏰

## 📖 Introduction

RiddleQuest is a text-based adventure game where players traverse various mythical locations, each presenting a unique narrative and riddle, aiming to solve them to save the world from impending doom. The game is developed using Node.js and incorporates libraries like `inquirer` for user prompts, `chalk` for colored output, `figlet` for ASCII art, and `boxen` for displaying message boxes.

## 🏗 Structure

The game has a modular architecture comprising several files and classes:

- **GameManager.js**: Manages the main game logic and flow.
- **UIManager.js**: Handles user interactions and display.
- **locations.js**: Holds the data for different locations including narratives, riddles, and answers.

### GameManager 🎮

This class controls the game flow, tracking the incorrect answers and managing game progression through various locations. The `startGame` method initiates the game, presenting each location and its challenges, and monitoring the player's progress.

### UIManager 🖥

This class takes care of the user interface and interactions. It can display messages, narrative intros, and prompt user inputs, and utilizes a 'typing' effect to slowly reveal text for enhanced user engagement.

## 🚀 How to Run

1. Ensure you have Node.js installed on your system.
2. Open your terminal/command prompt.
3. Navigate to the project directory.
4. Run `npm install` to install the required packages.
5. Run `node main.js` to start the game.

## 🕹 How it Works

1. The game begins by initializing the GameManager and UIManager and launching the game.
2. Players are taken through various locations listed in `locations.js`, each revealing a detailed, slowly typed narrative.
3. A riddle is then presented with multiple-choice answers.
4. Based on the user's input, the game either progresses or increments the incorrect answer count.
5. The game concludes when the player accumulates three incorrect answers or successfully navigates through all locations.

## 🤖 User Interaction

- Players interact via the command line, choosing from the given options to progress.
- The `inquirer` library facilitates user inputs, processing responses to determine game flow.
- Players experience immersive, slowly revealed narratives enhancing engagement.
- Immediate, color-coded feedback is provided based on player choices.

## 🔧 Customization

- Modify `locations.js` to introduce new locations, narratives, and riddles.
- Adjust the narrative text typing speed in `UIManager.js`.
- Developers can introduce new features or functionalities, such as allowing players to skip the typing effect or adding new gameplay mechanics.

## 📘 Conclusion

RiddleQuest offers an immersive and intuitive text-based gaming experience, featuring modular and customizable architecture. Developers can easily comprehend, extend, and adapt the game to introduce new narratives, mechanics, and features, providing endless possibilities for enhancement and expansion.
