import React from "react";
import ReactCardFlip from "react-card-flip";
import back from "./images/back.png";

class Card extends React.Component {
  constructor() {
    super();
    this.state = {
      hidden: "d-none",
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (props.pickedCards !== state.pickedCards) {
      return { isFlipped: false, pickedCards: props.pickedCards };
    }
    return null;
  }

  componentDidUpdate() {
    setTimeout(() => {
      this.setState({ hidden: "d-block" });
    }, this.props.waitBeforeShow);
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ hidden: "d-block" });
    }, this.props.waitBeforeShow);
  }

  handleClick = (e) => {
    e.preventDefault();
    this.setState({ isFlipped: true });
  };

  getCardPath() {
    const card = this.props.pickedCards[this.props.type][this.props.index];
    return process.env.PUBLIC_URL + "/cards/" + card + ".png";
  }

  render() {
    return (
      <div style={{ width: 253, height: 353 }}>
        <ReactCardFlip
          isFlipped={this.state.isFlipped}
          flipDirection="horizontal"
        >
          <div className={this.state.hidden}>
            <img
              src={back}
              alt="card back"
              width="253"
              height="353"
              onClick={this.handleClick}
            />
          </div>
          <div className={this.state.isFlipped ? "d-block" : "d-none"}>
            <img
              src={this.getCardPath()}
              alt="card front"
              width="253"
              height="353"
              onClick={this.handleClick}
              className={this.state.hidden}
            />
          </div>
        </ReactCardFlip>
      </div>
    );
  }
}

export default Card;
