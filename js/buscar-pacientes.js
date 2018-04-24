var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
    console.log("Buscando pacientes");
    
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", () =>{
        var resposta = xhr.responseText;
      //  console.log(typeof resposta);

        //convertendo os dados JSON  
      var pacientes = JSON.parse(resposta);
   //   console.log(pacientes);
     // console.log(typeof pacientes);

     pacientes.forEach((paciente)=>{
         adicionaPacienteNaTabela(paciente);
     })
    })

    xhr.send();

});


