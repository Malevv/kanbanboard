var popover = new bootstrap.Popover(document.querySelector('.example-popover'), {
    container: 'body'
})




function boardinfo() {
    for (let i = 0; i < tasks.length; i++) {
        // backend funktioniert nicht, anil fragen??
        // // category und priority auf chose... setzen???


        // minlength="5" mindestens 5 Zeichen ?
        // // required in felder von HTML Tasks angeben (Pflichtfelder)?
        // // dafür: add tasks in form tag reingeben und keine onload
        // funktion sondern onsubmit=""?
        // type= email?? damit email richtig angegeben wird
        // google: HTML5 form validation (weitere Tipps um die form von add tasks zu optimieren)
        document.getElementById('boardContent').innerHTML += `
         <div>
            <div id="color${i}" class="popup btn-secondary" onclick="poppey(${i})">${tasks[i].title}
            <span class="popuptext" id="Popup${i}">${tasks[i].date} asdfsdfasfaf ${tasks[i].category}</span>
          </div>
          </div>
         `;
        boardButton(i)

    }

}

function boardButton(i) {

    if (tasks[i]['priority'] == 'low') {
        document.getElementById('color' + i).classList.remove('btn-secondary');
        document.getElementById('color' + i).classList.add('btn-success');
    }

    if (tasks[i]['priority'] == 'medium') {
        document.getElementById('color' + i).classList.remove('btn-secondary');
        document.getElementById('color' + i).classList.add('btn-warning');
    }

    if (tasks[i]['priority'] == 'high') {
        document.getElementById('color' + i).classList.remove('btn-secondary');
        document.getElementById('color' + i).classList.add('btn-danger');
    }
}

function poppey(i) {
    let popup = document.getElementById("Popup" + i);
    popup.classList.toggle("show");
}


{/* <div class="dropdown">
<button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1${i}"
    data-bs-toggle="dropdown" aria-expanded="false">
    ${tasks[i].title}
</button>
<ul class="dropdown-menu" aria-labelledby="${tasks[i].title}">
    <li><a class="dropdown-item" href="#">${tasks[i].date}</a></li>
    <li><a class="dropdown-item" href="#">${tasks[i].category}</a></li>
    <li><a class="dropdown-item" href="backlog.html">Link to</a></li>
</ul>
</div> */}