// function openTab(event, tabName) {
//     const tabContents = document.querySelectorAll('.tab-content');
//     const tabLinks = document.querySelectorAll('.pill-tab');

//     // Hide all tab contents
//     tabContents.forEach(tab => tab.classList.add('hidden'));

//     // Remove active styles from all tabs
//     tabLinks.forEach(tab => {
//       tab.classList.remove('text-blue-600', 'bg-blue-100');
//       tab.classList.add('text-gray-600', 'bg-gray-100');
//     });

//     // Show the selected tab
//     document.getElementById(tabName).classList.remove('hidden');

//     // Apply active styles to the clicked tab
//     event.currentTarget.classList.remove('text-gray-600', 'bg-gray-100');
//     event.currentTarget.classList.add('text-blue-600', 'bg-blue-100');
//   }

//   // Set default open tab
//   document.getElementById('defaultOpen').click();

 // Ambil semua elemen dengan class "tab-button" dan "tab-content"
 const tabs = document.querySelectorAll('.tab-button');
 const tabContents = document.querySelectorAll('.tab-content');
 
 tabs.forEach(tab => {
   tab.addEventListener('click', () => {
     const targetId = tab.dataset.tabTarget; // Ambil target ID
     const target = document.getElementById(targetId); // Ambil tab content yang cocok
 
     // Reset semua tab dan konten
     tabs.forEach(t => {
       t.style.backgroundColor = '#E5E7EB'; // Default background
       t.classList.remove('text-white'); // Hapus styling aktif
       t.classList.add('text-gray-700'); // Tambah styling default
     });
 
     tabContents.forEach(content => {
       content.classList.add('hidden'); // Sembunyikan semua tab content
     });
 
     // Aktifkan tab yang diklik
     tab.style.backgroundColor = '#005DB5'; // Ganti background tab aktif
     tab.classList.add('text-white');
     tab.classList.remove('text-gray-700');
 
     // Tampilkan konten tab yang sesuai
     target.classList.remove('hidden');
   });
 });
 
