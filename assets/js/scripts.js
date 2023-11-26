// sidebar
let toggleSidebar=document.getElementById('toggle-sidebar');
let openSidebar=document.getElementById('openSidebar');
let overlay=document.getElementById('overlay');

toggleSidebar.addEventListener('click',function () {
  toggleSidebar.parentElement.parentElement.parentElement.classList.toggle('close');
  overlay.classList.remove('active');
})  

openSidebar.addEventListener('click',function () {
  openSidebar.parentElement.parentElement.parentElement.parentElement.previousElementSibling.classList.add('close');
  overlay.classList.add('active');
})  

// data table

// let table = new DataTable('#myTable');
$(document).ready( function () {
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
} );  

// select2
$(document).ready(function() {
  $('.js-example-basic-multiple').select2();
});  

// datapicker

jalaliDatepicker.startWatch();

// sweet alert

let submitForm=document.getElementById('submit');

submitForm.addEventListener('click',function (e) {
  e.preventDefault();
  Swal.fire({
    position: 'top-center',
    icon: 'success',
    title: 'با موفقیت ثبت شد',
    showConfirmButton: false,
    timer: 3000
  })  
})  
