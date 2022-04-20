import "./productList.css";
import Product from "../product/Product";
import drone from "../../img/drone.mp4"
import guard from "../../img/guard.mp4"
import football from "../../img/football2.mp4"
import trim from "../../img/trim.mp4"


const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Create & inspire.</h1>
      </div>
      <div className="pl-list">
        <Product videoImport={drone} />
        <Product videoImport={football} />
        <Product videoImport={trim} />
        <Product videoImport={guard} />
      </div>
    </div>
  );
};

export default ProductList;
