class BankAccount {
	constructor(balance, accountHolder, accountType) {
		this.accountHolder = accountHolder;
		this.accountType = accountType;
		this.balance = 1000; // Initial balance
        // this.balance = balance; // Initial
	}

	deposit(amount) {
		if (amount <= 0) {
			throw new Error("Invalid deposit amount");
		}
		this.balance += amount;
	}

	withdraw(amount) {
		if (amount <= 0 || amount > this.balance) {
			throw new Error("Invalid withdrawal amount or insufficient funds");
		}
		this.balance -= amount;
	}

	checkBalance() {
		return this.balance;
	}
}

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

// Initialize the account info on the webpage
document.getElementById("account-holder").textContent = "James St. Patrick";
document.getElementById("account-type").textContent = "Savings";
document.getElementById("balance").textContent = "1000";
