import React from "react";
import OneCard from "./layouts/OneCard.js";
import TwoCards from "./layouts/TwoCard.js";
import ThreeCard from "./layouts/ThreeCard.js";
import Tree from "./layouts/Tree.js";
import Mirror from "./layouts/Mirror.js";
import FiveCard from "./layouts/FiveCard.js";

class Layout extends React.Component {
  getLayout(layoutName) {
    let layout;
    const pickedCards = this.props.pickedCards;

    switch (layoutName) {
      case "oneCard":
        layout = (
          <OneCard 
            pickedCards={pickedCards}
            types={["mixed"]}
          />
        )
        break;
      case "oneGlyph":
        layout = (
          <OneCard 
            pickedCards={pickedCards}
            types={["glyphs"]}
          />
        )
        break;
      case "swordAndChalice":
        layout = (
          <TwoCards
            pickedCards={pickedCards}
            meanings={["Sword", "Chalice"]}
            types={["glyphs", "glyphs"]}
            indexes={[0, 1]}
          />
        );
        break;
      case "tzolkinMapping":
        layout = (
          <TwoCards
            pickedCards={pickedCards}
            meanings={["Star-glyph", "Resonance"]}
            types={["glyphs", "numerals"]}
            indexes={[0, 0]}
          />
        );
        break;
      case "illusionIntegrationGift":
        layout = (
          <ThreeCard
            pickedCards={pickedCards}
            meanings={["Illusion", "Integration", "Gift"]}
          />
        );
        break;
      case "mindHeartBody":
        layout = (
          <ThreeCard
            pickedCards={pickedCards}
            meanings={["Mind", "Heart", "Body"]}
          />
        );
        break;
      case "pastPresentFuture":
        layout = (
          <ThreeCard
            pickedCards={pickedCards}
            meanings={["Past", "Present", "Future"]}
          />
        );
        break;
      case "pathOfEcstasy":
        layout = (
          <ThreeCard
            pickedCards={pickedCards}
            meanings={["Greatest Joy", "Obstacle", "Bridge"]}
          />
        );
        break;
      case "treeOfChoice":
        layout = <Tree pickedCards={pickedCards} />;
        break;
      case "hallOfMirrors":
        layout = <Mirror pickedCards={pickedCards} />;
        break;
      case "fourDirections":
        layout = (
          <FiveCard
            pickedCards={pickedCards}
            meanings={["NORTH", "WEST", "EMPTINESS", "EAST", "SOUTH"]}
            subMeanings={[
              "Wisdom / Purification",
              "Death / Transformation",
              "Spirit / Essence Self",
              "Vision / Illumination",
              "Innocence / Trust / Teaching",
            ]}
            indexes={[4, 3, 0, 1, 2]}
            waitTimes={[1000, 800, 200, 400, 600]}

          />
        );
        break;
      case "becomingTheMindOfLight":
        layout = (
          <FiveCard
            pickedCards={pickedCards}
            meanings={["GATE 4", "GATE 1", "GATE 5", "GATE 3", "GATE 2"]}
            subMeanings={[
              "Self-Embodiment",
              "Self-Love",
              "Transparency",
              "Self-Reflection",
              "Self-Empowerment"
            ]}
            indexes={[3, 0, 4, 2, 1]}
            waitTimes={[800, 200, 1000, 600, 400]}
          />
        );
        break;
      default:
        layout = null;
    }
    return layout;
  }

  render() {
    return this.getLayout(this.props.layoutName);
  }
}

export default Layout;
