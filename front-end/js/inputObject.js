class TransferInputElement {
	constructor (selector, regexp, id) {
		this.id = id;
		this.selector = document.querySelector(`.${selector}`),
		this.regexp = regexp;
		this.shouldSend = false;
		this.value = '';
	}
	setInputListener(functArg) {
		this.selector.addEventListener ("keyup", ()=>{
			functArg(this);
			this.getValue();
			console.log(this.value)
		})
	}
	finalValidation (functArg) {
		return functArg(this)
	}
	pushToTable (tableToPush) {
		tableToPush.push(this);
	}
	setListenerAndPush (arg, functArg) {
		this.setInputListener(functArg);
		this.pushToTable(arg);
	}
	getValue () {
		this.value = this.selector.value;
	}
}

//zwracasz to samo 2 razy z inna nazwa 
function inputElement (selector, regexp, id) {
	return new TransferInputElement (selector, regexp, id);
}

function transferInputElement(selector, regexp, id) {
	return new TransferInputElement(selector, regexp, id);
}