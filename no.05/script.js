
let inputbox = document.querySelector('.note-contaner');
let notes = document.querySelectorAll('.input-box');
let closbtn = document.querySelector('#btn');

function shownote(){
    inputbox.innerHTML = localStorage.getItem("notes");  
}
shownote();
function upstoreg(){
    localStorage.setItem('notes', inputbox.innerHTML);
}

closbtn.addEventListener( 'click', ()=>{
   let ptag = document.createElement('p');
   ptag.className = 'input-box';
   ptag.setAttribute("contenteditable","true")
   let removeimg = document.createElement('img');
   removeimg.src="3.png"
   inputbox.appendChild(ptag).appendChild(removeimg)
})
inputbox.addEventListener('click',function (e){
    if(e.target.tagName === 'IMG'){
        e.target.parentElement.remove();
        upstoreg(); 
    }
    else if(e.target.tagName === 'P'){
       notes.document.querySelectorAll('.input-box');
       notes.forEach(nt => {
          nt.onkeyup = function(){
            upstoreg();
          }
       })
    }
})
document.addEventListener('keydown', event =>{
    if(event.key === 'Enter'){
        document.execCommand('insertLineBreak');
        event.preventDefault();
    }
})