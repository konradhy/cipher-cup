import inquirer from "inquirer";
import chalk from "chalk";
import figlet from "figlet";
import boxen from "boxen";

class UIManager {
  async promptInput(message) {
    const { answer } = await inquirer.prompt({
      name: "answer",
      type: "input",
      message,
    });
    return answer;
  }

  displayMessage(message, type = "info") {
    let color;
    switch (type) {
      case "success":
        color = "green";
        break;
      case "error":
        color = "red";
        break;
      case "warning":
        color = "yellow";
        break;
      default:
        color = "white";
    }
    console.log(chalk[color](message));
  }

  displayIntro(introText) {
    console.log(chalk.cyan(introText));
  }

  displayLocationIntro(locationIntro) {
    console.log(chalk.magenta(locationIntro));
  }

  static showSuccessScreen() {
    console.log(
      boxen(
        chalk.green(
          figlet.textSync("SUCCESS!", {
            font: "Standard",
            horizontalLayout: "full",
          })
        ),
        { padding: 1, borderColor: "green", borderStyle: "round" }
      )
    );
  }

  static showFailureScreen() {
    console.log(
      boxen(
        chalk.red(
          figlet.textSync("FAILURE!", {
            font: "Standard",
            horizontalLayout: "full",
          })
        ),
        { padding: 1, borderColor: "red", borderStyle: "round" }
      )
    );
  }

  async promptMultipleChoice(question, choices) {
    const { answer } = await inquirer.prompt({
      type: "list",
      name: "answer",
      message: question,
      choices,
    });
    return answer;
  }
}

export default UIManager;
