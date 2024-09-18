//MENU REFS		
let navControl = document.getElementById('nav-control');
let navDisc = document.getElementById('nav-disc');
let navMaxi =  document.getElementById('nav-maxi');
let navIcon =  document.getElementById('nav-icon');
let navLinks = document.querySelectorAll('[class^="nm"]');


// SET UP DOC LOAD
// addEventListener("DOMContentLoaded", (event) => {
// 	setTimeout(() => {window.scrollTo(0, 0)}, '50');
// 	setTimeout(() => {navMaxi.classList.remove('nav-offscreen-set')}, '500');
// });	


// MAXI MENU OPEN CLOSE
function openClose() {

	if (navMaxi.classList.contains('nav-show')) {

		navMaxi.classList.remove('nav-show');
		navMaxi.classList.add('nav-hide');

		navIcon.classList.remove('icon-x');
		navDisc.classList.remove('disc-show');
	} else {
		navMaxi.classList.remove('nav-hide');
		navMaxi.classList.add('nav-show');
		
		navIcon.classList.add('icon-x');
		navDisc.classList.add('disc-show');
	}
};

// HAMBURGER CLICK
navControl.addEventListener('click', function (e) {
	openClose();
});

// MAXI MENU LINKS CLICK
navLinks.forEach((navItem) => {
		navItem.addEventListener("click", function (e) {
			let correspandingSection = this.dataset.target;
			document.getElementById(correspandingSection).scrollIntoView({ behavior: "instant" });
		openClose();
	});
});
