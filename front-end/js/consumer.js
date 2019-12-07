class Client {
	constructor(id, name, surname, accountNr, accountBalance, transactionHist, inputsArr) {
		this.id = id;
		this.name = name;
		this.surname = surname;
		this.accountNr = accountNr;
		this.accountBalance = accountBalance;
		this.transactionHist = transactionHist;
		this.inputsArr = inputsArr;
	}
	changeAccNr(newAccNr) {
		this.accountNr = newAccNr;
		this.sendNotifToUser();
		this.sendNotifToClientHandler();
	}
	sendNotifToUser() {
		console.log("User has been notified");
	}
	sendNotifToClientHandler() {
		console.log("Handler has been notified");
	}
	sendTransfer(amount) {
		if (this.accountBalance > amount) {
			this.accountBalance -= amount;
			console.log("transfer has been sent");
		} else {
			console.log("not enough fonds");
		}
	}
}
function client(id, name, surname, accountNr, accountBalance, transactionHist, inputsArr) {
	return new Client(id, name, surname, accountNr, accountBalance, transactionHist, inputsArr);
}