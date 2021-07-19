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
    const tab = '\u00A0\u00A0'
    return (
      <div className="container">
        <h1 className="text-center mt-5">The Mayan Oracle</h1>
        <div className="row">
        <div className="col-md-3"></div>
          <div className="col-md-6">
            <div className="input-group mt-5 mb-5">
              <select
                className="form-select"
                value={this.state.selection}
                onChange={this.handleChange}
              >
                <option disabled value=''>Pick a spread...</option>
                
                <option disabled>One card:</option>
                <option value="oneCard">{tab}One Card Consultation</option>
                <option value="oneGlyph">{tab}One Card (Star-glyphs only)</option>

                <option disabled>Two cards:</option>
                <option value="swordAndChalice">{tab}Sword and Chalice</option>
                <option value="tzolkinMapping">{tab}Tzolkin Mapping</option>

                <option disabled>Three cards:</option>
                <option value="illusionIntegrationGift">{tab}Illusion, Integration, Gift</option>
                <option value="mindHeartBody">{tab}Mind, Heart, Body</option>
                <option value="pastPresentFuture">{tab}Past, Present, Future</option>
                <option value="treeOfChoice">{tab}Tree of Choice</option>
                <option value="pathOfEcstasy">{tab}Path of Ecstasy</option>
                <option value="hallOfMirrors">{tab}Hall of Mirrors</option>

                <option disabled>Five cards:</option>
                <option value="fourDirections">{tab}Four Directions</option>
                <option value="becomingTheMindOfLight">{tab}Becoming the Mind of Light</option>
              </select>
              <button
                className={"btn btn-primary" + (this.state.selection==='' ? " disabled" : '')}
                type="button"
                onClick={this.draw}
              >
                Draw Cards
              </button>
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
        <div className="row">
          <Layout
            layoutName={this.state.layoutName}
            pickedCards={this.state.pickedCards}
          />
        </div>
      </div>
    );
  }
}
export default App;
