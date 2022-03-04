import "./product.css";

const Product = ({videoImport}) => {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <video src={videoImport} loop controls='true' resizeMode='cover' className='p-img'> </video>
    </div>
  );
};

export default Product;
