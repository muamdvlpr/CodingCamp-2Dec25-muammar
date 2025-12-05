/* welcomeMessage();

function welcomeMessage() {
    let userResponse = prompt('Welcome to my portfolio website! Please enter your name:');

    if (userResponse === null || userResponse.trim() === '') {
        userResponse = 'Guest';
    }

    document.getElementById('welcome-message').textContent = userResponse;
} */

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

function showPrompt(callback) {
  const modal = document.getElementById("promptModal");
  const input = document.getElementById("promptInput");
  const okBtn = document.getElementById("okBtn");
  const cancelBtn = document.getElementById("cancelBtn");

  modal.style.display = "flex";
  input.value = "";
  input.focus();

  okBtn.onclick = () => {
    modal.style.display = "none";
    callback(input.value);

    if (input.value === null || input.value.trim() === '') {
        input.value = 'Guest';
    }

    document.getElementById('welcome-message').textContent = input.value;
  };

  cancelBtn.onclick = () => {
    modal.style.display = "none";
    callback(document.getElementById('welcome-message').textContent = 'Guest', null);
  };
}

// ---------------
// AUTO OPEN MODAL
// ---------------
window.addEventListener("DOMContentLoaded", () => {
  showPrompt(function(result) {
    if (result === null) {
      console.log("User cancelled");
    } else {
      console.log("User name:", result);
    }
  });
});
