import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: '',
            linguagem: 'JavaScript',
            tipo: 'Programador',
            dedico: true,
            bio: ''
        }

        this.handleSubmit = (event) => {
            event.preventDefault()
            console.log(this.state)
        }

        this.changeName = (event) => {
            this.setState({nome: event.target.value})
        }
        
        this.changeSelect = (event) => {
            this.setState({linguagem: event.target.value})
        }

        this.changeRadio = (event) => {
            this.setState({tipo: event.target.value})
        }

        this.changeCheckbox = (event) => {
            this.setState({dedico: event.target.checked})
        }

        this.changeBio = (event) => {
            this.setState({bio: event.target.value})
        }
    }

    render(){
    return (
        <>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Nome: <input type="text" value={this.state.nome} onChange={this.changeName}></input>
                </label>
                <br/>
                <label>
                    Linguagem favorita
                    <select value={this.state.linguagem} onChange={this.changeSelect}>
                        <option>JavaScript</option>
                        <option>C++</option>
                        <option>Python</option>
                    </select>
                </label>
                <br/>
                <label>
                    Sou:
                    <input type="radio" checked={this.state.tipo == 'programador'} onChange={this.changeRadio} value="programador"></input> Programador
                    <input type="radio" checked={this.state.tipo == 'estudante'} onChange={this.changeRadio} value="estudante"></input> Estudante
                </label>
                <br/>
                <label>
                    <input type="checkbox" checked={this.state.dedico} onChange={this.changeCheckbox}></input> Dedico 8hrs
                </label>
                <br/>
                <label>
                    Bio:
                    <textarea cols="50" value={this.state.bio} onChange={this.changeBio}></textarea>
                </label>
                <input type="submit"></input>
                
            </form>
        </>
    );
    }
}

export default Form;

