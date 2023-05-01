function validateForm() {
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let province = document.getElementById("provinsi-select").value;
    let tour = document.getElementById("tour-select").value;
    let date = document.getElementById("date").value;
    let parti = document.getElementById("parti").value;

    if (name == "") {
        alert("name is require");
        return false;
    }

    if (phone == "") {
        alert("phone is require");
        return false;
    }

    if (email == "") {
        alert("email is require");
        return false;
    } else if (!email.includes("@")) {
        alert("Invalid email address");
        return false;
    }


    if (province == "") {
        alert("province is require");
        return false;
    }

    if (tour == "") {
        alert("tujuan is require");
        return false;
    }

    if (date == "") {
        alert("date is require");
        return false;
    }

    if (parti == "") {
        alert("participant is require");
        return false;
    } else if (parti < 1) {
        alert("The minimum number of participants is one.");
        return false;
    }

    return true;
}

function showData() {
    let peopleList;
    if (localStorage.getItem("peopleList") == null) {
        peopleList = [];
    } else {
        peopleList = JSON.parse(localStorage.getItem("peopleList"));
    }

    let html = "";

    peopleList.forEach(function (element, index) {
        let cardClass = "";
        if (index % 3 === 0) {
            cardClass = "card-color-1";
        } else if (index % 3 === 1) {
            cardClass = "card-color-2";
        } else {
            cardClass = "card-color-3";
        }

        html += '<div class="row">';
        html += '<div class="card mb-3 ' + cardClass + '">';
        html += '<div class="card-body">';
        html += '<div class="card-content">';
        html += '<img src="/assets/img/prof.png" alt="Gambar" />';
        html += '<div class="text-content">';
        html += '<h5 class="card-text fw-bold" style="font-size: 17px;">' + element.name + '</h5>';
        html += '<p class="card-text" style="font-size: 12px; margin-top: -8px;">' + element.email + '</p>';
        html += '<p class="card-text" style="font-size: 12px; margin-top: -8px;">' + element.phone + '</p>';
        html += '</div>';
        html += '</div>';
        html += '<hr>';
        html += '<h5 class="card-text fw-bold" style="font-size: 17px;">Departure Time: ' + element.date + '</h5>';
        html += '<p class="card-text" style="font-size: 14px;">' + element.tour + '</p>';
        html += '<p class="card-text" style="font-size: 14px;">' + element.parti + ' Ticket</p>';
        html += '<h5 class="card-text" style="font-size: 14px; color: green;">Price: ' + element.total + '</h5>';
        html += '<div class="card-body d-flex">';
        html += '<div class="flex-grow-1">';
        html += '<button class="btn btn-warning btn-sm me-2 w-100" onclick="updateData(' + index + ')">Change Order</button>';
        html += '</div>';
        html += '<button class="btn btn-danger btn-sm ms-2 fa fa-trash " onclick="deleteData(' + index + ')"></button>';
        html += '</div>';
        html += '</div>';
        html += '</div>';
        html += '</div>';


    });

    document.querySelector("#cardContainer").innerHTML = html;
}

window.onload = showData;

function AddData(index) {
    if (validateForm()) {
        let name = document.getElementById("name").value;
        let phone = document.getElementById("phone").value;
        let email = document.getElementById("email").value;
        let province = document.getElementById("provinsi-select").value;
        let tour = document.getElementById("tour-select").value;
        let date = document.getElementById("date").value;
        let parti = document.getElementById("parti").value;
        let price = document.getElementById("price").value;
        let total = document.getElementById("total-price").value;


        let peopleList;
        if (localStorage.getItem("peopleList") == null) {
            peopleList = [];
        } else {
            peopleList = JSON.parse(localStorage.getItem("peopleList"));
        }

        peopleList.push({
            name: name,
            phone: phone,
            email: email,
            province: province,
            tour: tour,
            date: date,
            parti: parti,
            price: price,
            total: total
        });

        localStorage.setItem("peopleList", JSON.stringify(peopleList));

        Swal.fire(
            'Thank You',
            'Succesfully Booked',
            'success'
        );

        showData();
        document.getElementById("name").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("email").value = "";
        document.getElementById("provinsi-select").value = "";
        document.getElementById("tour-select").value = "";
        document.getElementById("date").value = "";
        document.getElementById("parti").value = "";
        document.getElementById("price").value = "";
        document.getElementById("total-price").value = "";
    }
}

function deleteData(index) {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Deleted!',
                'Your data has been deleted.',
                'success'
            )
            let peopleList = JSON.parse(localStorage.getItem("peopleList"));
            peopleList.splice(index, 1);
            localStorage.setItem("peopleList", JSON.stringify(peopleList));
            showData();
        }
    })
}


function updateData(index) {
    document.getElementById("submit").style.display = "none";
    document.getElementById("update").style.display = "block";


    let peopleList;
    if (localStorage.getItem("peopleList") == null) {
        peopleList = [];
    } else {
        peopleList = JSON.parse(localStorage.getItem("peopleList"));
    }

    // Isi data form dengan data dari localStorage
    document.getElementById("name").value = peopleList[index].name;
    document.getElementById("phone").value = peopleList[index].phone;
    document.getElementById("email").value = peopleList[index].email;
    document.getElementById("provinsi-select").value = peopleList[index].province;
    document.getElementById("tour-select").value = peopleList[index].tour;
    document.getElementById("date").value = peopleList[index].date;
    document.getElementById("parti").value = peopleList[index].parti;
    document.getElementById("price").value = peopleList[index].price;
    document.getElementById("total-price").value = peopleList[index].total;


    // Tampilkan pop up dialog
    let updateDialog = new bootstrap.Modal(document.getElementById("BookingModal"));
    updateDialog.show();

    document.querySelector("#update").onclick = function () {
        if (validateForm() == true) {
            peopleList[index].name = document.getElementById("name").value;
            peopleList[index].phone = document.getElementById("phone").value;
            peopleList[index].email = document.getElementById("email").value;
            peopleList[index].province = document.getElementById("provinsi-select").value;
            peopleList[index].tour = document.getElementById("tour-select").value;
            peopleList[index].date = document.getElementById("date").value;
            peopleList[index].parti = document.getElementById("parti").value;
            peopleList[index].price = document.getElementById("price").value;
            peopleList[index].total = document.getElementById("total-price").value;

            localStorage.setItem("peopleList", JSON.stringify(peopleList));

            showData();
            document.getElementById("name").value = "";
            document.getElementById("phone").value = "";
            document.getElementById("email").value = "";
            document.getElementById("provinsi-select").value = "";
            document.getElementById("tour-select").value = "";
            document.getElementById("date").value = "";
            document.getElementById("parti").value = "";
            document.getElementById("price").value = "";
            document.getElementById("total-price").value = "";

            Swal.fire(
                'Appointment',
                'Order Changed Successfully',
                'success'
            ).then(() => {
                updateDialog.hide();
            });

            document.getElementById("submit").style.display = "block";
            document.getElementById("update").style.display = "none";
        }
    }

}

// menghilangkan inputan ketika klik tombol cancel
document.querySelector("#cancel").onclick = function () {
    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("email").value = "";
    document.getElementById("provinsi-select").value = "";
    document.getElementById("tour-select").value = "";
    document.getElementById("date").value = "";
    document.getElementById("parti").value = "";
    document.getElementById("price").value = "";
    document.getElementById("total-price").value = "";

    document.getElementById("submit").style.display = "block";
    document.getElementById("update").style.display = "none";
}