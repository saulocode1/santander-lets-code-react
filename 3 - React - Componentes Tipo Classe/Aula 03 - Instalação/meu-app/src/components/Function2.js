import React, {useState} from 'react';

export default function App() {
    const [nome, setNome] = useState('') // referência e função para modificar o seu valor; ex - [idade, setIdade]
    // const changeName = () => setNome('Luis') // quando clicar, muda nome para Luis

    // return (<h1 onClick={changeName}>{nome}</h1>)

    return (
        <>
            Nome: <input type='text' value={nome} onChange={(event) => setNome(event.target.value)}></input>
            <br/>
            Olá {nome}
        </>
    )
}