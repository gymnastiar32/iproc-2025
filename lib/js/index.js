let valueDisplays = document.querySelectorAll(".num");
let interval = 2000; // Total durasi animasi

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let increment = endValue >= 100 ? 100 : Math.ceil(endValue / 20); // Increment fleksibel
  let duration = Math.floor(interval / (endValue / increment)); // Durasi per langkah

  let counter = setInterval(function () {
    startValue += increment; // Menambahkan increment pada setiap langkah

    // Mempercepat saat mendekati endValue
    if (endValue - startValue <= increment) {
      duration = Math.floor(duration / 2); // Durasi lebih cepat
    }

    // Memformat angka dengan titik sebagai pemisah ribuan
    valueDisplay.textContent = startValue.toLocaleString("de-DE");

    if (startValue >= endValue) {
      valueDisplay.textContent = endValue.toLocaleString("de-DE"); // Pastikan berhenti pada nilai akhir
      clearInterval(counter);
    }
  }, duration);
});



