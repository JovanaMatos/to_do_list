let contador = 0;
let input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btn-add');//para não precisar dogitar tudo sempre
let main = document.getElementById('areaLista');


//pegar valor digitado no input
function addTarefa(){
    let valorInput = input.value;
 
    if ((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)){
       
        ++contador;

        let novoItem = ` <div id="${contador}" class="item">  
            <div onclick="marcarTarefa(${contador})" class="item-icone">
                <img id="icone_${contador}" src="img/circle.svg" alt="ciculo">

            </div>

            <div onclick="marcarTarefa(${contador})" class="item-nome">
                ${valorInput}
                
            </div>

            <div class="item-botao">
                <button onclick ="deletar(${contador})" class="delete"> <img  style="padding-right: 50%;" src="img/delete.svg" alt="Deletar"></button>

            </div>
        </div> `;
        //add novo item no main
        main.innerHTML += novoItem;
       // zerar campos
        input.value = "";
        input.focus();
        
    }

}

function deletar(id){
    let tarefa = document.getElementById(id);
    tarefa.remove();
}

function marcarTarefa(id){
    let item = document.getElementById(id);
    let classe = item.getAttribute('class');
    console.log(classe);

    if (classe == "item"){
        item.classList.add('clicado');//add a classe clicado
        let icone = document.getElementById('icone_'+ id)
        icone.src = 'img/circle_check.svg'; // altera a imagem  
        item.parentNode.appendChild(item) ;
    }else{
        item.classList.remove('clicado');//add a classe clicado
        let icone = document.getElementById('icone_'+ id)
        icone.src = 'img/circle.svg'; // altera a imagem     

    }

}

input.addEventListener("keyup", function(event){
    //clicou enter
    if(event.keyCode === 13){
        event.preventDefault();
        btnAdd.click();
    }
})