class Validator {
	constructor() {
    }
    
	finalFromValidation(sendData, clientData) {
		let temp = sendData.every((element) => element.shouldSend === true);
		if (temp) {
			for (let i = 0; i < sendData.length; i++) {
				if (sendData[i].id === "1") {
					clientData.sendTransfer(sendData[i].getValue());
					console.log("czy ja dzialam?");
					break;
				}
			}


		}
		console.log(temp);
		console.log(sendData.amount);
	}

	customValidation(inputElementObj) {
		if (inputElementObj.regexp.test(inputElementObj.selector.value)) {
			inputElementObj.selector.classList.contains("border-red") && inputElementObj.selector.classList.remove("border-red");
			inputElementObj.selector.classList.add("border-green");
			console.log("działa")
			inputElementObj.shouldSend = true;
			return true
		} else {
			inputElementObj.selector.classList.contains("border-green") && inputElementObj.selector.classList.remove("border-green")
			inputElementObj.selector.classList.add("border-red");
			console.log("nie działa")
			inputElementObj.shouldSend = false;
			return false
		}
	}
	checkForm(param) {
		for (let i = 0; i < inputTable.length; i++) {
			param = inputTable[i].finalValidation(this.customValidation)
		}
		return param
	}
}
function validatorObject() {
	return new Validator();
}