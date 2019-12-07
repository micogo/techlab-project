document.addEventListener("DOMContentLoaded", function () {
    const transferBtn = document.querySelector(".payment-button");
    const transferFormWrap = document.querySelector(".popup-wrap");
    transferBtn &&
        (transferBtn.addEventListener("click", function () {
            transferFormWrap.classList.contains('none') && transferFormWrap.classList.remove('none');
            return 0;
        }));

    const transferFormClosedIcon = document.querySelector(".close-icon");
    const transferForm = document.querySelector(".transfer-form-container");

    transferFormClosedIcon.addEventListener('click', function () {
        transferFormWrap.classList.toggle('none');
    })

    transferFormWrap.addEventListener('click', function (event) {
        !event.target.classList.contains("popup-wrap") ? console.log("dziala") : transferFormWrap.classList.toggle('none');
    })



    externalClientsArray = [];
    const inputTable = [];

    const customValidator = validatorObject();
    const regExpBuilder = createRegExpBuilder();

    const regExpText = regExpBuilder.validateText(5, 60);
    const regExpBankAccount = regExpBuilder.validateBankAccount();
    const regExpZipCode = regExpBuilder.validateZipCode();
    const regExpNumber = regExpBuilder.validateValue();

    let john_Doe;


    const anonymousObjectForPseudoApiArray = [
        {
            inputTitle: "transferTitle-input",
            inputRegexp: regExpText
        },
        {
            inputTitle: "transferRecAccountNr-input",
            inputRegexp: regExpBankAccount
        },
        {
            inputTitle: "transferRecPostalCode-input",
            inputRegexp: regExpZipCode

        },

        {
            inputTitle: "transferAmount-input",
            inputRegexp: regExpNumber
        }
    ];
    const tmpArr = [];


    john_Doe = client("superSecretID", "John", "Doe", "12345678900987654321123456", 10000, "none", anonymousObjectForPseudoApiArray);
    john_Doe.inputsArr.map((obj) => {
        tmpArr.push(transferInputElement(obj.inputTitle, obj.inputRegexp))

        tmpArr.map(element => {
            element.setInputListener(customValidator.customValidation);

        })
    })
    console.log(tmpArr);



    // const transferFormWrap = document.querySelector('.transfer-form', "");


    transferFormWrap.addEventListener("submit", function (e) {
        e.preventDefault();
        console.log(john_Doe);
        console.log(inputTable);
        // finalFromValidation(checkForm(generalCheck));
        customValidator.finalFromValidation(inputTable, john_Doe);
    })

    const postForm = 'http://localhost:3001/rest/v1/products/postForm';
    const smsPush = 'http://localhost:3001/rest/v1/products/postSMSToken'
    const urlMock = 'http://localhost:3001/rest/v1/products/asdasdasd';
    //    document.addEventListener("DOMContentLoaded", function () {
    let data = new FormData();
    data.append(name, "dupa")
    let testVariable = "name=dupa";
    fetch(postForm, {
        method: 'POST',
        mode: 'cors',
        body: data
    }).then(response => {
        console.log(response)
        if (response.status === 200) {
            response.json().then(dupa => {
                console.log(dupa)
            })
        }
    });
    //    });

    fetch(smsPush, {
        method: 'POST',
        mode: 'cors',
        body: data
    }).then(response => {
        console.log(response)
        if (response.status === 200) {
            response.json().then(dupa => {
                console.log(dupa)
            })
        }
    });

})
