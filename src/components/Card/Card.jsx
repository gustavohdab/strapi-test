import React from "react";
import { Link } from "react-router-dom";
import "./Card.scss";
const strapiApiImageURL = import.meta.env.VITE_STRAPI_API_IMAGE_URL;

const Card = ({ item }) => {
  console.log(JSON.stringify(item, null, 2));
  const firstImgUrl = item.attributes?.img?.data?.attributes?.url;
  const secondImgUrl = item.attributes?.img2?.data?.attributes?.url;

  return (
    <Link to={`/product/${item.id}`} className="link">
      <div className="card">
        <div className="image">
          {item?.attributes.isNew && <span>New Season</span>}
          <img
            src={strapiApiImageURL + firstImgUrl}
            alt=""
            className="mainImg"
          />
          <img
            src={strapiApiImageURL + secondImgUrl}
            alt=""
            className="secondImg"
          />
        </div>
        <h2>{item.title}</h2>
        <div className="prices">
          <h3>${item.oldPrice || item?.attributes.price + 20}</h3>
          <h3>${item.attributes.price}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
