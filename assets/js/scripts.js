// sidebar
let toggleSidebar = document.getElementById('toggle-sidebar');
let openSidebar = document.getElementById('openSidebar');
let overlay = document.getElementById('overlay');

toggleSidebar.addEventListener('click', function () {
  toggleSidebar.parentElement.parentElement.parentElement.classList.toggle('close');
  overlay.classList.remove('active');
})

openSidebar.addEventListener('click', function () {
  openSidebar.parentElement.parentElement.parentElement.parentElement.previousElementSibling.classList.add('close');
  overlay.classList.add('active');
})

// select2
$(document).ready(function () {
  $('.js-example-basic-multiple').select2();
});

let machineCategory = Array.from(document.querySelectorAll('.machineCategory option'));
let activityFields = Array.from(document.querySelectorAll('.activityFields select'));
let machineType = Array.from(document.querySelectorAll('.machineType select'));
let foreign = Array.from(document.querySelectorAll('#foreign option'));

machineCategory.forEach((item) => {
  item.addEventListener('click', function () {
    let catId = item.dataset.id;
    activityFields.forEach((item) => {
      let fieldId = item.dataset.id;
      if (catId === fieldId) {
        item.classList.add('d-block');
        item.classList.remove('d-none');
      } else {
        item.classList.remove('d-block');
        item.classList.add('d-none');
      }
    })
    machineType.forEach((item) => {
      let typeId = item.dataset.id;
      if (catId === typeId) {
        item.classList.add('d-block');
        item.classList.remove('d-none');
      } else {
        item.classList.remove('d-block');
        item.classList.add('d-none');
      }
    })
  })
})
foreign.forEach((item) => {
  item.addEventListener('click', function () {
    let catId = item.dataset.id;
    machineType.forEach((item) => {
      let typeId = item.dataset.id;
      if (catId === typeId) {
        item.classList.add('d-block');
        item.classList.remove('d-none');
      } else {
        item.classList.remove('d-block');
        item.classList.add('d-none');
      }
    })
  })
})

// data table

// let table = new DataTable('#myTable');
$(document).ready(function () {
  $('#myTable').DataTable({
    paging: false
  });
  $('#myTable2').DataTable({
    paging: false
  });
  $('#myTable3').DataTable({
    paging: false
  });
  $('#myTable4').DataTable({
    paging: false
  });
});


// datapicker

jalaliDatepicker.startWatch();

// sweet alert

let submitForm = document.getElementById('submit');

submitForm.addEventListener('click', function (e) {
  e.preventDefault();
  Swal.fire({
    position: 'top-center',
    icon: 'success',
    title: 'با موفقیت ثبت شد',
    showConfirmButton: false,
    timer: 3000
  })
})  
