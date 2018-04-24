var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
    var erroAjax = document.querySelector("#erro-ajax");
    //console.log(erroAjax);
    //console.log("Buscando pacientes");
    
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", () =>{

        if (xhr.status == 200){
        var resposta = xhr.responseText;
       //console.log(typeof resposta);

        //convertendo os dados JSON  
      var pacientes = JSON.parse(resposta);
   //   console.log(pacientes);
     // console.log(typeof pacientes);

     pacientes.forEach((paciente)=>{
         adicionaPacienteNaTabela(paciente);
     });
    }
    else{
        console.log(xhr.status);
        erroAjax.classList.remove("invisivel");
    }
    })

    xhr.send();

});


