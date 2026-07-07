function irAVideo() {
    document.getElementById('portada').classList.add('oculto');
    document.getElementById('intro-aot').classList.remove('oculto');
}

function irAAlbum() {
    document.getElementById('intro-aot').classList.add('oculto');
    document.getElementById('album').classList.remove('oculto');
}

function irASAO() {
    document.getElementById('album').classList.add('oculto');
    document.getElementById('fase-sao').classList.remove('oculto');
}