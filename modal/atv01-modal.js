var modal = document.getElementsByClassName('container');

var btn = document.getElementsByClassName('btn');

var close = document.getElementsByClassName('close-modal');

btn.onclick = function() {
    modal.style.display = "block";
}

close.onclick = function() {
    modal.style.display = "none";
}