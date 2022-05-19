const nama = document.querySelector('#nama');
nama.addEventListener('click', updateName);
function updateName() {
    const name = prompt('Masukkan nama:');
    nama.textContent = name;
}


