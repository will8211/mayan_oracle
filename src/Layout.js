import React from "react";
import OneCard from "./layouts/OneCard.js";
import TwoCards from "./layouts/TwoCard.js";
import ThreeCard from "./layouts/ThreeCard.js";
import Tree from "./layouts/Tree.js";
import Mirror from "./layouts/Mirror.js";

class Layout extends React.Component {
  getLayout(layoutName) {
    let layout;
    const pickedCards=this.props.pickedCards;

    switch (layoutName) {
      case "oneCard":
        layout = (
          <OneCard pickedCards={pickedCards} />
        );
        break;
      case "swordAndChalice":
        layout = (
          <TwoCards 
            pickedCards={pickedCards}
            meanings={['Sword', 'Chalice']}
            types={['glyphs', 'glyphs']}
            indexes={[0, 1]}
          />
        );
        break;
      case "tzolkinMapping":
        layout = (
          <TwoCards 
            pickedCards={pickedCards}
            meanings={['Star-glyph', 'Resonance']}
            types={['glyphs', 'numerals']}
            indexes={[0, 0]}
          />
        );
        break;
      case "illusionIntegrationGift":
        layout = (
          <ThreeCard 
            pickedCards={pickedCards}
            meanings={['Illusion', 'Integration', 'Gift']} 
            />
        );
        break;
      case "mindHeartBody":
        layout = (
          <ThreeCard
            pickedCards={pickedCards}
            meanings={['Mind', 'Heart', 'Body']} 
          />
        );
        break;
      case "pastPresentFuture":
        layout = (
          <ThreeCard
            pickedCards={pickedCards}
            meanings={['Past', 'Present', 'Future']}
          />
        );
        break;
      case "pathOfEcstasy":
        layout = (
          <ThreeCard
            pickedCards={pickedCards}
            meanings={['Greatest Joy', 'Obstacle', 'Bridge']}
          />
        );
        break;
      case "treeOfChoice":
        layout = (
          <Tree
            pickedCards={pickedCards}
          />
        );
        break;
      case "hallOfMirrors":
        layout = (
          <Mirror
            pickedCards={pickedCards}
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
