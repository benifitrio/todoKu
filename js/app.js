function todo(){
    const todoInputSelect = document.querySelector('#todo-select');
    const todoInputDeskripsi= document.querySelector('#todo-deskripsi');
    const todoInputTanggal = document.querySelector('#todo-tanggal');
    const todoInputWaktu = document.querySelector('#todo-waktu');
    const todoButton = document.querySelector('.todo-button');
    const todoList = document.querySelector('.todo-list');

    window.addEventListener('DOMContentLoaded', getTodos);
    window.addEventListener('hashchange', getTodos);

    const myObj = {
        hari: null,
        jam : null,
        menit: null,
        total: null,
       coutdown: function getTimeRemaining(deadline) {

          const total = Date.parse(deadline) - Date.parse(new Date());
          const seconds = Math.floor((total / 1000) % 60);
          const minutes = Math.floor((total / 1000 / 60) % 60);
          const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
          const days = Math.floor(total / (1000 * 60 * 60 * 24));

          this.hari =  days;
          this.jam = hours;
          this.menit = minutes;
          this.total = total;
        }
    }

    function initializeClock(id, endtime) {
      if(id != null){
        const clock = document.querySelectorAll(id);
        let a;
        for (var i = 0; i < clock.length; i++) {
          a = clock[i];
        }

        const deadline = new Date(Date.parse(`${endtime.myTanggal} ${endtime.myWaktu}`));
        myObj.coutdown(deadline);

        function updateClock() {
          a.innerHTML = `
              <div>${myObj.hari}<span>Days</span></div>
              <div>${myObj.jam}<span>Hours</span></div>
              <div>${myObj.menit}<span>Mins</span></div>`;
        }

        updateClock();
      }else{
        const deadline = new Date(Date.parse(`${endtime.a} ${endtime.b}`));
        myObj.coutdown(deadline);
      }
    }

    todoButton.addEventListener('click', addTodo);
    function addTodo(e){
        e.preventDefault();

        let mySelect = todoInputSelect.value;
        let myDeskripsi = todoInputDeskripsi.value;
        let myTanggal = todoInputTanggal.value;
        let myWaktu = todoInputWaktu.value;

        todoInputSelect.addEventListener('change', e =>{
            mySelect = e.target.value;
        })
        todoInputTanggal.addEventListener('change', e =>{
            myTanggal = e.target.value;
        });

        const div = document.createElement('div');
        div.classList.add('card');
        div.classList.add('text-center');
        div.classList.add('my-3');
        div.classList.add('todo');
        div.innerHTML = `
                <div data-aos="fade-down">
                    <div class="card-header">
                        ${mySelect}
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${myDeskripsi}</h5>
                        <p class="card-text">
                            <div class="clockdiv" ></div>
                        </p>
                        <button type="button" class="btn btn-danger"><i class="fas fa-trash"></i></button>
                    </div>
                    <div class="card-footer text-muted">
                        <span class="tanggal">${myTanggal}</span>
                        <span class="waktu">${myWaktu}</span>
                    </div>
                </div>`;

        todoList.append(div);
        initializeClock('.clockdiv', {myTanggal, myWaktu});
        let a = myObj.hari;
        let b = myObj.jam;
        let c = myObj.menit;
        saveLocalTodos({mySelect, myDeskripsi, myTanggal, myWaktu, a,b,c});
    }

    todoList.addEventListener('click', deleteCheck);
    function deleteCheck(e){
        const item = e.target;
        console.log(item);
        const todo = item.parentElement.parentElement.parentElement;
        removeLocalTodos(todo);

        if(item.classList.contains ("btn")){
          todo.classList.add('fall');
          todo.addEventListener('transitionend', ()=>{
               todo.remove();
          })
        }
    }

    function saveLocalTodos(todo){
        let todos;
        if(localStorage.getItem('todos') === null){
            todos = [];
        }else {
            todos = JSON.parse(localStorage.getItem('todos'));
        }

        todos.push(todo);
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    function getTodos(){
        let todos;
        if(localStorage.getItem('todos') === null){
            todos = [];
        }else {
            todos = JSON.parse(localStorage.getItem('todos'));
        }

        function mySuccess(a, b){
          let da = {a, b};
          initializeClock(id = null, da);
          let c = myObj.total;
          if(c < 0){
              return `<h2>Selesai &nbsp <i class="fas fa-check text-success"></i></h2>`
            }else{
                return `<div>${myObj.hari}<span>Days</span></div>
                              <div>${myObj.jam}<span>Hours</span></div>
                              <div>${myObj.menit}<span>Mins</span></div>`
            }
        }

        todos.forEach(todo =>{
          const div = document.createElement('div');
            div.classList.add('card');
            div.classList.add('text-center');
            div.classList.add('my-3');
            div.classList.add('todo');
            div.innerHTML = `
                    <div data-aos="fade-down">
                        <div class="card-header">
                            ${todo.mySelect}
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">${todo.myDeskripsi}</h5>
                            <p class="card-text">
                                <div class="clockdiv">
                                    ${mySuccess(todo.myTanggal, todo.myWaktu)}
                                </div>
                            </p>
                            <button type="button" class="btn btn-danger"><i class="fas fa-trash"></i></button>
                        </div>
                        <div class="card-footer text-muted">
                            <span class="tanggal">${todo.myTanggal}</span>
                                <i class="far fa-clock"></i>
                            <span class="waktu">${todo.myWaktu}</span>
                        </div>
                    </div>`;

            todoList.appendChild(div);
        })
    }

    function removeLocalTodos(todo){
        let todos;

        if(localStorage.getItem('todos') === null){
            todos = [];
        }else {
            todos = JSON.parse(localStorage.getItem('todos'));
        }
        const todoIndex = todo.children[0].innerText;
        todos.forEach( el =>{
          todos.splice(el.mySelect.indexOf(todoIndex),1);
        })

        localStorage.setItem('todos', JSON.stringify(todos));
    }
}