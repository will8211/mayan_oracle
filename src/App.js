import React from "react";
import Layout from "./Layout.js";
import { getPickedCards } from "./CardPicker.js";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      layoutName: "",
      selection: "",
    };
  }

  draw = () => {
    this.setState({
      layoutName: this.state.selection,
      pickedCards: getPickedCards(),
    });
  };

  handleChange = (event) => {
    this.setState({ selection: event.target.value });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="input-group m-5">
              <select
                className="form-select"
                value={this.state.selection}
                onChange={this.handleChange}
              >
                <option value="">Pick a spread...</option>
                <option value="oneCard">One card consultation</option>
                <option value="swordAndChalice">Sword and chalice</option>
                <option value="tzolkinMapping">Tzolkin mapping</option>
              </select>
              <button
                className="btn btn-primary"
                type="button"
                onClick={this.draw}
              >
                Draw Cards
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <Layout
            layoutName={this.state.layoutName}
            pickedCards={this.state.pickedCards}
          ></Layout>
        </div>
      </div>
    );
  }
}
export default App;
