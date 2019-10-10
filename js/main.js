window.addEventListener("load", () => {
	document.addEventListener("scroll", () => {
		if (window.scrollY > 0) {
			document.querySelector("nav").classList.add("nav-scrolled");
		} else {
			document.querySelector("nav").classList.remove("nav-scrolled");
		}
	});
});
