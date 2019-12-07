document.addEventListener("DOMContentLoaded", async function () {
    const redirectBtn = document.querySelector(".newPaymentBtn");
    redirectBtn &&
        (redirectBtn.addEventListener("click", function () {
            window.location = "./redirect.html"
        }));
    externalClientsArray = [];
    const inputTable = [];
    const customValidator = validatorObject();
    const regExpBuilder = regExpBuilder();
    let john_Doe;


    const anonymousObjectForPseudoApiArray = [
        {
            inputTitle: "transferTitle-input",
            inputRegexp: regExpBuilder.validateText(5, 60)
        },
        {
            inputTitle: "transferRecName-input",
            inputRegexp: regExpBuilder.validateWord(2, 30)
        },
        {
            inputTitle: "transferRecAccountNr-input",
            inputRegexp: regExpBuilder.validateBankAccount()
        },
        {

            inputTitle: "transferRecPostalCode-input",
            inputRegexp: regExpBuilder.validateZipCode()
        },
        {

            inputTitle: "transferMsg-input",
            inputRegexp: regExpBuilder.validateWord(2, 30)
        },
        {
            inputTitle: "transferRecCity-input",
            inputRegexp: regExpBuilder.validateWord(2, 30)
        },
        {
            inputTitle: "transferAmount-input",
            inputRegexp: regExpBuilder.validateValue();
        }
    ];
    const tmpArr = [];

    client("superSecretID", "John", "Doe", "12345678900987654321123456", 10000, "none", anonymousObjectForPseudoApiArray).then(response => {
        console.log(response);
        if (response.status === 200) {
            john_Doe = response.payload;

            response.payload.inputsArr.map((obj) => {
                transferInputElement(obj.inputTitle, obj.inputRegexp).then(x => {
                    if (x.status === 200) {
                        tmpArr.push(x.payload)
                    } else {
                        throw new Error(x.msg);
                    }
                }).then(() => {
                    tmpArr.map(element => {
                        element.setInputListener(customValidator.customValidation);
                    })
                })
            })
            console.log(tmpArr);
        } else {
            console.log(response.msg);
        }
    })


    const transferForm = document.querySelector('.transfer-form', "");


    transferForm.addEventListener("submit", function (e) {
        e.preventDefault();
        console.log(john_Doe);
        console.log(inputTable);
        // finalFromValidation(checkForm(generalCheck));
        customValidator.finalFromValidation(inputTable, john_Doe);
    })
})