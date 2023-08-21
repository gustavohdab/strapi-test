import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import BalanceIcon from "@mui/icons-material/Balance";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "./Product.scss";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";

const strapiApiImageURL = import.meta.env.VITE_STRAPI_API_IMAGE_URL;

const Product = () => {
  const id = useParams().id;
  const [selectedImage, setSelectedImage] = React.useState("img");
  const [quantity, setQuantity] = React.useState(1);

  const dispatch = useDispatch();

  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

  const product = data?.attributes || {};
  const firstImgUrl = product?.img?.data?.attributes?.url;
  const secondImgUrl = product?.img2?.data?.attributes?.url;

  const images = {
    img: firstImgUrl,
    img2: secondImgUrl,
  };

  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img
            src={strapiApiImageURL + firstImgUrl}
            alt={product.title}
            onClick={() => setSelectedImage("img")}
          />
          <img
            src={strapiApiImageURL + secondImgUrl}
            alt={product.title}
            onClick={() => setSelectedImage("img2")}
          />
        </div>
        <div className="mainImg">
          <img
            src={strapiApiImageURL + images[selectedImage]}
            alt={product.title}
          />
        </div>
      </div>
      <div className="right">
        <h1>{product.title}</h1>
        <span>${product.price}</span>
        <p>{product.desc}</p>
        <div className="quantity">
          <button
            className="minus"
            onClick={() => {
              if (quantity > 1) {
                setQuantity(quantity - 1);
              }
            }}
          >
            -
          </button>
          <span>{quantity}</span>
          <button
            className="plus"
            onClick={() => {
              setQuantity(quantity + 1);
            }}
          >
            +
          </button>
        </div>
        <button
          className="add"
          onClick={() =>
            dispatch(
              addToCart({
                id: data.id,
                title: data.attributes.title,
                desc: data.attributes.desc,
                price: data.attributes.price,
                img: data.attributes.img.data.attributes.url,
                quantity,
              })
            )
          }
        >
          <AddShoppingCartIcon />
          <span>Add to cart</span>
        </button>
        <div className="links">
          <div className="item">
            <FavoriteBorderIcon /> ADD TO WISH LIST
          </div>
          <div className="item">
            <BalanceIcon /> ADD TO COMPARE
          </div>
        </div>
        <div className="info">
          <span>Vendor: Polo</span>
          <span>Product Type: {product.type}</span>
          <span>Tag: T-Shirt, Women, Top</span>
        </div>
        <hr />
        <div className="info">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
