let inputText = document.getElementById('inputText');
let imgBox = document.getElementById('imgBox');
let QRImg = document.getElementById('QRImg');

function generateQR(){
    if(inputText.value.length > 0){
        QRImg.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + inputText.value;
        imgBox.classList.add('show-img');
    }
    else{
        inputText.classList.add('error');
        setTimeout(function(){
            inputText.classList.remove('error');
        }, 1000)
    }
}