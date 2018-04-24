// //alert('ok');

//REMOVE PACIENTES EXISTENTES

// var pacientes = document.querySelectorAll(".paciente");
// console.log(pacientes);

// pacientes.forEach(function(paciente){
//     paciente.addEventListener('dblclick', function(){
//          this.remove()})
// });

//REMOVE TODOS PACIENTES INCLUSIVE OS QUE FOREM ADD NA TABELA

// var tabela = document.querySelector("table");

// tabela.addEventListener("dblclick", function(event) {
//     var alvoEvento = event.target;
//     var paiDoAlvo = alvoEvento.parentNode; // TR = paciente = remover 
//     paiDoAlvo.remove();
// });

//MELHORANDO O CODIGO
var tabela = document.querySelector("table");

tabela.addEventListener("dblclick",function(event){
    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function() {
        event.target.parentNode.remove();
    }, 500);
});