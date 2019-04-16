function checkValidatePhoneNumber() {
    let patt =/^\([0-9]{2}\)-\(0[0-9]{9}\)$/;
    let phoneNumber = document.getElementById('phoneNumber').value;
    let result = patt.test(phoneNumber);
    if (result) document.getElementById('result').innerText = 'The Phone Number is valid';
    else document.getElementById('result').innerText = 'The Phone Number is not valid';
}