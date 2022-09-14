// Js for stick nav bar
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky ) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


// procurement page records javascript
const selectedOp = document.getElementById('paymentTerms');

const creditOption = document.getElementById('creditTx');
const cashOption = document.getElementById('cashTx');
const otherOption = document.getElementById('otherTx')


creditOption.style.display = 'none';
cashOption.style.display = 'block';
otherOption.style.display = 'none';


selectedOp.addEventListener('change',function handleChange(event) {
  if (event.target.value === 'cashTxn') {
    creditOption.style.display = 'none';
    otherOption.style.display = 'none';
    cashOption.style.display = 'block';
  } 
  else if (event.target.value === 'creditTxn') {
    cashOption.style.display = 'none';
    otherOption.style.display = 'none';
    creditOption.style.display = 'block';
  }
  else if (event.target.value === 'otherTxn') {
    cashOption.style.display = 'none';
    creditOption.style.display = 'none';
    otherOption.style.display = 'block';
    
  }
  else{
    cashOption.style.display = 'block';
    creditOption.style.display = 'none';
    otherOption.style.display = 'none';
  }

}
)






