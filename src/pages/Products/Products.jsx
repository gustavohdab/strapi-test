import React from "react";
import "./Products.scss";
import List from "../../components/List/List";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const Products = () => {
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = React.useState(1000);
  const [sort, setSort] = React.useState(null);
  const [selectedSubCategories, setSelectedSubCategories] = React.useState([]);

  const { data, loading, error } = useFetch(
    `/sub-categories?[filters] [category] [$eq]=${catId}`
  );

  const handleFilterChange = (e) => {
    if (e.target.checked) {
      setSelectedSubCategories([...selectedSubCategories, e.target.value]);
    } else {
      setSelectedSubCategories(
        selectedSubCategories.filter((id) => id !== e.target.value)
      );
    }
  };

  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          {data?.map((item) => (
            <div className="inputItem" key={item.id}>
              <input
                type="checkbox"
                id={item.id}
                value={item.id}
                onChange={handleFilterChange}
              />
              <label htmlFor={item.id}>{item.attributes.title}</label>
            </div>
          ))}
        </div>
        <div className="filterItem">
          <h2>Filter by price</h2>
          <div className="inputItem">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={1000}
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input
              type="radio"
              id="asc"
              name="sort"
              value="asc"
              onChange={(e) => setSort(e.target.value)}
            />
            <label htmlFor="asc">Price (Low to High)</label>
          </div>
          <div className="inputItem">
            <input
              type="radio"
              id="desc"
              name="sort"
              value="desc"
              onChange={(e) => setSort(e.target.value)}
            />
            <label htmlFor="desc">Price (High to Low)</label>
          </div>
        </div>
      </div>

      <div className="right">
        <img
          className="catImg"
          src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
        <List
          catId={catId}
          maxPrice={maxPrice}
          sort={sort}
          selectedSubCategories={selectedSubCategories}
        />
      </div>
    </div>
  );
};

export default Products;
