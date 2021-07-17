import React from 'react';

class App5 extends React.Component {
    constructor(props){
        super(props);
        this.state = {nome: undefined, txtNome: ''};
    }

    changeTxtName = (event) => {
        this.setState({txtNome: event.target.value})
    }

    persistName = () => {
        this.setState({nome: this.state.txtNome})
        sessionStorage.setItem('nome', this.state.txtNome) // salva txtNome nos cookies
    }

    componentDidMount = () => { // quando o componente for criado
        const nome = sessionStorage.getItem('nome') // pega nome salvo nos cookies
        if (nome) this.setState({nome}) // se const nome existir, atualiza nome do constructor
    }

    render(){
        const renderForm = () => {
            return (
                <>
                Nome: <input type="text" value={this.state.nome} onChange={this.changeTxtName}></input>
                <button onClick={this.persistName}>Salvar</button>
                </>
            )
        }

        const renderText = () => {
            return (
                <>
                    <p>
                        Olá {this.state.nome}
                    </p>
                </>
            );
        }
        return !this.state.nome ? renderForm() : renderText();    
    }
}

export default App5;