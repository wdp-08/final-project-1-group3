let logout = document.querySelector('.logoutBtn');
if (logout) {
  logout.addEventListener('click', function(){
    Swal.fire({
          title: 'Come back soon!',
          text: "Are you want to log out?",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes'
      }).then((result) => {
          if (result.isConfirmed) {
              window.location.href = '../pages/login.html';
          }
      });
  });
}