function guessingGame() {
  let number = Math.floor(Math.random() * 99);
  let guessCount = 0;
  let gameOver = false;
  return function (guess) {
    if (gameOver) return "The game is over, you already won!";
    if (guess * 1 < number) {
      guessCount++;
      return `${guess} is too low!`;
    } else if (guess * 1 > number) {
      guessCount++;
      return `${guess} is too high!`;
    } else if (guess * 1 == number) {
      guessCount++;
      gameOver = true;
      return `You win! You found ${number} in ${guessCount} guesses.`;
    }
  };
}

function createAccount(setPin, setAmt) {
  let pinNumber = setPin;
  let balance = setAmt;

  return {
    checkBalance(pin) {
      if (pinNumber == pin) {
        return balance;
      } else {
        return "Invalid PIN";
      }
    },
    deposit(pin, amt) {
      if (pinNumber == pin) {
        balance = balance + amt;
        return `Successfully deposited $${amt}. Current balance: $${balance}.`;
      } else {
        return "Invalid PIN";
      }
    },
    withdraw(pin, amt) {
      if (pinNumber == pin) {
        if (amt > balance) {
          return "Withdrawal amount exceed account balance. Transaction cancelled.";
        }
        balance = balance - amt;
        return `Successfully withdrew $${amt}. Current balance: $${balance}.`;
      } else {
        return "Invalid PIN";
      }
    },
    changePin(oldPin, newPin) {
      if (pinNumber == oldPin) {
        pinNumber = newPin;
        return "PIN successfully changed!";
      } else {
        return "Invalid PIN";
      }
    },
  };
}

function curriedAdd(sum) {
  if (!sum) return 0;
  return function adder(num) {
    if (!num) return sum;
    sum += num;
    return adder;
  };
}
