document.querySelector("#agregar-tarea").addEventListener("click",(function(){const a=document.createElement("DIV");a.classList.add("modal"),a.innerHTML='\n            <form class="formulario nueva-tarea">\n                <legend>Añade una nueva tarea</legend>\n                <div class="campo">\n                    <label>Tarea</label>\n                    <input type="tarea" name="tarea" placeholder="Añade una nueva tarea al proyecto actual" id="tarea"/>\n                </div>\n                <div class="opciones">\n                    <input type="submit" class="submit-nueva-tarea" value="Añadir tarea"/>\n                    <button type="button" class="cerrar-modal">Cancelar</button>\n                </div>\n            </form>\n        ',setTimeout(()=>{document.querySelector(".formulario").classList.add("animar")},0),a.addEventListener("click",e=>{e.preventDefault(),(e.target.classList.contains("cerrar-modal")||e.target.classList.contains("modal"))&&(document.querySelector(".formulario").classList.add("cerrar"),setTimeout(()=>{a.remove()},500))}),document.querySelector("body").appendChild(a)}));