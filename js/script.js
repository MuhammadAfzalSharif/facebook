

// slider 

document.getElementById('ArrowLeft').onclick = slideLeft;
document.getElementById('ArrowRight').onclick = slideRight;
var left = 0;

function slideLeft() {
	var images = document.getElementById('img-list');
	left += 128;
	if(left > 0) {
		left = 0;
	}
	images.style.left = left + 'px';
}

function slideRight() {
	var images = document.getElementById('img-list');
	left -= 128;
	if(left < -512) {
		left = 0;
	}
	images.style.left = left + 'px';

}


// dropdown 

//  When the user clicks on the button,
// toggle between hiding and showing the dropdown content 
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}


// FACEBOOK ICON HOVER 
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.fixed-action-btn');
  var instances = M.FloatingActionButton.init(elems, {
    direction: 'left'
  });
});