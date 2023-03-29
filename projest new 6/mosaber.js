<section id="portfolio">
	<div class="container">
		<h2>Portfolio</h2>
		<div class="slideshow">
			<img src="project1.jpg" alt="Project 1">
			<img src="project2.jpg" alt="Project 2">
			<img src="project3.jpg" alt="Project 3">
		</div>
	</div>
</section>

<script>
	var slideIndex = 0;
	showSlides();

	function showSlides() {
		var i;
		var slides = document.getElementsByClassName("slideshow");
		for (i = 0; i < slides.length; i++) {
			slides[i].style.display = "none";
		}
		slideIndex++;
		if (slideIndex > slides.length) {slideIndex = 1}
		slides[slideIndex-1].style.display = "block";
		setTimeout(showSlides, 5000); // Change image every 5 seconds
	}
</script>
