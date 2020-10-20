function todoInput(){
	const body = document.getElementById('body_content');
	body.innerHTML = `
		<div class="container">
		    <h3>Create To do List nOW</h3>
		  	<form data-aos="fade-ease-in-cubic" data-aos-delay="300">
			    <div class="mb-3">
			      <select class="form-select" id="todo-select" >
			        <option selected>Pilih mata kuliah</option>
			        <option value="Analisis real">Analisis real</option>
			        <option value="Kalkulus peubah banyak">Kalkulus peubah banyak</option>
			        <option value="Matematika diskrit">Matematika diskrit</option>
			        <option value="Evaluasi pembelajaran">Evaluasi pembelajaran</option>
			        <option value="Metode numerik">Metode numerik</option>
			        <option value="Aljabar abstrak">Aljabar abstrak</option>
			        <option value="Metodologi penelitian">Metodologi penelitian</option>
			        <option value="Perencanaan pembelajaran">Perencanaan pembelajaran</option>
			      </select>
			    </div>
			    <div class="mb-3">
			      <input type="text" class="form-control" id="todo-deskripsi">
			      <small class="form-text text-danger">**deskripsi tugas</small>
			    </div>
			    <div class="mb-3">
			      <input type="date" class="form-control" id="todo-tanggal">
			      <small class="form-text text-danger">**tanggal deadline</small>
			    </div>
			    <div class="mb-3">
			      <input type="text" class="form-control" id="todo-waktu">
			      <small class="form-text text-danger">**waktu deadline format (eg. 12:00)</small>
			    </div>
			    <button type="submit" class="btn btn-primary todo-button">Submit</button>
		  	</form>
		  	<div class="my-5">
			  <div class="text-header d-flex flex-column text-center">
			    <hr>
			    <h4>Todo List</h4>
			    <div data-aos="fade-right" data-aos-delay="600">
			       <img src="notes.png" alt="" class="w-100 rounded" >
			    </div>
			  </div>
			  <ul class="list-group todo-list" >
			    <div class="card text-center my-3 todo" data-aos="fade-left" data-aos-delay="900">
			      <div class="card-header">
			        Aljabar abstrak
			      </div>
			      <div class="card-body">
			        <h5 class="card-title">Mengerjakan latihan soal materi Aljabar 2</h5>
			        <p class="card-text"><div class="countdown">deadline ku</div></p>
			        <button type="button" class="btn btn-danger"><i class="fas fa-trash"></i></button>
			      </div>
			      <div class="card-footer text-muted">
			        <span class="tanggal">21 Oct 2020</span>//
			        <span class="waktu">10:50</span>
			      </div>
			    </div>
			  </ul>
			</div>
		</div>`;

	const tanggal = document.querySelector('.tanggal').innerText;
  	const waktu = document.querySelector('.waktu').innerText;
  	const countdown = document.querySelector('.countdown');

  	// Set Launch Date (ms)
  	const launchDate = new Date(`${tanggal} ${waktu}`);

	      // Update every second
  	const intvl = setInterval(() => {
      	// Get todays date and time (ms)
     	const now = new Date().getTime();

      	// Distance from now and the launch date (ms)
      	const distance = launchDate - now;

      	// Time calculation
      	const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      	const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      	);
      	const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

      	// Display result
      	countdown.innerHTML = `
          <div>${days}<span>Days</span></div>
          <div>${hours}<span>Hours</span></div>
          <div>${mins}<span>Mins</span></div>`;

      	// If launch date is reached
      	if (distance < 0) {
          // Stop countdown
          clearInterval(intvl);
          // Style and output text
          countdown.style.color = '#17a2b8';
          countdown.innerHTML = 'Good Selesai...!';
      	}
  	}, 1000);

  	todo();
}