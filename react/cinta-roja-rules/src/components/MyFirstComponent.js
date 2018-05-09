import React, { Component } from 'react';
import { Button, Grid, Jumbotron, Panel, FormControl } from 'react-bootstrap';

class DadComponent extends Component {

        constructor(props) {
          super(props);
          this.handleChange = this.handleChange.bind(this);
          this.state = {
              value: '',
              textoDefault: 'Puedes cambiarme :D'
            };
        };
      
        handleClick = (event) => {
            event.preventDefault();
            if(this.state.value == 0){
                this.setState({textoDefault: 'No presiones el botón si no escribes nada X-('})
            }else{
                this.setState({textoDefault: this.state.value})
            }
        };
      
        handleChange(e) {
            if(this.handleClick)
          this.setState({ value: e.target.value });
        };

    render() {
        return (
            <Grid>
                <Jumbotron>
                    <SonComponent valor={this.state.value} texto={this.state.textoDefault} click={this.handleClick} cambio={this.handleChange}/>
                </Jumbotron>
            </Grid>
        )
    };
};

class SonComponent extends Component {

    constructor(props) {
        super(props);

  
    };

    render() {
        return (
            <Panel bsStyle="success">
            <Panel.Heading>
                <h2><FormControl
                     type="text"
                     value={this.props.valor}
                     placeholder="Introduce un texto"
                     onChange={this.props.cambio}/>
                <FormControl.Feedback/></h2>
            </Panel.Heading>
            <Panel.Body>
                <p><Button onClick={this.props.click} bsStyle="success">Apretame para cambiar el texto.</Button></p>
                <p>{this.props.texto}</p>
            </Panel.Body>
            </Panel>
        )
    };
};


export default DadComponent;

// vamos a tener un componente padre y un hijo. el padre va a tener unicamante el componente padre y un boton.
// el componente hijo tendra por propiedad el componente del estado padre.

// en ves de la p tendra el componente hijo.