function iniciarApp(){marcarProyectos(),confirmPapelera()}function marcarProyectos(){let e;const r=document.querySelectorAll(".proyecto"),a=document.querySelector(".papelera");r&&r.forEach(c=>{c.addEventListener("click",()=>{deseleccionarProyectos(r),c.classList.add("marcar"),a.classList.add("visibilidad"),e=breakSpace(c),a.dataset.urlEliminar=""+e})})}document.addEventListener("DOMContentLoaded",()=>{iniciarApp()});const deseleccionarProyectos=e=>{e.forEach(e=>{e.classList.remove("marcar")})};function breakSpace(e){return e.classList[1]}function confirmPapelera(){const e=document.querySelector(".papelera");e&&e.addEventListener("click",()=>{confirm("¿Estas seguro que queres borrar el proyecto?")&&dispararSwal("success","Exito","Proyecto borrado correctamente","/eliminar?urlProyecto="+e.dataset.urlEliminar)})}function dispararSwal(e,r,a,c){Swal.fire({icon:e,title:r,text:a,button:"OK"}).then(()=>{window.location=c},3e3)}