
// ///ejercicio 1
// document.getElementById('calcular').addEventListener('click', function() {
//     var peso = document.getElementById('peso').value;
//     var altura = document.getElementById('altura').value;
//     var imc = peso / (altura * altura);
//     document.getElementById('resultado').value = imc.toFixed(2);
// });





// ////// ejercicio 2
// var usdInput = document.getElementById('usd');
// var copInput = document.getElementById('cop');

// usdInput.addEventListener('input', function() {
//     var usd = this.value;
//     var cop = usd * 4000;
//     copInput.value = cop;
// });

// copInput.addEventListener('input', function() {
//     var cop = this.value;
//     var usd = cop / 4000;
//     usdInput.value = usd;
// });

let notas = [];
    let idGlobal = 0;

    function guardarNota() {
      const titulo = document.getElementById('titulo').value;
      const texto = document.getElementById('texto').value;
      if (titulo && texto) {
        idGlobal++;
        notas.push({
          id: idGlobal,
          titulo,
          texto,
          realizada: false
        });
        pintarNotas();
      }
    }