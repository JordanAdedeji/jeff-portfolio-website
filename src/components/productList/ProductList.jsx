import "./productList.css";
import Product from "../product/Product";
import Carousel from "../carousel/Carousel";
import drone from "../../img/drone.mp4"
import guard from "../../img/guard.mp4"
import football from "../../img/football2.mp4"
import trim from "../../img/trim.mp4"
import bet365 from "../../img/bet365.mp4"
import chai from "../../img/chai.mp4"

import converse from "../../img/converse.mp4"
import final from "../../img/final.mp4"
import gamesVideo from "../../img/games-video.mp4"
import sixScores from "../../img/sixScores.mp4"
import winnings from "../../img/winnings.mp4"
import forfeit from "../../img/forfeit.mp4"
import influencer from "../../img/influencer.mp4"


const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Create & inspire.</h1>
      </div>
      <Carousel>
        <Product videoImport={drone} />
        <Product videoImport={football} />
        <Product videoImport={trim} thumbnailTime={3} />
        <Product videoImport={chai} />
        <Product videoImport={guard} />
        <Product videoImport={bet365} thumbnailTime={2} />
        <Product videoImport={sixScores} />
        <Product videoImport={winnings} />
        <Product videoImport={gamesVideo} thumbnailTime={3} />
        <Product videoImport={converse} />
        <Product videoImport={final} thumbnailTime={3} />
        <Product videoImport={forfeit} />
        <Product videoImport={influencer} />
      </Carousel>
    </div>
  );
};

export default ProductList;
