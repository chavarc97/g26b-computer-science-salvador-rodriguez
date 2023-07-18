/* 1. Hacer un ejemplo de como obtener los valores de todas sus key del siguiente objeto 
en 3 nuevas variables con y sin destructuring.
Y mostrarlos en consola. */

/* ------------1°--------------- */
const student = {
     id: 1, 
     name: 'elsa',
      app: 'sayjayin' 
    };

    //sin destructuring
    console.log(student.id);
    console.log(student.name);
    console.log(student.app);

    //con destructuring
    const {id} = student;
    const {name} = student;
    const {app} = student;

    console.log(id);
    console.log(name);
    console.log(app);


/* --------------------------------------------------------------------------------------------- */

/* 2. Del siguiente arreglo obtener todos los estudiantes con calificacion mayor a 8 y que estan activos en devf.
Hacerlo con un ciclo while, con un ciclo for y con ES6 (filter, forEach, map). */

const studenrs = [
  { id: 1, name: 'elsa', app: 'sayjayin', grade: 10, isActive: true  },
  { id: 2, name: 'elsa', app: 'zapatito', grade: 9, isActive: false  },
  { id: 3, name: 'elsa', app: 'zapote', grade: 7, isActive: true },
  { id: 4, name: 'elsa', app: 'zapote', grade: 8, isActive: false },
  { id: 5, name: 'elsa', app: 'zapote', grade: 6, isActive: true },
  { id: 6, name: 'elsa', app: 'zapote', grade: 9, isActive: false },
]

//---Ciclo for----//

for (let i = 0; i < studenrs.length; i++) {
  if (studenrs[i].grade >= 8 && studenrs[i].isActive === true) {
    console.log(`ciclo for: ${studenrs[i].id}`);
  }
  break;
}

//ciclo while//

let i = 0;
while (i < studenrs.length) {
  if (studenrs[i].grade >= 8 && studenrs[i].isActive === true) {
    console.log(`ciclo while: ${studenrs[i].id}`);
  }
  i++
}

//filter//
let filtro;

studenrs.filter((student) =>
   {if (student.grade >= 8 && student.isActive === true) {
    console.log(`filer: ${student.id}`);
   }});



//forEach//
studenrs.forEach((alumni)=>{
  if (alumni.grade >= 8 && alumni.isActive === true) {
    console.log(`ciclo forEach: ${alumni.id}`);
  }
})


//map//
// ------- .map crea un nuevo arreglo ---------//
studenrs.map((alumni)=>{
  if (alumni.grade >= 8 && alumni.isActive === true) {
    console.log(`ciclo .map: ${alumni.id}`);
  }
})