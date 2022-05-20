const btnAddTarefa = document.querySelector("#add_tarefa")
const lstAFazer = document.querySelector("#a-fazer")
const lstFeito = document.querySelector("#feito")
let input = document.getElementById("tarefa")
//let li = document.getElementById("lista-vazia")

const adicionarTarefa = function(ev) {
    ev.preventDefault()
    
    const tarefa = document.querySelector("#tarefa").value

    if (tarefa.length < 1) {
        return;
    }

    const novaTarefaLi = document.createElement("li")
    const novaTarefaChebox = document.createElement("input")
    novaTarefaLi.innerText = tarefa
    input.value= ""
    
    
    novaTarefaChebox.setAttribute("type", "checkbox");
    novaTarefaChebox.setAttribute("value", tarefa);
    
    
    novaTarefaLi.appendChild(novaTarefaChebox)

    lstAFazer.append(novaTarefaLi)

}

/*const adicionarTarefa = function(ev) {
    ev.preventDefault()
    
    const tarefa = document.querySelector("#tarefa").value

    if (tarefa.length < 1) {
        return;
    }

    const novaTarefa = document.createElement("li")
    novaTarefa.innerText = tarefa


    lstAFazer.appendChild(novaTarefa)
}
*/

const moverParaFeito = function(ev) {
    const tarefa = ev.target.innerHTML

    const novaTarefa = document.createElement("li")
    novaTarefa.innerHTML = tarefa
    
    
    lstFeito.appendChild(novaTarefa)
    lstAFazer.removeChild(ev.target)
    
   
}

const apagarFeito = function(evn){
   const tarefaApg = evn.target.innerHTML

   const feito = document.querySelectorAll("#tarefa")
   feito.innerHTML = tarefaApg

    //lstAFazer.appendChild(feito)
    lstFeito.removeChild(evn.target)
  
}

btnAddTarefa.addEventListener("click", adicionarTarefa)

lstAFazer.addEventListener("click", moverParaFeito)

lstFeito.addEventListener("click", apagarFeito)