console.log("Mi nombre es Oscar")




//3 ejercicios
var nombres = (name, lastName) => {
    console.log(name + " " + lastName + ".");
  }
  nombres("Oscar", "Orellana");
  
  var mayorDeEdad  = (age) => {
    if (age >= 18){
      console.log("Ya eres mayor de edad!");
    } else {
      console.log("Eres menor de edad weeee");
    }
  }
  mayorDeEdad(17)
  
  const numeros = [-3 , -2, -53, -35, -1, -12];
  var getMayor = (array) => {
    var max = array[0];
    for (i in array)
    if (array[i] > max){
      max = array[i];
    }
    console.log(max)  
  }
  getMayor(numeros)
  
  
  
  // La wea extraña
  function a() {
    function b() {
      console.log(myVar);
    }
  
    b();
    var myVar = 2;
  }
  
  var myVar = 1;
  a();  
  
  
  
  console.log(1<2<3) //no hay mayor explicacón.
  console.log(3<2<1)//imprime false por el orden de precedencia osea; (3<2) es false y (alse<1) es true
  
  
  // POO Progaming oriented in objets
  class Persona{
  
    //constructor donde define las propiedades
    constructor(name,age,cellphone,email){
      this.nombre = name,
      this.edad = age,
      this.telefono = cellphone,
      this.correo = email
    };
  
    //Función que define el saludo
    presentarse(){
      return 'hola me llamo ' + this.nombre + ' y tengo ' + this.edad + 'años!';
    };
  
  };
  //las impresiones 
  var arturo = new Persona('Arturo', 34, 23123124, 'arturo@gmail.com');
  console.log(arturo.presentarse());
  var daniel = new Persona('Daniel', 26, 34234234, 'daniel@gmail.com');
  console.log(daniel.presentarse());
  
  //subclase del Padre Persona
  class Desarrollador extends Persona{
    constructor(name,age,cellphone,email,languaje){
      super(name,age,cellphone,email)
      this.lenguaje = languaje
    }
    programar(){
      return 'El desarrollador ' + this.nombre + ' programa en ' + this.lenguaje + '.';
    }
  };
  
  let oscar = new Desarrollador('Oscar', 17, 2342342, 'oscar@gmail.com', 'JavaScript')
  console.log(oscar.presentarse())
  console.log(oscar.programar())
  
  
  
  
  //ejercicio de POO
  class Triangulo{
    constructor(base, height){
      this.bases = base,
      this.altura = height
    };
    calcArea(){
      return 'Area: ' + (this.bases * this.altura) / 2;
    };
    calcPerimetro(){
      return 'Perimetro: ' + this.bases * 3;
    };
  };
  
  //los logs
  var tria1 = new Triangulo(5, 10);
  console.log(tria1.calcArea() + ', ' + tria1.calcPerimetro());
  