const imgBox = document.getElementById("imgBox");
const QRImg = document.getElementById('QRImg');
const input = document.getElementById('inputText');
const downloadBtn = document.getElementById('downloadBtn');

function generateQR(){
        if(input.value.length > 0){
            const qrCodeUrl = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(input.value);
            QRImg.src = qrCodeUrl;
            imgBox.classList.add("show-img")

        // Download Option for QR Code
        QRImg.onload = function(){
            downloadBtn.onclick = function(){
                fetch(qrCodeUrl)
                    .then(res => res.blob())
                    .then(blob => {
                        const url = window.URL.createObjectURL(blob);
                        const link = document.createElement('a');
                        link.href = url;
                        link.download = `${input.value || 'QRCode'}.png`;
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                        window.URL.revokeObjectURL(url);
                    })
                    .catch(() => {
                        alert("Failed to download");
                    })
            }
        }
    }
    else{
        input.classList.add('error');
        setTimeout(function(){
            input.classList.remove('error');
        }, 1000)
    }
}
