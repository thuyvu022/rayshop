// JavaScript Document
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

$("#banner").owlCarousel({
loop:true, // cho lap lại
items:1, // xuất hiện 1 ảnh thôi
smartSpeed:2000, // tốc độ thay đổi ảnh
autoplay:true, // cho phép tự động chạy
autoplayTimeout:10000, // thời gian chờ khi chuyển ảnh khi chạy tự động
nav:true, // cho xuất hiện bộ nút tới lui
margin:0
})
$("#gallery").owlCarousel({
loop:true, // cho lap lại
items:4, // xuất hiện 1 ảnh thôi
smartSpeed:1000, // tốc độ thay đổi ảnh
autoplay:true, // cho phép tự động chạy
autoplayTimeout:5000, // thời gian chờ khi chuyển ảnh khi chạy tự động
// nav:true, cho xuất hiện bộ nút tới lui
margin:30,
	dots:false,
})


