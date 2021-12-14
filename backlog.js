

function backlog() {
    for (let i = 0; i < tasks.length; i++) {
        // backend funktioniert nicht, anil fragen??
        // // category und priority auf chose... setzen???
        
        
        // minlength="5" mindestens 5 Zeichen ?
        // // required in felder von HTML Tasks angeben (Pflichtfelder)?
        // // dafür: add tasks in form tag reingeben und keine onload
        // funktion sondern onsubmit=""?
        // type= email?? damit email richtig angegeben wird
        // google: HTML5 form validation (weitere Tipps um die form von add tasks zu optimieren)
         document.getElementById('showTasksBacklog').innerHTML += `
         
         <div class="textAndField">
         
         <div class="prioH .prioM .prioL .dnone">
             <div>
                 <img src="images/Maria.png" alt="">
             </div>
 
         </div>
         <div class="board-card  bg1">
             <div class="cont-inside"><input type="text" placeholder="${tasks[i]['title']}"><input type="text" placeholder="E-mail">
             </div>
             <div>
                 <input class="category" type="text" placeholder="Category">
             </div>
             <div>
                 <textarea name=""
                     id="discription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo veritatis provident consequatur, nobis voluptatem dolore ipsam, hic velit sequi!</textarea>
             </div>
         </div>
     </div>
         `;
        
    }
}