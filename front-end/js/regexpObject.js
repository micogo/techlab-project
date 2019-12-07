class RegExpBuilder {
    constructor() {
    }

    validateZipCode() {
        return /^\d{2}[- ]{0,1}\d{3}$/;
    }
    validateEmail() {
        //todo develope
    }
    validateText(min, max) {
        return new RegExp(`^([a-zA-Z0-9_-]){${min},${max}}$`);
    }

    validateWord(min, max) {
        return new RegExp(`^[A-Z]([a-zA-Z]){${min},${max}}$`);
    }
    validateBankAccount() {
        return /^\d{26}$/;
    }
    validateValue() {
        return /^[0-9]{0,}$/;
    }

}

function createRegExpBuilder() {
	return new RegExpBuilder();
}