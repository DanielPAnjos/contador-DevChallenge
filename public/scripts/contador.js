const contentInput = document.getElementById("data");
const aCont = document.querySelector("#page-home .content-home a");
const cont = document.querySelector("#contador");
const closed = document.querySelector("#contador header a");


contentInput.addEventListener("click", () =>{
    let data = (() =>{
        let dataAtual = new Date().toISOString().substr(0, 11);
        let horaAtual = new Date().toLocaleTimeString().substr(0,5);
        
        return dataAtual + horaAtual;
    });
    
    contentInput.setAttribute("min", data())
})


aCont.addEventListener("click", () => {
    cont.classList.remove("hide");
});

closed.addEventListener("click", () =>{
    cont.classList.add("hide");
});





function contador(){
        
        const dataNow = new Date();
        const datafim = new Date(contentInput.value);
        
        const diferencaDia =  (datafim - dataNow);

        let segundos = 1000;
        let minutos = segundos * 60;
        let horaM = minutos * 60;
        let diaM = horaM * 24;

        const resultadodia = Math.floor(diferencaDia / diaM);
        const resultadohora = Math.floor((diferencaDia % diaM) / horaM);
        const resultadominuto = Math.floor((diferencaDia % horaM) / minutos)
        const resultadosegundo = Math.floor((diferencaDia % minutos) / segundos);
        //console.log(`Faltam ${resultadodia} dias, ${resultadohora}horas, ${resultadominuto} minutos, ${resultadosegundo} segundos`);

        document.getElementById("dia").innerHTML = resultadodia;
        document.getElementById("hora").innerHTML = resultadohora;
        document.getElementById("minutos").innerHTML = resultadominuto;
        document.getElementById("segundos").innerHTML = resultadosegundo;

        if(resultadodia === 0 && resultadohora === 0 && resultadominuto === 0 && resultadosegundo === 0){
            clearInterval(stoped);
            console.log("Entrou!");
        }
}

var stoped;
var intervalo = () => {
    stoped = setInterval(contador ,1000);
}

aCont.addEventListener("click", intervalo);





