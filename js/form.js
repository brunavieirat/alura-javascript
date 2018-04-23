
var buttonAdd = document.querySelector("#adicionar-paciente");

buttonAdd.addEventListener("click", function (e) {
    e.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var paciente=  obtemPacienteDoFormulario(form);

    var pacienteTr= montaTr(paciente);    

    // if(validaPaciente(paciente)){
    //     var tabela = document.querySelector("#tabela-pacientes");

    // tabela.appendChild(pacienteTr);
    // form.reset();
    // }
    // else {
    //     console.log('erro');
    // }

    

    if(!validaPaciente(paciente)){

        return;
    }
    else {
        var tabela = document.querySelector("#tabela-pacientes");

         tabela.appendChild(pacienteTr);
         form.reset();
    }

    
});


function obtemPacienteDoFormulario(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value,form.altura.value)
    }
    return paciente
}

function montaTd(dado,classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    // var nomeTd = montaTd(paciente.nome, "info-nome");
    // var pesoTd = montaTd(paciente.peso, "info-peso");
    // var alturaTd = montaTd(paciente.altura, "info-peso");
    // var gorduraTd = montaTd(paciente.gordura, "info-gordura");
    // var imcTd = montaTd(paciente.imc, "info-imc");

    // nomeTd.textContent = paciente.nome;
    // pesoTd.textContent = paciente.peso;
    // alturaTd.textContent = paciente.altura;
    // gorduraTd.textContent = paciente.gordura;
    // imcTd.textContent = paciente.imc;

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function validaPaciente(paciente){
   // if(validaPeso(paciente.peso)&& validaAltura(paciente.altura)){
    
   if(validaAltura(paciente.altura) && validaPeso(paciente.peso)){
       
        return true;
    }
    else {
        return false;
    }
}