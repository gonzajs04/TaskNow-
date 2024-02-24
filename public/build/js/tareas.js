(()=>{!async function(){try{const e="http://localhost:3000/api/tareas?urlProyecto="+r(),o=await fetch(e),n=await o.json();t=n.tareas,a(t)}catch(e){console.log(e)}}(),function(){const o=document.querySelectorAll("#filtro");o&&o.forEach(o=>{o.onclick=()=>{!function(o){if(""==o.value)return void a(t);e=t.filter(e=>e.estado==o.value),a(e)}(o)}})}();let e=[],t=[];function a(e){document.querySelector("#listado-tareas").innerHTML="";const t=document.querySelector("#listado-tareas");if(0==e.length){const e=document.createElement("LI");return e.textContent="No hay tareas",e.classList.add("alerta","aviso"),e.style.textAlign="center",void t.appendChild(e)}const r={0:"Pendiente",1:"Completada"};e.forEach(s=>{const i=document.createElement("LI");i.dataset.tareaId=s.id,i.classList.add("tarea");const d=document.createElement("P");d.textContent=s.nombre,d.ondblclick=()=>{o(!0,{...s})};const l=document.createElement("DIV");l.classList.add("opciones");const u=document.createElement("BUTTON");u.classList.add("estado-tarea"),u.classList.add(""+r[s.estado].toLowerCase()),u.textContent=r[s.estado],u.dataset.estadoTarea=s.estado;const m=document.createElement("BUTTON");m.classList.add("eliminar-tarea"),m.textContent="Eliminar tarea",m.dataset.idTarea=s.id,l.appendChild(u),l.appendChild(m),i.appendChild(d),i.appendChild(l),t.appendChild(i),u.onclick=()=>{!function({...e}){const t="0"===e.estado?"1":"0";e.estado=t,n(e)}(s)},m.onclick=()=>{!function(t){Swal.fire({title:"¿Estas seguro que queres eliminar la tarea?",showDenyButton:!0,confirmButtonText:"Si, estoy seguro",cancelButtonText:"No"}).then(o=>{o.isConfirmed&&async function(t){const{id:o,estado:n,nombre:r,idProyecto:s}=t,i=new FormData;i.append("id",o),i.append("idProyecto",s),i.append("nombre",r),i.append("estado",n);const d=await fetch("http://localhost:3000/api/tarea/eliminar",{method:"POST",body:i});"exito"===(await d.json()).tipo?(c("success","Exito","Tarea borrada correctamente"),e=e.filter(e=>e.id!=o),a(e)):c("error","Oops..","La tarea no se pudo borrar")}(t)})}(s)}})}function o(e=!1,o){const s=document.createElement("DIV");s.classList.add("modal"),s.innerHTML=`\n            <form class="formulario nueva-tarea">\n                <legend>${e?"Editar tarea":"Añade una nueva tarea"}</legend>\n                <div class="campo">\n                    <label>Tarea</label>\n                    <input type="tarea" name="tarea" placeholder="${e?"Editar tarea":"Añade una nueva tarea al proyecto actual"}" id="tarea" value="${o?o.nombre:""}"/>\n                </div>\n                <div class="opciones">\n                    <input type="submit" class="submit-nueva-tarea" value="${e?"Guardar los cambios":"Añade una nueva tarea"}"/>\n                    <button type="button" class="cerrar-modal">Cancelar</button>\n                </div>\n            </form>\n        `,setTimeout(()=>{document.querySelector(".formulario").classList.add("animar")},0),s.addEventListener("click",i=>{if(i.preventDefault(),i.target.classList.contains("cerrar-modal")||i.target.classList.contains("modal")){document.querySelector(".formulario").classList.add("cerrar"),setTimeout(()=>{s.remove()},500)}if(i.target.classList.contains("submit-nueva-tarea")){const s=document.querySelector("#tarea").value.trim();if(""===o)return void function(e,t,a){const o=document.querySelector(".alerta");o&&o.remove();const n=document.createElement("DIV");n.classList.add("alerta",t),n.textContent=e,a.parentElement.insertBefore(n,a.nextElementSibling),setTimeout(()=>{n.remove()},6e3)}("El nombre de la tarea es obligatorio","error",document.querySelector(".formulario legend"));if(!e)return void async function(e){const o=new FormData;o.append("nombre",e),o.append("idProyecto",r());try{const n="http://localhost:3000/api/tarea",r=await fetch(n,{method:"POST",body:o}),s=await r.json();if(c("success","Exito","Tarea creada correctamente"),"exito"===s.tipo){const o={id:s.id.toString(),nombre:e,estado:"0",idProyecto:s.idProyecto};t=[...t,o],a(t);const n=document.querySelector(".modal");n&&n.remove()}}catch(e){console.log(e)}}(s);o.nombre=s,n(o)}}),document.querySelector(".dashboard").appendChild(s)}async function n(e){const{id:o,estado:n,nombre:s}=e,i=new FormData;i.append("id",o),i.append("nombre",s),i.append("estado",n),i.append("urlProyecto",r());try{const e="http://localhost:3000/api/tarea/actualizar",r=await fetch(e,{method:"POST",body:i});if("exito"===(await r.json()).tipo){c("success","Exito","Tarea actualizada correctamente"),t=t.map(e=>(e.id===o&&(console.log(e.estado),e.estado=n,e.nombre=s,console.log(e.estado=n)),e));const e=document.querySelector(".modal");e&&e.remove(),a(t)}}catch(e){console.log(e)}}function r(){const e=new URLSearchParams(window.location.search);return Object.fromEntries(e.entries()).urlProyecto}function c(e,t,a){Swal.fire({icon:e,title:t,text:a,button:"OK"})}document.querySelector("#agregar-tarea").addEventListener("click",()=>{o()})})();