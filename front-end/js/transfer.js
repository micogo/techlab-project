
const fakeData = "414144";
fetch(`http://localhost:3001/rest/v1/products/${fakeData}`).then(response => {
    if (response.status === 200) {
        //console.log(response);
        response.json().then((response2) => {
            console.log(response2);
        })
    }

});


document.addEventListener("DOMContentLoaded", function () {
    const transferBtn = document.querySelector(".newPaymentBtn");
    const transferForm = document.querySelector(".transferForm")
    transferBtn &&
        (transferBtn.addEventListener("click", function () {
            transferForm.classList.contains('none') && transferForm.classList.remove('none');
            return 0;
        }));
})