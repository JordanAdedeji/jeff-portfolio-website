import "./productList.css";
import Product from "../product/Product";
import drone from "../../img/drone.mp4"
import guard from "../../img/guard.mp4"
import football from "../../img/football2.mp4"
import trim from "../../img/trim.mp4"
import bet365 from "../../img/bet365.mp4"


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
      </div>
      <div className="pl-list2">
        <Product videoImport={guard} />
        <Product videoImport={bet365} />
      </div>
    </div>
  );
};

export default ProductList;
