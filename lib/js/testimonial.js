const testimonials = [
  { name: 'Gilang Ramadhan', position: 'Expert Associate SCM, BSM, PMO Holding Infrastructure, PMO Subholding Infrastructure - PT Wijaya Karya (Persero)', content: 'Penerapan aplikasi iProc merupakan bagian dari strategi WIKA dalam mengimplementasikan konsep Procurement 4.0. Aplikasi iProc berhasil  mempercepat proses pengadaan hingga 62% , menghasilkan penghematan sebesar 273 miliar dalam tiga tahun, serta meningkatkan produktivitas organisasi pengadaan (lean organization) dalam mengelola pengadaan dan kontrak senilai Rp 6,4 triliun dengan hanya 14 personel.' },
  { name: 'Eddy Prastiyo', position: 'Vice President of Procurement - PT. Pembangunan Jaya Ancol (Persero) Tbk', content: 'Implementasi Aplikasi iProc di PT Pembangunan Jaya Ancol telah mengalami transformasi sejak 2014, dimulai dengan fitur dasar yang sederhana dan berkembang secara bertahap hingga mencakup kontrak elektronik. Pada tahun 2019, lebih dari 2.000 paket pengadaan yang dikelola menghasilkan efisiensi lebih dari 12%' },
  { name: 'M. Jamil', position: 'Director of Commerce - PT. Bukit Asam (Persero) Tbk', content: 'PT Bukit Asam berhasil mencapai efisiensi lebih dari Rp 700 miliar hanya dalam tahun pertama implementasi aplikasi iProc, berkat transparansi informasi pengadaan dan kemudahan bagi vendor dalam mengikuti proses pengadaan. Sementara itu, aplikasi iProc di PT Semen Baturaja telah terintegrasi dengan sistem ERP (SAP) dan dilengkapi dengan fitur penilaian vendor yang komprehensif.' }
];

let currentIndex = 0;

function updateTestimonial(name, position, title, content) {
  document.getElementById('testimonialName').textContent = name;
  document.getElementById('testimonialPosition').textContent = position;
  document.getElementById('testimonialContent').textContent = content;
}

function autoRotateTestimonials() {
  setInterval(() => {
    currentIndex = (currentIndex + 1) % testimonials.length;
    const { name, position, content } = testimonials[currentIndex];
    updateTestimonial(name, position, '', content);
  }, 5000); // Rotate every 5 seconds
}

window.onload = function() {
  autoRotateTestimonials();
  updateTestimonial(testimonials[0].name, testimonials[0].position, '', testimonials[0].content);
};