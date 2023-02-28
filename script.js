function generateQRCode() {
	var text = document.getElementById('input-text').value;
	var qrcode = new QRCode(document.getElementById('qr-code'), {
		text: text,
		width: 200,
		height: 200,
		colorDark : "#000000",
		colorLight : "#ffffff",
		correctLevel : QRCode.CorrectLevel.H
	});
}
