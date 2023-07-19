import "./productList.css";
import Product from "../product/Product";
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


const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Create & inspire.</h1>
      </div>
      <div className="pl-list1">
        <Product videoImport={drone} />
        <Product videoImport={football} />
        <Product videoImport={trim} />
        <Product videoImport={chai} />
      </div>
      <div className="pl-list2">
        <Product videoImport={guard} />
        <Product videoImport={bet365} />
      </div>
      <div className="pl-list11">
        <Product videoImport={sixScores} />
        <Product videoImport={winnings} />
      </div>
      <div className="pl-list22">
        <Product videoImport={gamesVideo} />
        <Product videoImport={converse} />
      </div>
      <div className="pl-list4">
        <Product videoImport={final} />
      </div>
    </div>
  );
};

export default ProductList;
