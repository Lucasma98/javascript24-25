//constantes y variables
const txtAdd = document.getElementById("txtAdd")
const mylist = document.getElementById("mylist")
const mycart = document.querySelector("#mycart")
const btnAdd = document.getElementById("btnAdd")


const btnSelAll = document.getElementById("btnSelAll")
const btnSelNot = document.getElementById("btnSelNot")
const btnInvSel = document.getElementById("btnInvSel")
const btnMovSel = document.getElementById("btnMovSel")
const btnDelSel = document.getElementById("btnDelSel")

const btnEmpCar = document.getElementById("btnEmpCar")

//al abrir la webapp vaciar la caja de texto y darle el foco
txtAdd.value = ""
txtAdd.focus()

//el usuario puede añadir items a su lista a través del INTRO en la caja
// (al pulsar INTRO, se añade el item a la lista y se vacía la caja)
txtAdd.addEventListener("keyup",function(ev){
    if (ev.key == "Enter") {
        addItemToList()
    }
})

btnAdd.addEventListener("click",addItemToList)



btnSelAll.addEventListener("click",function(){
    const todosLosLI = mylist.querySelectorAll("li")
    todosLosLI.forEach( li => li.classList.add("seleccionado") )
})
btnSelNot.addEventListener("click",function(){
    const todosLosLI = mylist.querySelectorAll("li")
    todosLosLI.forEach( li => li.classList.remove("seleccionado") )
})
btnInvSel.addEventListener("click",function(){
    const todosLosLI = mylist.querySelectorAll("li")
    todosLosLI.forEach( li => li.classList.toggle("seleccionado") )
})




btnMovSel.addEventListener("click",function(){
    const liSel = mylist.querySelectorAll("li.seleccionado")
    liSel.forEach( li => {
        //crear un nuevo LI para el carrito (clonando el LI original)
        const nuevoLI = li.cloneNode(true) //cloneNode no clona listeners
        nuevoLI.classList.remove("seleccionado")
        mycart.append(nuevoLI)
        //eliminar el LI original (el de mylist)
        li.remove()
    } )
})



btnDelSel.addEventListener("click",function(){
    //Recorrer todos los LI y averiguar si están seleccionados o no, para borrarlos
    // const todosLosLI = mylist.getElementsByTagName("LI")
    // Array.from(todosLosLI).forEach( li => {
        //     if ( li.classList.contains("seleccionado"))
        //         li.remove()
    // })
    // for (li of todosLosLI) {
    //     if ( li.classList.contains("seleccionado"))
    //         li.remove()
    // }
    // ALT: recuperar directamente SOLO los que estén seleccionados
    const todosLosLI = mylist.querySelectorAll("li.seleccionado")  
    todosLosLI.forEach( li => li.remove() )
})


btnEmpCar.addEventListener("click",function(){
    mycart.innerHTML = ""

    //mycart.querySelectorAll("li").forEach(li => li.remove() )
})





function addItemToList() {
    if ( txtAdd.value.trim().length > 0 ) {
        let nuevoLI = document.createElement( "LI" )
        nuevoLI.textContent = txtAdd.value.trim()
        mylist.append( nuevoLI )
        nuevoLI.addEventListener("click",function(){
            //nuevoLI se ponga amarillo
            // if (nuevoLI.classList.contains("seleccionado"))
            //     nuevoLI.classList.remove("seleccionado")
            // else
            //     nuevoLI.classList.add("seleccionado")
            nuevoLI.classList.toggle("seleccionado")
        })

        txtAdd.value = ""
    }
}