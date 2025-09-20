function cetakData() {
  const nama = document.getElementById("nama").value;
  const umur = parseInt(document.getElementById("umur").value);
  const jabatan = document.getElementById("jabatan").value;
  const status = document.getElementById("status").value;

  // Nentuin Gaji Pokok
  const gajiPokok = jabatan === "manajer" ? 15000000 : jabatan === "asisten manajer" ? 10000000 : jabatan === "staff" ? 5000000 : 0;

  const tunjanganJabatan = 0.15 * gajiPokok;
  const bpjs = 0.1 * gajiPokok;
  const tunjanganKeluarga = status === "menikah" ? 0.2 * gajiPokok : 0;
  const totalGaji = gajiPokok + tunjanganJabatan + bpjs + tunjanganKeluarga;

  document.getElementById("dataPegawai").innerHTML = `
  <tr>
    <td>${nama}</td>
    <td>${umur} tahun</td>
    <td>${jabatan}</td>
    <td>${status}</td>
    <td>Rp ${gajiPokok.toLocaleString()}</td>
    <td>Rp ${tunjanganJabatan.toLocaleString()}</td>
    <td>Rp ${bpjs.toLocaleString()}</td>
    <td>Rp ${tunjanganKeluarga.toLocaleString()}</td>
  </tr>
`;

  document.getElementById("totalGaji").innerText = `Rp ${totalGaji.toLocaleString()}`;
}
