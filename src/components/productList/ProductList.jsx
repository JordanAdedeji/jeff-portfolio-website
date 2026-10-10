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
    <div className="pl" id="work">
      <div className="pl-texts">
        <h1 className="pl-title">Create & inspire.</h1>
      </div>
      <Carousel>
        <Product videoImport={gamesVideo} thumbnailTime={3} width={720} height={1560} />
        <Product videoImport={influencer} width={720} height={1280} />
        <Product videoImport={forfeit} width={720} height={720} />
        <Product videoImport={drone} width={576} height={720} />
        <Product videoImport={football} width={720} height={900} />
        <Product videoImport={trim} thumbnailTime={3} width={720} height={900} />
        <Product videoImport={chai} width={720} height={900} />
        <Product videoImport={guard} width={1280} height={720} />
        <Product videoImport={bet365} thumbnailTime={2} width={1280} height={720} />
        <Product videoImport={sixScores} width={1280} height={720} />
        <Product videoImport={winnings} width={1280} height={720} />
        <Product videoImport={converse} width={720} height={1280} />
        <Product videoImport={final} thumbnailTime={3} width={1280} height={720} />
      </Carousel>
    </div>
  );
};

export default ProductList;
