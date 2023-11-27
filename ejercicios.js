
///ejercicio 1
document.getElementById('calcular').addEventListener('click', function() {
    var peso = document.getElementById('peso').value;
    var altura = document.getElementById('altura').value;
    var imc = peso / (altura * altura);
    document.getElementById('resultado').value = imc.toFixed(2);
});





////// ejercicio 2
var usdInput = document.getElementById('usd');
var copInput = document.getElementById('cop');

usdInput.addEventListener('input', function() {
    var usd = this.value;
    var cop = usd * 4000;
    copInput.value = cop;
});

copInput.addEventListener('input', function() {
    var cop = this.value;
    var usd = cop / 4000;
    usdInput.value = usd;
});


let notas = [
  {
      id: 1,
      titulo: 'Organizar armario',
      descripcion: 'Clasificar la ropa por categorías (camisetas, pantalones, vestidos, etc.) y decidir qué prendas donar, tirar o conservar.',
      realizada: true
  },
  {
      id: 2,
      titulo: 'Programar una Cita',
      descripcion: 'Hacer una llamada al consultorio del doctor Martínez para agendar una cita médica para el chequeo anual.',
      realizada: true
  },
  {
      id: 3,
      titulo: 'Estudiar para exámenes',
      descripcion: 'Resolver ejercicios y problemas relacionados con cada materia. Repasar apuntes y materiales del curso para comprender mejor los conceptos. ',
      realizada: false
  },
  {
      id: 4,
      titulo: 'Hacer ejercicio',
      descripcion: 'Realizar una sesión de ejercicio cardiovascular y estiramientos durante al menos 30 minutos.',
      realizada: true
  },
  {
      id: 5,
      titulo: 'Comprar comestibles',
      descripcion: 'Hacer la lista de los alimentos necesarios y dirigirse al supermercado para comprar lo necesario para la semana.',
      realizada: false
  },
  {
      id: 6,
      titulo: 'Llamar a mamá',
      descripcion: 'Realizar una llamada a mamá para saludarla y preguntarle cómo ha estado.',
      realizada: false
  },
  {
      id: 7,
      titulo: 'Preparar presentación',
      descripcion: 'Elaborar diapositivas y material necesario para la presentación en la reunión del trabajo.',
      realizada: false
  }
]
let switchNotasRealizadas = false
let idGlobal = 8

//pintar notas
let tarjetas = document.getElementById("tarjetasNotas")
document.addEventListener('DOMContentLoaded', pintarNotas(notas))

function pintarNotas(notas) {
  tarjetas.innerHTML = ''
  if (notas.length === 0) {
      let element = document.createElement("div")
      element.classList.add("col-12")
      element.innerHTML =
          '<h2 class = "text-center text-secondary my-5">No hay elementos para mostrar</h2>'
      tarjetas.appendChild(element)
  } else {
      //Todas las Notas
      if (switchNotasRealizadas === false) {
          for (let i = 0; i < notas.length; i++) {
              let card = document.createElement("div")
              card.classList.add("card", "col-md-4", "col-lg-3", "my-4", "mx-md-5", "mx-lg-4", "p-0")
              let descripcionTachada = notas[i].realizada ? 'descripcionTachada' : '';
              card.innerHTML =
                  `<div class="card-header d-flex justify-content-between bg-dark-subtle align-items-center w-100" data-id="${notas[i].id}">
                       <input onClick = "marcarRealizada(${notas[i].id})" type="checkbox" ${notas[i].realizada ? "checked" : ""}> </input>
                       <h5 class="m-2">${notas[i].titulo}</h5>
                       <a class="bi bi-trash3 text-danger clickeable" onClick = "eliminarNota(${notas[i].id})"></a>
                   </div>
                   <div class="card-body">
                      <p class="card-text ${descripcionTachada}">${notas[i].descripcion}</p>
                  </div>`
              tarjetas.appendChild(card)
          }
      // Notas Realizadas
      } else {
          let notasRealizadas = notas.filter(nota => nota.realizada === true);
          for (let i = 0; i < notasRealizadas.length; i++) {
              let card = document.createElement("div")
              card.classList.add("card", "col-md-4", "col-lg-3", "my-4", "mx-md-5", "mx-lg-4", "p-0")
              let descripcionTachada = notasRealizadas[i].realizada ? 'descripcionTachada' : '';
              card.innerHTML =
                  `<div class="card-header d-flex justify-content-between bg-dark-subtle align-items-center w-100" data-id="${notasRealizadas[i].id}">
                       <input onClick = "marcarRealizada(${notasRealizadas[i].id})" type="checkbox" ${notasRealizadas[i].realizada ? "checked" : ""}> </input>
                       <h5 class="m-2">${notasRealizadas[i].titulo}</h5>
                       <a class="bi bi-trash3 text-danger clickeable" onClick = "eliminarNota(${notasRealizadas[i].id})"></a>
                   </div>
                   <div class="card-body">
                      <p class="card-text ${descripcionTachada}">${notasRealizadas[i].descripcion}</p>
                  </div>`
              tarjetas.appendChild(card)
          }
      }
  }
}

//Crear nueva Nota
let guardar = document.getElementById('guardar')
guardar.addEventListener('click', crearNota)

function crearNota() {
  let titulo = document.getElementById('tituloNota').value
  let descripcion = document.getElementById('textoNota').value
  let nuevaNota = {
      id: idGlobal,
      titulo: titulo,
      descripcion: descripcion,
      realizada: false
  }

  idGlobal++
  notas.push(nuevaNota)
  pintarNotas(notas)
}

//Borrar texto
let borrarTexto = document.getElementById('borrar')
borrarTexto.addEventListener('click', e => {
  let titulo = document.getElementById('tituloNota')
  let descripcion = document.getElementById('textoNota')
  titulo.value = ""
  descripcion.value = ""
})

//Eliminar Nota
function eliminarNota(id) {
  for (let i = 0; i < notas.length; i++) {
      if (notas[i].id == id) {
          notas.splice(i, 1);
      }
  }
  pintarNotas(notas)
}
//"Realizar" Nota
function marcarRealizada(id) {
  for (let i = 0; i < notas.length; i++) {
      if (notas[i].id == id) {
          if (notas[i].realizada === false) {
              notas[i].realizada = true
          } else {
              notas[i].realizada = false
          }
      }
  }
  pintarNotas(notas)
}

//usar filter para filtrar notas con actividades ya hechas

function mostrarRealizadas() {
  switchNotasRealizadas = !switchNotasRealizadas;
  console.log(switchNotasRealizadas);
  pintarNotas(notas);
}