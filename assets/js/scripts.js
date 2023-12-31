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

let machineCategory = Array.from(document.querySelectorAll('.machineCategory option'));
let kalaType = Array.from(document.querySelectorAll('.kalaType option'));
let activityFields = Array.from(document.querySelectorAll('.activityFields select'));
let productName = Array.from(document.querySelectorAll('.productName > div'));
let machineType = Array.from(document.querySelectorAll('.machineType div'));
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
kalaType.forEach((item) => {
  item.addEventListener('click', function () {
    let kalaId = item.dataset.id;
    productName.forEach((item) => {
      let productId = item.dataset.id;
      if (kalaId === productId) {
        item.classList.add('d-block');
        item.classList.remove('d-none');
      } else {
        item.classList.remove('d-block');
        item.classList.add('d-none');
      }
    })
  })
})

// sweet alert

// let submitForm = document.getElementById('submit');

// submitForm.addEventListener('click', function (e) {
//   e.preventDefault();
//   Swal.fire({
//     position: 'top-center',
//     icon: 'success',
//     title: 'با موفقیت ثبت شد',
//     showConfirmButton: false,
//     timer: 3000
//   })
// })  
