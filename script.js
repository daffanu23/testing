// File: script.js (Versi yang sudah disesuaikan dengan skema tabel Anda)

// Impor fungsi createClient dari Supabase CDN
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

// Inisialisasi koneksi ke Supabase (kredensial Anda yang sudah benar)
const supabase = createClient(
    "https://kwjjrtfukjybwqwdequl.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt3ampydGZ1a2p5Yndxd2RlcXVsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA4MzAyMjQsImV4cCI6MjA2NjQwNjIyNH0.iAYjFovdfeG7P6lwHwNOlO3Apww1uoQ8jxzu3mnT8d8"
);

// Fungsi utama untuk mengambil dan menampilkan data klasemen
async function tampilkanKlasemen() {
    const container = document.getElementById('klasemen-container');

    try {
        // Mengambil data dari tabel 'driver_season_1' (NAMA TABEL SUDAH BENAR)
        const { data, error } = await supabase
            .from('driver_season_1') 
            .select('*')
            .order('Peringkat', { ascending: true }); // Mengurutkan berdasarkan kolom 'Peringkat' (NAMA KOLOM SUDAH BENAR)

        if (error) {
            throw error;
        }

        if (data && data.length > 0) {
            // Header tabel disesuaikan dengan nama kolom Anda
            let htmlContent = `
              <table>
                <thead>
                  <tr>
                    <th>Peringkat</th>
                    <th>Pembalap</th>
                    <th>Tim</th>
                    <th>Poin</th>
                  </tr>
                </thead>
                <tbody>
            `;

            // Loop data dan gunakan nama kolom yang benar dari database
            data.forEach(row => {
                htmlContent += `
                    <tr>
                        <td>${row.Peringkat}</td>
                        <td>${row.Pembalap}</td>
                        <td>${row.Tim}</td>
                        <td><strong>${row.Poin}</strong></td>
                    </tr>
                `; // <-- Nama kolom (row.Peringkat, row.Pembalap, dll.) SUDAH DISESUAIKAN
            });

            htmlContent += `</tbody></table>`;
            
            container.innerHTML = htmlContent;
        } else {
            container.innerHTML = `<p class="loading">Tidak ada data klasemen untuk ditampilkan di tabel 'driver_season_1'.</p>`;
        }

    } catch (error) {
        console.error('Terjadi kesalahan:', error.message);
        container.innerHTML = `<p class="error">Gagal memuat data. Pastikan nama tabel dan kolom sudah benar dan RLS (Row Level Security) tidak memblokir akses.</p>`;
    }
}

// Jalankan fungsi saat halaman selesai dimuat
document.addEventListener('DOMContentLoaded', tampilkanKlasemen);
