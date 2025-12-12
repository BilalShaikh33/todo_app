var todo = document.getElementById("todo")
var input = document.getElementById("input")

function submit(){
   var liTag = document.createElement("li") // tag new

   //b tag create for store data 
   var bTag = document.createElement("b")
   bTag.innerText= input.value
   bTag.style.marginTop="20px"

   //button edit
   var editButton = document.createElement("button")
   editButton.innerText="EDIT"
   
   var deleteButton = document.createElement("button")
   deleteButton.innerText="DELETE"
   deleteButton.style.marginLeft="20px"
   deleteButton.setAttribute("onclick", "deleteLi(this)")
   
   
   //    store b i li tag
   liTag.appendChild(bTag)
   liTag.appendChild(editButton)
   liTag.appendChild(deleteButton)
   
   //    li tag store in main todo
   todo.appendChild(liTag)
   input.value=""
   
}
document.addEventListener("keydown",function(e){
   if(e.key == "Enter"){
      submit()
   }
   
   
})


function deleteLi(event) {
  console.log("test", event.parentNode.childNodes[0]);

  event.parentNode.remove();
}
   

// = =>assign
// ==>equal value
// ==equal value or data type
