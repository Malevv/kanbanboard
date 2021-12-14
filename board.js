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
         
          <div class="dropdown">
                <button class="distance btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    ${tasks[i].title}
                </button>
                <ul class="dropdown-menu" aria-labelledby="">
                    <li><a class="dropdown-item" href="#">${tasks[i].date}</a></li>
                    <li><a class="dropdown-item" href="#">${tasks[i].category}</a></li>
                    <li><a class="dropdown-item" href="backlog.html">Link to</a></li>
                </ul>
            </div>
         `;

    }

}