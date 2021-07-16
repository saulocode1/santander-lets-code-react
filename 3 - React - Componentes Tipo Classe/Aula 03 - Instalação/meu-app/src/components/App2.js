import React from 'react';

class App2 extends React.Component {
    constructor(props){
        super(props);
    }
    
    render(){
    return (
        <div className="box">
            <h1 id="title">{this.props.title}</h1>
            <p id="text">{this.props.children}</p>
        </div>
    );
    }
}

export default App2;
