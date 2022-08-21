import "./styles.css";
import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      n1: 0,
      n2: 0,
      result: 0
    };
  }

  render() {
    return (
      <div className="App">
        <h1>Calculadora</h1>
        <p>1. Digite o primeiro número: </p>
        <input
          type="number"
          id="n1"
          onChange={(event) => {
            this.setState({ n1: parseInt(event.target.value) });
          }}
        ></input>

        <p>2. Digite o segundo número: </p>
        <input
          type="number"
          id="n2"
          onChange={(event) => {
            this.setState({ n2: parseInt(event.target.value) });
          }}
        ></input>

        <p>Escolha a operação: </p>
        <input
          type="button"
          id="add"
          value="+"
          onClick={() => {
            this.setState({ result: this.state.n1 + this.state.n2 });
          }}
        ></input>

        <input
          type="button"
          id="sub"
          value="-"
          onClick={() => {
            this.setState({ result: this.state.n1 - this.state.n2 });
          }}
        ></input>

        <input
          type="button"
          id="mul"
          value="*"
          onClick={() => {
            this.setState({ result: this.state.n1 * this.state.n2 });
          }}
        ></input>

        <input
          type="button"
          id="div"
          value="/"
          onClick={() => {
            if (this.state.n2 === 0) {
              this.setState({ result: "Não é possível dividir por zero." });
            } else {
              this.setState({ result: this.state.n1 / this.state.n2 });
            }
          }}
        ></input>

        <p>Resultado</p>
        <input type="text" id="res" readOnly value={this.state.result}></input>
      </div>
    );
  }
}

export default App;
