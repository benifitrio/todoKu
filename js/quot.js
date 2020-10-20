function quotes(){
	let body = document.getElementById('body_content')
	body.innerHTML = `
		<img src="../blogging.png" alt="" class="w-100" data-aos="fade-ease-in-out-quart">
	`
    body.innerHTML +=`
        <div class="card" data-aos="fade-slide-left" data-aos-delay="300">
		  <div class="card-header">
		    Quote
		  </div>
		  <div class="card-body">
		    <blockquote class="blockquote mb-0">
		      <p>Jangan takut, jangan sedih, berdoalah, semoga apapun yang kamu perjuangkan Allah beri kelancaran.</p>
		      <footer class="blockquote-footer">dzikirinazah</footer>
		    </blockquote>
		  </div>
		</div>
		<div class="card my-3" data-aos="fade-right" data-aos-delay="600">
		  <div class="card-header">
		    Quote
		  </div>
		  <div class="card-body">
		    <blockquote class="blockquote mb-0">
		      <p>Jangan berhenti saat sulit.</p>
		      <footer class="blockquote-footer">blackdor</footer>
		    </blockquote>
		  </div>
		</div>
		<div class="card my-3" data-aos="fade-up" data-aos-delay="900">
		  <div class="card-header">
		    Quote
		  </div>
		  <div class="card-body">
		    <blockquote class="blockquote mb-0">
		      <p>Sesuatu yang sulit hanya butuh waktu lebih lama.</p>
		      <footer class="blockquote-footer">redzone</footer>
		    </blockquote>
		  </div>
		</div>`;
}