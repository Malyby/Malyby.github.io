var modal = document.getElementById('mail-modal');
var mail_btn = document.getElementsByClassName('mail-btn');
var modal_close = document.getElementById('modal-close');

for (var i = 0; i < mail_btn.length; i++) {
  mail_btn[i].addEventListener('click', function() {
    openModalWindow();
  })
}
function openModalWindow() {
  modal.style.display = "block";
}
modal_close.onclick = function() {
	modal.style.display = "none";
}
window.onclick = function() {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}	