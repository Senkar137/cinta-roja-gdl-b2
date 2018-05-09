
class Aplication extends React.Component {
    
    render(){
        return(
            <div>
                <Header />
                <Person name={'Piter'} age={99} location={'ass'}/>
                <Person name={'Oscar'} age={17} location={'GDL'}/>
                <Persons />

            </div>
        )
    }
}

class Header extends React.Component {
    render(){
        return(
            <div>
                <h1>Mi app</h1>
                <h2>Subtitulo</h2>
            </div>
        )
    }
}


class Persons extends React.Component {
    render(){
        const persons = [
            {name: "Ken", age: 25, location: "CDMX"},
            {name: "Jorge", age: 19, location: "DF"},
            {name: "Ramiro", age: 20, location: "CDMX"},
            {name: "Ramon", age: 12, location: "ESA"},
          ];
        return(
            <div>
                {persons.map((i, llave) =>{
                   return <Person key={llave} name={i.name} age={i.age} location={i.location}/>
                })}
            </div>
        )

        
    }
}

class Person extends React.Component {
    render(){
        return(
            <div>
                <h2>Nombre: {this.props.name}</h2>
                <h3>Edad: {this.props.age}</h3>
                <h3>Direccion: {this.props.location}</h3>
            </div>
        )
    }
}


ReactDOM.render(<Aplication />, document.getElementById('app'))