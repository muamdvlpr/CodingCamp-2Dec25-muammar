welcomeMessage();

function welcomeMessage() {
    let userResponse = prompt('Welcome to my portfolio website! Please enter your name:');

    if (userResponse === null || userResponse.trim() === '') {
        userResponse = 'Guest';
    }

    document.getElementById('welcome-message').textContent = userResponse;
}

function submitForm() {
    const nama = document.getElementById('nama').value.trim();
    const tanggalLahir = document.getElementById('tanggal-lahir').value;
    const pesan = document.getElementById('pesan').value.trim();
    const jenisKelamin = document.querySelector('input[name="jenis-kelamin"]:checked').value;

    // Validation
    if (nama === '') {
        alert('Nama tidak boleh kosong');
        document.getElementById('nama').focus();
        return;
    }

    if (tanggalLahir === '') {
        alert('Tanggal Lahir tidak boleh kosong');
        document.getElementById('tanggal-lahir').focus();
        return;
    }

    if (pesan === '') {
        alert('Pesan tidak boleh kosong');
        document.getElementById('pesan').focus();
        return;
    }

    // If all validations pass
   // alert('Form berhasil disubmit!\n\nNama: ' + nama + '\nTanggal Lahir: ' + tanggalLahir + '\nJenis Kelamin: ' + jenisKelamin + '\nPesan: ' + pesan);
    // You can add form submission logic here
    const formattedTanggal = tanggalLahir ? tanggalLahir.split('-').reverse().join('-') : '';

    document.getElementById('nama-output').textContent = nama;
    document.getElementById('tanggal-lahir-output').textContent = formattedTanggal;
    document.getElementById('jenis-kelamin-output').textContent = jenisKelamin;
    document.getElementById('pesan-output').textContent = pesan;
}