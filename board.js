
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

            <button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover"
                data-bs-placement="top" data-bs-content="${tasks[i].date}<br>${tasks[i].category}<br>">
                ${tasks[i].title}
            </button>
         `;

    }

}