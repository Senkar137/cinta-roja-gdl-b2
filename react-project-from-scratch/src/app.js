const persons = [
  {
      name: "Ken",
      age: 25,
      location: "CDMX"
  },
  {
      name: "Jorge",
  },
  {
      name: "Ramiro",
      age: 20,
      location: "CDMX"
  },
  {
    name: "Ramon",
    location: "ESA"
},
];

const getAge = (age) =>{
  if (!age)  return age = 'Edad desconocida';
    return age;
};

const getLocation = (location) =>{
  if (!location)  return location = 'Direccion desconocida';
  return location;
};

// 1er param JSX
const template = 
        <div>
          {persons.map(i => {
            return [<h1>{i.name}</h1>, <p>{getAge(i.age)}</p>, <p>{getLocation(i.location)}</p>];
          })};
        </div>  

// 2do param
const appRoot = document.getElementById('app');

// 1er parametro es template (HTMl) - JSX
// 2do parametro es donde lo vamos a colocar
ReactDOM.render(template, appRoot);