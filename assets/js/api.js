fetch('/assets/js/db.json')
    .then(response => response.json())
    .then(data => {
        const selectProvinsi = document.getElementById('provinsi-select');
        const select = document.getElementById('tour-select');
        const jumlahInput = document.getElementById('parti');
        const hargaDisplay = document.getElementById('price');
        const totalDisplay = document.getElementById('total-price');

        // Tambahkan option untuk setiap objek provinsi
        for (const idProvinsi in data.provinsi) {
            const provinsi = data.provinsi[idProvinsi];
            const option = document.createElement('option');
            option.value = idProvinsi;
            option.textContent = provinsi.nama;
            selectProvinsi.appendChild(option);
        }

        selectProvinsi.addEventListener('change', function () {
            const idProvinsi = selectProvinsi.value;
            const provinsi = data.provinsi[idProvinsi];
        
            if (provinsi && provinsi.objek_pariwisata) {
                const objekPariwisata = provinsi.objek_pariwisata;
                const selectTujuan = document.getElementById('tour-select');
        
                selectTujuan.innerHTML = '';
        
                // Tambahkan option untuk setiap objek pariwisata di provinsi yang dipilih
                objekPariwisata.forEach(objek => {
                    const option = document.createElement('option');
                    option.value = objek.nama;
                    option.textContent = objek.nama;
                    option.dataset.harga = objek.harga;
                    selectTujuan.appendChild(option);
                });
        
                select.addEventListener('change', function () {
                    const harga = select.options[select.selectedIndex].getAttribute('data-harga');
                    const formattedHarga = parseInt(harga).toLocaleString('id-ID', {
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 0
                    });
                    hargaDisplay.value = `IDR ${formattedHarga}`;

                    calculateTotal();
                });
            }
        });        

        jumlahInput.addEventListener('input', calculateTotal);
        if (isNaN(jumlahInput.value)) {
            jumlahInput.value = 0;
        }

        function calculateTotal() {

            let jumlah = Number(jumlahInput.value);
            const hargaPerOrang = Number(select.options[select.selectedIndex].getAttribute('data-harga'));

            if (isNaN(hargaPerOrang)) {
                return;
            }

            if (isNaN(jumlah)) {
                jumlah = 0;
            }

            let totalHarga = jumlah * hargaPerOrang;

            const formattedNumber = totalHarga.toLocaleString('id-ID');

            totalDisplay.value = `IDR ${formattedNumber}`;
        }
    });