  import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabase = createClient(
    "https://kwjjrtfukjybwqwdequl.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt3ampydGZ1a2p5Yndxd2RlcXVsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA4MzAyMjQsImV4cCI6MjA2NjQwNjIyNH0.iAYjFovdfeG7P6lwHwNOlO3Apww1uoQ8jxzu3mnT8d8"
  );

  async function simpan() {
    const name = document.getElementById("name").value;
    const jenis_kelamin = document.getElementById("jenis_kelamin").value;
    const {data, error} = await supabase.from("testing").insert([{name,jenis_kelamin}])

    if(error) return alert("Data gagal ditambahkan")
        alert("Data berhasil di tambahkan")
  }

  window.simpan = simpan
