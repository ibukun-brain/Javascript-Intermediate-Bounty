# Javascript-Intermediate-Bounty

Hi, Let me walk you through creating a banking system with Javascript Classes, First what is a Javascript class?, Javascript class is a template for creating objects.

Let's try to replicate the a banking system functionality such as depositing, withdrawing and checking balance.

## Table of Content
```sh
- Create BankAccount class
- The constructor object
- Deposit method
- Withdrawal method
- checkBalance method
- Application Logic
```

## Creating BankAccount class
```sh
class BankAccount {
	
}
```
The code above creates a BankAccount creates a BankAccount class which does nothing yet than serves as a template or blueprint for the objects will be creating

## Consructor Method
```sh
constructor(balance, accountHolder, accountType) {
    this.accountHolder = accountHolder;
    this.accountType = accountType;
    this.balance = 5000;
}
```
Copy the code above and paste it into the BankAccount class, in the code above we created a constructor method which is always required whenever we creating classes, the constructor method is a special method for creating and initializing an object created with a class. There can only be one special method with the name "constructor" in a class — a SyntaxError is thrown if the class contains more than one occurrence of a constructor method.

In the constructor method we created three initial values which are `balance`,  `accountHolder` and `accountType`, the `balance` represents the current amount the account holder has in his bank account, `accountHolder` represents the owner of the account and `accountType` represent the type of account, it either a savings or current account. For a user there is a default amount for the initial balance which 1000.

## Deposit Method
```sh
deposit(amount) {
    if (amount <= 0) {
			throw new Error("Invalid deposit amount");
		}
    this.balance += amount;
}
```
Next we create a deposit method, the deposit method is function that allows users to deposit any amount to their bank account, since we are trying to replicate a banking system, we throw an error if the amount the user is trying to deposit is less than or equal to zero. copy the code above and paste it below the constructor method

## Withdraw Method
```sh
withdraw(amount) {
    if (amount < 0 || amount > this.balance) {
        throw new Error("Invalid withdrawal amount or insufficient funds");
    }
    this.balance -= amount;
}
```
copy the code above and paste it below the deposit method, the withdraw function or method allow users to withdraw their money from their banking only if the amount is greater zero or the amount is less than the current balance by using a conditional statement, we then substract the balance from the amount withdrawn.

## Application Logic
```sh
function performTransaction() {
	const transactionType = document.getElementById("transaction-type").value;
	const transactionAmount = parseFloat(
		document.getElementById("transaction-amount").value
	);
	const messageBox = document.getElementById("message");

	const account = new BankAccount("John Doe", "Savings");

	try {
		switch (transactionType) {
			case "deposit":
				account.deposit(transactionAmount);
				messageBox.textContent = `Deposited ₦${transactionAmount}`;
				break;
			case "withdraw":
				account.withdraw(transactionAmount);
				messageBox.textContent = `Withdrawn ₦${transactionAmount}`;
				break;
			case "check":
				const balance = account.checkBalance();
				messageBox.textContent = `Balance: ₦${balance}`;
				break;
			default:
				throw new Error("Invalid transaction type");
		}
	} catch (error) {
		messageBox.textContent = error.message;
	} finally {
		// Update account info on the webpage
		document.getElementById("balance").textContent = account.checkBalance();
	}
}
```
Copy the code above and paste it below the AccountBalance class, the code above is the logic of the application, we used switch to simulate the different action a user might want to perform for example deposit, withdraw and checkBalance. in the function we instantiated the AccountBalance class and provided parameters such as the `accountHolder` name `accountType`, we also implemented a try and catch block to handle any exceptions in our code.

```sh
// Initialize the account info on the webpage
document.getElementById("account-holder").textContent = "James St. Patrick";
document.getElementById("account-type").textContent = "Savings";
document.getElementById("balance").textContent = "5000";
```
Finally copy the code above and paste it below the `performTransaction` function, the code above intialize the account info on the webpage, this may not be the best way to this, we can make it dynamic too which i will work on later.

You can run the code to see how it works
