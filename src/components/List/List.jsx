import React from "react";
import "./List.scss";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";

const List = ({ catId, maxPrice, sort, selectedSubCategories }) => {
  const sortQuery = sort ? `&[sort]=price:${sort}` : "";
  const subCategoriesQuery = selectedSubCategories
    .map((item) => `&[filters][sub_categories][id][$eq]=${item}`)
    .join("");

  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id]=${catId}${subCategoriesQuery}&[filters][price][$lte]=${maxPrice}${sortQuery}`
  );
  return (
    <div className="list">
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error...</h1>}
      {data?.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};

export default List;
