document.getElementById("toggleTable").addEventListener("click", function () {
    let table = document.getElementById("comparisonTable");
    if (table.classList.contains("hidden")) {
      table.classList.remove("hidden");
      this.innerHTML = "Sembunyikan detail ▲";
    } else {
      table.classList.add("hidden");
      this.innerHTML = "Tampilkan detail ▼";
    }
  });